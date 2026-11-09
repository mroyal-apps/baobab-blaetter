// Aide pour les parents, en 3 langues : fr (français), en (anglais), de (allemand simple).
// Les fiches restent en allemand (langue de l'école).
const AIDE = {
  plusminus: {
    fr: { titre: 'Plus et moins jusqu\'à 100',
      apprend: 'Votre enfant calcule des additions (plus) et des soustractions (minus) jusqu\'à 100.',
      aider: ['Faites d\'abord les dizaines, puis les unités : 34 + 25 → 30 + 20 = 50, puis 4 + 5 = 9, donc 59.',
        'Quand on « passe la dizaine » (ex. 38 + 5), on complète d\'abord jusqu\'à 40 : 38 + 2 = 40, puis 40 + 3 = 43.',
        'Laissez l\'enfant dire le calcul à voix haute en allemand.'],
      erreur: 'L\'enfant mélange les dizaines et les unités (34 + 25 = 84).',
      mots: [['plus','plus'],['minus','moins'],['gleich','égal'],['der Zehner','la dizaine'],['der Einer','l\'unité']] },
    en: { titre: 'Plus and minus up to 100',
      apprend: 'Your child adds (plus) and subtracts (minus) numbers up to 100.',
      aider: ['Do the tens first, then the ones: 34 + 25 → 30 + 20 = 50, then 4 + 5 = 9, so 59.',
        'When you "cross ten" (e.g. 38 + 5), first fill up to 40: 38 + 2 = 40, then 40 + 3 = 43.',
        'Let your child say the sum out loud in German.'],
      erreur: 'The child mixes up tens and ones (34 + 25 = 84).',
      mots: [['plus','plus'],['minus','minus'],['gleich','equals'],['der Zehner','the ten'],['der Einer','the one']] },
    de: { titre: 'Plus und Minus bis 100',
      apprend: 'Ihr Kind rechnet Plus- und Minusaufgaben bis 100.',
      aider: ['Erst die Zehner, dann die Einer: 34 + 25 → 30 + 20 = 50, dann 4 + 5 = 9, also 59.',
        'Beim Zehnerübergang (z. B. 38 + 5) zuerst bis 40 ergänzen: 38 + 2 = 40, dann 40 + 3 = 43.',
        'Lassen Sie Ihr Kind die Aufgabe laut sagen.'],
      erreur: 'Das Kind mischt Zehner und Einer (34 + 25 = 84).',
      mots: [['plus','addieren'],['minus','subtrahieren'],['der Zehner','10, 20, 30 …'],['der Einer','1, 2, 3 …']] }
  },
  einmaleins: {
    fr: { titre: 'Les tables de multiplication (das Einmaleins)',
      apprend: 'Votre enfant apprend les tables de multiplication de 1 à 10.',
      aider: ['Montrez que 3 · 4, c\'est 4 + 4 + 4 (trois fois quatre).',
        'Commencez par les tables faciles : 2, 5 et 10. Puis 4 (le double de 2).',
        'Récitez une table par jour, 5 minutes, par exemple en marchant.'],
      erreur: 'L\'enfant additionne au lieu de multiplier (3 · 4 = 7).',
      mots: [['mal','fois'],['geteilt durch','divisé par'],['die Reihe','la table'],['das Ergebnis','le résultat']] },
    en: { titre: 'Times tables (das Einmaleins)',
      apprend: 'Your child learns the times tables from 1 to 10.',
      aider: ['Show that 3 · 4 means 4 + 4 + 4 (three times four).',
        'Start with the easy tables: 2, 5 and 10. Then 4 (double of 2).',
        'Practise one table a day for 5 minutes, for example while walking.'],
      erreur: 'The child adds instead of multiplying (3 · 4 = 7).',
      mots: [['mal','times'],['geteilt durch','divided by'],['die Reihe','the table'],['das Ergebnis','the result']] },
    de: { titre: 'Das Einmaleins',
      apprend: 'Ihr Kind lernt die Malreihen von 1 bis 10.',
      aider: ['Zeigen Sie: 3 · 4 ist 4 + 4 + 4.',
        'Beginnen Sie mit den leichten Reihen: 2, 5 und 10. Dann die 4 (das Doppelte der 2).',
        'Üben Sie jeden Tag eine Reihe, 5 Minuten, zum Beispiel beim Spazierengehen.'],
      erreur: 'Das Kind rechnet plus statt mal (3 · 4 = 7).',
      mots: [['mal','multiplizieren'],['geteilt durch','dividieren'],['die Reihe','2, 4, 6, 8 …']] }
  },
  zahlenmauer: {
    fr: { titre: 'Les murs de nombres (Zahlenmauern)',
      apprend: 'Votre enfant additionne et réfléchit : chaque brique = la somme des deux briques en dessous.',
      aider: ['Montrez la règle avec la première brique : on additionne les deux briques du dessous.',
        'Si une brique du bas manque, on calcule « à l\'envers » : brique du haut moins l\'autre brique.',
        'Vérifiez ensemble en refaisant l\'addition.'],
      erreur: 'L\'enfant additionne des briques qui ne se touchent pas.',
      mots: [['die Zahlenmauer','le mur de nombres'],['der Stein','la brique'],['addieren','additionner']] },
    en: { titre: 'Number walls (Zahlenmauern)',
      apprend: 'Your child adds and thinks: each brick = the sum of the two bricks below it.',
      aider: ['Show the rule with the first brick: add the two bricks underneath.',
        'If a bottom brick is missing, work backwards: top brick minus the other brick.',
        'Check together by doing the addition again.'],
      erreur: 'The child adds bricks that do not touch.',
      mots: [['die Zahlenmauer','the number wall'],['der Stein','the brick'],['addieren','to add']] },
    de: { titre: 'Zahlenmauern',
      apprend: 'Ihr Kind rechnet und denkt nach: Jeder Stein ist die Summe der zwei Steine darunter.',
      aider: ['Zeigen Sie die Regel am ersten Stein: Die zwei Steine darunter werden addiert.',
        'Fehlt unten ein Stein, rechnet man rückwärts: oberer Stein minus der andere Stein.',
        'Prüfen Sie gemeinsam mit der Plusaufgabe.'],
      erreur: 'Das Kind addiert Steine, die sich nicht berühren.',
      mots: [['der Stein','ein Feld der Mauer'],['addieren','plus rechnen']] }
  },
  uhr: {
    fr: { titre: 'Lire l\'heure (die Uhr)',
      apprend: 'Votre enfant lit l\'heure sur une horloge : heures pleines, demi-heures, quarts d\'heure.',
      aider: ['La petite aiguille montre l\'heure. La grande aiguille montre les minutes.',
        'Grande aiguille en haut (sur le 12) = heure pleine. En bas (sur le 6) = et demie.',
        'Attention : en allemand, « halb drei » veut dire 2 h 30 (la moitié avant trois heures).'],
      erreur: '« halb drei » est compris comme 3 h 30. C\'est 2 h 30.',
      mots: [['die Uhr','l\'horloge / l\'heure'],['halb','demi'],['Viertel nach','et quart'],['Viertel vor','moins le quart']] },
    en: { titre: 'Telling the time (die Uhr)',
      apprend: 'Your child reads a clock: full hours, half hours, quarter hours.',
      aider: ['The short hand shows the hour. The long hand shows the minutes.',
        'Long hand at the top (on 12) = o\'clock. At the bottom (on 6) = half past.',
        'Careful: in German "halb drei" means 2:30 (half way to three), not 3:30.'],
      erreur: '"halb drei" is read as 3:30. It is 2:30.',
      mots: [['die Uhr','the clock / o\'clock'],['halb','half'],['Viertel nach','quarter past'],['Viertel vor','quarter to']] },
    de: { titre: 'Die Uhr lesen',
      apprend: 'Ihr Kind liest die Uhr: volle Stunden, halbe Stunden, Viertelstunden.',
      aider: ['Der kleine Zeiger zeigt die Stunde. Der große Zeiger zeigt die Minuten.',
        'Großer Zeiger oben (auf der 12) = volle Stunde. Unten (auf der 6) = halb.',
        'Üben Sie mit einer echten Uhr zu Hause.'],
      erreur: 'Das Kind verwechselt den kleinen und den großen Zeiger.',
      mots: [['halb drei','2:30 Uhr'],['Viertel nach drei','3:15 Uhr'],['Viertel vor drei','2:45 Uhr']] }
  },
  geld: {
    fr: { titre: 'L\'argent (Euro und Cent)',
      apprend: 'Votre enfant compte des pièces et des billets.',
      aider: ['Utilisez de vraies pièces à la maison.', 'Commencez par le plus gros billet, puis ajoutez les plus petits.', '100 Cent = 1 Euro.'],
      erreur: 'L\'enfant compte le nombre de pièces au lieu de leur valeur.',
      mots: [['der Euro','l\'euro'],['der Cent','le centime'],['die Münze','la pièce'],['der Schein','le billet'],['zusammen','en tout']] },
    en: { titre: 'Money (Euro und Cent)',
      apprend: 'Your child counts coins and notes.',
      aider: ['Use real coins at home.', 'Start with the biggest note, then add the smaller ones.', '100 cents = 1 euro.'],
      erreur: 'The child counts how many coins there are, not what they are worth.',
      mots: [['der Euro','the euro'],['der Cent','the cent'],['die Münze','the coin'],['der Schein','the note'],['zusammen','in total']] },
    de: { titre: 'Rechnen mit Geld',
      apprend: 'Ihr Kind zählt Münzen und Scheine.',
      aider: ['Üben Sie mit echtem Geld zu Hause.', 'Erst den größten Schein zählen, dann die kleineren dazu.', '100 Cent sind 1 Euro.'],
      erreur: 'Das Kind zählt die Anzahl der Münzen statt ihren Wert.',
      mots: [['die Münze','Geldstück'],['der Schein','Papiergeld']] }
  },
  sachaufgaben: {
    fr: { titre: 'Petits problèmes (Rechengeschichten)',
      apprend: 'Votre enfant lit une petite histoire et trouve le bon calcul.',
      aider: ['Lisez l\'histoire ensemble, deux fois. Le bouton « Écouter » la lit en allemand.',
        'Demandez : « Qu\'est-ce qu\'on cherche ? » puis « Est-ce que ça augmente ou diminue ? ».',
        'L\'enfant écrit le calcul, puis une phrase réponse.'],
      erreur: 'L\'enfant prend les nombres sans lire la question.',
      mots: [['die Frage','la question'],['die Rechnung','le calcul'],['die Antwort','la réponse'],['noch','encore / il reste']] },
    en: { titre: 'Word problems (Rechengeschichten)',
      apprend: 'Your child reads a short story and finds the right calculation.',
      aider: ['Read the story together twice. The "Listen" button reads it in German.',
        'Ask: "What are we looking for?" then "Does it get more or less?".',
        'The child writes the calculation, then an answer sentence.'],
      erreur: 'The child uses the numbers without reading the question.',
      mots: [['die Frage','the question'],['die Rechnung','the calculation'],['die Antwort','the answer'],['noch','still / left']] },
    de: { titre: 'Rechengeschichten',
      apprend: 'Ihr Kind liest eine kurze Geschichte und findet die passende Rechnung.',
      aider: ['Lesen Sie die Geschichte zweimal zusammen. Der Knopf „Anhören“ liest sie vor.',
        'Fragen Sie: „Was wollen wir wissen?“ und „Wird es mehr oder weniger?“.',
        'Das Kind schreibt die Rechnung und einen Antwortsatz.'],
      erreur: 'Das Kind nimmt die Zahlen, ohne die Frage zu lesen.',
      mots: [['die Rechnung','die Aufgabe mit Zahlen'],['der Antwortsatz','ein ganzer Satz']] }
  },
  artikel: {
    fr: { titre: 'Les noms et leur article : der, die, das',
      apprend: 'En allemand, chaque nom (Nomen) a un article : der, die ou das. Les noms commencent toujours par une majuscule.',
      aider: ['Apprenez toujours le mot AVEC son article : « der Hund », pas seulement « Hund ».',
        'Astuce couleur : der = bleu, die = rouge, das = vert. Collez des étiquettes à la maison.',
        'Ne traduisez pas depuis le français : « la » table = « der » Tisch.'],
      erreur: 'L\'enfant prend l\'article du français (la chaise → « die » Stuhl, mais c\'est « der » Stuhl).',
      mots: [['der Artikel','l\'article'],['das Nomen','le nom'],['die Einzahl','le singulier'],['die Mehrzahl','le pluriel']] },
    en: { titre: 'Nouns and their article: der, die, das',
      apprend: 'In German, every noun has an article: der, die or das. Nouns always start with a capital letter.',
      aider: ['Always learn the word WITH its article: "der Hund", not just "Hund".',
        'Colour tip: der = blue, die = red, das = green. Put labels on things at home.',
        'English has only "the", so the article must be learned with each word.'],
      erreur: 'The child guesses the article or forgets the capital letter.',
      mots: [['der Artikel','the article'],['das Nomen','the noun'],['die Einzahl','singular'],['die Mehrzahl','plural']] },
    de: { titre: 'Nomen und Artikel: der, die, das',
      apprend: 'Jedes Nomen hat einen Artikel: der, die oder das. Nomen schreibt man groß.',
      aider: ['Lernen Sie jedes Wort mit Artikel: „der Hund“, nicht nur „Hund“.',
        'Farben helfen: der = blau, die = rot, das = grün.',
        'Lassen Sie Ihr Kind Dinge im Haus mit Artikel benennen.'],
      erreur: 'Das Kind rät den Artikel oder schreibt das Nomen klein.',
      mots: [['der Artikel','der, die, das'],['das Nomen','Namenwort']] }
  },
  mehrzahl: {
    fr: { titre: 'Singulier et pluriel (Einzahl und Mehrzahl)',
      apprend: 'Votre enfant écrit le pluriel des noms. Au pluriel, l\'article est toujours « die ».',
      aider: ['Dites : « ein Hund, zwei … ? » et laissez l\'enfant compléter.',
        'Souvent le pluriel prend -e, -en, -er ou -s. Parfois a, o, u deviennent ä, ö, ü.',
        'Certains mots ne changent pas : der Teller → die Teller.'],
      erreur: 'L\'enfant ajoute toujours -s comme en français ou en anglais.',
      mots: [['die Einzahl','le singulier'],['die Mehrzahl','le pluriel'],['eins / viele','un / beaucoup']] },
    en: { titre: 'Singular and plural (Einzahl und Mehrzahl)',
      apprend: 'Your child writes the plural of nouns. In the plural, the article is always "die".',
      aider: ['Say: "ein Hund, zwei … ?" and let your child finish.',
        'The plural often adds -e, -en, -er or -s. Sometimes a, o, u become ä, ö, ü.',
        'Some words do not change: der Teller → die Teller.'],
      erreur: 'The child always adds -s, as in English.',
      mots: [['die Einzahl','singular'],['die Mehrzahl','plural'],['eins / viele','one / many']] },
    de: { titre: 'Einzahl und Mehrzahl',
      apprend: 'Ihr Kind schreibt die Mehrzahl. In der Mehrzahl heißt der Artikel immer „die“.',
      aider: ['Sagen Sie: „ein Hund, zwei …?“ und lassen Sie Ihr Kind ergänzen.',
        'Oft kommt -e, -en, -er oder -s dazu. Manchmal wird a, o, u zu ä, ö, ü.',
        'Manche Wörter bleiben gleich: der Teller → die Teller.'],
      erreur: 'Das Kind hängt immer -s an.',
      mots: [['die Einzahl','eins'],['die Mehrzahl','viele']] }
  }
};

// Thèmes ajoutés en v0.3 (Klassen 1, 3, 4). Format court : [titre, apprend, [aider...], erreur, mots]
const AIDE_COURTE = {
  zerlegen: {
    fr: ['Les maisons de nombres', 'Votre enfant décompose un nombre en deux parties (7 = 3 + 4).', ['Utilisez des cailloux ou des haricots : 7 objets, deux tas.', 'Cherchez toutes les façons possibles, dans l\'ordre (0 + 7, 1 + 6 …).'], 'L\'enfant oublie que 0 + 7 marche aussi.', [['zerlegen','décomposer'],['das Dach','le toit']]],
    en: ['Number houses', 'Your child splits a number into two parts (7 = 3 + 4).', ['Use pebbles or beans: 7 objects, two piles.', 'Find all the ways, in order (0 + 7, 1 + 6 …).'], 'The child forgets that 0 + 7 also works.', [['zerlegen','to split'],['das Dach','the roof']]],
    de: ['Zahlenhäuser', 'Ihr Kind zerlegt eine Zahl in zwei Teile (7 = 3 + 4).', ['Nehmen Sie Steine oder Bohnen: 7 Dinge, zwei Haufen.', 'Suchen Sie alle Möglichkeiten der Reihe nach.'], 'Das Kind vergisst 0 + 7.', [['zerlegen','in zwei Teile teilen']]] },
  vergleichen: {
    fr: ['Plus grand, plus petit', 'Votre enfant compare deux nombres avec <, > ou =.', ['Le signe est une bouche de crocodile : elle s\'ouvre vers le plus grand nombre.', 'Comptez sur les doigts ou avec des objets.'], 'L\'enfant inverse < et >.', [['größer','plus grand'],['kleiner','plus petit'],['gleich','égal']]],
    en: ['Greater, smaller, equal', 'Your child compares two numbers with <, > or =.', ['The sign is a crocodile mouth: it opens towards the bigger number.', 'Count with fingers or objects.'], 'The child mixes up < and >.', [['größer','greater'],['kleiner','smaller'],['gleich','equal']]],
    de: ['Größer, kleiner, gleich', 'Ihr Kind vergleicht zwei Zahlen mit <, > oder =.', ['Das Zeichen ist ein Krokodilmaul: Es frisst die größere Zahl.', 'Zählen Sie mit Fingern oder Dingen.'], 'Das Kind verwechselt < und >.', [['größer als','>'],['kleiner als','<']]] },
  nachbarzahlen: {
    fr: ['Les nombres voisins', 'Votre enfant trouve le nombre juste avant et juste après.', ['Comptez ensemble à voix haute : « … 6, 7, 8 … ».', 'Avant = un de moins. Après = un de plus.'], 'L\'enfant écrit deux de plus ou deux de moins.', [['davor','avant'],['danach','après'],['der Nachbar','le voisin']]],
    en: ['Neighbour numbers', 'Your child finds the number just before and just after.', ['Count out loud together: "… 6, 7, 8 …".', 'Before = one less. After = one more.'], 'The child writes two more or two less.', [['davor','before'],['danach','after'],['der Nachbar','the neighbour']]],
    de: ['Nachbarzahlen', 'Ihr Kind findet die Zahl davor und danach.', ['Zählen Sie zusammen laut.', 'Davor ist eins weniger, danach eins mehr.'], 'Das Kind springt zwei Zahlen weiter.', [['der Vorgänger','die Zahl davor'],['der Nachfolger','die Zahl danach']]] },
  silben: {
    fr: ['Les syllabes', 'Votre enfant découpe les mots en syllabes (Ba-na-ne).', ['Dites le mot lentement et frappez dans les mains à chaque syllabe.', 'Chaque syllabe a en général une voyelle (a, e, i, o, u).'], 'L\'enfant découpe comme en français. En allemand : Kat-ze, Son-ne.', [['die Silbe','la syllabe'],['klatschen','taper des mains']]],
    en: ['Syllables', 'Your child splits words into syllables (Ba-na-ne).', ['Say the word slowly and clap for each syllable.', 'Each syllable usually has a vowel (a, e, i, o, u).'], 'The child splits as in English. In German: Kat-ze, Son-ne.', [['die Silbe','the syllable'],['klatschen','to clap']]],
    de: ['Silben', 'Ihr Kind zerlegt Wörter in Silben (Ba-na-ne).', ['Sprechen Sie das Wort langsam und klatschen Sie jede Silbe.', 'In jeder Silbe steht meist ein Vokal.'], 'Das Kind klatscht zu schnell.', [['die Silbe','ein Teil vom Wort']]] },
  buchstabe: {
    fr: ['La lettre qui manque', 'Votre enfant écoute les sons du mot et trouve la voyelle qui manque.', ['Dites le mot très lentement, en étirant les sons : « Huuund ».', 'Les voyelles allemandes : a, e, i, o, u et ä, ö, ü.'], 'L\'enfant confond e et i, ou u et ü.', [['der Buchstabe','la lettre'],['der Vokal','la voyelle']]],
    en: ['The missing letter', 'Your child listens to the sounds of the word and finds the missing vowel.', ['Say the word very slowly, stretching the sounds: "Huuund".', 'German vowels: a, e, i, o, u and ä, ö, ü.'], 'The child mixes up e and i, or u and ü.', [['der Buchstabe','the letter'],['der Vokal','the vowel']]],
    de: ['Fehlender Buchstabe', 'Ihr Kind hört die Laute im Wort und findet den Vokal.', ['Sprechen Sie das Wort ganz langsam und gedehnt.', 'Vokale: a, e, i, o, u und ä, ö, ü.'], 'Das Kind verwechselt e und i.', [['der Vokal','a, e, i, o, u']]] },
  schriftlich: {
    fr: ['Addition et soustraction en colonnes', 'Votre enfant pose les calculs en colonnes, comme à l\'école allemande.', ['Unités sous les unités, dizaines sous les dizaines. On commence à droite.', 'Pour la soustraction, l\'école allemande « complète » souvent : 7 + ? = 12. Demandez à l\'enfant comment fait son enseignant.'], 'Les chiffres ne sont pas bien alignés.', [['schriftlich','en colonnes'],['der Übertrag','la retenue']]],
    en: ['Column addition and subtraction', 'Your child does written column sums, as in German schools.', ['Ones under ones, tens under tens. Start on the right.', 'For subtraction, German schools often "add up": 7 + ? = 12. Ask your child how the teacher does it.'], 'The digits are not lined up.', [['schriftlich','written (columns)'],['der Übertrag','the carry']]],
    de: ['Schriftlich rechnen', 'Ihr Kind rechnet schriftlich untereinander.', ['Einer unter Einer, Zehner unter Zehner. Man beginnt rechts.', 'Fragen Sie Ihr Kind, wie es in der Schule abzieht (Ergänzen oder Abziehen).'], 'Die Ziffern stehen nicht genau untereinander.', [['der Übertrag','die kleine Zahl, die man merkt']]] },
  malgeteilt: {
    fr: ['Multiplication et division en colonnes', 'Votre enfant multiplie et divise des grands nombres par écrit.', ['Révisez d\'abord les tables : elles sont la base.', 'Écrivez proprement, un chiffre par case.', 'Vérifiez une division avec une multiplication.'], 'L\'enfant oublie la retenue.', [['malnehmen','multiplier'],['teilen','diviser'],['der Rest','le reste']]],
    en: ['Long multiplication and division', 'Your child multiplies and divides big numbers on paper.', ['Revise the times tables first: they are the base.', 'Write neatly, one digit per square.', 'Check a division with a multiplication.'], 'The child forgets the carry.', [['malnehmen','to multiply'],['teilen','to divide'],['der Rest','the remainder']]],
    de: ['Schriftlich malnehmen und teilen', 'Ihr Kind rechnet große Mal- und Geteiltaufgaben schriftlich.', ['Wiederholen Sie zuerst das Einmaleins.', 'Eine Ziffer pro Kästchen.', 'Prüfen Sie Geteiltaufgaben mit einer Malaufgabe.'], 'Das Kind vergisst den Übertrag.', [['der Rest','was übrig bleibt']]] },
  einheiten: {
    fr: ['Les unités (longueurs et poids)', 'Votre enfant convertit des unités : m, cm, mm, km ou kg, g, t.', ['Mesurez de vraies choses à la maison (une table, un sac de riz).', '1 m = 100 cm, 1 km = 1000 m, 1 kg = 1000 g.'], 'L\'enfant multiplie par 10 au lieu de 100.', [['die Länge','la longueur'],['das Gewicht','le poids'],['umrechnen','convertir']]],
    en: ['Units (length and weight)', 'Your child converts units: m, cm, mm, km or kg, g, t.', ['Measure real things at home (a table, a bag of rice).', '1 m = 100 cm, 1 km = 1000 m, 1 kg = 1000 g.'], 'The child multiplies by 10 instead of 100.', [['die Länge','length'],['das Gewicht','weight'],['umrechnen','to convert']]],
    de: ['Größen umrechnen', 'Ihr Kind rechnet Längen oder Gewichte um.', ['Messen und wiegen Sie echte Dinge zu Hause.', '1 m = 100 cm, 1 km = 1000 m, 1 kg = 1000 g.'], 'Das Kind rechnet mal 10 statt mal 100.', [['umrechnen','in eine andere Einheit ändern']]] },
  stellenwert: {
    fr: ['Les grands nombres', 'Votre enfant lit et écrit des nombres jusqu\'à 1 000 000.', ['Faites un tableau : HT ZT T | H Z E.', 'Lisez les nombres par groupes de trois chiffres.'], 'L\'enfant oublie les zéros (305 000).', [['die Stelle','la position'],['der Tausender','le millier']]],
    en: ['Big numbers', 'Your child reads and writes numbers up to 1,000,000.', ['Draw a table: HT ZT T | H Z E.', 'Read numbers in groups of three digits.'], 'The child forgets the zeros (305 000).', [['die Stelle','the place'],['der Tausender','the thousand']]],
    de: ['Zahlen bis 1 000 000', 'Ihr Kind liest und schreibt große Zahlen.', ['Malen Sie eine Stellenwerttafel: HT ZT T | H Z E.', 'Lesen Sie die Zahl in Dreiergruppen.'], 'Das Kind vergisst Nullen.', [['die Stellenwerttafel','Tabelle für die Stellen']]] },
  runden: {
    fr: ['Arrondir', 'Votre enfant arrondit un nombre (à la dizaine, centaine, au millier…).', ['Regardez le chiffre juste à droite : 0 à 4 on garde, 5 à 9 on monte.', 'Exemple : 3 647 arrondi au millier → 4 000.'], 'L\'enfant regarde le mauvais chiffre.', [['runden','arrondir'],['ungefähr','environ']]],
    en: ['Rounding', 'Your child rounds numbers (to tens, hundreds, thousands…).', ['Look at the digit just to the right: 0–4 round down, 5–9 round up.', 'Example: 3,647 to the nearest thousand → 4,000.'], 'The child looks at the wrong digit.', [['runden','to round'],['ungefähr','about']]],
    de: ['Runden', 'Ihr Kind rundet Zahlen.', ['Schauen Sie auf die Ziffer rechts daneben: 0 bis 4 abrunden, 5 bis 9 aufrunden.', 'Beispiel: 3 647 auf Tausender → 4 000.'], 'Das Kind schaut auf die falsche Ziffer.', [['≈','ungefähr']]] },
  praeteritum: {
    fr: ['Le présent et le passé (Präteritum)', 'Votre enfant écrit les verbes au présent et au passé : er geht → er ging.', ['Racontez ensemble ce que vous avez fait hier, en allemand.', 'Beaucoup de verbes prennent -te (spielte). Les autres changent (gehen → ging) : il faut les apprendre.'], 'L\'enfant écrit « gehte » au lieu de « ging ».', [['die Gegenwart','le présent'],['die Vergangenheit','le passé'],['die Grundform','l\'infinitif']]],
    en: ['Present and past (Präteritum)', 'Your child writes verbs in the present and past: er geht → er ging.', ['Talk together about what you did yesterday.', 'Many verbs add -te (spielte). Others change (gehen → ging) and must be learned.'], 'The child writes "gehte" instead of "ging".', [['die Gegenwart','present'],['die Vergangenheit','past'],['die Grundform','infinitive']]],
    de: ['Gegenwart und Vergangenheit', 'Ihr Kind schreibt Verben in der Gegenwart und im Präteritum.', ['Erzählen Sie zusammen, was gestern war.', 'Viele Verben bekommen -te (spielte), andere ändern sich (gehen → ging).'], 'Das Kind schreibt „gehte“ statt „ging“.', [['das Präteritum','die Vergangenheit']]] },
  wortarten: {
    fr: ['Les types de mots', 'Votre enfant trie les mots : nom (Nomen), verbe (Verb), adjectif (Adjektiv).', ['Nomen : on peut mettre der, die ou das devant. Verbe : ce qu\'on fait. Adjectif : comment est quelque chose.', 'Testez : « der … ? », « ich … », « ganz … ».'], 'L\'enfant écrit les noms en minuscule.', [['das Nomen','le nom'],['das Verb','le verbe'],['das Adjektiv','l\'adjectif']]],
    en: ['Word types', 'Your child sorts words: noun (Nomen), verb (Verb), adjective (Adjektiv).', ['Noun: you can put der, die or das in front. Verb: what you do. Adjective: what something is like.', 'Test: "der … ?", "ich …", "ganz …".'], 'The child writes nouns with a small letter.', [['das Nomen','noun'],['das Verb','verb'],['das Adjektiv','adjective']]],
    de: ['Wortarten', 'Ihr Kind sortiert Nomen, Verben und Adjektive.', ['Nomen: der, die, das passt davor. Verb: was man tut. Adjektiv: wie etwas ist.', 'Probe: „der …?“, „ich …“, „ganz …“.'], 'Das Kind schreibt Nomen klein.', [['die Wortart','Art von Wort']]] },
  perfekt: {
    fr: ['Le passé composé (Perfekt)', 'Votre enfant met une phrase au Perfekt : Amara spielt → Amara hat gespielt.', ['Le Perfekt = hat ou ist + participe (souvent ge…t ou ge…en).', '« ist » pour les verbes de déplacement (gehen, fahren, laufen, fliegen).'], 'L\'enfant choisit « hat » avec gehen. C\'est « ist gegangen ».', [['das Perfekt','le passé composé'],['hat / ist','a / est']]],
    en: ['The perfect tense (Perfekt)', 'Your child puts a sentence in the Perfekt: Amara spielt → Amara hat gespielt.', ['Perfekt = hat or ist + past participle (often ge…t or ge…en).', 'Use "ist" for verbs of movement (gehen, fahren, laufen, fliegen).'], 'The child uses "hat" with gehen. It is "ist gegangen".', [['das Perfekt','perfect tense'],['hat / ist','has / is']]],
    de: ['Das Perfekt', 'Ihr Kind setzt Sätze ins Perfekt: Amara spielt → Amara hat gespielt.', ['Perfekt = hat oder ist + Partizip (ge…t oder ge…en).', 'Bei Bewegung meist „ist“: ist gegangen, ist gefahren.'], 'Das Kind sagt „hat gegangen“.', [['das Partizip','gespielt, gegangen']]] },
  dassdas: {
    fr: ['das ou dass ?', 'Votre enfant choisit entre « das » (article ou pronom) et « dass » (conjonction).', ['Si on peut dire « dieses » ou « welches », on écrit « das ».', 'Après des verbes comme wissen, sagen, glauben, hoffen + virgule → souvent « dass ».'], 'L\'enfant écrit toujours « das ».', [['das','le / la / ce'],['dass','que']]],
    en: ['das or dass?', 'Your child chooses between "das" (article or pronoun) and "dass" (that, conjunction).', ['If you can say "dieses" or "welches", write "das".', 'After verbs like wissen, sagen, glauben, hoffen + comma → usually "dass".'], 'The child always writes "das".', [['das','the / that (thing)'],['dass','that (conjunction)']]],
    de: ['das oder dass?', 'Ihr Kind unterscheidet „das“ und „dass“.', ['Passt „dieses“ oder „welches“? Dann „das“.', 'Nach wissen, sagen, glauben, hoffen + Komma meist „dass“.'], 'Das Kind schreibt immer „das“.', [['dass','Bindewort']]] }
};
for (const [id, langues] of Object.entries(AIDE_COURTE)) {
  AIDE[id] = {};
  for (const [l, [titre, apprend, aider, erreur, mots]] of Object.entries(langues)) AIDE[id][l] = { titre, apprend, aider, erreur, mots };
}

// v0.5 : fiches à thèmes, Domino, Spiegeln
Object.assign(AIDE_COURTE, {});
const AIDE_V05 = {
  t_lesen: {
    fr: ['Lire et comprendre un texte', 'Votre enfant lit un petit texte et répond à des questions.', ['Lisez le texte ensemble à voix haute. Le bouton « Écouter » le lit en allemand.', 'Pour chaque question, cherchez la phrase du texte qui donne la réponse et soulignez-la.', 'Pour « richtig oder falsch », relisez la phrase du texte et comparez mot par mot.'], 'L\'enfant répond de mémoire sans revenir au texte.', [['lesen','lire'],['die Frage','la question'],['richtig','juste'],['falsch','faux'],['ankreuzen','cocher']]],
    en: ['Reading and understanding', 'Your child reads a short text and answers questions.', ['Read the text aloud together. The "Listen" button reads it in German.', 'For each question, find the sentence with the answer and underline it.', 'For "richtig oder falsch", reread the sentence and compare word by word.'], 'The child answers from memory without looking back at the text.', [['lesen','to read'],['die Frage','question'],['richtig','true / right'],['falsch','false / wrong'],['ankreuzen','to tick']]],
    de: ['Lesen und verstehen', 'Ihr Kind liest einen kurzen Text und beantwortet Fragen.', ['Lesen Sie den Text gemeinsam laut.', 'Suchen und unterstreichen Sie die Stelle im Text mit der Antwort.', 'Bei „richtig oder falsch“ den Satz im Text genau vergleichen.'], 'Das Kind antwortet aus dem Gedächtnis und schaut nicht in den Text.', [['unterstreichen','eine Linie unter die Wörter ziehen']]] },
  t_luecken: {
    fr: ['Phrases à trous', 'Votre enfant choisit le bon mot pour chaque phrase.', ['Lisez d\'abord tous les mots de la liste.', 'Lisez la phrase avec chaque mot possible : lequel a du sens ?', 'Barrez les mots déjà utilisés.'], 'L\'enfant oublie la majuscule des noms en recopiant.', [['die Lücke','le trou'],['einsetzen','mettre dans']]],
    en: ['Gap sentences', 'Your child chooses the right word for each sentence.', ['First read all the words in the list.', 'Read the sentence with each possible word: which one makes sense?', 'Cross out the words already used.'], 'The child forgets the capital letter of nouns when copying.', [['die Lücke','the gap'],['einsetzen','to fill in']]],
    de: ['Lückensätze', 'Ihr Kind setzt das passende Wort ein.', ['Erst alle Wörter lesen.', 'Den Satz mit verschiedenen Wörtern ausprobieren.', 'Benutzte Wörter durchstreichen.'], 'Das Kind schreibt Nomen klein ab.', [['die Lücke','die freie Stelle']]] },
  t_kuckuck: {
    fr: ['Les mots coucou (un mot de trop)', 'Dans chaque phrase, un mot n\'a rien à faire là. Avec leurs premières lettres, l\'enfant trouve un mot secret.', ['Lisez la phrase lentement : quel mot est bizarre ?', 'Barrez-le et écrivez sa première lettre dans la case.', 'À la fin, lisez le mot secret.'], 'L\'enfant barre un mot qui a du sens.', [['das Lösungswort','le mot secret'],['durchstreichen','barrer']]],
    en: ['Cuckoo words (one word too many)', 'In each sentence one word does not belong. Their first letters make a secret word.', ['Read the sentence slowly: which word is strange?', 'Cross it out and write its first letter in the box.', 'At the end, read the secret word.'], 'The child crosses out a word that makes sense.', [['das Lösungswort','the secret word'],['durchstreichen','to cross out']]],
    de: ['Kuckuckswörter', 'In jedem Satz ist ein Wort zu viel. Die Anfangsbuchstaben ergeben ein Lösungswort.', ['Langsam lesen: Welches Wort passt nicht?', 'Durchstreichen und den ersten Buchstaben ins Kästchen schreiben.'], 'Das Kind streicht ein passendes Wort.', [['das Lösungswort','das geheime Wort']]] },
  t_fehler: {
    fr: ['Le texte avec des fautes', 'Votre enfant cherche les fautes d\'orthographe et recopie le texte correctement.', ['Lisez mot par mot, avec le doigt sous la ligne.', 'Fautes typiques : nom sans majuscule, « ie » écrit « i », lettre double oubliée, « ck » écrit « k », « h » oublié.', 'Comparez avec la page Lösungen à la fin.'], 'L\'enfant recopie aussi les fautes.', [['der Fehler','la faute'],['abschreiben','recopier']]],
    en: ['Spot the mistakes', 'Your child finds the spelling mistakes and copies the text correctly.', ['Read word by word, finger under the line.', 'Typical mistakes: noun without capital, "ie" written "i", missing double letter, "ck" written "k", missing "h".', 'Compare with the answer page at the end.'], 'The child copies the mistakes too.', [['der Fehler','the mistake'],['abschreiben','to copy']]],
    de: ['Fehlertext', 'Ihr Kind findet Rechtschreibfehler und schreibt den Text richtig ab.', ['Wort für Wort lesen, mit dem Finger unter der Zeile.', 'Typische Fehler: Nomen klein, ie, doppelte Mitlaute, ck, Dehnungs-h.'], 'Das Kind schreibt die Fehler mit ab.', [['abschreiben','noch einmal schreiben']]] },
  t_diktat: {
    fr: ['La dictée', 'Votre enfant écrit un texte qu\'il entend.', ['Le texte est sur la page « Lösungen ». Ou appuyez sur « Écouter » : la voix lit lentement.', 'Lisez d\'abord tout le texte. Puis lisez chaque phrase deux fois, lentement.', 'À la fin, l\'enfant relit et corrige avec la page Lösungen.'], 'L\'enfant écrit trop vite et oublie des mots.', [['das Diktat','la dictée'],['zuhören','écouter'],['mitschreiben','écrire en même temps']]],
    en: ['Dictation', 'Your child writes down a text they hear.', ['The text is on the answer page. Or press "Listen": the voice reads slowly.', 'First read the whole text. Then read each sentence twice, slowly.', 'At the end, your child checks with the answer page.'], 'The child writes too fast and skips words.', [['das Diktat','dictation'],['zuhören','to listen'],['mitschreiben','to write down']]],
    de: ['Diktat', 'Ihr Kind schreibt einen vorgelesenen Text auf.', ['Der Text steht auf der Lösungsseite.', 'Erst den ganzen Text lesen, dann jeden Satz zweimal langsam.', 'Zum Schluss vergleicht das Kind mit der Lösung.'], 'Das Kind schreibt zu schnell.', [['mitschreiben','beim Zuhören schreiben']]] },
  domino: {
    fr: ['Le domino des heures', 'Votre enfant associe une horloge et l\'heure écrite en mots.', ['Découpez les cartes. Commencez par START.', 'Lisez l\'horloge de la carte, puis cherchez la carte avec la même heure en mots.', 'Attention : « halb drei » = 2 h 30.'], '« halb » est compris comme l\'heure suivante + 30 minutes.', [['halb','et demie (avant l\'heure suivante)'],['Viertel nach','et quart'],['Viertel vor','moins le quart']]],
    en: ['Clock domino', 'Your child matches a clock with the time written in words.', ['Cut out the cards. Start with START.', 'Read the clock, then find the card with the same time in words.', 'Careful: "halb drei" = 2:30.'], '"halb" is read as the next hour + 30 minutes.', [['halb','half (to the next hour)'],['Viertel nach','quarter past'],['Viertel vor','quarter to']]],
    de: ['Uhrzeiten-Domino', 'Ihr Kind ordnet Uhren und Uhrzeiten in Worten zu.', ['Karten ausschneiden und mit START beginnen.', 'Uhr ablesen und die passende Karte suchen.'], 'Das Kind verwechselt „halb drei“ und „halb vier“.', [['halb drei','2:30 Uhr']]] },
  spiegeln: {
    fr: ['La symétrie (Spiegeln)', 'Votre enfant dessine l\'autre moitié d\'une figure, comme dans un miroir.', ['Comptez les points depuis la ligne rouge : 2 points à gauche → 2 points à droite.', 'Marquez d\'abord les points, puis reliez-les à la règle.', 'Vérifiez avec un petit miroir posé sur la ligne rouge.'], 'L\'enfant recopie la figure au lieu de la retourner.', [['spiegeln','faire la symétrie'],['die Spiegelachse','l\'axe de symétrie']]],
    en: ['Symmetry (Spiegeln)', 'Your child draws the other half of a shape, like in a mirror.', ['Count the dots from the red line: 2 dots left → 2 dots right.', 'Mark the dots first, then join them with a ruler.', 'Check with a small mirror on the red line.'], 'The child copies the shape instead of flipping it.', [['spiegeln','to reflect'],['die Spiegelachse','line of symmetry']]],
    de: ['Spiegeln', 'Ihr Kind zeichnet die zweite Hälfte einer Figur spiegelbildlich.', ['Punkte von der roten Linie aus zählen.', 'Erst Punkte markieren, dann mit dem Lineal verbinden.', 'Mit einem kleinen Spiegel prüfen.'], 'Das Kind verschiebt die Figur statt sie zu spiegeln.', [['die Spiegelachse','die rote Linie']]] }
};
for (const [id, langues] of Object.entries(AIDE_V05)) {
  AIDE[id] = {};
  for (const [l, [titre, apprend, aider, erreur, mots]] of Object.entries(langues)) AIDE[id][l] = { titre, apprend, aider, erreur, mots };
}
