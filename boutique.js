// Boutique (v0.7) : fiches gratuites, paquets, abonnement. Modèle choisi par Cedric le 06/11/2026.
// ATTENTION : le paiement n'est PAS encore branché. Les boutons « Acheter » montrent un message.
// Le code de test débloque tout, seulement pour tester. À remplacer par de vrais codes (paiement en ligne) avant la mise en ligne.

const PRIX = { theme: '2,90 €', klasse: '9,90 €', abo: '4,90 €' };
const CODE_TEST = 'BAOBAB-TEST';
// 3 fiches gratuites par Klasse
const GRATUIT = { 1: ['plusminus', 'silben', 'thema-herbst'], 2: ['plusminus', 'artikel', 'thema-herbst'], 3: ['plusminus', 'wortarten', 'thema-herbst'], 4: ['runden', 'dassdas', 'thema-herbst'] };

const ACHATS_VIDE = { abo: false, klassen: [], themes: [] };
function achats() { try { return Object.assign({}, ACHATS_VIDE, JSON.parse(localStorage.getItem('baobab-blaetter.achats') || '{}')); } catch (e) { return Object.assign({}, ACHATS_VIDE); } }
function garderAchats(a) { try { localStorage.setItem('baobab-blaetter.achats', JSON.stringify(a)); } catch (e) {} }
const estGratuit = (k, id) => (GRATUIT[k] || []).includes(id);
function estLibre(k, id) { const a = achats(); return estGratuit(k, id) || a.abo || a.klassen.includes(k) || a.themes.includes(k + '/' + id); }

Object.assign(TEXTES.fr, {
  lire_dictee: '🔊 Écouter la dictée (lentement)', voir_texte: 'Voir le texte de la dictée', texte_ici: 'Le texte de la dictée est ici, pour l\'adulte. Lis-le à voix haute ou clique sur « Écouter ».',
  preise: 'Prix', gratis: 'Gratuit', vorschau: 'APERÇU', freischalten: '🔓 Débloquer pour imprimer',
  verrou: 'Cette fiche est un aperçu. Pour l\'imprimer avec les solutions, choisis une offre.',
  shop_titre: 'Choisis ton offre', shop_intro: '3 fiches sont gratuites dans chaque Klasse. Pour tout le reste :',
  o_theme: 'Paquet thème', o_theme_d: 'Ce thème pour cette Klasse : toutes les fiches, sans limite, avec solutions.',
  o_klasse: 'Paquet Klasse', o_klasse_d: 'Toutes les fiches d\'une Klasse (Mathe, Deutsch, tous les thèmes).',
  o_abo: 'Abonnement', o_abo_d: 'Tout le site, Klasse 1 à 4, nouvelles fiches chaque mois. Résiliable chaque mois.', par_mois: '/ mois', une_fois: 'une fois',
  acheter: 'Acheter', bientot_paiement: 'Le paiement en ligne arrive bientôt. Pour l\'instant, le site est en test.',
  code_label: 'Tu as un code ?', code_ok: 'Code accepté. Toutes les fiches sont débloquées.', code_faux: 'Ce code ne marche pas.', valider: 'Valider', fermer: 'Fermer',
  rechtliches: 'Mentions légales', impr_vorlesen: 'le texte à lire (Diktat)',
  preise_intro: 'Commence gratuitement. Achète seulement ce dont ton enfant a besoin.',
  faq: [['Que contient une fiche ?', 'Une fiche A4 à imprimer, une page de solutions et une aide pour les parents en français, anglais ou allemand.'],
    ['Combien de fiches ?', 'Chaque clic sur « Nouvelle fiche » crée une fiche nouvelle. Un paquet n\'a donc pas de limite.'],
    ['Comment payer ?', 'Le paiement en ligne sera ajouté avant l\'ouverture du site.']],
  legal_t: 'Mentions légales', legal_p: 'Ces pages seront complétées avant l\'ouverture du site : Impressum, conditions générales de vente (AGB), protection des données (Datenschutz), droit de rétractation (Widerruf).'
});
Object.assign(TEXTES.en, {
  lire_dictee: '🔊 Listen to the dictation (slowly)', voir_texte: 'Show the dictation text', texte_ici: 'Here is the dictation text, for the adult. Read it aloud or click “Listen”.',
  preise: 'Prices', gratis: 'Free', vorschau: 'PREVIEW', freischalten: '🔓 Unlock to print',
  verrou: 'This sheet is a preview. To print it with the answers, choose an offer.',
  shop_titre: 'Choose your offer', shop_intro: '3 sheets are free in every Klasse. For everything else:',
  o_theme: 'Topic pack', o_theme_d: 'This topic for this Klasse: all sheets, unlimited, with answers.',
  o_klasse: 'Klasse pack', o_klasse_d: 'All sheets of one Klasse (Mathe, Deutsch, all topics).',
  o_abo: 'Subscription', o_abo_d: 'The whole site, Klasse 1 to 4, new sheets every month. Cancel any month.', par_mois: '/ month', une_fois: 'one-time',
  acheter: 'Buy', bientot_paiement: 'Online payment is coming soon. For now the site is in test mode.',
  code_label: 'Do you have a code?', code_ok: 'Code accepted. All sheets are unlocked.', code_faux: 'This code does not work.', valider: 'Confirm', fermer: 'Close',
  rechtliches: 'Legal notice', impr_vorlesen: 'the text to read aloud (Diktat)',
  preise_intro: 'Start for free. Only buy what your child needs.',
  faq: [['What is in a sheet?', 'An A4 sheet to print, an answer page and help for parents in French, English or German.'],
    ['How many sheets?', 'Every click on “New sheet” makes a new sheet. So a pack has no limit.'],
    ['How do I pay?', 'Online payment will be added before the site opens.']],
  legal_t: 'Legal notice', legal_p: 'These pages will be completed before the site opens: Impressum, terms of sale (AGB), privacy (Datenschutz), right of withdrawal (Widerruf).'
});
Object.assign(TEXTES.de, {
  lire_dictee: '🔊 Diktat anhören (langsam)', voir_texte: 'Diktattext anzeigen', texte_ici: 'Hier steht der Diktattext für Erwachsene. Lies ihn laut vor oder klicke auf „Anhören“.',
  preise: 'Preise', gratis: 'Gratis', vorschau: 'VORSCHAU', freischalten: '🔓 Zum Drucken freischalten',
  verrou: 'Dieses Blatt ist eine Vorschau. Zum Drucken mit Lösungen wähle ein Angebot.',
  shop_titre: 'Wähle dein Angebot', shop_intro: 'In jeder Klasse sind 3 Blätter gratis. Für alles andere:',
  o_theme: 'Themenpaket', o_theme_d: 'Dieses Thema für diese Klasse: alle Blätter, unbegrenzt, mit Lösungen.',
  o_klasse: 'Klassenpaket', o_klasse_d: 'Alle Blätter einer Klasse (Mathe, Deutsch, alle Themen).',
  o_abo: 'Abo', o_abo_d: 'Die ganze Seite, Klasse 1 bis 4, jeden Monat neue Blätter. Monatlich kündbar.', par_mois: '/ Monat', une_fois: 'einmalig',
  acheter: 'Kaufen', bientot_paiement: 'Die Online-Bezahlung kommt bald. Im Moment ist die Seite im Test.',
  code_label: 'Hast du einen Code?', code_ok: 'Code angenommen. Alle Blätter sind freigeschaltet.', code_faux: 'Dieser Code funktioniert nicht.', valider: 'Bestätigen', fermer: 'Schließen',
  rechtliches: 'Rechtliches', impr_vorlesen: 'den Vorlesetext (Diktat)',
  preise_intro: 'Starte gratis. Kaufe nur, was dein Kind braucht.',
  faq: [['Was ist in einem Blatt?', 'Ein A4-Blatt zum Drucken, eine Lösungsseite und eine Hilfe für Eltern auf Französisch, Englisch oder Deutsch.'],
    ['Wie viele Blätter?', 'Jeder Klick auf „Neues Blatt“ erstellt ein neues Blatt. Ein Paket hat also keine Grenze.'],
    ['Wie bezahle ich?', 'Die Online-Bezahlung kommt vor dem Start der Seite.']],
  legal_t: 'Rechtliches', legal_p: 'Diese Seiten werden vor dem Start ergänzt: Impressum, AGB, Datenschutz, Widerrufsbelehrung.'
});

function offresHTML(k, id) {
  const theme = k && id ? (THEMES[k] || []).find(x => x.id === id) : null;
  const carte = (cle, titre, desc, prix, unite, mis) => `<div class="offre ${mis ? 'mise' : ''}"><h3>${titre}</h3><p class="prix">${prix} <small>${unite}</small></p><p>${desc}</p>
    <button class="btn principal" data-acheter="${cle}">${t('acheter')}</button></div>`;
  return `<div class="offres">
    ${theme ? carte('theme', `${t('o_theme')} · ${theme.nom} · Klasse ${k}`, t('o_theme_d'), PRIX.theme, t('une_fois')) : carte('theme', t('o_theme'), t('o_theme_d'), PRIX.theme, t('une_fois'))}
    ${carte('klasse', `${t('o_klasse')}${k ? ' · Klasse ' + k : ''}`, t('o_klasse_d'), PRIX.klasse, t('une_fois'))}
    ${carte('abo', t('o_abo'), t('o_abo_d'), PRIX.abo, t('par_mois'), true)}</div>
    <p class="note-paiement" id="note-paiement" hidden>${t('bientot_paiement')}</p>
    <div class="code"><label>${t('code_label')} <input id="code-in" autocomplete="off"></label><button class="btn" id="code-ok">${t('valider')}</button><span id="code-msg"></span></div>`;
}
function brancherOffres(apres) {
  document.querySelectorAll('[data-acheter]').forEach(b => b.onclick = () => { document.getElementById('note-paiement').hidden = false; });
  document.getElementById('code-ok').onclick = () => {
    const v = document.getElementById('code-in').value.trim().toUpperCase(), msg = document.getElementById('code-msg');
    if (v === CODE_TEST) { const a = achats(); a.abo = true; garderAchats(a); msg.textContent = t('code_ok'); msg.className = 'ok'; if (apres) setTimeout(apres, 700); }
    else { msg.textContent = t('code_faux'); msg.className = 'faux'; }
  };
}
function ouvrirBoutique(k, id, apres) {
  let m = document.getElementById('boutique');
  if (!m) { m = document.createElement('div'); m.id = 'boutique'; m.className = 'modale no-print'; document.body.appendChild(m); }
  m.innerHTML = `<div class="boite" role="dialog" aria-modal="true" aria-labelledby="shop-t"><button class="fermer" aria-label="${t('fermer')}">×</button>
    <h2 id="shop-t">${t('shop_titre')}</h2><p>${t('shop_intro')}</p>${offresHTML(k, id)}</div>`;
  m.hidden = false;
  const fermer = () => { m.hidden = true; };
  m.querySelector('.fermer').onclick = fermer; m.onclick = e => { if (e.target === m) fermer(); };
  brancherOffres(() => { fermer(); if (apres) apres(); });
}
function pagePreise() {
  $app.innerHTML = `<section class="page"><h1>${t('preise')}</h1><p>${t('preise_intro')}</p>
    <div class="gratuits"><b>${t('gratis')} :</b> ${[1, 2, 3, 4].map(k => `Klasse ${k} : ${GRATUIT[k].map(id => { const x = THEMES[k].find(y => y.id === id); return x ? `<a href="#/fiche/${k}/${id}">${x.nom}</a>` : ''; }).join(', ')}`).join(' · ')}</div>
    ${offresHTML()}
    <div class="faq">${t('faq').map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></section>`;
  brancherOffres(() => router(true));
}
function pageRechtliches() {
  $app.innerHTML = `<section class="page"><h1>${t('legal_t')}</h1><p>${t('legal_p')}</p></section>`;
}
