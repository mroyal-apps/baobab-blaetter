// Rechengeschichten adaptées à chaque Klasse (v0.7). Textes originaux.
// Chaque modèle : [op, texte, réponse, nombres par Klasse].
// op '+' : {a} + {b} ; '-' : {a} − {b} ; 'x' : {k} · {g} = {c} ; ':' : {c} : {k} = {g} ; '2' : {a} − {b} − {d} = {e}
// Nombres par Klasse : { 1: [[min a, max a], [min b, max b]], ... }. Pas de nombre pour une Klasse = modèle pas utilisé.
// Pour 'x' et ':' : premier intervalle = {k}, second = {g}.
// {n} prénom, {Er}/{er} pronom, {sein} = seiner/ihrer, {seinem} = seinem/ihrem.

const P = { // intervalles fréquents
  petit: { 1: [[6, 14], [2, 6]], 2: [[25, 70], [6, 24]] },
  moyen3: [[180, 650], [45, 280]], grand4: [[1200, 8500], [350, 2900]]
};

const RECHNEN = {
  herbst: [
    ['-', '{n} sammelt {a} Kastanien. {Er} schenkt {b} Kastanien {sein} Schwester. Wie viele Kastanien hat {n} noch?', '{n} hat noch {c} Kastanien.', P.petit],
    ['x', 'Im Garten stehen {k} Apfelbäume. Papa pflückt von jedem Baum {g} Äpfel. Wie viele Äpfel pflückt Papa?', 'Papa pflückt {c} Äpfel.', { 2: [[3, 6], [5, 10]], 3: [[6, 9], [12, 25]] }],
    ['+', 'Auf dem Weg liegen {a} rote und {b} gelbe Blätter. Wie viele Blätter sind es zusammen?', 'Es sind {c} Blätter.', { 1: [[5, 11], [3, 8]], 2: [[20, 55], [12, 40]] }],
    ['+', 'Beim Laternenumzug laufen {a} Kinder aus der Grundschule und {b} Kinder aus dem Kindergarten mit. Wie viele Kinder laufen mit?', 'Es laufen {c} Kinder mit.', { 3: [[150, 420], [60, 190]], 4: [[320, 780], [140, 460]] }],
    ['-', 'Ein Bauer erntet {a} kg Kartoffeln. Er verkauft {b} kg auf dem Markt. Wie viele Kilogramm Kartoffeln hat er noch?', 'Er hat noch {c} kg Kartoffeln.', { 3: [[400, 950], [120, 380]], 4: [[2400, 9800], [650, 2300]] }],
    [':', 'Die Klasse hat {c} Kastanien gesammelt. Sie verteilt sie gerecht auf {k} Gruppen. Wie viele Kastanien bekommt jede Gruppe?', 'Jede Gruppe bekommt {g} Kastanien.', { 3: [[4, 8], [6, 12]], 4: [[6, 9], [15, 48]] }],
    ['2', 'Oma kauft {a} kg Äpfel. Sie backt einen Kuchen mit {b} kg und kocht Apfelmus mit {d} kg. Wie viele Kilogramm Äpfel bleiben übrig?', 'Es bleiben {e} kg Äpfel übrig.', { 4: [[18, 30], [3, 6]] }],
    ['+', 'Im Korb liegen {a} Äpfel und {b} Birnen. Wie viele Früchte sind im Korb?', 'Es sind {c} Früchte im Korb.', { 1: [[4, 10], [3, 8]], 2: [[15, 35], [10, 30]] }]
  ],
  halloween: [
    ['-', '{n} hat {a} Bonbons. {Er} isst {b} Bonbons. Wie viele Bonbons hat {n} noch?', '{n} hat noch {c} Bonbons.', { 1: [[8, 15], [2, 5]], 2: [[25, 48], [4, 12]] }],
    ['x', 'An {k} Häusern bekommen die Kinder je {g} Äpfel. Wie viele Äpfel sind es?', 'Es sind {c} Äpfel.', { 2: [[3, 6], [2, 5]], 3: [[6, 9], [4, 8]] }],
    ['+', 'Auf dem Kinderfest sind {a} Kinder als Hexe und {b} Kinder als Gespenst verkleidet. Wie viele Kinder sind verkleidet?', 'Es sind {c} Kinder verkleidet.', { 1: [[4, 9], [3, 8]], 2: [[12, 35], [8, 30]] }],
    ['-', 'Ein Bauer hat {a} Kürbisse. Er verkauft {b} Kürbisse. Wie viele Kürbisse hat er noch?', 'Er hat noch {c} Kürbisse.', { 3: [[240, 680], [85, 220]], 4: [[1800, 5200], [450, 1600]] }],
    ['x', 'Für das Fest kauft die Schule {k} Tüten mit je {g} Bonbons. Wie viele Bonbons sind es?', 'Es sind {c} Bonbons.', { 3: [[4, 9], [20, 50]], 4: [[12, 25], [24, 60]] }],
    [':', '{n} hat {c} Kerzen. {Er} stellt in jeden Kürbis {k} Kerzen. Wie viele Kürbisse bekommen Kerzen?', '{g} Kürbisse bekommen Kerzen.', { 3: [[2, 4], [5, 9]], 4: [[3, 6], [6, 14]] }],
    ['2', 'Ein Laden hat {a} Kostüme. Am Montag verkauft er {b} Kostüme, am Dienstag {d} Kostüme. Wie viele Kostüme sind noch da?', 'Es sind noch {e} Kostüme da.', { 4: [[420, 900], [80, 190]] }],
    ['+', '{n} hat {a} Gummibärchen. {Er} bekommt noch {b} dazu. Wie viele Gummibärchen hat {n} jetzt?', '{n} hat jetzt {c} Gummibärchen.', { 1: [[5, 11], [2, 7]], 2: [[15, 40], [6, 20]] }]
  ],
  winter: [
    ['x', '{n} baut {k} Schneemänner. Jeder Schneemann bekommt {g} Knöpfe. Wie viele Knöpfe braucht {n}?', '{n} braucht {c} Knöpfe.', { 2: [[2, 5], [3, 5]], 3: [[3, 8], [3, 6]] }],
    ['-', 'Auf dem Schlittenhügel sind {a} Kinder. {b} Kinder gehen nach Hause. Wie viele Kinder sind noch auf dem Hügel?', 'Es sind noch {c} Kinder auf dem Hügel.', { 1: [[9, 16], [2, 7]], 2: [[30, 60], [8, 25]] }],
    ['+', '{n} findet {a} rote und {b} blaue Handschuhe in der Kiste. Wie viele Handschuhe sind es zusammen?', 'Es sind {c} Handschuhe.', { 1: [[4, 9], [2, 8]], 2: [[14, 36], [10, 28]] }],
    ['+', 'Am Samstag laufen {a} Menschen auf der Eisbahn Schlittschuh, am Sonntag {b} Menschen. Wie viele Menschen sind es zusammen?', 'Es sind {c} Menschen.', { 3: [[230, 560], [180, 420]], 4: [[1250, 3800], [980, 2900]] }],
    ['-', 'Die Stadt hat {a} kg Streusalz. Nach dem Schneefall sind {b} kg verbraucht. Wie viel Streusalz ist noch da?', 'Es sind noch {c} kg Streusalz da.', { 3: [[600, 990], [150, 480]], 4: [[25000, 60000], [8000, 22000]] }],
    [':', 'Mama kocht {c} Tassen Kakao für {k} Kinder. Jedes Kind bekommt gleich viele Tassen. Wie viele Tassen bekommt jedes Kind?', 'Jedes Kind bekommt {g} Tassen.', { 3: [[3, 6], [2, 3]] }],
    ['x', 'Eine Skischule hat {k} Gruppen mit je {g} Kindern. Wie viele Kinder lernen Ski fahren?', 'Es lernen {c} Kinder Ski fahren.', { 4: [[14, 28], [8, 12]] }],
    ['2', 'Ein Sportladen hat {a} Schlitten. Im Dezember verkauft er {b} Schlitten und im Januar {d} Schlitten. Wie viele Schlitten hat er noch?', 'Er hat noch {e} Schlitten.', { 4: [[500, 900], [120, 220]] }],
    ['-', 'Am Fenster hängen {a} Eiszapfen. {b} Eiszapfen tauen in der Sonne. Wie viele Eiszapfen hängen noch?', 'Es hängen noch {c} Eiszapfen.', { 1: [[8, 15], [2, 6]], 2: [[20, 40], [5, 18]] }]
  ],
  weihnachten: [
    ['x', '{n} backt {k} Bleche Plätzchen. Auf jedem Blech liegen {g} Plätzchen. Wie viele Plätzchen sind es?', 'Es sind {c} Plätzchen.', { 2: [[2, 4], [6, 10]], 3: [[3, 6], [12, 20]] }],
    ['+', 'Am Baum hängen {a} rote und {b} goldene Kugeln. Wie viele Kugeln sind es?', 'Es sind {c} Kugeln.', { 1: [[5, 10], [3, 8]], 2: [[12, 30], [8, 25]] }],
    ['-', '{n} hat {a} Euro gespart. {Er} kauft ein Geschenk für {b} Euro. Wie viel Geld hat {n} noch?', '{n} hat noch {c} Euro.', { 1: [[10, 18], [3, 8]], 2: [[25, 60], [8, 20]] }],
    ['-', 'Der Adventskalender hat 24 Türchen. {n} hat schon {b} Türchen geöffnet. Wie viele Türchen sind noch zu?', 'Es sind noch {c} Türchen zu.', { 2: [[24, 24], [5, 19]] }],
    ['+', 'Auf dem Weihnachtsmarkt sind am Freitag {a} Besucher und am Samstag {b} Besucher. Wie viele Besucher sind es zusammen?', 'Es sind {c} Besucher.', { 3: [[280, 560], [310, 430]], 4: [[12500, 28000], [18000, 34000]] }],
    ['-', 'Die Post hat {a} Weihnachtspakete. Am Vormittag bringt sie {b} Pakete weg. Wie viele Pakete muss sie noch bringen?', 'Sie muss noch {c} Pakete bringen.', { 3: [[500, 950], [180, 420]], 4: [[6500, 9800], [2400, 5100]] }],
    [':', 'Die Klasse bastelt {c} Sterne. Sie hängt sie an {k} Fenster. An jedem Fenster hängen gleich viele Sterne. Wie viele Sterne hängen an jedem Fenster?', 'An jedem Fenster hängen {g} Sterne.', { 3: [[3, 5], [4, 9]], 4: [[4, 8], [6, 12]] }],
    ['2', 'Papa hat {a} Euro. Er kauft einen Tannenbaum für {b} Euro und Kerzen für {d} Euro. Wie viel Geld hat er noch?', 'Er hat noch {e} Euro.', { 4: [[80, 150], [25, 45], [5, 15]] }],
    ['+', 'Im Nikolausstiefel von {n} liegen {a} Nüsse und {b} Mandarinen. Wie viele Sachen sind es?', 'Es sind {c} Sachen.', { 1: [[4, 9], [2, 6]] }]
  ],
  fasching: [
    ['-', '{n} fängt beim Umzug {a} Bonbons. {Er} schenkt {b} Bonbons {seinem} Freund. Wie viele Bonbons hat {n} noch?', '{n} hat noch {c} Bonbons.', { 1: [[9, 18], [2, 7]], 2: [[30, 70], [8, 25]] }],
    ['x', 'Beim Kinderumzug fahren {k} Wagen. Auf jedem Wagen stehen {g} Narren. Wie viele Narren sind es?', 'Es sind {c} Narren.', { 2: [[3, 6], [4, 8]], 3: [[6, 9], [7, 12]] }],
    ['+', 'Beim Kinderfasching tanzen {a} Clowns und {b} Piraten. Wie viele Kinder tanzen?', 'Es tanzen {c} Kinder.', { 1: [[5, 10], [3, 9]], 2: [[14, 38], [9, 30]] }],
    ['+', 'Am Umzug schauen {a} Menschen in der Hauptstraße und {b} Menschen am Marktplatz zu. Wie viele Zuschauer sind es?', 'Es sind {c} Zuschauer.', { 3: [[320, 650], [180, 340]], 4: [[6500, 18000], [4200, 9500]] }],
    ['-', 'Die Narrenzunft hat {a} Masken. {b} Masken sind beim Umzug unterwegs. Wie viele Masken sind noch im Schrank?', 'Es sind noch {c} Masken im Schrank.', { 3: [[150, 400], [60, 140]] }],
    [':', 'Die Narren werfen {c} Bonbons. Sie teilen sie gerecht auf {k} Säcke auf. Wie viele Bonbons sind in jedem Sack?', 'In jedem Sack sind {g} Bonbons.', { 4: [[6, 9], [120, 350]] }],
    ['2', 'Ein Bäcker backt {a} Berliner. Am Vormittag verkauft er {b} und am Nachmittag {d} Berliner. Wie viele Berliner hat er noch?', 'Er hat noch {e} Berliner.', { 4: [[700, 1200], [180, 320]] }],
    ['+', '{n} hat {a} Luftschlangen. {Er} kauft noch {b} dazu. Wie viele Luftschlangen hat {n}?', '{n} hat {c} Luftschlangen.', { 1: [[4, 10], [3, 8]], 2: [[12, 30], [8, 25]] }],
    ['x', 'Für den Umzug nähen {k} Mütter je {g} Kostüme. Wie viele Kostüme sind es?', 'Es sind {c} Kostüme.', { 3: [[4, 9], [6, 12]], 4: [[12, 28], [8, 15]] }],
    ['+', 'Die Narren werfen am Montag {a} und am Dienstag {b} Bonbons. Wie viele Bonbons sind es?', 'Es sind {c} Bonbons.', { 4: [[2400, 6500], [1800, 5200]] }]
  ],
  fruehling: [
    ['x', '{n} pflanzt {k} Reihen Tulpen. In jeder Reihe sind {g} Tulpen. Wie viele Tulpen sind es?', 'Es sind {c} Tulpen.', { 2: [[2, 5], [3, 8]], 3: [[4, 9], [6, 12]] }],
    ['-', '{n} pflückt {a} Blumen. {Er} schenkt {b} Blumen {sein} Mama. Wie viele Blumen hat {n} noch?', '{n} hat noch {c} Blumen.', { 1: [[8, 15], [3, 7]], 2: [[20, 40], [6, 18]] }],
    ['+', 'Im Park fahren {a} Kinder Fahrrad und {b} Kinder Roller. Wie viele Kinder sind es?', 'Es sind {c} Kinder.', { 1: [[5, 11], [2, 7]], 2: [[15, 40], [9, 30]] }],
    ['+', 'Eine Gärtnerei verkauft am Freitag {a} Blumentöpfe und am Samstag {b} Blumentöpfe. Wie viele Töpfe sind es zusammen?', 'Es sind {c} Blumentöpfe.', { 3: [[160, 420], [240, 510]], 4: [[1400, 3600], [2100, 4800]] }],
    ['-', 'Ein Imker hat {a} Gläser Honig. Er verkauft {b} Gläser. Wie viele Gläser hat er noch?', 'Er hat noch {c} Gläser Honig.', { 3: [[300, 750], [90, 260]], 4: [[1500, 4000], [480, 1300]] }],
    [':', 'Die Klasse hat {c} Samen. Jedes Kind bekommt {k} Samen. Wie viele Kinder bekommen Samen?', '{g} Kinder bekommen Samen.', { 3: [[3, 5], [6, 10]], 4: [[4, 8], [20, 28]] }],
    ['+', 'Auf der Wiese sitzen {a} Bienen und {b} Schmetterlinge. Wie viele Insekten sind es?', 'Es sind {c} Insekten.', { 1: [[4, 10], [3, 8]], 2: [[15, 35], [10, 28]] }],
    ['x', 'Ein Bauer pflanzt {k} Reihen Salat. In jeder Reihe stehen {g} Pflanzen. Wie viele Salatpflanzen sind es?', 'Es sind {c} Salatpflanzen.', { 4: [[18, 45], [24, 60]] }]
  ],
  ostern: [
    ['-', '{n} findet {a} Ostereier. {Er} gibt {b} Eier {sein} Schwester. Wie viele Eier hat {n} noch?', '{n} hat noch {c} Eier.', { 1: [[8, 14], [2, 6]], 2: [[18, 36], [5, 15]] }],
    ['x', 'Im Eierkarton liegen {k} Reihen mit je {g} Eiern. Wie viele Eier sind es?', 'Es sind {c} Eier.', { 2: [[2, 3], [5, 6]], 3: [[2, 4], [5, 6]] }],
    ['+', '{a} Eier sind blau und {b} Eier sind gelb. Wie viele Eier sind es zusammen?', 'Es sind {c} Eier.', { 1: [[4, 10], [3, 9]], 2: [[12, 30], [8, 24]] }],
    ['x', 'Ein Bauernhof verkauft vor Ostern {k} Kartons mit je {g} Eiern. Wie viele Eier sind es?', 'Es sind {c} Eier.', { 3: [[12, 60], [10, 10]], 4: [[120, 480], [6, 6]] }],
    ['+', 'Zum Osterfeuer kommen {a} Erwachsene und {b} Kinder. Wie viele Menschen kommen?', 'Es kommen {c} Menschen.', { 3: [[180, 420], [120, 330]], 4: [[1200, 2600], [850, 1900]] }],
    [':', 'Oma hat {c} Schokoladeneier. Sie verteilt sie gerecht an {k} Enkel. Wie viele Eier bekommt jedes Enkelkind?', 'Jedes Enkelkind bekommt {g} Eier.', { 3: [[3, 6], [4, 9]], 4: [[4, 8], [6, 15]] }],
    ['2', 'Ein Laden hat {a} Schokoladenhasen. In der ersten Woche verkauft er {b}, in der zweiten Woche {d}. Wie viele Hasen sind noch da?', 'Es sind noch {e} Hasen da.', { 4: [[800, 1600], [210, 420]] }],
    ['-', 'Im Osternest liegen {a} Schokoeier. {n} isst {b} davon. Wie viele Schokoeier sind noch im Nest?', 'Es sind noch {c} Schokoeier im Nest.', { 1: [[8, 15], [2, 5]], 2: [[20, 36], [4, 12]] }]
  ],
  sommer: [
    ['x', 'Eine Kugel Eis kostet {g} Euro. {n} kauft {k} Kugeln. Wie viel muss {n} bezahlen?', '{n} muss {c} Euro bezahlen.', { 2: [[2, 4], [1, 2]], 3: [[3, 6], [2, 2]] }],
    ['-', '{n} sammelt {a} Muscheln. {Er} verliert {b} Muscheln. Wie viele Muscheln hat {n} noch?', '{n} hat noch {c} Muscheln.', { 1: [[9, 16], [2, 6]], 2: [[25, 60], [6, 20]] }],
    ['+', 'Im Planschbecken spielen {a} Kinder und auf der Wiese {b} Kinder. Wie viele Kinder sind es?', 'Es sind {c} Kinder.', { 1: [[4, 10], [3, 9]], 2: [[15, 40], [10, 35]] }],
    ['+', 'Ins Freibad kommen am Samstag {a} Gäste und am Sonntag {b} Gäste. Wie viele Gäste sind es zusammen?', 'Es sind {c} Gäste.', { 3: [[350, 620], [280, 370]], 4: [[2400, 4800], [1900, 4300]] }],
    ['-', 'Familie Mensah fährt {a} km in den Urlaub. Nach der Pause sind schon {b} km geschafft. Wie viele Kilometer fehlen noch?', 'Es fehlen noch {c} km.', { 3: [[480, 900], [150, 380]], 4: [[1100, 2400], [420, 980]] }],
    [':', 'Die Klasse fährt mit {c} Kindern ins Schullandheim. In jedes Zimmer kommen {k} Kinder. Wie viele Zimmer braucht die Klasse?', 'Die Klasse braucht {g} Zimmer.', { 3: [[4, 4], [5, 7]], 4: [[4, 6], [5, 9]] }],
    ['2', 'Lena hat {a} Euro Ferienkasse. Sie kauft Sonnencreme für {b} Euro und einen Hut für {d} Euro. Wie viel Geld bleibt übrig?', 'Es bleiben {e} Euro übrig.', { 4: [[40, 80], [6, 15]] }],
    ['+', '{n} baut eine Sandburg mit {a} Türmen. {Er} baut noch {b} Türme dazu. Wie viele Türme hat die Burg?', 'Die Burg hat {c} Türme.', { 1: [[3, 8], [2, 6]], 2: [[8, 20], [5, 15]] }]
  ],
  fussball: [
    ['+', 'Beim Schulturnier jubeln {a} Kinder in Gelb und {b} Kinder in Blau. Wie viele Kinder jubeln?', 'Es jubeln {c} Kinder.', { 1: [[5, 11], [3, 8]], 2: [[20, 45], [15, 40]] }],
    ['x', 'Beim Turnier spielen {k} Mannschaften. Jede Mannschaft hat {g} Kinder. Wie viele Kinder spielen mit?', 'Es spielen {c} Kinder mit.', { 2: [[3, 6], [5, 7]], 3: [[6, 12], [7, 11]] }],
    ['-', '{n} hat {a} Fußballkarten. {Er} tauscht {b} Karten weg. Wie viele Karten hat {n} noch?', '{n} hat noch {c} Karten.', { 1: [[10, 18], [3, 8]], 2: [[40, 85], [10, 30]] }],
    ['+', 'Im Stadion sitzen {a} Fans der Heimmannschaft und {b} Fans der Gäste. Wie viele Fans sind es?', 'Es sind {c} Fans.', { 3: [[420, 680], [150, 310]], 4: [[28000, 52000], [4500, 9800]] }],
    ['-', 'Das Stadion hat {a} Plätze. {b} Plätze sind schon verkauft. Wie viele Plätze sind noch frei?', 'Es sind noch {c} Plätze frei.', { 4: [[45000, 75000], [21000, 44000]] }],
    [':', 'Der Verein hat {c} Trikots. Jede Mannschaft bekommt {k} Trikots. Wie viele Mannschaften bekommen Trikots?', '{g} Mannschaften bekommen Trikots.', { 3: [[11, 11], [3, 8]], 4: [[11, 11], [8, 25]] }],
    ['2', 'Der Verein hat {a} Euro. Er kauft neue Bälle für {b} Euro und Tore für {d} Euro. Wie viel Geld bleibt übrig?', 'Es bleiben {e} Euro übrig.', { 4: [[4000, 6500], [400, 900], [1200, 2500]] }],
    ['+', '{n} schießt im Training {a} Tore und im Spiel {b} Tore. Wie viele Tore sind es?', 'Es sind {c} Tore.', { 1: [[4, 10], [1, 4]], 2: [[12, 30], [2, 9]] }],
    ['-', 'Der Verein hat {a} Mitglieder. {b} Mitglieder sind Kinder. Wie viele Erwachsene sind im Verein?', 'Es sind {c} Erwachsene im Verein.', { 3: [[420, 860], [150, 380]], 4: [[1200, 3500], [450, 1400]] }]
  ],
  haustiere: [
    ['+', 'Im Aquarium schwimmen {a} rote und {b} gelbe Fische. Wie viele Fische sind es?', 'Es sind {c} Fische.', { 1: [[4, 9], [2, 7]], 2: [[12, 28], [6, 18]] }],
    ['-', 'Im Tierheim leben {a} Katzen. {b} Katzen finden ein neues Zuhause. Wie viele Katzen sind noch im Tierheim?', 'Es sind noch {c} Katzen im Tierheim.', { 1: [[10, 18], [2, 7]], 2: [[30, 65], [8, 24]] }],
    ['x', '{n} gibt {seinem} Kaninchen jeden Tag {g} Möhren. Wie viele Möhren sind es in {k} Tagen?', 'Es sind {c} Möhren.', { 2: [[3, 7], [2, 3]], 3: [[7, 7], [2, 4]] }],
    ['+', 'Ein Tierheim bekommt im Frühling {a} Tiere und im Sommer {b} Tiere. Wie viele Tiere sind es?', 'Es sind {c} Tiere.', { 3: [[140, 360], [180, 420]], 4: [[640, 1500], [720, 1800]] }],
    ['-', 'Ein Sack Hundefutter wiegt {a} g. Bello frisst heute {b} g. Wie viel Futter ist noch im Sack?', 'Es sind noch {c} g Futter im Sack.', { 3: [[800, 1000], [250, 450]], 4: [[5000, 10000], [400, 900]] }],
    [':', 'Eine Packung hat {c} Leckerlis. Der Hund bekommt jeden Tag {k} Stück. Für wie viele Tage reicht die Packung?', 'Die Packung reicht für {g} Tage.', { 3: [[3, 5], [6, 10]], 4: [[4, 6], [15, 40]] }],
    ['2', 'Frau Owusu hat {a} Euro. Sie kauft Futter für {b} Euro und ein Halsband für {d} Euro. Wie viel Geld hat sie noch?', 'Sie hat noch {e} Euro.', { 4: [[60, 120], [12, 28], [8, 20]] }],
    ['+', '{n} hat {a} Hasenbilder und {b} Katzenbilder im Album. Wie viele Bilder sind es?', 'Es sind {c} Bilder.', { 1: [[4, 9], [3, 9]], 2: [[15, 35], [10, 30]] }]
  ],
  dinosaurier: [
    ['+', 'Im Museum stehen {a} große und {b} kleine Dinosaurier. Wie viele Dinosaurier sind es zusammen?', 'Es sind {c} Dinosaurier.', { 1: [[3, 9], [2, 8]], 2: [[12, 30], [8, 24]] }],
    ['-', 'Die Forscherin findet {a} Knochen. {b} Knochen sind kaputt. Wie viele Knochen sind ganz?', 'Es sind {c} Knochen ganz.', { 1: [[10, 18], [2, 7]], 2: [[30, 80], [8, 25]] }],
    ['x', '{n} hat {k} Kisten mit Dino-Figuren. In jeder Kiste sind {g} Figuren. Wie viele Figuren hat {n}?', '{n} hat {c} Figuren.', { 2: [[2, 5], [4, 8]], 3: [[4, 8], [6, 12]] }],
    ['+', 'Ins Naturkundemuseum kommen am Samstag {a} Besucher und am Sonntag {b} Besucher. Wie viele Besucher sind es?', 'Es sind {c} Besucher.', { 3: [[230, 480], [260, 510]], 4: [[1800, 3900], [2100, 4500]] }],
    ['-', 'Ein Dinosaurier-Skelett ist {a} cm lang. Ein anderes ist {b} cm lang. Wie viel länger ist das erste Skelett?', 'Das erste Skelett ist {c} cm länger.', { 3: [[650, 980], [210, 480]], 4: [[1800, 2600], [600, 1500]] }],
    [':', 'Im Museum liegen {c} Fossilien. Sie werden gleichmäßig auf {k} Vitrinen verteilt. Wie viele Fossilien liegen in jeder Vitrine?', 'In jeder Vitrine liegen {g} Fossilien.', { 3: [[4, 8], [5, 10]], 4: [[6, 9], [24, 75]] }],
    ['2', 'Die Klasse hat {a} Euro für den Museumsbesuch. Der Eintritt kostet {b} Euro und der Bus {d} Euro. Wie viel Geld bleibt übrig?', 'Es bleiben {e} Euro übrig.', { 4: [[450, 700], [80, 160], [150, 280]] }],
    ['+', '{n} hat {a} Dino-Sticker. Zum Geburtstag bekommt {er} {b} neue Sticker. Wie viele Sticker hat {n} jetzt?', '{n} hat jetzt {c} Sticker.', { 1: [[5, 11], [3, 8]], 2: [[20, 50], [10, 30]] }]
  ],
  weltraum: [
    ['-', '{n} zählt {a} Sterne am Himmel. Dann kommen Wolken und {b} Sterne verschwinden. Wie viele Sterne sieht {n} noch?', '{n} sieht noch {c} Sterne.', { 1: [[9, 17], [2, 7]], 2: [[30, 70], [8, 25]] }],
    ['+', 'Im Bastelkurs bauen {a} Mädchen und {b} Jungen eine Rakete. Wie viele Kinder bauen eine Rakete?', 'Es bauen {c} Kinder eine Rakete.', { 1: [[4, 9], [3, 8]], 2: [[11, 18], [9, 17]] }],
    ['x', 'Auf der Raumstation sind {k} Astronauten. Jeder isst am Tag {g} Beutel Essen. Wie viele Beutel sind das zusammen?', 'Das sind {c} Beutel.', { 2: [[2, 6], [3, 5]], 3: [[3, 7], [4, 6]] }],
    ['+', 'Ins Planetarium kommen am Vormittag {a} Kinder und am Nachmittag {b} Kinder. Wie viele Kinder sind es?', 'Es sind {c} Kinder.', { 3: [[180, 340], [150, 290]], 4: [[1200, 2400], [900, 2100]] }],
    ['-', 'Eine Raumstation fliegt in {a} km Höhe. Ein Flugzeug fliegt in {b} km Höhe. Wie viel höher fliegt die Raumstation?', 'Die Raumstation fliegt {c} km höher.', { 3: [[400, 420], [10, 12]] }],
    ['-', 'Vom Startplatz bis zum Raumfahrtmuseum sind es {a} km. Die Familie ist schon {b} km gefahren. Wie viele Kilometer fehlen noch?', 'Es fehlen noch {c} km.', { 4: [[1200, 3500], [450, 1100]] }],
    [':', 'Eine Raumstation umkreist die Erde an {k} Tagen {c}-mal. Sie fliegt jeden Tag gleich oft herum. Wie oft fliegt sie an einem Tag um die Erde?', 'Sie fliegt {g}-mal am Tag um die Erde.', { 4: [[3, 12], [16, 16]] }],
    ['2', 'Ein Teleskop kostet {a} Euro. {n} hat {b} Euro gespart und bekommt {d} Euro von Oma. Wie viel Geld fehlt noch?', 'Es fehlen noch {e} Euro.', { 4: [[250, 480], [40, 110], [20, 60]] }],
    ['+', '{n} hat {a} Planeten-Karten. {Er} bekommt {b} Karten dazu. Wie viele Karten hat {n} jetzt?', '{n} hat jetzt {c} Karten.', { 1: [[4, 10], [2, 8]], 2: [[15, 40], [8, 25]] }],
    ['x', 'Ein Planetarium zeigt jeden Tag {k} Filme. Wie viele Filme sind es in {g} Tagen?', 'Es sind {c} Filme.', { 3: [[4, 6], [7, 14]], 4: [[5, 8], [28, 31]] }]
  ],
  geburtstag: [
    ['x', '{n} lädt {k} Kinder ein. Jedes Kind bekommt {g} Luftballons. Wie viele Luftballons braucht {n}?', '{n} braucht {c} Luftballons.', { 2: [[3, 8], [2, 3]], 3: [[6, 10], [3, 5]] }],
    ['-', 'Auf dem Tisch liegen {a} Muffins. Die Kinder essen {b} Muffins. Wie viele Muffins sind noch da?', 'Es sind noch {c} Muffins da.', { 1: [[10, 16], [3, 9]], 2: [[20, 36], [8, 18]] }],
    ['+', '{n} bekommt {a} Euro von Oma und {b} Euro von Opa. Wie viel Geld bekommt {n} zusammen?', '{n} bekommt {c} Euro.', { 1: [[5, 10], [2, 10]], 2: [[10, 30], [5, 20]] }],
    ['-', 'Mama hat {a} Euro für die Feier. Sie gibt {b} Euro für Essen und Getränke aus. Wie viel Geld hat sie noch?', 'Sie hat noch {c} Euro.', { 3: [[150, 300], [65, 140]] }],
    ['x', 'Für das Klassenfest kauft die Lehrerin {k} Packungen Saft mit je {g} Flaschen. Wie viele Flaschen sind es?', 'Es sind {c} Flaschen.', { 3: [[4, 8], [6, 6]], 4: [[12, 24], [6, 12]] }],
    [':', 'Eine Torte hat {c} Stücke. {k} Kinder bekommen gleich viele Stücke. Wie viele Stücke bekommt jedes Kind?', 'Jedes Kind bekommt {g} Stücke.', { 3: [[4, 8], [2, 3]] }],
    ['2', 'Papa hat {a} Euro. Er kauft eine Torte für {b} Euro und Geschenke für {d} Euro. Wie viel Geld bleibt übrig?', 'Es bleiben {e} Euro übrig.', { 4: [[180, 350], [25, 50], [30, 90]] }],
    ['+', 'Ein Partyladen verkauft im Mai {a} Luftballons und im Juni {b} Luftballons. Wie viele Luftballons sind es?', 'Es sind {c} Luftballons.', { 4: [[2400, 5800], [1900, 4600]] }],
    ['+', 'Auf der Torte stehen {a} rote und {b} blaue Kerzen. Wie viele Kerzen sind es?', 'Es sind {c} Kerzen.', { 1: [[3, 6], [2, 4]], 2: [[4, 6], [2, 4]] }],
    [':', 'Mama hat {c} Bonbons für die Geschenktüten. Sie füllt {k} Tüten gleich voll. Wie viele Bonbons kommen in jede Tüte?', 'In jede Tüte kommen {g} Bonbons.', { 4: [[8, 16], [12, 25]] }]
  ],
  essen: [
    ['x', 'Ein Kilo Äpfel kostet {g} Euro. {n} kauft {k} Kilo. Wie viel muss {n} bezahlen?', '{n} muss {c} Euro bezahlen.', { 2: [[2, 5], [2, 3]], 3: [[3, 8], [2, 4]] }],
    ['-', '{n} hat {a} Erdbeeren. {Er} isst {b} Erdbeeren. Wie viele Erdbeeren hat {n} noch?', '{n} hat noch {c} Erdbeeren.', { 1: [[9, 16], [2, 6]], 2: [[20, 40], [5, 15]] }],
    ['+', 'Im Korb liegen {a} Mangos und {b} Bananen. Wie viele Früchte sind es zusammen?', 'Es sind {c} Früchte.', { 1: [[3, 9], [3, 9]], 2: [[12, 28], [10, 26]] }],
    ['+', 'Die Schulküche kocht am Montag {a} Portionen und am Dienstag {b} Portionen. Wie viele Portionen sind es?', 'Es sind {c} Portionen.', { 3: [[180, 320], [190, 340]], 4: [[1250, 2400], [1300, 2600]] }],
    ['-', 'Ein Obsthändler hat {a} kg Bananen. Er verkauft {b} kg. Wie viele Kilogramm hat er noch?', 'Er hat noch {c} kg Bananen.', { 3: [[300, 800], [120, 290]], 4: [[2500, 6000], [800, 2200]] }],
    [':', 'Ein Bäcker hat {c} Brötchen. In jede Tüte kommen {k} Brötchen. Wie viele Tüten braucht er?', 'Er braucht {g} Tüten.', { 3: [[5, 6], [8, 15]], 4: [[6, 8], [25, 90]] }],
    ['2', 'Auf dem Markt hat ein Händler {a} Ananas. Am Morgen verkauft er {b} und am Mittag {d}. Wie viele Ananas hat er noch?', 'Er hat noch {e} Ananas.', { 4: [[300, 600], [70, 140]] }],
    ['+', 'Zum Frühstück isst {n} {a} Weintrauben und {b} Erdbeeren. Wie viele Früchte sind es?', 'Es sind {c} Früchte.', { 1: [[5, 10], [2, 6]], 2: [[12, 25], [6, 15]] }]
  ],
  berufe: [
    ['+', 'Bei der Feuerwehr arbeiten {a} Frauen und {b} Männer. Wie viele Menschen arbeiten dort?', 'Es arbeiten {c} Menschen dort.', { 1: [[3, 8], [5, 11]], 2: [[12, 24], [20, 45]] }],
    ['x', 'Der Bäcker backt {k} Bleche. Auf jedem Blech liegen {g} Brötchen. Wie viele Brötchen sind es?', 'Es sind {c} Brötchen.', { 2: [[2, 5], [6, 10]], 3: [[5, 9], [12, 20]] }],
    ['-', 'Die Postbotin hat {a} Briefe. Sie hat schon {b} Briefe verteilt. Wie viele Briefe muss sie noch verteilen?', 'Sie muss noch {c} Briefe verteilen.', { 1: [[10, 19], [3, 9]], 2: [[40, 95], [15, 40]] }],
    ['+', 'Die Ärztin behandelt im Januar {a} Kinder und im Februar {b} Kinder. Wie viele Kinder sind es?', 'Es sind {c} Kinder.', { 3: [[180, 380], [210, 420]], 4: [[850, 1800], [900, 1950]] }],
    ['-', 'Die Busfahrerin fährt im Monat {a} km. Bis heute ist sie {b} km gefahren. Wie viele Kilometer fährt sie noch?', 'Sie fährt noch {c} km.', { 3: [[700, 990], [250, 480]], 4: [[3500, 6800], [1200, 2900]] }],
    [':', 'Die Feuerwehr hat {c} Helme. Auf jedes Löschfahrzeug kommen {k} Helme. Wie viele Fahrzeuge bekommen Helme?', '{g} Fahrzeuge bekommen Helme.', { 3: [[6, 9], [3, 6]], 4: [[9, 9], [6, 15]] }],
    ['2', 'Ein Tischler hat {a} Bretter. Für einen Schrank braucht er {b} Bretter, für einen Tisch {d} Bretter. Wie viele Bretter bleiben übrig?', 'Es bleiben {e} Bretter übrig.', { 4: [[200, 450], [35, 90]] }],
    ['-', 'Die Tierärztin hat heute {a} Termine. {b} Termine sind schon vorbei. Wie viele Termine kommen noch?', 'Es kommen noch {c} Termine.', { 1: [[9, 16], [3, 8]], 2: [[18, 30], [5, 15]] }]
  ],
  familie: [
    ['+', 'Zum Familienfest kommen {a} Verwandte aus Deutschland und {b} Verwandte aus Ghana. Wie viele Verwandte kommen?', 'Es kommen {c} Verwandte.', { 1: [[5, 11], [2, 7]], 2: [[15, 35], [5, 20]] }],
    ['x', 'An {k} Tischen sitzen je {g} Personen. Wie viele Personen sind es?', 'Es sind {c} Personen.', { 2: [[2, 6], [4, 8]], 3: [[6, 10], [6, 10]] }],
    ['-', 'Tante Esi kocht {a} Portionen Reis. Die Gäste essen {b} Portionen. Wie viele Portionen bleiben übrig?', 'Es bleiben {c} Portionen übrig.', { 1: [[10, 18], [4, 12]], 2: [[30, 60], [15, 45]] }],
    ['-', 'Von Stuttgart nach Paris sind es {a} km. Familie Diallo ist schon {b} km gefahren. Wie weit ist es noch?', 'Es sind noch {c} km.', { 3: [[620, 620], [180, 450]] }],
    ['-', 'Von Frankfurt nach Accra fliegt man {a} km. Das Flugzeug ist schon {b} km geflogen. Wie viele Kilometer fehlen noch?', 'Es fehlen noch {c} km.', { 4: [[5100, 5100], [1250, 3900]] }],
    [':', 'Opa schickt {c} Euro an seine {k} Enkel. Jedes Enkelkind bekommt gleich viel. Wie viel Geld bekommt jedes Kind?', 'Jedes Kind bekommt {g} Euro.', { 3: [[3, 5], [10, 20]], 4: [[4, 8], [25, 60]] }],
    ['2', 'Familie Mbeki spart {a} Euro für den Flug. Die Tickets kosten {b} Euro, der Koffer {d} Euro. Wie viel Geld bleibt übrig?', 'Es bleiben {e} Euro übrig.', { 4: [[3500, 4800], [1800, 3200], [60, 150]] }],
    ['+', '{n} hat {a} Cousins in Kamerun und {b} Cousins in Deutschland. Wie viele Cousins hat {n}?', '{n} hat {c} Cousins.', { 1: [[3, 8], [2, 6]], 2: [[6, 14], [3, 9]] }],
    ['x', 'Opa kauft {k} Säcke Reis. Jeder Sack wiegt {g} kg. Wie viel Reis ist es?', 'Es sind {c} kg Reis.', { 3: [[3, 9], [5, 10]], 4: [[12, 40], [25, 25]] }],
    ['+', 'Familie Kone fliegt {a} km nach Dakar und dann {b} km nach Bamako. Wie weit fliegt die Familie?', 'Die Familie fliegt {c} km.', { 4: [[4300, 4300], [1050, 1050]] }]
  ],
  wald: [
    ['+', '{n} zählt {a} Käfer und {b} Ameisen. Wie viele Tiere sind es zusammen?', 'Es sind {c} Tiere.', { 1: [[3, 9], [4, 10]], 2: [[12, 30], [20, 45]] }],
    ['x', 'Die Klasse pflanzt {k} Reihen Bäume. In jeder Reihe stehen {g} Bäume. Wie viele Bäume pflanzt die Klasse?', 'Die Klasse pflanzt {c} Bäume.', { 2: [[2, 5], [3, 8]], 3: [[4, 9], [6, 12]] }],
    ['-', '{n} sammelt {a} Tannenzapfen. {Er} verliert {b} auf dem Heimweg. Wie viele Tannenzapfen hat {n} noch?', '{n} hat noch {c} Tannenzapfen.', { 1: [[10, 17], [2, 6]], 2: [[30, 60], [6, 20]] }],
    ['-', 'Im Stadtwald stehen {a} Bäume. Der Förster fällt {b} kranke Bäume. Wie viele Bäume stehen noch?', 'Es stehen noch {c} Bäume.', { 3: [[600, 950], [12, 45]], 4: [[12000, 48000], [150, 900]] }],
    ['+', 'Beim Waldputztag sammeln die Kinder am Vormittag {a} kg Müll und am Nachmittag {b} kg. Wie viel Müll ist es?', 'Es sind {c} kg Müll.', { 3: [[45, 120], [30, 95]], 4: [[180, 460], [120, 390]] }],
    [':', 'Der Förster hat {c} junge Bäume. Er pflanzt in jede Reihe {k} Bäume. Wie viele Reihen werden es?', 'Es werden {g} Reihen.', { 3: [[5, 8], [6, 12]], 4: [[8, 9], [25, 60]] }],
    ['2', 'Ein Wanderweg ist {a} m lang. Die Familie geht zuerst {b} m, dann noch {d} m. Wie viele Meter fehlen noch?', 'Es fehlen noch {e} m.', { 4: [[4500, 9000], [1100, 2200]] }],
    ['+', 'Im Wald wachsen {a} Pilze unter einer Tanne und {b} Pilze unter einer Buche. Wie viele Pilze sind es?', 'Es sind {c} Pilze.', { 1: [[3, 9], [2, 8]], 2: [[12, 28], [8, 24]] }]
  ]
};

// Histoires génériques (fiche « Rechengeschichten » de chaque Klasse)
RECHNEN.allgemein = [
  ['-', '{n} hat {a} Mangos. {Er} verkauft {b} Mangos auf dem Markt. Wie viele Mangos hat {n} noch?', '{n} hat noch {c} Mangos.', { 1: [[10, 18], [3, 8]], 2: [[25, 48], [6, 18]] }],
  ['+', '{n} sammelt {a} Steine. Am nächsten Tag findet {er} {b} Steine dazu. Wie viele Steine sind es jetzt?', 'Es sind jetzt {c} Steine.', { 1: [[5, 11], [2, 8]], 2: [[15, 40], [9, 30]] }],
  ['-', 'Im Schulbus sitzen {a} Kinder. An der Haltestelle steigen {b} Kinder aus. Wie viele Kinder sitzen noch im Bus?', 'Es sitzen noch {c} Kinder im Bus.', { 1: [[12, 19], [3, 9]], 2: [[30, 50], [8, 25]] }],
  ['x', 'In der Trommelgruppe spielen {k} Kinder. Jedes Kind hat {g} Trommelstöcke. Wie viele Stöcke sind es zusammen?', 'Es sind {c} Stöcke.', { 2: [[3, 9], [2, 2]], 3: [[8, 15], [2, 2]] }],
  ['x', '{n} legt {k} Teller auf den Tisch. Auf jeden Teller legt {er} {g} Datteln. Wie viele Datteln sind es?', 'Es sind {c} Datteln.', { 2: [[2, 5], [2, 6]], 3: [[4, 8], [5, 9]] }],
  ['+', 'Die Schule hat {a} Mädchen und {b} Jungen. Wie viele Kinder gehen in die Schule?', 'Es gehen {c} Kinder in die Schule.', { 3: [[120, 260], [110, 250]], 4: [[180, 320], [170, 330]] }],
  ['-', 'Die Bücherei hat {a} Bücher. {b} Bücher sind ausgeliehen. Wie viele Bücher stehen im Regal?', 'Es stehen {c} Bücher im Regal.', { 3: [[600, 980], [140, 380]], 4: [[8500, 25000], [1200, 4800]] }],
  [':', '{c} Kinder fahren ins Schullandheim. In jedes Zimmer kommen {k} Kinder. Wie viele Zimmer braucht man?', 'Man braucht {g} Zimmer.', { 3: [[4, 6], [4, 8]], 4: [[4, 6], [12, 24]] }],
  ['x', 'Ein Bus hat {g} Plätze. Für den Ausflug fahren {k} Busse. Wie viele Plätze gibt es?', 'Es gibt {c} Plätze.', { 4: [[3, 8], [49, 52]] }],
  ['2', '{n} hat {a} Euro gespart. {Er} kauft ein Buch für {b} Euro und einen Ball für {d} Euro. Wie viel Geld hat {n} noch?', '{n} hat noch {e} Euro.', { 3: [[40, 80], [8, 15]], 4: [[90, 180], [15, 35]] }]
];

// Fabrique les histoires d'une fiche
function histoires(r, modeles, klasse, nb) {
  const dispo = melanger(r, modeles.filter(m => m[3][klasse]));
  const noms = melanger(r, PRENOMS), items = [];
  const nf = x => klasse >= 4 ? fmtNb(x) : String(x);
  dispo.slice(0, nb).forEach(([op, txt, rep, plages], i) => {
    const [A, B, D = B] = plages[klasse], [nom, g] = noms[i % noms.length];
    const p = { n: nom, Er: g === 'f' ? 'Sie' : 'Er', er: g === 'f' ? 'sie' : 'er', sein: g === 'f' ? 'ihrer' : 'seiner', seinem: g === 'f' ? 'ihrem' : 'seinem' };
    let v = {}, calc;
    const arrondi = x => x >= 1000 ? Math.round(x / 10) * 10 : x; // grands nombres plus « ronds »
    if (op === 'x') { v.k = entre(r, A[0], A[1]); v.g = entre(r, B[0], B[1]); v.c = v.k * v.g; calc = `${nf(v.k)} · ${nf(v.g)} = ${nf(v.c)}`; }
    else if (op === ':') { v.k = entre(r, A[0], A[1]); v.g = entre(r, B[0], B[1]); v.c = v.k * v.g; calc = `${nf(v.c)} : ${nf(v.k)} = ${nf(v.g)}`; }
    else if (op === '2') { v.a = arrondi(entre(r, A[0], A[1])); v.b = arrondi(entre(r, B[0], B[1])); v.d = arrondi(entre(r, D[0], D[1])); v.e = v.a - v.b - v.d; calc = `${nf(v.a)} − ${nf(v.b)} − ${nf(v.d)} = ${nf(v.e)}`; }
    else {
      v.a = arrondi(entre(r, A[0], A[1])); v.b = arrondi(entre(r, B[0], Math.min(B[1], op === '-' ? v.a - 1 : B[1])));
      if (klasse === 1 && op === '+' && v.a + v.b > 20) v.b = Math.max(1, 20 - v.a);
      v.c = op === '+' ? v.a + v.b : v.a - v.b; calc = `${nf(v.a)} ${op === '+' ? '+' : '−'} ${nf(v.b)} = ${nf(v.c)}`;
    }
    const f = t => t.replace(/\{(\w+)\}/g, (m, k) => k in p ? p[k] : k in v ? nf(v[k]) : m);
    items.push({ t: f(txt), calc, rep: f(rep), res: op === ':' ? v.g : op === '2' ? v.e : v.c });
  });
  return items;
}
function renduHistoires(items, sol) {
  return `<div class="liste-num">${items.map((x, k) => `<div class="item probleme"><span class="num">${k + 1}</span><div>
    <p>${x.t}</p>
    <p class="r-ligne"><b>R:</b> ${sol ? `<span class="rep">${x.calc}</span>` : '<span class="ligne pleine"></span>'}</p>
    <p class="r-ligne"><b>A:</b> ${sol ? `<span class="rep">${x.rep}</span>` : '<span class="ligne pleine"></span>'}</p></div></div>`).join('')}</div>`;
}

// Remplace l'ancienne fiche « Rechengeschichten »
function genSachaufgaben2(r, o) {
  const k = o.klasse || 2, items = histoires(r, RECHNEN.allgemein, k, k === 1 ? 4 : 5);
  return { titre: 'Rechengeschichten', consigne: 'Lies die Geschichte. Schreibe die Rechnung (R) und einen Antwortsatz (A).', audio: items.map(x => x.t).join(' '),
    kontrolle: items.map(x => x.res), rendu: sol => renduHistoires(items, sol) };
}
[1, 2, 3, 4].forEach(k => (THEMES[k] || []).forEach(t => { if (t.id === 'sachaufgaben') { t.gen = genSachaufgaben2; t.fixe = Object.assign({}, t.fixe, { klasse: k }); } }));
