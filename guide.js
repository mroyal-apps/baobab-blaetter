// Baobab Blätter – v0.11 : guide « Comment utiliser l'appli » (repris de Baobab Primaire v0.6, demande de Cedric, 10/11/2026)
// Page #/guide (onglet « Aide ») : les fonctions clés en phrases courtes, étape par étape, en FR / EN / DE. Bip présente le guide.

const GUIDE = {
  fr: [
    ['🏫', 'Choisir la Klasse', [
      'Sur la page d\'accueil, touche la Klasse de ton enfant : 1, 2, 3 ou 4.',
      'Tu vois les exercices de Mathe et de Deutsch, selon le programme du Bade-Wurtemberg, puis les thèmes de l\'année (Herbst, Weihnachten…).']],
    ['🖨️', 'Imprimer des fiches', [
      'En haut de la page Klasse, choisis « 🖨️ Fiches à imprimer ».',
      'Touche un exercice. Tu peux changer les réglages (par exemple jusqu\'à quel nombre).',
      'Touche « 🖨️ Imprimer / PDF ». Tu peux imprimer aussi la page des solutions et l\'aide pour les parents.']],
    ['🎮', 'S\'entraîner à l\'écran', [
      'En haut de la page Klasse, choisis « 🎮 S\'entraîner à l\'écran », puis un exercice.',
      'L\'enfant écrit la réponse dans la case, ou touche la bonne réponse.',
      'Vert = c\'est juste ✅. Rouge = essaie encore. Après 3 essais, la solution s\'affiche.',
      'Une réponse juste du premier coup donne une étoile ⭐. Les étoiles restent sur l\'appareil.']],
    ['🤖', 'Bip, le robot', [
      'Bip accompagne l\'enfant pendant les exercices à l\'écran. Il parle allemand, comme à l\'école.',
      'Quand c\'est juste, il félicite. Quand c\'est faux, il encourage. À la fin, il fait la fête.',
      'Touche « 🤖🔊 Bip parle » pour que Bip parle à voix haute. Touche encore pour l\'arrêter.',
      'L\'enfant préfère Amara ou Noah ? Touche « ✏️ Mon prénom » et choisis le compagnon.']],
    ['✏️', 'Mon prénom', [
      'Sous le compagnon, touche « ✏️ Mon prénom ».',
      'Écris le prénom, choisis fille ou garçon, choisis le compagnon, puis touche OK.',
      'Bip dira « Hallo Lena! » et « Super, Lena! ». « Effacer » enlève le prénom.']],
    ['🔊', 'Écouter', [
      'Touche « 🔊 Écouter » : l\'appli lit la consigne en allemand. Pour une dictée, elle lit le texte lentement.']],
    ['🔄', 'Toujours de nouveaux exercices', [
      'Touche « 🔄 Nouveaux exercices » ou « 🔄 Nouvelle fiche » : l\'appli crée d\'autres exercices. Il n\'y a pas de limite.']],
    ['👪', 'Pour les parents', [
      'En bas de chaque exercice : « 👪 Aide pour les parents » explique en français ce que l\'enfant apprend et comment l\'aider.',
      'Toutes les explications : <a href="#/parents">👪 Aide pour les parents</a>.']],
    ['🌍', 'La langue', [
      'En haut, touche DE, FR ou EN pour changer la langue des boutons et de l\'aide. Les exercices restent en allemand.']],
    ['📲', 'Installer l\'appli', [
      'Touche « 📲 Installer l\'appli ». L\'appli s\'installe tout de suite, ou tu vois les gestes pour ton appareil (iPhone, Android, Mac, PC).',
      'L\'icône Baobab Blätter apparaît sur l\'écran, comme une vraie appli.']],
    ['📴', 'Sans internet', [
      'Après la première ouverture, l\'appli marche aussi sans internet.']],
    ['✨', 'Mises à jour', [
      'Quand une nouvelle version existe, un bandeau s\'affiche. Touche « Mettre à jour ». Le numéro de version est écrit en haut et en bas de chaque page.']],
    ['🔒', 'Les données', [
      'Pas de compte, pas de mot de passe. Le prénom, les étoiles et les réglages restent seulement sur cet appareil.']]
  ],
  en: [
    ['🏫', 'Choose the Klasse', [
      'On the home page, tap your child\'s Klasse: 1, 2, 3 or 4.',
      'You see the Mathe and Deutsch exercises (Baden-Württemberg curriculum), then the topics of the year (Herbst, Weihnachten…).']],
    ['🖨️', 'Print worksheets', [
      'At the top of the Klasse page, choose “🖨️ Printable sheets”.',
      'Tap an exercise. You can change the settings (for example the number range).',
      'Tap “🖨️ Print / PDF”. You can also print the answer page and the parent help.']],
    ['🎮', 'Practise on screen', [
      'At the top of the Klasse page, choose “🎮 Practise on screen”, then an exercise.',
      'Your child types the answer in the box, or taps the right answer.',
      'Green = correct ✅. Red = try again. After 3 tries, the answer is shown.',
      'A correct answer on the first try gives a star ⭐. Stars stay on the device.']],
    ['🤖', 'Bip, the robot', [
      'Bip keeps your child company during the on-screen exercises. Bip speaks German, like at school.',
      'When it is correct, Bip says well done. When it is wrong, Bip encourages. At the end, Bip celebrates.',
      'Tap “🤖🔊 Bip speaks” so Bip talks out loud. Tap again to stop.',
      'Your child prefers Amara or Noah? Tap “✏️ My name” and choose the companion.']],
    ['✏️', 'My name', [
      'Under the companion, tap “✏️ My name”.',
      'Type the first name, choose girl or boy, choose the companion, then tap OK.',
      'Bip will say “Hallo Lena!” and “Super, Lena!”. “Delete” removes the name.']],
    ['🔊', 'Listen', [
      'Tap “🔊 Listen”: the app reads the task in German. For a dictation, it reads the text slowly.']],
    ['🔄', 'Always new exercises', [
      'Tap “🔄 New exercises” or “🔄 New sheet”: the app creates other exercises. There is no limit.']],
    ['👪', 'For parents', [
      'Under each exercise: “👪 Help for parents” explains what your child learns and how to help.',
      'All explanations: <a href="#/parents">👪 Help for parents</a>.']],
    ['🌍', 'Language', [
      'At the top, tap DE, FR or EN to change the language of the buttons and help. The exercises stay in German.']],
    ['📲', 'Install the app', [
      'Tap “📲 Install the app”. It installs right away, or shows the steps for your device (iPhone, Android, Mac, PC).',
      'The Baobab Blätter icon appears on the screen, like a real app.']],
    ['📴', 'Offline', [
      'After the first visit, the app also works without internet.']],
    ['✨', 'Updates', [
      'When a new version exists, a banner appears. Tap “Update”. The version number is shown at the top and bottom of every page.']],
    ['🔒', 'Your data', [
      'No account, no password. The name, stars and settings stay only on this device.']]
  ],
  de: [
    ['🏫', 'Klasse wählen', [
      'Tippe auf der Startseite auf die Klasse deines Kindes: 1, 2, 3 oder 4.',
      'Du siehst die Aufgaben für Mathe und Deutsch (Bildungsplan Baden-Württemberg) und die Themen im Jahreskreis.']],
    ['🖨️', 'Arbeitsblätter drucken', [
      'Wähle oben auf der Klassen-Seite „🖨️ Arbeitsblätter drucken“.',
      'Tippe auf eine Aufgabe. Du kannst die Einstellungen ändern (zum Beispiel den Zahlenraum).',
      'Tippe auf „🖨️ Drucken / PDF“. Du kannst auch das Lösungsblatt und die Elternhilfe drucken.']],
    ['🎮', 'Am Bildschirm üben', [
      'Wähle oben auf der Klassen-Seite „🎮 Am Bildschirm üben“ und dann eine Aufgabe.',
      'Das Kind schreibt die Antwort in das Feld oder tippt auf die richtige Antwort.',
      'Grün = richtig ✅. Rot = noch einmal versuchen. Nach 3 Versuchen erscheint die Lösung.',
      'Für eine richtige Antwort beim ersten Versuch gibt es einen Stern ⭐. Die Sterne bleiben auf dem Gerät.']],
    ['🤖', 'Bip, der Roboter', [
      'Bip begleitet das Kind beim Üben am Bildschirm.',
      'Ist es richtig, lobt Bip. Ist es falsch, macht Bip Mut. Am Ende feiert Bip mit.',
      'Tippe auf „🤖🔊 Bip spricht“, dann spricht Bip laut. Noch einmal tippen zum Ausschalten.',
      'Lieber Amara oder Noah? Tippe auf „✏️ Mein Name“ und wähle den Begleiter.']],
    ['✏️', 'Mein Name', [
      'Tippe unter dem Begleiter auf „✏️ Mein Name“.',
      'Schreibe den Vornamen, wähle Mädchen oder Junge, wähle den Begleiter und tippe auf OK.',
      'Bip sagt dann „Hallo Lena!“ und „Super, Lena!“. „Löschen“ entfernt den Namen.']],
    ['🔊', 'Anhören', [
      'Tippe auf „🔊 Anhören“: Die App liest die Aufgabe vor. Bei einem Diktat liest sie den Text langsam.']],
    ['🔄', 'Immer neue Aufgaben', [
      'Tippe auf „🔄 Neue Aufgaben“ oder „🔄 Neues Blatt“: Die App macht andere Aufgaben. Es gibt keine Grenze.']],
    ['👪', 'Für Eltern', [
      'Unter jeder Aufgabe erklärt „👪 Hilfe für Eltern“, was das Kind lernt und wie man hilft.',
      'Alle Erklärungen: <a href="#/parents">👪 Hilfe für Eltern</a>.']],
    ['🌍', 'Sprache', [
      'Tippe oben auf DE, FR oder EN, um die Sprache der Knöpfe und der Hilfe zu ändern. Die Aufgaben bleiben auf Deutsch.']],
    ['📲', 'App installieren', [
      'Tippe auf „📲 App installieren“. Die App wird sofort installiert, oder du siehst die Schritte für dein Gerät (iPhone, Android, Mac, PC).',
      'Das Symbol von Baobab Blätter erscheint auf dem Bildschirm wie eine echte App.']],
    ['📴', 'Ohne Internet', [
      'Nach dem ersten Öffnen funktioniert die App auch ohne Internet.']],
    ['✨', 'Updates', [
      'Gibt es eine neue Version, erscheint ein Hinweis. Tippe auf „Aktualisieren“. Die Versionsnummer steht oben und unten auf jeder Seite.']],
    ['🔒', 'Deine Daten', [
      'Kein Konto, kein Passwort. Name, Sterne und Einstellungen bleiben nur auf diesem Gerät.']]
  ]
};

function pageGuide() {
  const g = GUIDE[etat.langue] || GUIDE.fr;
  $app.innerHTML = `<section class="page page-guide">
    <div class="barre-retour"><a href="#/" class="retour">← ${t('accueil')}</a></div>
    <h1>📖 ${t('g_titre')}</h1>
    <div class="ueben-tete guide-tete"><div class="perso">${robotSVG('content')}</div><div class="bulle">${t('g_bip')}</div></div>
    <p><a class="btn" href="#/parents">👪 ${t('aide_titre')}</a></p>
    <nav class="guide-sommaire">${g.map(([ic, ti], i) => `<a href="#/guide" data-g="${i}">${ic} ${ti}</a>`).join('')}</nav>
    ${g.map(([ic, ti, l], i) => `<section class="guide-carte" id="g-${i}"><h2><span class="guide-ic">${ic}</span> ${ti}</h2>
      ${l.length > 1 ? `<ol>${l.map(x => `<li>${x}</li>`).join('')}</ol>` : `<p>${l[0]}</p>`}</section>`).join('')}
    <p class="guide-fin version-aide">Version ${VERSION_APP.num} · ${VERSION_APP.date}</p>
    <p class="guide-fin"><a class="btn principal" href="#/">🚀 ${t('g_commencer')}</a></p>
  </section>`;
  document.querySelectorAll('.guide-sommaire a').forEach(a => a.onclick = e => { e.preventDefault(); document.getElementById('g-' + a.dataset.g).scrollIntoView({ behavior: 'smooth', block: 'start' }); });
}

Object.assign(TEXTES.fr, {
  g_menu: 'Guide', g_titre: 'Comment utiliser l\'appli', g_commencer: 'C\'est parti !',
  g_bip: 'Bonjour ! Je suis Bip. 🤖 Ici, je t\'explique tout. Touche un titre pour aller directement à la bonne partie.'
});
Object.assign(TEXTES.en, {
  g_menu: 'Guide', g_titre: 'How to use the app', g_commencer: 'Let\'s go!',
  g_bip: 'Hello! I am Bip. 🤖 Here I explain everything. Tap a title to jump to that part.'
});
Object.assign(TEXTES.de, {
  g_menu: 'Anleitung', g_titre: 'So benutzt du die App', g_commencer: 'Los geht\'s!',
  g_bip: 'Hallo! Ich bin Bip. 🤖 Hier erkläre ich alles. Tippe auf einen Titel, um direkt dorthin zu springen.'
});
