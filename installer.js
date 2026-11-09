// Bouton « Installer l'appli » : propose l'installation (PWA) et explique les étapes selon l'appareil.
let invitationInstall = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); invitationInstall = e; });
window.addEventListener('appinstalled', () => { invitationInstall = null; dessinerEntete(); });

const dejaInstallee = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;

function appareil() {
  const ua = navigator.userAgent;
  const ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  if (ios) return /CriOS|FxiOS|EdgiOS|Brave/.test(ua) ? 'ios-autre' : 'ios';
  if (/Android/.test(ua)) return /SamsungBrowser|Firefox|OPR|EdgA|UCBrowser|MiuiBrowser|YaBrowser|; wv\)/.test(ua) ? 'android-autre' : 'android';
  if (/Macintosh/.test(ua)) return /Safari/.test(ua) && !/Chrome|Chromium/.test(ua) ? 'mac-safari' : (navigator.brave ? 'mac-brave' : 'mac');
  return 'pc';
}

const ETAPES = {
  fr: {
    installee: '✓ Application installée', deja: 'L\'appli est déjà installée sur cet appareil. Tu peux l\'ouvrir depuis l\'icône Baobab Blätter.',
    chrome: 'Ouvrir dans Chrome',
    'android-autre': ['Sur ce navigateur, Android peut bloquer l\'installation (Google Play Protect).', 'Touche le bouton <b>« Ouvrir dans Chrome »</b> ci-dessous.', 'Dans Chrome : <b>⋮</b> en haut à droite → <b>« Installer l\'application »</b> → <b>« Installer »</b>.'],
    'mac-brave': ['Dans Brave, clique sur le menu <b>☰</b> en haut à droite.', 'Clique sur <b>« Enregistrer et partager »</b> → <b>« Installer la page en tant qu\'application… »</b> → <b>« Installer »</b>.', 'Si cette ligne n\'existe pas : clique sur le <b>lion 🦁</b> à droite de l\'adresse, baisse les protections pour ce site, recharge la page et recommence.', 'Autre solution : <b>☰</b> → <b>« Plus d\'outils »</b> → <b>« Créer un raccourci… »</b>, coche <b>« Ouvrir dans une fenêtre »</b> → <b>« Créer »</b>.'],
    bouton: '📲 Installer l\'appli', titre: 'Installer Baobab Blätter comme une appli',
    fin: 'Ensuite, l\'icône Baobab Blätter est avec tes autres applis. L\'appli marche aussi sans internet.',
    ios: ['Ouvre ce site dans <b>Safari</b>.', 'Touche le bouton <b>Partager</b> (carré avec une flèche vers le haut).', 'Touche <b>« Sur l\'écran d\'accueil »</b>.', 'Touche <b>« Ajouter »</b>.'],
    'ios-autre': ['Copie le lien de ce site.', 'Ouvre-le dans <b>Safari</b> (sur iPhone, l\'installation marche seulement avec Safari).', 'Touche <b>Partager</b> → <b>« Sur l\'écran d\'accueil »</b> → <b>« Ajouter »</b>.'],
    android: ['Ouvre ce site dans <b>Chrome</b>.', 'Touche les <b>trois points ⋮</b> en haut à droite.', 'Touche <b>« Installer l\'application »</b> (ou « Ajouter à l\'écran d\'accueil »).', 'Confirme avec <b>« Installer »</b>.'],
    mac: ['Clique sur le menu <b>☰</b> (ou <b>⋮</b>) en haut à droite du navigateur.', 'Clique sur <b>« Enregistrer et partager »</b> → <b>« Installer la page en tant qu\'application… »</b>.', 'Si cette ligne n\'existe pas : <b>« Plus d\'outils »</b> → <b>« Créer un raccourci… »</b>, coche <b>« Ouvrir dans une fenêtre »</b>.', 'Clique sur <b>« Installer »</b> (ou « Créer »).'],
    'mac-safari': ['Dans Safari, clique sur le menu <b>Fichier</b>.', 'Clique sur <b>« Ajouter au Dock… »</b>.', 'Clique sur <b>« Ajouter »</b>.'],
    pc: ['Clique sur le menu <b>⋮</b> en haut à droite du navigateur (Chrome, Edge ou Brave).', 'Clique sur <b>« Installer Baobab Blätter »</b> (ou « Enregistrer et partager » → « Installer la page en tant qu\'application… »).', 'Clique sur <b>« Installer »</b>.']
  },
  en: {
    installee: '✓ App installed', deja: 'The app is already installed on this device. Open it from the Baobab Blätter icon.',
    chrome: 'Open in Chrome',
    'android-autre': ['On this browser, Android may block the installation (Google Play Protect).', 'Tap <b>“Open in Chrome”</b> below.', 'In Chrome: <b>⋮</b> at the top right → <b>“Install app”</b> → <b>“Install”</b>.'],
    'mac-brave': ['In Brave, click the menu <b>☰</b> at the top right.', 'Click <b>“Cast, save and share”</b> → <b>“Install page as app…”</b> → <b>“Install”</b>.', 'If it is missing: click the <b>lion 🦁</b> next to the address, lower the shields for this site, reload and try again.', 'Other way: <b>☰</b> → <b>“More tools”</b> → <b>“Create shortcut…”</b>, tick <b>“Open as window”</b> → <b>“Create”</b>.'],
    bouton: '📲 Install the app', titre: 'Install Baobab Blätter as an app',
    fin: 'Then the Baobab Blätter icon is with your other apps. The app also works offline.',
    ios: ['Open this site in <b>Safari</b>.', 'Tap the <b>Share</b> button (square with an arrow).', 'Tap <b>“Add to Home Screen”</b>.', 'Tap <b>“Add”</b>.'],
    'ios-autre': ['Copy the link of this site.', 'Open it in <b>Safari</b> (on iPhone, installing only works with Safari).', 'Tap <b>Share</b> → <b>“Add to Home Screen”</b> → <b>“Add”</b>.'],
    android: ['Open this site in <b>Chrome</b>.', 'Tap the <b>three dots ⋮</b> at the top right.', 'Tap <b>“Install app”</b> (or “Add to Home screen”).', 'Confirm with <b>“Install”</b>.'],
    mac: ['Click the browser menu <b>☰</b> (or <b>⋮</b>) at the top right.', 'Click <b>“Cast, save and share”</b> → <b>“Install page as app…”</b>.', 'If it is missing: <b>“More tools”</b> → <b>“Create shortcut…”</b>, tick <b>“Open as window”</b>.', 'Click <b>“Install”</b> (or “Create”).'],
    'mac-safari': ['In Safari, click the <b>File</b> menu.', 'Click <b>“Add to Dock…”</b>.', 'Click <b>“Add”</b>.'],
    pc: ['Click the browser menu <b>⋮</b> at the top right (Chrome, Edge or Brave).', 'Click <b>“Install Baobab Blätter”</b>.', 'Click <b>“Install”</b>.']
  },
  de: {
    installee: '✓ App installiert', deja: 'Die App ist auf diesem Gerät schon installiert. Öffne sie über das Baobab-Blätter-Symbol.',
    chrome: 'In Chrome öffnen',
    'android-autre': ['In diesem Browser kann Android die Installation blockieren (Google Play Protect).', 'Tippe unten auf <b>„In Chrome öffnen“</b>.', 'In Chrome: <b>⋮</b> oben rechts → <b>„App installieren“</b> → <b>„Installieren“</b>.'],
    'mac-brave': ['Klicke in Brave oben rechts auf das Menü <b>☰</b>.', 'Klicke auf <b>„Streamen, speichern und teilen“</b> → <b>„Seite als App installieren…“</b> → <b>„Installieren“</b>.', 'Falls es fehlt: Klicke auf den <b>Löwen 🦁</b> neben der Adresse, senke den Schutz für diese Seite, lade neu und versuche es noch einmal.', 'Andere Lösung: <b>☰</b> → <b>„Weitere Tools“</b> → <b>„Verknüpfung erstellen…“</b>, <b>„Als Fenster öffnen“</b> ankreuzen → <b>„Erstellen“</b>.'],
    bouton: '📲 App installieren', titre: 'Baobab Blätter als App installieren',
    fin: 'Danach ist das Baobab-Blätter-Symbol bei deinen anderen Apps. Die App funktioniert auch ohne Internet.',
    ios: ['Öffne diese Seite in <b>Safari</b>.', 'Tippe auf <b>Teilen</b> (Quadrat mit Pfeil nach oben).', 'Tippe auf <b>„Zum Home-Bildschirm“</b>.', 'Tippe auf <b>„Hinzufügen“</b>.'],
    'ios-autre': ['Kopiere den Link dieser Seite.', 'Öffne ihn in <b>Safari</b> (auf dem iPhone geht das Installieren nur mit Safari).', 'Tippe auf <b>Teilen</b> → <b>„Zum Home-Bildschirm“</b> → <b>„Hinzufügen“</b>.'],
    android: ['Öffne diese Seite in <b>Chrome</b>.', 'Tippe oben rechts auf die <b>drei Punkte ⋮</b>.', 'Tippe auf <b>„App installieren“</b> (oder „Zum Startbildschirm hinzufügen“).', 'Bestätige mit <b>„Installieren“</b>.'],
    mac: ['Klicke oben rechts im Browser auf das Menü <b>☰</b> (oder <b>⋮</b>).', 'Klicke auf <b>„Streamen, speichern und teilen“</b> → <b>„Seite als App installieren…“</b>.', 'Falls es fehlt: <b>„Weitere Tools“</b> → <b>„Verknüpfung erstellen…“</b>, <b>„Als Fenster öffnen“</b> ankreuzen.', 'Klicke auf <b>„Installieren“</b> (oder „Erstellen“).'],
    'mac-safari': ['Klicke in Safari auf das Menü <b>Ablage</b>.', 'Klicke auf <b>„Zum Dock hinzufügen…“</b>.', 'Klicke auf <b>„Hinzufügen“</b>.'],
    pc: ['Klicke oben rechts im Browser auf das Menü <b>⋮</b> (Chrome, Edge oder Brave).', 'Klicke auf <b>„Baobab Blätter installieren“</b>.', 'Klicke auf <b>„Installieren“</b>.']
  }
};

function aideInstallation() {
  const T = ETAPES[etat.langue] || ETAPES.fr;
  let m = document.getElementById('modale-install');
  if (!m) { m = document.createElement('div'); m.id = 'modale-install'; m.className = 'modale'; document.body.appendChild(m); }
  m.innerHTML = `<div class="boite boite-install" role="dialog" aria-modal="true"><button class="fermer" aria-label="Fermer">×</button>
    ${dejaInstallee() ? `<h2>${T.installee}</h2><p>${T.deja}</p>` : `<h2>${T.titre}</h2><ol class="etapes-install">${T[appareil()].map(e => `<li>${e}</li>`).join('')}</ol>
    ${appareil() === 'android-autre' ? `<p><a class="btn principal" href="intent://${location.host}${location.pathname}#Intent;scheme=https;package=com.android.chrome;end">${T.chrome}</a></p>` : ''}<p>${T.fin}</p>`}</div>`;
  m.hidden = false;
  m.querySelector('.fermer').onclick = () => { m.hidden = true; };
  m.onclick = e => { if (e.target === m) m.hidden = true; };
}

async function installer() {
  if (invitationInstall && !dejaInstallee() && appareil() !== 'android-autre') {
    invitationInstall.prompt();
    try { await invitationInstall.userChoice; } catch (e) {}
    invitationInstall = null;
  } else aideInstallation();
}

// Ajoute le bouton dans l'en-tête (à chaque dessin de l'en-tête, par exemple après un changement de langue).
const dessinerEnteteSansInstall = dessinerEntete;
dessinerEntete = function () {
  dessinerEnteteSansInstall();
  const T = ETAPES[etat.langue] || ETAPES.fr, fait = dejaInstallee();
  const b = document.createElement('button');
  b.id = 'btn-installer'; b.className = 'btn-installer' + (fait ? ' installee' : ''); b.type = 'button'; b.textContent = fait ? T.installee : T.bouton;
  b.onclick = installer;
  const langues = document.querySelector('#nav .langues');
  langues.parentNode.insertBefore(b, langues);
};
dessinerEntete();
