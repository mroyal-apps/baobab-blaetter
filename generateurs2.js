// Générateurs pour les Klassen 1, 3 et 4 (et thèmes communs).

// ---------- MATHE ----------

function genVergleichen(r, o) {
  const max = +o.zahlenraum, n = Math.min(o.nombre, 24), items = [];
  while (items.length < n) {
    const a = entre(r, 0, max), b = r() < 0.15 ? a : entre(r, 0, max);
    items.push({ a, b, s: a < b ? '<' : a > b ? '>' : '=' });
  }
  return {
    titre: 'Größer, kleiner oder gleich?', consigne: 'Setze ein: <, > oder =',
    rendu: sol => `<div class="grille col3">${items.map(x => `<div class="calc">${x.a} ${sol ? `<span class="rep rond">${x.s}</span>` : '<span class="rond"></span>'} ${x.b}</div>`).join('')}</div>`
  };
}

function genNachbarzahlen(r, o) {
  const max = +o.zahlenraum, n = Math.min(o.nombre, 18), items = [], vus = new Set();
  let e = 0;
  while (items.length < n && e++ < 1000) {
    const x = entre(r, 1, max - 1); if (vus.has(x)) continue; vus.add(x); items.push(x);
  }
  return {
    titre: 'Vorgänger und Nachfolger', consigne: 'Schreibe den Vorgänger und den Nachfolger.',
    rendu: sol => `<div class="grille col3">${items.map(x => `<div class="calc">${vide(sol, x - 1)} <b class="milieu">${x}</b> ${vide(sol, x + 1)}</div>`).join('')}</div>`
  };
}

function genZerlegen(r, o) {
  const n = Math.min(o.nombre, 6), max = o.niveau == 1 ? 6 : o.niveau == 2 ? 10 : 20, maisons = [];
  const toits = melanger(r, Array.from({ length: max - 3 }, (_, i) => i + 4)).slice(0, n);
  toits.forEach(t => {
    const lignes = melanger(r, Array.from({ length: t + 1 }, (_, i) => i)).slice(0, Math.min(5, t + 1))
      .map(a => ({ a, b: t - a, gauche: r() < 0.5 }));
    maisons.push({ t, lignes });
  });
  return {
    titre: 'Zahlenhäuser', consigne: 'Zerlege die Zahl auf dem Dach. Beide Zahlen zusammen ergeben die Dachzahl.',
    rendu: sol => `<div class="grille col3">${maisons.map(m => `<div class="zhaus"><div class="zdach">${m.t}</div>${m.lignes.map(l =>
      `<div class="zligne"><span>${l.gauche ? (sol ? `<b class="rep">${l.a}</b>` : '') : l.a}</span><span>${l.gauche ? l.b : (sol ? `<b class="rep">${l.b}</b>` : '')}</span></div>`).join('')}</div>`).join('')}</div>`
  };
}

function cellules(nombre, largeur, sol, visible = true) {
  const s = String(nombre).padStart(largeur, ' ');
  return [...s].map(c => `<span class="case">${visible || sol ? (c === ' ' ? '' : (visible ? c : `<b class="rep">${c}</b>`)) : ''}</span>`).join('');
}
function genSchriftlich(r, o) {
  const max = +o.zahlenraum, op = o.operation === 'mix' ? null : o.operation, n = Math.min(o.nombre, max > 10000 ? 9 : 12), items = [];
  while (items.length < n) {
    const ope = op || choisir(r, ['+', '-']);
    let a, b;
    if (ope === '+') { a = entre(r, max / 10, max * 0.7); b = entre(r, max / 20, max - a - 1); }
    else { a = entre(r, max / 5, max - 1); b = entre(r, max / 20, a - 1); }
    a = Math.floor(a); b = Math.floor(b);
    items.push({ a, b, ope, c: ope === '+' ? a + b : a - b });
  }
  const L = String(max).length;
  return {
    titre: 'Schriftlich rechnen', consigne: 'Rechne schriftlich. Schreibe die Ziffern genau untereinander.',
    rendu: sol => `<div class="grille ${L > 4 ? 'col3' : 'col4'}">${items.map(x => `<div class="kolonne" style="--l:${L + 1}">
      <span class="case"></span>${cellules(x.a, L, sol)}
      <span class="case op">${x.ope === '-' ? '−' : '+'}</span>${cellules(x.b, L, sol)}
      <span class="trait"></span>
      <span class="case"></span>${cellules(x.c, L, sol, false)}</div>`).join('')}</div>`
  };
}

function genMalGeteiltSchriftlich(r, o) {
  const n = Math.min(o.nombre, 8), items = [], div = o.operation === ':';
  while (items.length < n) {
    if (div) { const b = entre(r, 2, 9), q = entre(r, o.niveau == 1 ? 12 : 101, o.niveau == 3 ? 2000 : 999); items.push({ t: `${q * b} : ${b} =`, c: q }); }
    else { const b = o.niveau == 3 ? entre(r, 12, 49) : entre(r, 2, 9), a = entre(r, o.niveau == 1 ? 12 : 102, o.niveau == 1 ? 99 : 999); items.push({ t: `${a} · ${b} =`, c: a * b }); }
  }
  return {
    titre: div ? 'Schriftlich teilen' : 'Schriftlich malnehmen', consigne: 'Rechne schriftlich in den Kästchen.',
    rendu: sol => `<div class="grille col2">${items.map(x => `<div class="carreaux"><div class="calc">${x.t} ${vide(sol, x.c, true)}</div><div class="quadrillage"></div></div>`).join('')}</div>`
  };
}

function genEinheiten(r, o) {
  const k4 = o.grandeur === 'gewicht';
  const regles = k4
    ? [['kg', 'g', 1000], ['t', 'kg', 1000]]
    : [['m', 'cm', 100], ['cm', 'mm', 10], ['km', 'm', 1000]];
  const n = Math.min(o.nombre, 18), items = [], vus = new Set();
  let essais = 0;
  while (items.length < n && essais++ < 500) {
    const [g, p, f] = choisir(r, regles), x = entre(r, 1, 9), reste = entre(r, 1, f - 1);
    const type = o.niveau == 1 ? 0 : entre(r, 0, o.niveau == 2 ? 1 : 2);
    const cle = [g, x, type, type ? reste : 0].join('-'); if (vus.has(cle)) continue; vus.add(cle);
    if (type === 0) items.push(sol => `${x} ${g} = ${vide(sol, x * f, true)} ${p}`);
    else if (type === 1) items.push(sol => `${x} ${g} ${reste} ${p} = ${vide(sol, x * f + reste, true)} ${p}`);
    else items.push(sol => `${x * f + reste} ${p} = ${vide(sol, x)} ${g} ${vide(sol, reste)} ${p}`);
  }
  return {
    titre: k4 ? 'Gewichte umrechnen' : 'Längen umrechnen',
    consigne: k4 ? 'Rechne um. 1 kg = 1000 g, 1 t = 1000 kg.' : 'Rechne um. 1 m = 100 cm, 1 cm = 10 mm, 1 km = 1000 m.',
    rendu: sol => `<div class="grille col2">${items.map(f => `<div class="calc">${f(sol)}</div>`).join('')}</div>`
  };
}

const STELLEN = ['HT', 'ZT', 'T', 'H', 'Z', 'E'];
const fmtNb = x => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0'); // espace insécable : le nombre ne se coupe pas
function genStellenwert(r, o) {
  const n = Math.min(o.nombre, 12), items = [];
  while (items.length < n) {
    const x = entre(r, 100000, 999999), ch = String(x).split('');
    items.push({ x, ch, sens: r() < 0.5 });
  }
  return {
    titre: 'Zahlen bis 1 000 000', consigne: 'Schreibe die Zahl oder zerlege sie. HT = Hunderttausender, ZT = Zehntausender, T = Tausender, H = Hunderter, Z = Zehner, E = Einer.',
    rendu: sol => `<div class="grille col1">${items.map(i => i.sens
      ? `<div class="calc">${i.ch.map((c, k) => `${c} ${STELLEN[k]}`).join(' + ')} = ${vide(sol, fmtNb(i.x), true)}</div>`
      : `<div class="calc">${fmtNb(i.x)} = ${i.ch.map((c, k) => `${vide(sol, c)} ${STELLEN[k]}`).join(' ')}</div>`).join('')}</div>`
  };
}

function genRunden(r, o) {
  const n = Math.min(o.nombre, 18), items = [];
  const cibles = o.niveau == 1 ? [[10, 'Zehner']] : o.niveau == 2 ? [[100, 'Hunderter'], [1000, 'Tausender']] : [[1000, 'Tausender'], [10000, 'Zehntausender'], [100000, 'Hunderttausender']];
  while (items.length < n) {
    const [p, nom] = choisir(r, cibles), x = entre(r, p * 1.5, Math.min(999999, p * 99));
    items.push({ x, p, nom, c: Math.round(x / p) * p });
  }
  return {
    titre: 'Runden', consigne: 'Runde die Zahl. Ab 5 rundet man auf, unter 5 rundet man ab.',
    rendu: sol => `<div class="grille col2">${items.map(i => `<div class="calc petit">${fmtNb(i.x)} ≈ ${vide(sol, fmtNb(i.c), true)} <small>(${i.nom})</small></div>`).join('')}</div>`
  };
}

// ---------- DEUTSCH ----------

const SILBEN = ['Hund','Ball','Haus','Buch','Brot','Maus','Bett','Ei','Fisch','Baum',
  'Kat-ze','Son-ne','Ta-sche','Blu-me','Lam-pe','Ho-se','Trom-mel','Schu-le','Ap-fel','Fens-ter','Au-to','Man-go','Ma-ma','Pa-pa','O-ma','Lö-we','Na-se','Ta-fel',
  'Ba-na-ne','To-ma-te','Ka-rot-te','Pa-pa-gei','Me-lo-ne','Ele-fant'.replace('Ele','E-le'),'Ki-no-kar-te','Schmet-ter-ling','Lo-ko-mo-ti-ve'];
function genSilben(r, o) {
  const mots = melanger(r, SILBEN).slice(0, Math.min(o.nombre, 18)), ecrire = o.niveau >= 2;
  return {
    titre: 'Silben klatschen', consigne: ecrire ? 'Klatsche das Wort. Schreibe es in Silben und zähle sie.' : 'Klatsche das Wort. Wie viele Silben hat es?',
    audio: 'Klatsche das Wort. Wie viele Silben hat es? ' + mots.map(m => m.replace(/-/g, '')).join(', '),
    rendu: sol => `<div class="grille ${ecrire ? 'col2' : 'col3'}">${mots.map(m => `<div class="calc mot">${m.replace(/-/g, '')} ${ecrire ? (sol ? `<span class="rep">${m.replace(/-/g, ' - ')}</span>` : '<span class="ligne courte"></span>') : ''} ${vide(sol, m.split('-').length)}</div>`).join('')}</div>`
  };
}

function genBuchstabe(r, o) {
  const voy = 'aeiouäöüAEIOUÄÖÜ', mots = melanger(r, NOMEN.filter(m => m[0].length <= (o.niveau == 1 ? 4 : 7) && !/(ei|ai|au|eu|äu|ie)/i.test(m[0]))).slice(0, Math.min(o.nombre, 18));
  const items = mots.map(m => {
    const pos = [...m[0]].map((c, i) => voy.includes(c) ? i : -1).filter(i => i >= 0);
    const i = choisir(r, pos);
    return { art: m[1], avant: m[0].slice(0, i), lettre: m[0][i], apres: m[0].slice(i + 1) };
  });
  return {
    titre: 'Welcher Selbstlaut fehlt?', consigne: 'Sprich das Wort langsam. Schreibe den fehlenden Selbstlaut (a, e, i, o, u, ä, ö, ü).',
    rendu: sol => `<div class="grille col3">${items.map(x => `<div class="calc mot">${x.art} ${x.avant}${sol ? `<b class="rep">${x.lettre}</b>` : '<span class="trou lettre"></span>'}${x.apres}</div>`).join('')}</div>`
  };
}

// [Grundform, er/sie (Präsens), Präteritum, Hilfsverb, Partizip II]
const VERBEN = [
  ['gehen','geht','ging','ist','gegangen'],['kommen','kommt','kam','ist','gekommen'],['laufen','läuft','lief','ist','gelaufen'],
  ['fahren','fährt','fuhr','ist','gefahren'],['springen','springt','sprang','ist','gesprungen'],['fliegen','fliegt','flog','ist','geflogen'],
  ['bleiben','bleibt','blieb','ist','geblieben'],['spielen','spielt','spielte','hat','gespielt'],['lachen','lacht','lachte','hat','gelacht'],
  ['singen','singt','sang','hat','gesungen'],['essen','isst','aß','hat','gegessen'],['trinken','trinkt','trank','hat','getrunken'],
  ['schreiben','schreibt','schrieb','hat','geschrieben'],['lesen','liest','las','hat','gelesen'],['sehen','sieht','sah','hat','gesehen'],
  ['kaufen','kauft','kaufte','hat','gekauft'],['malen','malt','malte','hat','gemalt'],['tanzen','tanzt','tanzte','hat','getanzt'],
  ['kochen','kocht','kochte','hat','gekocht'],['schlafen','schläft','schlief','hat','geschlafen'],['finden','findet','fand','hat','gefunden'],
  ['bauen','baut','baute','hat','gebaut'],['helfen','hilft','half','hat','geholfen'],['nehmen','nimmt','nahm','hat','genommen'],['rufen','ruft','rief','hat','gerufen']
];
function genPraeteritum(r, o) {
  const vs = melanger(r, VERBEN).slice(0, Math.min(o.nombre, 10)), deux = o.niveau >= 2;
  return {
    titre: 'Gegenwart und Vergangenheit', consigne: deux ? 'Ergänze die Tabelle: Gegenwart und Vergangenheit.' : 'Schreibe die Vergangenheit.',
    rendu: sol => `<table class="tableau"><tr><th>Grundform</th><th>Gegenwart</th><th>Vergangenheit</th></tr>${vs.map(v =>
      `<tr><td>${v[0]}</td><td>er/sie ${deux ? (sol ? `<span class="rep">${v[1]}</span>` : '<span class="ligne"></span>') : v[1]}</td><td>er/sie ${sol ? `<span class="rep">${v[2]}</span>` : '<span class="ligne"></span>'}</td></tr>`).join('')}</table>`
  };
}

// Phrases complètes : [présent, auxiliaire, reste au parfait]
const PERFEKT_SAETZE = [
  ['geht in die Schule', 'ist', 'in die Schule gegangen'], ['kommt nach Hause', 'ist', 'nach Hause gekommen'], ['läuft schnell zum Bus', 'ist', 'schnell zum Bus gelaufen'],
  ['fährt mit dem Fahrrad', 'ist', 'mit dem Fahrrad gefahren'], ['springt ins Wasser', 'ist', 'ins Wasser gesprungen'], ['fliegt nach Ghana', 'ist', 'nach Ghana geflogen'],
  ['bleibt im Bett', 'ist', 'im Bett geblieben'], ['spielt Fußball', 'hat', 'Fußball gespielt'], ['lacht über den Witz', 'hat', 'über den Witz gelacht'],
  ['singt ein Lied', 'hat', 'ein Lied gesungen'], ['isst eine Mango', 'hat', 'eine Mango gegessen'], ['trinkt ein Glas Milch', 'hat', 'ein Glas Milch getrunken'],
  ['schreibt einen Brief', 'hat', 'einen Brief geschrieben'], ['liest ein Buch', 'hat', 'ein Buch gelesen'], ['sieht einen Regenbogen', 'hat', 'einen Regenbogen gesehen'],
  ['kauft Brot', 'hat', 'Brot gekauft'], ['malt ein Bild', 'hat', 'ein Bild gemalt'], ['tanzt im Kreis', 'hat', 'im Kreis getanzt'],
  ['kocht eine Suppe', 'hat', 'eine Suppe gekocht'], ['schläft lange', 'hat', 'lange geschlafen'], ['findet einen Schlüssel', 'hat', 'einen Schlüssel gefunden'],
  ['baut eine Sandburg', 'hat', 'eine Sandburg gebaut'], ['hilft seiner Oma', 'hat', 'seiner Oma geholfen'], ['nimmt einen Apfel', 'hat', 'einen Apfel genommen'], ['ruft seinen Freund', 'hat', 'seinen Freund gerufen']
];
function genPerfekt(r, o) {
  const vs = melanger(r, PERFEKT_SAETZE).slice(0, Math.min(o.nombre, 9)), noms = melanger(r, PRENOMS);
  const acc = (txt, g) => g === 'f' ? txt.replace('seiner', 'ihrer').replace('seinen', 'ihren') : txt;
  return {
    titre: 'Vergangenheit mit „hat“ oder „ist“', consigne: 'Schreibe den Satz in der Vergangenheit. Benutze „hat“ oder „ist“.',
    rendu: sol => `<div class="liste-num">${vs.map((v, i) => { const [n, g] = noms[i % noms.length];
      return `<div class="item"><span class="num">${i + 1}</span><div><p>${n} ${acc(v[0], g)}.</p><p>${sol ? `<span class="rep">${n} ${v[1]} ${acc(v[2], g)}.</span>` : '<span class="ligne pleine"></span>'}</p></div></div>`; }).join('')}</div>`
  };
}

const ADJEKTIVE = ['groß','klein','rot','schnell','laut','leise','warm','kalt','schön','lustig','müde','süß','alt','neu','hell'];
function genWortarten(r, o) {
  const mots = melanger(r, [
    ...melanger(r, NOMEN).slice(0, 6).map(m => [m[0], 'Nomen']),
    ...melanger(r, VERBEN).slice(0, 6).map(v => [v[0], 'Verb']),
    ...melanger(r, ADJEKTIVE).slice(0, 6).map(a => [a, 'Adjektiv'])]);
  const petit = o.niveau == 3;
  return {
    titre: 'Wortarten: Nomen, Verb, Adjektiv', consigne: petit ? 'Sortiere die Wörter. Achtung: Nomen schreibt man groß!' : 'Sortiere die Wörter in die richtige Spalte.',
    rendu: sol => `<p class="banque">${mots.map(m => petit ? m[0].toLowerCase() : m[0]).join(' · ')}</p>
      <div class="maisons">${[['Nomen', 'der'], ['Verb', 'die'], ['Adjektiv', 'das']].map(([w, c]) => `<div class="maison m-${c}"><div class="toit">${w}</div><div class="lignes">${
        sol ? mots.filter(m => m[1] === w).map(m => `<div class="rep">${m[0]}</div>`).join('') : '<div class="l"></div>'.repeat(7)}</div></div>`).join('')}</div>`
  };
}

const DASSDAS = [
  ['Ich weiß, ', ' du heute Geburtstag hast.', 'dass'], ['', ' Buch liegt auf dem Tisch.', 'Das'],
  ['Mama sagt, ', ' wir bald essen.', 'dass'], ['Siehst du ', ' Haus dort?', 'das'],
  ['Kofi hofft, ', ' es morgen nicht regnet.', 'dass'], ['Das ist das Fahrrad, ', ' Oma mir geschenkt hat.', 'das'],
  ['Ich glaube, ', ' Lena schon zu Hause ist.', 'dass'], ['', ' Kind spielt im Garten.', 'Das'],
  ['Nia freut sich, ', ' ihre Tante kommt.', 'dass'], ['Wo ist ', ' Heft von Yao?', 'das'],
  ['Es ist schön, ', ' du mir hilfst.', 'dass'], ['Das Lied, ', ' wir singen, ist neu.', 'das'],
  ['Paul merkt, ', ' er seine Mütze vergessen hat.', 'dass'], ['Kennst du ', ' Spiel schon?', 'das'],
  ['Awa erzählt, ', ' sie einen Hund hat.', 'dass'], ['', ' Brot schmeckt sehr gut.', 'Das']
];
function genDassDas(r, o) {
  const ph = melanger(r, DASSDAS).slice(0, Math.min(o.nombre, 12));
  return {
    titre: 'das oder dass?', consigne: 'Setze „das“ oder „dass“ ein. Tipp: Kannst du „dieses“ oder „welches“ sagen? Dann schreibst du „das“.',
    rendu: sol => ph.map((p, i) => `<div class="phrase"><b>${i + 1}.</b> ${p[0]}${sol ? `<span class="rep">${p[2]}</span>` : '<span class="trou large"></span>'}${p[1]}</div>`).join('')
  };
}

// ---------- Catalogue complet ----------
const M = 'Mathe', D = 'Deutsch', ZO = 'Zahlen und Operationen', GM = 'Größen und Messen', MS = 'Zahlen und Operationen', SP = 'Sprache und Sprachgebrauch untersuchen', SC = 'Sprache und Sprachgebrauch untersuchen', LE = 'Lesen';
THEMES[1] = [
  { id: 'plusminus', fach: M, nom: 'Plus und Minus bis 20', domaine: ZO, gen: genPlusMinus, options: ['zahlenraum', 'operation', 'uebergang', 'niveau', 'nombre'], zr: ['10', '20'], defs: { zahlenraum: '20', uebergang: 'ohne' } },
  { id: 'zerlegen', fach: M, nom: 'Zahlenhäuser', domaine: ZO, gen: genZerlegen, options: ['niveau', 'nombre'] },
  { id: 'vergleichen', fach: M, nom: 'Größer, kleiner, gleich', domaine: ZO, gen: genVergleichen, options: ['zahlenraum', 'nombre'], zr: ['10', '20'], defs: { zahlenraum: '20' } },
  { id: 'nachbarzahlen', fach: M, nom: 'Vorgänger und Nachfolger', domaine: ZO, gen: genNachbarzahlen, options: ['zahlenraum', 'nombre'], zr: ['10', '20'], defs: { zahlenraum: '20' } },
  { id: 'zahlenmauer', fach: M, nom: 'Zahlenmauern bis 20', domaine: ZO, gen: genZahlenmauer, options: ['niveau', 'nombre'], fixe: { zahlenraum: '20' }, defs: { niveau: '1' } },
  { id: 'uhr', fach: M, nom: 'Uhrzeit (volle Stunden)', domaine: GM, gen: genUhr, options: ['nombre'], fixe: { niveau: 1 } },
  { id: 'geld', fach: M, nom: 'Geld bis 20 €', domaine: GM, gen: genGeld, options: ['nombre'], fixe: { niveau: 1 } },
  { id: 'silben', fach: D, nom: 'Silben klatschen', domaine: SC, gen: genSilben, options: ['niveau', 'nombre'], defs: { niveau: '1' } },
  { id: 'buchstabe', fach: D, nom: 'Fehlender Selbstlaut', domaine: SC, gen: genBuchstabe, options: ['niveau', 'nombre'], defs: { niveau: '1' } }
];
THEMES[3] = [
  { id: 'plusminus', fach: M, nom: 'Plus und Minus bis 1000', domaine: ZO, gen: genPlusMinus, options: ['operation', 'uebergang', 'niveau', 'nombre'], fixe: { zahlenraum: '1000' } },
  { id: 'schriftlich', fach: M, nom: 'Schriftlich addieren und subtrahieren', domaine: ZO, gen: genSchriftlich, options: ['operation', 'nombre'], fixe: { zahlenraum: '1000' } },
  { id: 'einmaleins', fach: M, nom: 'Einmaleins und Geteilt', domaine: ZO, gen: genEinmaleins, options: ['reihen', 'geteilt', 'niveau', 'nombre'], defs: { reihen: [3, 4, 6, 7, 8, 9], geteilt: true } },
  { id: 'zahlenmauer', fach: M, nom: 'Zahlenmauern bis 1000', domaine: ZO, gen: genZahlenmauer, options: ['niveau', 'nombre'], fixe: { zahlenraum: '1000' } },
  { id: 'laengen', aide: 'einheiten', fach: M, nom: 'Längen umrechnen', domaine: GM, gen: genEinheiten, options: ['niveau', 'nombre'], fixe: { grandeur: 'laenge' } },
  { id: 'uhr', fach: M, nom: 'Uhrzeit (auf 5 Minuten)', domaine: GM, gen: genUhr, options: ['nombre'], fixe: { niveau: 4 } },
  { id: 'sachaufgaben', fach: M, nom: 'Rechengeschichten', domaine: ZO + ' (Modellieren)', gen: genSachaufgaben, options: ['nombre'], fixe: { zahlenraum: '1000' } },
  { id: 'praeteritum', fach: D, nom: 'Gegenwart und Vergangenheit', domaine: SP, gen: genPraeteritum, options: ['niveau', 'nombre'] },
  { id: 'wortarten', fach: D, nom: 'Nomen, Verb, Adjektiv', domaine: SP, gen: genWortarten, options: ['niveau'] }
];
THEMES[4] = [
  { id: 'stellenwert', fach: M, nom: 'Zahlen bis 1 000 000', domaine: ZO, gen: genStellenwert, options: ['nombre'], defs: { nombre: '12' } },
  { id: 'runden', fach: M, nom: 'Runden', domaine: ZO, gen: genRunden, options: ['niveau', 'nombre'] },
  { id: 'schriftlich', fach: M, nom: 'Schriftlich addieren und subtrahieren', domaine: ZO, gen: genSchriftlich, options: ['operation', 'nombre'], fixe: { zahlenraum: '100000' } },
  { id: 'malschriftlich', aide: 'malgeteilt', fach: M, nom: 'Schriftlich malnehmen', domaine: ZO, gen: genMalGeteiltSchriftlich, options: ['niveau', 'nombre'], fixe: { operation: '·' }, defs: { nombre: '6' } },
  { id: 'geteiltschriftlich', aide: 'malgeteilt', fach: M, nom: 'Schriftlich teilen', domaine: ZO, gen: genMalGeteiltSchriftlich, options: ['niveau', 'nombre'], fixe: { operation: ':' }, defs: { nombre: '6' } },
  { id: 'gewichte', aide: 'einheiten', fach: M, nom: 'Gewichte umrechnen', domaine: GM, gen: genEinheiten, options: ['niveau', 'nombre'], fixe: { grandeur: 'gewicht' } },
  { id: 'sachaufgaben', fach: M, nom: 'Rechengeschichten', domaine: ZO + ' (Modellieren)', gen: genSachaufgaben, options: ['nombre'], fixe: { zahlenraum: '1000' } },
  { id: 'perfekt', fach: D, nom: 'Vergangenheit mit hat / ist', domaine: SP, gen: genPerfekt, options: ['nombre'] },
  { id: 'dassdas', fach: D, nom: 'das oder dass?', domaine: 'Schreiben (richtig schreiben)', gen: genDassDas, options: ['nombre'] }
];
