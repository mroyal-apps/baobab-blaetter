// Interface : accueil, choix de la classe, générateur de fiches, aide parents. 3 langues : fr, en, de.
const $app = document.getElementById('app');
const etat = { graine: nouvelleGraine(), sol: false, route: '', langue: langueDepart() };
function nouvelleGraine() { return Math.floor(Math.random() * 90000) + 10000; }
function langueDepart() {
  try { const l = localStorage.getItem('baobab-blaetter.langue'); if (TEXTES[l]) return l; } catch (e) {}
  const n = (navigator.language || 'fr').slice(0, 2);
  return TEXTES[n] ? n : 'fr';
}
const t = k => TEXTES[etat.langue][k];
const aide = id => AIDE[id] && AIDE[id][etat.langue];

function changerLangue(l) {
  etat.langue = l;
  try { localStorage.setItem('baobab-blaetter.langue', l); } catch (e) {}
  document.documentElement.lang = l;
  dessinerEntete(); router(true);
}
function dessinerEntete() {
  document.getElementById('nav').innerHTML =
    `<a href="#/">${t('accueil')}</a><span class="nav-label">Klasse</span>${[1, 2, 3, 4].map(k => `<a href="#/klasse/${k}" class="nav-k">${k}</a>`).join('')}<a href="#/parents">${t('parents')}</a><a href="#/preise">${t('preise')}</a><span id="nav-etoiles" class="nav-etoiles" title="Sterne">⭐ ${progres().etoiles}</span>
     <span class="langues">${['de', 'fr', 'en'].map(l => `<button data-l="${l}" class="${l === etat.langue ? 'actif' : ''}">${l.toUpperCase()}</button>`).join('')}</span>`;
  document.querySelectorAll('.langues button').forEach(b => b.onclick = () => changerLangue(b.dataset.l));
  document.getElementById('provisoire').textContent = t('provisoire');
  document.getElementById('pied-site').innerHTML = `${t('pied')} · <a href="#/preise">${t('preise')}</a> · <a href="#/rechtliches">${t('rechtliches')}</a>`;
}

function OPTIONS() {
  const n = t('niv');
  return {
    zahlenraum: { label: t('zahlenraum'), type: 'select', choix: [['10', 'bis 10'], ['20', 'bis 20'], ['100', 'bis 100'], ['1000', 'bis 1000']], def: '100' },
    operation: { label: t('operation'), type: 'select', choix: [['+', 'nur Plus'], ['-', 'nur Minus'], ['mix', 'gemischt']], def: 'mix' },
    uebergang: { label: t('uebergang'), type: 'select', choix: [['ohne', 'ohne'], ['mit', 'mit'], ['egal', 'gemischt']], def: 'egal' },
    niveau: { label: t('niveau'), type: 'select', choix: [['1', n[0]], ['2', n[1]], ['3', n[2]]], def: '2' },
    nombre: { label: t('nombre'), type: 'select', choix: [['6', '6'], ['12', '12'], ['18', '18'], ['24', '24']], def: '18' },
    reihen: { label: t('reihen'), type: 'reihen', def: [2, 5, 10] },
    geteilt: { label: t('geteilt'), type: 'check', def: false },
    uebung: { label: t('uebung'), type: 'select', choix: Object.entries(UEBUNGEN), def: 'lesen' }
  };
}

function lireOptions(theme) {
  const o = Object.assign({}, theme.fixe || {}), OP = OPTIONS();
  theme.options.forEach(k => {
    const d = OP[k], el = document.getElementById('opt-' + k);
    if (d.type === 'reihen') o[k] = el ? [...el.querySelectorAll('input:checked')].map(i => +i.value) : d.def;
    else if (d.type === 'check') o[k] = el ? el.checked : d.def;
    else o[k] = el ? el.value : d.def;
  });
  Object.assign(o, theme.fixe || {});
  o.nombre = +(o.nombre || 18); o.niveau = +(o.niveau || 2);
  if (o.reihen && !o.reihen.length) o.reihen = [2, 5, 10];
  return o;
}
function memoOptions() {   // garde les réglages quand on change de langue
  const m = {};
  document.querySelectorAll('.options select, .options input').forEach(el => { m[el.id + (el.value && el.type === 'checkbox' && el.closest('fieldset') ? el.value : '')] = el.type === 'checkbox' ? el.checked : el.value; });
  return m;
}
function remettreOptions(m) {
  if (!m) return;
  document.querySelectorAll('.options select, .options input').forEach(el => {
    const k = el.id + (el.value && el.type === 'checkbox' && el.closest('fieldset') ? el.value : '');
    if (!(k in m)) return;
    if (el.type === 'checkbox') el.checked = m[k]; else el.value = m[k];
  });
}

function champ(k, theme) {
  const d = Object.assign({}, OPTIONS()[k]);
  if (theme.defs && k in theme.defs) d.def = theme.defs[k];
  if (k === 'zahlenraum' && theme.zr) d.choix = d.choix.filter(c => theme.zr.includes(c[0]));
  if (k === 'uebung' && theme.uebungen) d.choix = d.choix.filter(c => theme.uebungen.includes(c[0]));
  if (d.type === 'select') return `<label>${d.label}<select id="opt-${k}">${d.choix.map(([v, x]) => `<option value="${v}"${v === d.def ? ' selected' : ''}>${x}</option>`).join('')}</select></label>`;
  if (d.type === 'check') return `<label class="check"><input type="checkbox" id="opt-${k}"${d.def ? ' checked' : ''}> ${d.label}</label>`;
  return `<fieldset id="opt-${k}"><legend>${d.label}</legend>${[1,2,3,4,5,6,7,8,9,10].map(n =>
    `<label class="puce"><input type="checkbox" value="${n}"${d.def.includes(n) ? ' checked' : ''}><span>${n}</span></label>`).join('')}</fieldset>`;
}

// ---------- Pages ----------

function pageAccueil() {
  $app.innerHTML = `
  <section class="hero"><h1>${t('hero_t')}</h1><p>${t('hero_p')}</p><p><a class="btn-lien" href="#/preise">${t('preise')} →</a></p></section>
  <section class="classes">${[1, 2, 3, 4].map(k => `
    <a class="carte-classe" href="#/klasse/${k}">
      <span class="num">${k}</span><span>Klasse ${k}</span>
      <small>Mathe · Deutsch</small></a>`).join('')}
  </section>
  <section class="atouts">${t('atouts').map(([a, b]) => `<div><b>${a}</b><p>${b}</p></div>`).join('')}</section>`;
}

function pageKlasse(k) {
  const themes = THEMES[k] || [], ecran = modeKlasse() === 'ecran', pr = progres().themes;
  const carte = x => {
    const jeu = ecran && peutUeben(k, x.id), m = pr[k + '/' + x.id];
    const sous = ecran ? (jeu ? (m ? `${t('u_progres')} : ${m.meilleur} %` : x.domaine) : t('u_papier_seul')) : x.domaine;
    return `<a class="carte-theme${ecran ? (jeu ? ' carte-jeu' : ' papier-seul') : ''}" href="#/${jeu ? 'ueben' : 'fiche'}/${k}/${x.id}"><b>${x.nom}</b><small>${sous}</small>${estGratuit(k, x.id) ? `<span class="badge gratis">${t('gratis')}</span>` : (estLibre(k, x.id) ? '' : '<span class="badge cadenas">🔒</span>')}</a>`;
  };
  const bloc = fach => `<h2 class="fach ${fach.toLowerCase()}">${fach}</h2><div class="themes">${themes.filter(x => x.fach === fach).map(carte).join('')}</div>`;
  $app.innerHTML = `<section class="page"><h1>Klasse ${k}</h1>
    <div class="modes" role="tablist"><button data-m="papier" class="${ecran ? '' : 'actif'}">${t('u_mode_papier')}</button><button data-m="ecran" class="${ecran ? 'actif' : ''}">${t('u_mode_ecran')}</button></div>
    <p>${ecran ? t('u_mode_p') : t('choisir')}</p>${bloc('Mathe')}${bloc('Deutsch')}${bloc('Jahreskreis')}${bloc('Themen')}</section>`;
  document.querySelectorAll('.modes button').forEach(b => b.onclick = () => changerMode(b.dataset.m));
}

function pageFiche(k, id, memo) {
  const theme = (THEMES[k] || []).find(x => x.id === id);
  if (!theme) return pageKlasse(k);
  const libre = estLibre(k, id);
  if (!libre) etat.sol = false;
  $app.innerHTML = `
  <section class="atelier">
    <aside class="panneau no-print">
      <a href="#/klasse/${k}" class="retour">← Klasse ${k}</a>
      <h2>${theme.nom}</h2><p class="domaine">${theme.fach} · ${theme.domaine}</p>
      ${estGratuit(k, id) ? `<p><span class="badge gratis">${t('gratis')}</span></p>` : ''}
      <div class="options">${theme.options.map(k => champ(k, theme)).join('')}</div>
      ${peutUeben(k, id) ? `<a class="btn jeu" href="#/ueben/${k}/${id}">${t('u_bouton')}</a>` : ''}
      <button class="btn principal" id="b-nouveau">${t('nouvelle')}</button>
      ${libre ? `<button class="btn" id="b-sol">${etat.sol ? t('voir_fiche') : t('voir_sol')}</button>` : ''}
      <button class="btn" id="b-lire">${t('ecouter')}</button>
      <button class="btn" id="b-texte" hidden>📖 ${t('voir_texte')}</button>
      ${libre ? `<fieldset class="impr"><legend>${t('impr_aussi')}</legend>
        <label class="check"><input type="checkbox" id="p-sol" checked> ${t('impr_sol')}</label>
        <label class="check"><input type="checkbox" id="p-aide" checked> ${t('impr_aide')}</label>
        <label class="check" id="l-vorl"><input type="checkbox" id="p-vorl" checked> ${t('impr_vorlesen')}</label></fieldset>
      <button class="btn principal" id="b-print">${t('imprimer')}</button>`
      : `<p class="verrou">${t('verrou')}</p><button class="btn achat" id="b-acheter">${t('freischalten')}</button>`}
      <details class="aide-ecran"><summary>👪 ${t('aide_titre')}</summary><div id="aide-cote">${aideHTML(theme.aide || theme.id)}</div></details>
    </aside>
    <div class="feuilles ${libre ? '' : 'verrouille'}" id="feuilles"></div>
  </section>`;
  remettreOptions(memo);
  const coche = id => { const el = document.getElementById(id); return el ? el.checked : false; };
  const dessiner = () => {
    const f = theme.gen(rngDe(etat.graine), lireOptions(theme));
    etat.audio = f.audio || f.consigne;
    etat.lent = !!f.lent;
    const cleAide = f.aide || theme.aide || theme.id;
    document.getElementById('aide-cote').innerHTML = aideHTML(cleAide);
    const lv = document.getElementById('l-vorl'); if (lv) lv.hidden = !f.vorlesen;
    document.getElementById('b-texte').hidden = !f.vorlesen;
    document.getElementById('b-lire').textContent = f.vorlesen ? t('lire_dictee') : t('ecouter');
    const deco = (f.sur || '').split(' ')[0] || (theme.fach === 'Mathe' ? '🔢' : theme.fach === 'Deutsch' ? '✏️' : '🌳');
    const tete = (sol, titre, consigne, sansNom) => `${sansNom ? '' : '<div class="entete"><span>Name: <i></i></span><span>Datum: <i></i></span></div>'}
      <div class="bandeau"><span class="deco" aria-hidden="true">${deco}</span><div class="etiquette-titre">${f.sur ? `<small>${f.sur.split(' ').slice(1).join(' ')}</small>` : ''}<h1 class="titre-fiche">${titre}${sol ? ' – Lösungen' : ''}</h1></div><span class="pastille">Klasse ${k}</span></div>
      ${consigne ? `<p class="consigne">${consigne}</p>` : ''}`;
    const pied = `<div class="pied"><span><b>Baobab Blätter</b> · ${theme.fach} – ${theme.domaine}</span><span>Klasse ${k} · Blatt Nr. ${etat.graine}</span></div>`;
    const marque = libre ? '' : `<div class="filigrane" aria-hidden="true"><span>VORSCHAU</span></div>`;
    // Kontrollzahlen : les réponses mélangées en bas de la fiche, pour que l'enfant vérifie seul
    let ctrl = f.kontrolle;
    if (!ctrl && ['plusminus', 'einmaleins'].includes(theme.id)) ctrl = [...f.rendu(true).matchAll(/<div class="calc">(.*?)<\/div>/g)].map(m => m[1].replace(/<[^>]+>/g, '').split('=').pop().trim()).filter(x => /^\d+$/.test(x)).map(Number);
    const kontrolle = ctrl && ctrl.length >= 3 ? `<div class="kontrolle"><span class="etiquette">Kontrollzahlen</span>${[...ctrl].sort((a, b) => a - b).map(x => `<span>${typeof fmtNb === 'function' ? fmtNb(x) : x}</span>`).join('')}</div>` : '';
    const art = (cls, contenu) => `<article class="a4 ${cls}">${marque}${contenu}${pied}</article>`;
    document.getElementById('feuilles').innerHTML =
      art(`${etat.sol ? 'ecran-cache' : ''} k${k}-fiche`, `${tete(false, f.titre, f.consigne)}<div class="corps">${f.rendu(false)}</div>${kontrolle}${f.vorlesen ? '<p class="renvoi">Den Text zum Vorlesen findet ein Erwachsener auf dem nächsten Blatt.</p>' : ''}`) +
      (f.vorlesen ? `<p class="bandeau-texte no-print" id="ancre-texte">📖 ${t('texte_ici')}</p>` + art(`vorlesen ${libre && !coche('p-vorl') ? 'pas-impr' : ''}`, `${tete(false, 'Text zum Vorlesen', 'Für Erwachsene: Bitte nicht dem Kind zeigen.', true)}${f.vorlesen.html}`) : '') +
      (libre ? art(`solutions k${k}-fiche ${etat.sol ? '' : 'ecran-cache'} ${coche('p-sol') ? '' : 'pas-impr'}`, `${tete(true, f.titre, f.consigne)}<div class="corps">${f.rendu(true)}</div>`) +
        art(`aide-impr ecran-cache ${coche('p-aide') ? '' : 'pas-impr'}`, `<h1 class="titre-fiche simple">${t('aide_titre')}</h1>${aideHTML(cleAide)}`) : '');
  };
  document.querySelectorAll('.options select, .options input').forEach(el => el.addEventListener('change', dessiner));
  document.getElementById('b-nouveau').onclick = () => { etat.graine = nouvelleGraine(); dessiner(); };
  document.getElementById('b-lire').onclick = () => lire(etat.audio);
  document.getElementById('b-texte').onclick = () => { const a = document.getElementById('ancre-texte'); if (a) a.scrollIntoView({ behavior: 'smooth' }); };
  if (libre) {
    document.getElementById('b-sol').onclick = e => { etat.sol = !etat.sol; e.target.textContent = etat.sol ? t('voir_fiche') : t('voir_sol'); dessiner(); };
    ['p-sol', 'p-aide', 'p-vorl'].forEach(i => document.getElementById(i).onchange = dessiner);
    document.getElementById('b-print').onclick = imprimer;
  } else document.getElementById('b-acheter').onclick = () => ouvrirBoutique(k, id, () => router(true));
  dessiner();
}
function imprimer() { window.print(); }

function aideHTML(id) {
  const a = aide(id); if (!a) return '';
  return `<div class="aide"><h3>${a.titre}</h3>
    <p><b>${t('apprend')}</b> ${a.apprend}</p>
    <p><b>${t('aider')}</b></p><ol>${a.aider.map(x => `<li>${x}</li>`).join('')}</ol>
    <p><b>${t('erreur')}</b> ${a.erreur}</p>
    <table class="mots"><tr><th>${t('col_de')}</th><th>${t('col_tr')}</th></tr>${a.mots.map(([d, f]) => `<tr><td>${d}</td><td>${f}</td></tr>`).join('')}</table></div>`;
}

function pageParents() {
  $app.innerHTML = `<section class="page"><h1>${t('aide_titre')}</h1><p>${t('aide_intro')}</p>${Object.keys(AIDE).map(aideHTML).join('')}</section>`;
}

// ---------- Son : voix allemande du navigateur ----------
function lire(texte) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(texte.replace(/·/g, ' mal ').replace(/−/g, ' minus ').replace(/\+/g, ' plus '));
  u.lang = 'de-DE'; u.rate = etat.lent ? 0.6 : 0.85;
  const voix = speechSynthesis.getVoices().find(v => v.lang && v.lang.startsWith('de'));
  if (voix) u.voice = voix;
  speechSynthesis.speak(u);
}

// ---------- Navigation ----------
function lireRoute() { return location.hash; }
function router(garder) {
  const memo = garder ? memoOptions() : null;
  const bq = document.getElementById('boutique'); if (bq) bq.hidden = true;
  const p = lireRoute().replace(/^#\/?/, '').split('/');
  if (p[0] === 'klasse') pageKlasse(+p[1]);
  else if (p[0] === 'fiche') { if (!garder) etat.sol = false; pageFiche(+p[1], p[2], memo); }
  else if (p[0] === 'ueben') pageUeben(+p[1], p[2], memo);
  else if (p[0] === 'parents') pageParents();
  else if (p[0] === 'preise') pagePreise();
  else if (p[0] === 'rechtliches') pageRechtliches();
  else pageAccueil();
  if (!garder) window.scrollTo(0, 0);
}
window.addEventListener('hashchange', () => router());
document.documentElement.lang = etat.langue;
dessinerEntete();
router();
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js');
