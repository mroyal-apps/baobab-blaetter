// Générateurs : chaque fiche est calculée par le code (pas d'IA pour les maths).
// Un même numéro de fiche (graine) donne toujours la même fiche.

function rngDe(graine) {            // petit générateur pseudo-aléatoire (mulberry32)
  let a = graine >>> 0;
  return function () {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const entre = (r, min, max) => min + Math.floor(r() * (max - min + 1));
const choisir = (r, liste) => liste[Math.floor(r() * liste.length)];
function melanger(r, liste) {
  const l = liste.slice();
  for (let i = l.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [l[i], l[j]] = [l[j], l[i]]; }
  return l;
}
const vide = (sol, val, large) => sol
  ? `<span class="rep">${val}</span>`
  : `<span class="trou${large ? ' large' : ''}"></span>`;

// ---------- MATHE ----------

function genPlusMinus(r, o) {
  const max = +o.zahlenraum, items = [], vus = new Set();
  let essais = 0;
  while (items.length < o.nombre && essais++ < 5000) {
    const op = o.operation === 'mix' ? choisir(r, ['+', '-']) : o.operation;
    let a, b, c;
    if (op === '+') { a = entre(r, 1, max - 1); b = entre(r, 1, max - a); c = a + b; }
    else { a = entre(r, 2, max); b = entre(r, 1, a - 1); c = a - b; }
    const passe = op === '+' ? (a % 10) + (b % 10) > 9 : (a % 10) < (b % 10);
    if (o.uebergang === 'ohne' && passe) continue;
    if (o.uebergang === 'mit' && !passe) continue;
    if (max > 20 && a < 10 && b < 10) continue;
    if (max >= 1000 && (a < 100 || b < 10)) continue;
    const cle = a + op + b; if (vus.has(cle)) continue; vus.add(cle);
    const trou = o.niveau == 3 ? choisir(r, ['a', 'b', 'c']) : 'c';
    items.push({ a, b, c, op: op === '-' ? '−' : '+', trou });
  }
  return {
    titre: 'Plus und Minus bis ' + max,
    consigne: o.niveau == 3 ? 'Rechne. Finde die fehlende Zahl.' : 'Rechne aus.',
    rendu: sol => `<div class="grille col3">${items.map(t =>
      `<div class="calc">${t.trou === 'a' ? vide(sol, t.a) : t.a} ${t.op} ${t.trou === 'b' ? vide(sol, t.b) : t.b} = ${t.trou === 'c' ? vide(sol, t.c) : t.c}</div>`).join('')}</div>`
  };
}

function genEinmaleins(r, o) {
  const reihen = o.reihen.length ? o.reihen : [2, 5, 10];
  const items = [], vus = new Set(); let essais = 0;
  while (items.length < o.nombre && essais++ < 5000) {
    const a = entre(r, 1, 10), b = choisir(r, reihen), c = a * b;
    const div = o.geteilt && r() < 0.35;
    const cle = (div ? 'd' : 'm') + a + 'x' + b; if (vus.has(cle) && vus.size < reihen.length * 20) continue; vus.add(cle);
    if (div) items.push({ txt: sol => `${c} : ${b} = ${vide(sol, a)}` });
    else if (o.niveau == 3 && r() < 0.5) items.push({ txt: sol => `${a} · ${vide(sol, b)} = ${c}` });
    else items.push({ txt: sol => `${a} · ${b} = ${vide(sol, c)}` });
  }
  return {
    titre: 'Das Einmaleins' + (reihen.length <= 3 ? ' – ' + reihen.join('er, ') + 'er-Reihe' : ''),
    consigne: 'Rechne aus.',
    rendu: sol => `<div class="grille col3">${items.map(t => `<div class="calc">${t.txt(sol)}</div>`).join('')}</div>`
  };
}

function genZahlenmauer(r, o) {
  const etages = o.niveau == 1 ? 3 : 4, max = +o.zahlenraum, murs = [];
  const n = Math.min(o.nombre, etages === 3 ? 9 : 6);
  let essais = 0;
  while (murs.length < n && essais++ < 5000) {
    const limite = etages === 3 ? Math.floor(max / 4) : Math.floor(max / 8);
    let base = Array.from({ length: etages }, () => entre(r, 1, Math.max(2, limite)));
    const rangs = [base];
    while (rangs[rangs.length - 1].length > 1) {
      const p = rangs[rangs.length - 1]; rangs.push(p.slice(1).map((v, i) => v + p[i]));
    }
    if (rangs[rangs.length - 1][0] > max) continue;
    // Quelles briques sont données ? Niveau 1-2 : la base. Niveau 3 : mélange.
    const montre = rangs.map(l => l.map(() => false));
    if (o.niveau == 3) {
      montre[rangs.length - 1][0] = true;
      const cachee = entre(r, 0, etages - 1);
      base.forEach((_, i) => { if (i !== cachee) montre[0][i] = true; });
    } else montre[0] = montre[0].map(() => true);
    murs.push({ rangs, montre });
  }
  return {
    titre: 'Zahlenmauern',
    consigne: 'Zwei Steine nebeneinander ergeben zusammen den Stein darüber.',
    rendu: sol => `<div class="grille col3 murs">${murs.map(m => `<div class="mur">${
      m.rangs.slice().reverse().map((l, ri) => {
        const idx = m.rangs.length - 1 - ri;
        return `<div class="rang">${l.map((v, i) => `<span class="brique">${m.montre[idx][i] ? v : (sol ? `<b class="rep">${v}</b>` : '')}</span>`).join('')}</div>`;
      }).join('')}</div>`).join('')}</div>`
  };
}

function horlogeSVG(h, m) {
  const ang = d => (d - 90) * Math.PI / 180, cx = 60, cy = 60;
  let traits = '';
  for (let i = 0; i < 60; i++) {
    const g = i % 5 === 0, r1 = g ? 46 : 50;
    traits += `<line x1="${cx + r1 * Math.cos(ang(i * 6))}" y1="${cy + r1 * Math.sin(ang(i * 6))}" x2="${cx + 53 * Math.cos(ang(i * 6))}" y2="${cy + 53 * Math.sin(ang(i * 6))}" stroke="#333" stroke-width="${g ? 2 : 0.7}"/>`;
  }
  let chiffres = '';
  for (let i = 1; i <= 12; i++) chiffres += `<text x="${cx + 37 * Math.cos(ang(i * 30))}" y="${cy + 37 * Math.sin(ang(i * 30)) + 4}" font-size="11" text-anchor="middle" font-family="Andika, Arial">${i}</text>`;
  const ah = ang((h % 12) * 30 + m * 0.5), am = ang(m * 6);
  return `<svg viewBox="0 0 120 120" class="horloge"><circle cx="60" cy="60" r="56" fill="#fff" stroke="#1f6f5c" stroke-width="4"/>${traits}${chiffres}
    <line x1="60" y1="60" x2="${60 + 25 * Math.cos(ah)}" y2="${60 + 25 * Math.sin(ah)}" stroke="#c0392b" stroke-width="5" stroke-linecap="round"/>
    <line x1="60" y1="60" x2="${60 + 42 * Math.cos(am)}" y2="${60 + 42 * Math.sin(am)}" stroke="#1d3557" stroke-width="3" stroke-linecap="round"/>
    <circle cx="60" cy="60" r="3.5" fill="#333"/></svg>`;
}
function genUhr(r, o) {
  const minutes = o.niveau == 1 ? [0] : o.niveau == 2 ? [0, 30] : o.niveau == 3 ? [0, 15, 30, 45] : [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  const n = Math.min(o.nombre, 12), items = [], vus = new Set(); let essais = 0;
  while (items.length < n && essais++ < 1000) {
    const h = entre(r, 1, 12), m = choisir(r, minutes);
    if (vus.has(h + ':' + m)) continue; vus.add(h + ':' + m);
    items.push({ h, m });
  }
  const pad = x => String(x).padStart(2, '0');
  return {
    titre: 'Die Uhr lesen',
    consigne: 'Wie spät ist es? Schreibe die Uhrzeit auf.',
    rendu: sol => `<div class="grille col4">${items.map(t =>
      `<div class="case-uhr">${horlogeSVG(t.h, t.m)}<div>${vide(sol, t.h + ':' + pad(t.m), true)} Uhr</div></div>`).join('')}</div>`
  };
}

function genGeld(r, o) {
  const valeurs = o.niveau == 3 ? [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1] : o.niveau == 2 ? [50, 20, 10, 5, 2, 1] : [10, 5, 2, 1];
  const max = o.niveau == 1 ? 20 : 100, n = Math.min(o.nombre, 8), items = [];
  let essais = 0;
  while (items.length < n && essais++ < 2000) {
    const k = entre(r, 2, o.niveau == 1 ? 4 : 6), sel = [];
    for (let i = 0; i < k; i++) sel.push(choisir(r, valeurs));
    sel.sort((a, b) => b - a);
    const total = Math.round(sel.reduce((s, v) => s + v, 0) * 100) / 100;
    const cle = sel.join('+');
    if (total > max || items.some(x => x.sel.join('+') === cle)) continue;
    items.push({ sel, total });
  }
  const fmt = v => v < 1 ? Math.round(v * 100) + ' ct' : v + ' €';
  const fmtTotal = v => Number.isInteger(v) ? v + ' €' : v.toFixed(2).replace('.', ',') + ' €';
  const piece = v => v >= 5 ? `<span class="billet">${fmt(v)}</span>` : `<span class="piece${v < 1 ? ' cuivre' : ''}">${fmt(v)}</span>`;
  return {
    titre: 'Rechnen mit Geld',
    consigne: 'Wie viel Geld ist es zusammen?',
    rendu: sol => `<div class="grille col2">${items.map(t =>
      `<div class="case-geld"><div class="argent">${t.sel.map(piece).join('')}</div><div>Zusammen: ${vide(sol, fmtTotal(t.total), true)}</div></div>`).join('')}</div>`
  };
}

function genSachaufgaben(r, o) {
  const modeles = [
    (p, a, b) => a > b && { t: `${p.n} hat ${a} Mangos. ${p.il} verkauft ${b} Mangos auf dem Markt. Wie viele Mangos hat ${p.lui} noch?`, calc: `${a} − ${b} = ${a - b}`, rep: `${p.n} hat noch ${a - b} Mangos.` },
    (p, a, b) => ({ t: `${p.n} sammelt ${a} Steine. Am nächsten Tag findet ${p.lui} ${b} Steine dazu. Wie viele Steine sind es jetzt?`, calc: `${a} + ${b} = ${a + b}`, rep: `Es sind jetzt ${a + b} Steine.` }),
    (p, a, b) => a > b && { t: `Im Bus sitzen ${a} Kinder. An der Schule steigen ${b} Kinder aus. Wie viele Kinder sitzen noch im Bus?`, calc: `${a} − ${b} = ${a - b}`, rep: `Es sitzen noch ${a - b} Kinder im Bus.` },
    (p, a, b) => ({ t: `${p.n} backt mit Oma. Auf einem Blech liegen ${a} Kekse, auf dem zweiten Blech ${b} Kekse. Wie viele Kekse sind es zusammen?`, calc: `${a} + ${b} = ${a + b}`, rep: `Es sind zusammen ${a + b} Kekse.` }),
    (p, a, b, r) => { const g = entre(r, 2, 6), k = entre(r, 2, 5); return { t: `${p.n} legt ${k} Teller auf den Tisch. Auf jeden Teller legt ${p.lui} ${g} Datteln. Wie viele Datteln sind es?`, calc: `${k} · ${g} = ${k * g}`, rep: `Es sind ${k * g} Datteln.` }; },
    (p, a, b, r) => { const k = entre(r, 2, 9); return { t: `In der Trommelgruppe spielen ${k} Kinder. Jedes Kind hat 2 Stöcke. Wie viele Stöcke sind es zusammen?`, calc: `${k} · 2 = ${k * 2}`, rep: `Es sind ${k * 2} Stöcke.` }; },
    (p, a, b) => a > b && { t: `${p.n} hat ${a} Euro gespart. ${p.il} kauft einen Ball für ${b} Euro. Wie viel Geld hat ${p.lui} noch?`, calc: `${a} − ${b} = ${a - b}`, rep: `${p.n} hat noch ${a - b} Euro.` }
  ];
  const max = +o.zahlenraum, n = Math.min(o.nombre, 5), items = [], noms = melanger(r, PRENOMS), ordre = melanger(r, modeles.map((_, i) => i));
  let i = 0, essais = 0;
  while (items.length < n && essais++ < 500) {
    const [nom, g] = noms[i % noms.length];
    const p = { n: nom, il: g === 'f' ? 'Sie' : 'Er', lui: g === 'f' ? 'sie' : 'er' };
    const grand = max >= 1000, a = entre(r, grand ? 120 : max > 20 ? 12 : 4, grand ? 700 : max > 20 ? max - 20 : 14), b = entre(r, 2, grand ? 250 : max > 20 ? 19 : 6);
    const res = modeles[ordre[i % ordre.length]](p, a, b, r);
    i++;
    if (!res || a + b > max) continue;
    items.push(res);
  }
  return {
    titre: 'Rechengeschichten',
    consigne: 'Lies die Geschichte. Schreibe die Rechnung und die Antwort.',
    audio: items.map(x => x.t).join(' '),
    rendu: sol => items.map((x, k) => `<div class="probleme"><p><b>${k + 1}.</b> ${x.t}</p>
      <p>Rechnung: ${sol ? `<span class="rep">${x.calc}</span>` : '<span class="ligne"></span>'}</p>
      <p>Antwort: ${sol ? `<span class="rep">${x.rep}</span>` : '<span class="ligne longue"></span>'}</p></div>`).join('')
  };
}

// ---------- DEUTSCH ----------

function genArtikel(r, o) {
  const mots = melanger(r, NOMEN).slice(0, Math.min(o.nombre, 24));
  const tri = o.niveau >= 2;
  return {
    titre: 'Nomen und Artikel: der, die, das',
    consigne: tri ? 'Schreibe den richtigen Artikel. Sortiere dann die Nomen in die Häuser.' : 'Schreibe den richtigen Artikel: der, die oder das.',
    audio: 'Schreibe den richtigen Artikel. der, die oder das. ' + mots.map(m => m[0]).join(', '),
    rendu: sol => `<div class="grille col3">${mots.map(m =>
      `<div class="calc mot">${vide(sol, m[1])} ${m[0]}</div>`).join('')}</div>` +
      (tri ? `<div class="maisons">${['der', 'die', 'das'].map(a => `<div class="maison m-${a}"><div class="toit">${a}</div><div class="lignes">${
        sol ? mots.filter(m => m[1] === a).map(m => `<div class="rep">${a} ${m[0]}</div>`).join('') : '<div class="l"></div>'.repeat(Math.ceil(mots.length / 3) + 1)}</div></div>`).join('')}</div>` : '')
  };
}

function genMehrzahl(r, o) {
  const mots = melanger(r, NOMEN).slice(0, Math.min(o.nombre, 14));
  return {
    titre: 'Einzahl und Mehrzahl',
    consigne: 'Schreibe die Mehrzahl auf.',
    rendu: sol => `<table class="tableau"><tr><th>Einzahl (eins)</th><th>Mehrzahl (viele)</th></tr>${mots.map(m =>
      `<tr><td>${m[1]} ${m[0]}</td><td>die ${sol ? `<span class="rep">${m[2]}</span>` : '<span class="ligne"></span>'}</td></tr>`).join('')}</table>`
  };
}

// Catalogue des thèmes (Klasse 2 pour le pilote). Les autres classes viendront ensuite.
const THEMES = {
  2: [
    { id: 'plusminus', fach: 'Mathe', nom: 'Plus und Minus', domaine: 'Zahlen und Operationen', gen: genPlusMinus,
      options: ['zahlenraum', 'operation', 'uebergang', 'niveau', 'nombre'] },
    { id: 'einmaleins', fach: 'Mathe', nom: 'Einmaleins', domaine: 'Zahlen und Operationen', gen: genEinmaleins,
      options: ['reihen', 'geteilt', 'niveau', 'nombre'] },
    { id: 'zahlenmauer', fach: 'Mathe', nom: 'Zahlenmauern', domaine: 'Zahlen und Operationen', gen: genZahlenmauer,
      options: ['zahlenraum', 'niveau', 'nombre'] },
    { id: 'uhr', fach: 'Mathe', nom: 'Uhrzeit (volle und halbe Stunden)', domaine: 'Größen und Messen', gen: genUhr, options: ['nombre'], fixe: { niveau: 2 } },
    { id: 'geld', fach: 'Mathe', nom: 'Geld', domaine: 'Größen und Messen', gen: genGeld, options: ['niveau', 'nombre'] },
    { id: 'sachaufgaben', fach: 'Mathe', nom: 'Rechengeschichten', domaine: 'Zahlen und Operationen (Modellieren)', gen: genSachaufgaben,
      options: ['zahlenraum', 'nombre'] },
    { id: 'artikel', fach: 'Deutsch', nom: 'Nomen + Artikel', domaine: 'Sprache und Sprachgebrauch untersuchen', gen: genArtikel,
      options: ['niveau', 'nombre'] },
    { id: 'mehrzahl', fach: 'Deutsch', nom: 'Einzahl / Mehrzahl', domaine: 'Sprache und Sprachgebrauch untersuchen', gen: genMehrzahl,
      options: ['nombre'] }
  ]
};
