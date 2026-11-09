// Bouton « Installer l'appli » : propose l'installation (PWA) et explique les étapes selon l'appareil.
let invitationInstall = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); invitationInstall = e; });
window.addEventListener('appinstalled', () => { invitationInstall = null; dessinerEntete(); });

const dejaInstallee = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;

function appareil() {
  const ua = navigator.userAgent;
  const ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  if (ios) return /CriOS|FxiOS|EdgiOS|Brave/.test(ua) ? 'ios-autre' : 'ios';
  if (/Android/.test(ua)) return 'android';
  if (/Macintosh/.test(ua)) return /Safari/.test(ua) && !/Chrome|Chromium/.test(ua) ? 'mac-safari' : 'mac';
  return 'pc';
}

const ETAPES = {
  fr: {
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
    <h2>${T.titre}</h2><ol class="etapes-install">${T[appareil()].map(e => `<li>${e}</li>`).join('')}</ol><p>${T.fin}</p></div>`;
  m.hidden = false;
  m.querySelector('.fermer').onclick = () => { m.hidden = true; };
  m.onclick = e => { if (e.target === m) m.hidden = true; };
}

async function installer() {
  if (invitationInstall) {
    invitationInstall.prompt();
    try { await invitationInstall.userChoice; } catch (e) {}
    invitationInstall = null;
  } else aideInstallation();
}

// Ajoute le bouton dans l'en-tête (à chaque dessin de l'en-tête, par exemple après un changement de langue).
const dessinerEnteteSansInstall = dessinerEntete;
dessinerEntete = function () {
  dessinerEnteteSansInstall();
  if (dejaInstallee()) return;
  const T = ETAPES[etat.langue] || ETAPES.fr;
  const b = document.createElement('button');
  b.id = 'btn-installer'; b.className = 'btn-installer'; b.type = 'button'; b.textContent = T.bouton;
  b.onclick = installer;
  const langues = document.querySelector('#nav .langues');
  langues.parentNode.insertBefore(b, langues);
};
dessinerEntete();
