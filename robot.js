// Baobab Blätter – v0.11 : Bip, le petit robot compagnon (repris de Baobab Primaire v0.6, demande de Cedric, 10/11/2026)
// Bip parle à l'enfant pendant les exercices à l'écran : il félicite, il encourage, il fête la fin de la fiche.
// L'enfant peut garder Bip, ou choisir Amara ou Noah. Bip peut aussi parler à voix haute (bouton 🔊).
// Bip parle allemand à l'enfant (comme Amara et Noah). Les boutons sont en DE / FR / EN.
// Dessin original en SVG (marche hors ligne). Données gardées sous « baobab-blaetter. » (séparées de Baobab Primaire).

PERSOS.robot = { nom: 'Bip', robot: true };

function robotSVG(humeur) {
  const h = humeur || '';
  const corps = '#3d8bfd', fonce = '#2a6fdb', trait = '#23324a';
  const yeux = h === 'fete'
    ? '<path d="M42 40 l2.4 5 l5.4 .6 l-4 3.6 l1.2 5.4 l-5 -2.8 l-5 2.8 l1.2 -5.4 l-4 -3.6 l5.4 -.6z M78 40 l2.4 5 l5.4 .6 l-4 3.6 l1.2 5.4 l-5 -2.8 l-5 2.8 l1.2 -5.4 l-4 -3.6 l5.4 -.6z" fill="#f2c230" stroke="#c99a00" stroke-width="1"/>'
    : h === 'triste'                          // « courage » : yeux doux, sourcils décidés
      ? '<ellipse cx="42" cy="48" rx="7" ry="6" fill="#fff"/><ellipse cx="78" cy="48" rx="7" ry="6" fill="#fff"/><circle cx="42" cy="49" r="3.5" fill="' + trait + '"/><circle cx="78" cy="49" r="3.5" fill="' + trait + '"/><path d="M35 38 L48 40 M85 38 L72 40" stroke="' + trait + '" stroke-width="3" stroke-linecap="round"/>'
      : '<circle cx="42" cy="47" r="8" fill="#fff"/><circle cx="78" cy="47" r="8" fill="#fff"/><circle cx="43" cy="48" r="4" fill="' + trait + '"/><circle cx="79" cy="48" r="4" fill="' + trait + '"/><circle cx="44.5" cy="46" r="1.4" fill="#fff"/><circle cx="80.5" cy="46" r="1.4" fill="#fff"/>';
  const bouche = h === 'fete' ? '<path d="M46 60 Q60 76 74 60 Z" fill="' + trait + '"/><path d="M51 65 Q60 70 69 65" fill="#e86a6a"/>'
    : h === 'triste' ? '<path d="M49 64 Q60 69 71 64" fill="none" stroke="' + trait + '" stroke-width="3.2" stroke-linecap="round"/>'
    : '<path d="M47 60 Q60 71 73 60" fill="none" stroke="' + trait + '" stroke-width="3.2" stroke-linecap="round"/>';
  // bras : levés pour la fête, un bras levé (avec des petits éclats) pour encourager, normaux sinon
  const main = (x, y) => `<circle cx="${x}" cy="${y}" r="6" fill="#fff" stroke="${trait}" stroke-width="2"/>`;
  const bras = h === 'fete'
    ? `<path d="M34 92 L14 74" stroke="${fonce}" stroke-width="7" stroke-linecap="round"/>${main(12, 71)}<path d="M86 92 L106 74" stroke="${fonce}" stroke-width="7" stroke-linecap="round"/>${main(108, 71)}`
    : h === 'triste'
      ? `<path d="M34 94 L18 108" stroke="${fonce}" stroke-width="7" stroke-linecap="round"/>${main(16, 109)}<path d="M86 94 L104 80" stroke="${fonce}" stroke-width="7" stroke-linecap="round"/>${main(106, 77)}
         <path d="M110 64 l2 -5 M115 70 l5 -2 M104 63 l-1 -5" stroke="#f2c230" stroke-width="2.4" stroke-linecap="round"/>`
      : `<path d="M34 94 L18 108" stroke="${fonce}" stroke-width="7" stroke-linecap="round"/>${main(16, 109)}<path d="M86 94 L102 108" stroke="${fonce}" stroke-width="7" stroke-linecap="round"/>${main(104, 109)}`;
  return `<svg viewBox="0 0 120 120" class="amara perso-robot ${h}" aria-hidden="true">
    <line x1="60" y1="9" x2="60" y2="22" stroke="${trait}" stroke-width="3"/>
    <circle cx="60" cy="8" r="6" fill="${h === 'fete' ? '#f2c230' : h === 'triste' ? '#ff9f43' : '#2fd17a'}" stroke="${trait}" stroke-width="2" class="lumiere"/>
    <rect x="17" y="40" width="9" height="18" rx="3" fill="${fonce}" stroke="${trait}" stroke-width="2"/><rect x="94" y="40" width="9" height="18" rx="3" fill="${fonce}" stroke="${trait}" stroke-width="2"/>
    ${bras}
    <rect x="34" y="84" width="52" height="34" rx="10" fill="${corps}" stroke="${trait}" stroke-width="2.5"/>
    <circle cx="60" cy="100" r="7" fill="#fff" stroke="${trait}" stroke-width="2"/><path d="M56 100 l3 3.5 l6 -7" fill="none" stroke="#2fa36b" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="24" y="22" width="72" height="58" rx="18" fill="${corps}" stroke="${trait}" stroke-width="2.5"/>
    <rect x="30" y="29" width="60" height="45" rx="13" fill="#dcebff"/>
    ${yeux}${bouche}
    <ellipse cx="35" cy="62" rx="4" ry="2.6" fill="#ff8fa3" opacity=".6"/><ellipse cx="85" cy="62" rx="4" ry="2.6" fill="#ff8fa3" opacity=".6"/>
  </svg>`;
}
const _personnageHumain = personnageSVG;
personnageSVG = function (qui, humeur) { return qui === 'robot' ? robotSVG(humeur) : _personnageHumain(qui, humeur); };

// ---------- Ce que dit le compagnon (en allemand, pour l'enfant) ----------
// {p} = « , Lena » si l'enfant a mis son prénom ; {in} = « in » pour une fille (Champion / Championin) ; {s} = la solution
const PAROLES = {
  bravo: ['Super{p}!', 'Toll gemacht{p}!', 'Richtig!', 'Prima{p}!', 'Klasse!', 'Sehr gut{p}!', 'Du bist stark{p}!', 'Ja, genau!'],
  serie3: ['3 richtige Antworten hintereinander{p}! 🔥', 'Wow, 3 hintereinander! Weiter so!'],
  serie5: ['5 hintereinander{p}! Du bist ein{e} Champion{in}! 🏆', 'Unglaublich, 5 richtige Antworten hintereinander! 🚀'],
  essai1: ['Fast{p}! Versuch es noch einmal.', 'Noch nicht. Lies die Aufgabe genau.', 'Das ist nicht schlimm. Wir lernen durch Probieren!', 'Atme tief ein, schau genau hin. Du schaffst das!'],
  essai2: ['Nur Mut{p}! Nimm dir Zeit.', 'Noch ein kleines Stück! Du kannst das.', 'Ich glaube an dich{p}! Probier es ein letztes Mal.'],
  solution: ['Schau: Die Lösung ist „{s}“. Beim nächsten Mal klappt es!', 'Nicht schlimm{p}. Die Antwort ist „{s}“. Wir machen zusammen weiter!'],
  fin_parfait: ['Wow{p}! Alles richtig beim ersten Mal! 🎉', 'Perfekt! Du hast alles geschafft{p}! 🏆'],
  fin_bien: ['Geschafft! Du hast toll geübt{p}!', 'Super{p}, das Blatt ist fertig! Du wirst immer besser!'],
  fin_courage: ['Fertig! Du hast bis zum Ende durchgehalten{p}. Das ist toll.', 'Geschafft! Mach noch ein Blatt: Du wirst sehen, es wird leichter.']
};
function parole(cle, enfant, sol) {
  const l = PAROLES[cle], x = l[Math.floor(Math.random() * l.length)];
  const p = enfant && enfant.prenom ? ', ' + enfant.prenom : '', fille = enfant && enfant.fille;
  return x.replace(/\{p\}/, p).replace(/\{p\}/g, '').replace(/\{e\}/g, fille ? 'e' : '').replace(/\{in\}/g, fille ? 'in' : '').replace(/\{s\}/g, sol || '');
}
const maj1 = s => s.charAt(0).toUpperCase() + s.slice(1);

// ---------- Le prénom de l'enfant et le compagnon (gardés sur cet appareil) ----------
function lireEnfant() { try { return JSON.parse(localStorage.getItem('baobab-blaetter.enfant')) || null; } catch (e) { return null; } }
function garderEnfant(d) { try { if (d) localStorage.setItem('baobab-blaetter.enfant', JSON.stringify(d)); else localStorage.removeItem('baobab-blaetter.enfant'); } catch (e) {} }

// ---------- Bip parle à voix haute (choix gardé sur l'appareil) ----------
function bipParle() { try { return localStorage.getItem('baobab-blaetter.voix') === 'oui'; } catch (e) { return false; } }
function changerBipParle() { try { localStorage.setItem('baobab-blaetter.voix', bipParle() ? 'non' : 'oui'); } catch (e) {} }

// ---------- Bip sur la page d'accueil ----------
function accueilBip() {
  return `<a class="carte-bip" href="#/guide"><span class="bip-mini">${robotSVG('content')}</span>
    <span><b>${t('g_bonjour')}</b><br>${t('g_bonjour2')} <u>📖 ${t('g_ouvrir')}</u></span></a>`;
}

Object.assign(TEXTES.fr, {
  u_compagnon: 'Ton compagnon :', u_tu_es: 'Tu es :', u_voix_oui: 'Bip parle : oui', u_voix_non: 'Bip parle : non',
  u_mon_prenom: 'Mon prénom', u_ton_prenom: 'Ton prénom :', u_prenom_ex: 'par exemple Lena', u_fille: 'fille', u_garcon: 'garçon', u_ok: 'OK', u_sans_prenom: 'Effacer',
  g_bonjour: 'Bonjour ! Je suis Bip, le petit robot. 🤖', g_bonjour2: 'J\'aide ton enfant pendant les exercices (en allemand). Tu veux savoir comment marche l\'appli ?', g_ouvrir: 'Lire le guide'
});
Object.assign(TEXTES.en, {
  u_compagnon: 'Your companion:', u_tu_es: 'You are:', u_voix_oui: 'Bip speaks: on', u_voix_non: 'Bip speaks: off',
  u_mon_prenom: 'My name', u_ton_prenom: 'Your first name:', u_prenom_ex: 'for example Lena', u_fille: 'girl', u_garcon: 'boy', u_ok: 'OK', u_sans_prenom: 'Delete',
  g_bonjour: 'Hello! I am Bip, the little robot. 🤖', g_bonjour2: 'I help your child during the exercises (in German). Want to know how the app works?', g_ouvrir: 'Read the guide'
});
Object.assign(TEXTES.de, {
  u_compagnon: 'Dein Begleiter:', u_tu_es: 'Du bist:', u_voix_oui: 'Bip spricht: an', u_voix_non: 'Bip spricht: aus',
  u_mon_prenom: 'Mein Name', u_ton_prenom: 'Dein Vorname:', u_prenom_ex: 'zum Beispiel Lena', u_fille: 'Mädchen', u_garcon: 'Junge', u_ok: 'OK', u_sans_prenom: 'Löschen',
  g_bonjour: 'Hallo! Ich bin Bip, der kleine Roboter. 🤖', g_bonjour2: 'Ich helfe beim Üben am Bildschirm. Möchtest du wissen, wie die App funktioniert?', g_ouvrir: 'Anleitung lesen'
});
