// Textes de l'interface en 3 langues. Les fiches elles-mêmes restent en allemand.
const TEXTES = {
  fr: {
    accueil: 'Accueil', parents: 'Aide parents', provisoire: 'nom provisoire',
    hero_t: 'Des fiches d\'exercices originales à imprimer',
    hero_p: 'Mathe et Deutsch pour la Grundschule (Klasse 1 à 4), selon le programme du Bade-Wurtemberg. Chaque fiche est nouvelle. Avec les solutions et une aide pour les parents.',
    bientot: 'bientôt',
    atouts: [['🖨️ Imprimer','Une fiche A4 en un clic, ou en PDF.'],['✅ Solutions','Une page de correction pour chaque fiche.'],
      ['👪 Aide parent','La méthode expliquée en français, anglais ou allemand.'],['🔊 Écouter','La consigne lue en allemand.'],['📱 Hors ligne','Installable sur téléphone et ordinateur.']],
    choisir: 'Choisis un thème. La fiche est créée tout de suite.',
    nouvelle: '🔄 Nouvelle fiche', voir_sol: '✅ Voir les solutions', voir_fiche: '📝 Voir la fiche', ecouter: '🔊 Écouter la consigne',
    impr_aussi: 'Imprimer aussi', impr_sol: 'la page solutions', impr_aide: 'l\'aide parent', imprimer: '🖨️ Imprimer / PDF',
    onglet_aide: 'Aide', aide_titre: 'Aide pour les parents', aide_intro: 'Vous ne parlez pas bien allemand ? Ce n\'est pas grave. Chaque thème est expliqué ici.',
    apprend: 'Ce que l\'enfant apprend :', aider: 'Comment aider :', erreur: 'Erreur fréquente :', col_de: 'Allemand', col_tr: 'Français',
    niveau: 'Niveau', niv: ['1 – découverte','2 – entraînement','3 – défi'], nombre: 'Nombre d\'exercices',
    reihen: 'Tables (Reihen)', geteilt: 'Avec divisions (geteilt)', zahlenraum: 'Nombres (Zahlenraum)', operation: 'Calcul (Rechenart)', uebergang: 'Passage de la dizaine',
    pied: 'Fiches originales · Bildungsplan 2016 Baden-Württemberg · Klasse 1–4 · version d\'essai',
    pas_impr: 'Pour imprimer : ouvre le fichier HTML sur ton ordinateur.', uebung: 'Exercice (Übung)'
  },
  en: {
    accueil: 'Home', parents: 'Help for parents', provisoire: 'working name',
    hero_t: 'Original worksheets to print',
    hero_p: 'Maths and German for German primary school (Grundschule, years 1 to 4), following the Baden-Württemberg curriculum. Every sheet is new. With answers and help for parents.',
    bientot: 'coming soon',
    atouts: [['🖨️ Print','An A4 sheet in one click, or as a PDF.'],['✅ Answers','An answer page for every sheet.'],
      ['👪 Parent help','The method explained in English, French or German.'],['🔊 Listen','The task is read aloud in German.'],['📱 Offline','Install it on your phone or computer.']],
    choisir: 'Choose a topic. The sheet is made right away.',
    nouvelle: '🔄 New sheet', voir_sol: '✅ Show answers', voir_fiche: '📝 Show sheet', ecouter: '🔊 Listen to the task',
    impr_aussi: 'Also print', impr_sol: 'the answer page', impr_aide: 'the parent help', imprimer: '🖨️ Print / PDF',
    onglet_aide: 'Help', aide_titre: 'Help for parents', aide_intro: 'Your German is not perfect? No problem. Every topic is explained here.',
    apprend: 'What your child learns:', aider: 'How to help:', erreur: 'Common mistake:', col_de: 'German', col_tr: 'English',
    niveau: 'Level', niv: ['1 – first steps','2 – practice','3 – challenge'], nombre: 'Number of tasks',
    reihen: 'Times tables (Reihen)', geteilt: 'With division (geteilt)', zahlenraum: 'Numbers (Zahlenraum)', operation: 'Operation (Rechenart)', uebergang: 'Crossing ten',
    pied: 'Original worksheets · Bildungsplan 2016 Baden-Württemberg · Klasse 1–4 · test version',
    pas_impr: 'To print: open the HTML file on your computer.', uebung: 'Exercise (Übung)'
  },
  de: {
    accueil: 'Start', parents: 'Hilfe für Eltern', provisoire: 'Arbeitstitel',
    hero_t: 'Neue Arbeitsblätter zum Ausdrucken',
    hero_p: 'Mathe und Deutsch für die Grundschule (Klasse 1 bis 4), nach dem Bildungsplan Baden-Württemberg. Jedes Blatt ist neu. Mit Lösungen und Hilfe für Eltern.',
    bientot: 'bald',
    atouts: [['🖨️ Drucken','Ein A4-Blatt mit einem Klick, auch als PDF.'],['✅ Lösungen','Zu jedem Blatt ein Lösungsblatt.'],
      ['👪 Elternhilfe','Die Methode erklärt auf Deutsch, Französisch oder Englisch.'],['🔊 Anhören','Die Aufgabe wird vorgelesen.'],['📱 Offline','Auf Handy und Computer installierbar.']],
    choisir: 'Wähle ein Thema. Das Blatt wird sofort erstellt.',
    nouvelle: '🔄 Neues Blatt', voir_sol: '✅ Lösungen zeigen', voir_fiche: '📝 Blatt zeigen', ecouter: '🔊 Aufgabe anhören',
    impr_aussi: 'Auch drucken', impr_sol: 'das Lösungsblatt', impr_aide: 'die Elternhilfe', imprimer: '🖨️ Drucken / PDF',
    onglet_aide: 'Hilfe', aide_titre: 'Hilfe für Eltern', aide_intro: 'Hier wird jedes Thema einfach erklärt.',
    apprend: 'Das lernt Ihr Kind:', aider: 'So helfen Sie:', erreur: 'Häufiger Fehler:', col_de: 'Wort', col_tr: 'Erklärung',
    niveau: 'Niveau', niv: ['1 – Einstieg','2 – Übung','3 – Knobeln'], nombre: 'Anzahl Aufgaben',
    reihen: 'Malreihen', geteilt: 'Mit Geteiltaufgaben', zahlenraum: 'Zahlenraum', operation: 'Rechenart', uebergang: 'Zehnerübergang',
    pied: 'Eigene Arbeitsblätter · Bildungsplan 2016 Baden-Württemberg · Klasse 1–4 · Testversion',
    pas_impr: 'Zum Drucken: die HTML-Datei auf dem Computer öffnen.', uebung: 'Übung'
  }
};
