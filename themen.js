// Fiches à thèmes du Jahreskreis. Tous les textes sont écrits pour ce projet (originaux).
// band "12" = Klasse 1/2, band "34" = Klasse 3/4.
// {n} = prénom, {Er}/{er} = pronom, {sein} = seiner/ihrer (datif fém.), {seinem} = seinem/ihrem (datif masc.)
const THEMEN = {
  herbst: { nom: 'Herbst', emoji: '🍂', loesung: 'HERBST',
    lesen12: { titre: 'Der Wind im Herbst', texte: 'Es ist Herbst. Der Wind ist stark. Die Blätter an den Bäumen sind rot und gelb. Kofi und Lena gehen in den Park. Sie sammeln Kastanien. Lena findet zwölf Kastanien. Kofi lässt seinen Drachen steigen. Der Drachen fliegt hoch in den Himmel.',
      fragen: [['Welche Farben haben die Blätter?', 'Rot und gelb.'], ['Was sammeln die Kinder?', 'Kastanien.'], ['Wie viele Kastanien findet Lena?', 'Zwölf.']],
      rf: [['Es ist Sommer.', 0], ['Kofi und Lena gehen in den Park.', 1], ['Lena findet zehn Kastanien.', 0], ['Der Drachen fliegt hoch.', 1]] },
    lesen34: { titre: 'Ein Herbsttag im Wald', texte: 'Am Samstag wanderte Amara mit ihrem Opa durch den Wald. Die Luft war kühl und es roch nach feuchter Erde. Unter den Bäumen lagen viele bunte Blätter. Amara sammelte Eicheln und Bucheckern in einem kleinen Korb. Plötzlich sah sie ein Eichhörnchen. Es sprang von Ast zu Ast und versteckte eine Nuss. „Es legt einen Vorrat für den Winter an“, erklärte Opa. Am Abend bastelte Amara aus den Blättern ein buntes Bild für ihr Zimmer.',
      fragen: [['Mit wem wanderte Amara durch den Wald?', 'Mit ihrem Opa.'], ['Was sammelte Amara in ihrem Korb?', 'Eicheln und Bucheckern.'], ['Welches Tier sah Amara?', 'Ein Eichhörnchen.'], ['Was bastelte Amara am Abend?', 'Ein buntes Bild aus Blättern.']],
      rf: [['Amara wanderte am Sonntag.', 0], ['Die Luft war kühl.', 1], ['Unter den Bäumen lagen viele bunte Blätter.', 1], ['Das Eichhörnchen versteckte einen Apfel.', 0], ['Opa sagt: Das Eichhörnchen legt einen Vorrat an.', 1], ['Amara bastelte eine Laterne.', 0]] },
    diktat12: 'Im Herbst sind die Tage kurz. Es regnet oft. Wir ziehen eine warme Jacke an. Im Garten liegen viele Äpfel. Mama backt einen Kuchen. Er schmeckt sehr gut.',
    diktat34: 'Im Herbst wird es früher dunkel. Die Zugvögel fliegen in den warmen Süden. Auf den Feldern ernten die Bauern Kartoffeln und Mais. Wir gehen mit unseren Laternen durch die Straßen und singen Lieder. Danach trinken wir heißen Tee und essen Kürbissuppe. Der Herbst ist bunt und gemütlich.',
    luecken: [['Im Herbst fallen die ___ von den Bäumen.', 'Blätter'], ['Der ___ fliegt hoch am Himmel.', 'Drachen'], ['Aus dem Kürbis kocht Papa eine ___.', 'Suppe'], ['Das ___ sammelt Nüsse für den Winter.', 'Eichhörnchen'], ['Bei Regen brauchen wir einen ___.', 'Regenschirm'], ['Im Wald finden wir braune ___.', 'Kastanien'], ['Am Abend gehen wir mit der ___ spazieren.', 'Laterne'], ['Die Bauern ernten im Herbst die ___.', 'Kartoffeln']],
    rechnen: [['-', '{n} sammelt {a} Kastanien. {Er} schenkt {b} Kastanien {sein} Schwester. Wie viele Kastanien hat {n} noch?', '{n} hat noch {c} Kastanien.'],
      ['x', 'Im Garten stehen {k} Apfelbäume. An jedem Baum hängen {g} Äpfel. Wie viele Äpfel sind es?', 'Es sind {c} Äpfel.'],
      ['+', 'Auf dem Weg liegen {a} rote und {b} gelbe Blätter. Wie viele Blätter sind es zusammen?', 'Es sind {c} Blätter.']] },
  halloween: { nom: 'Halloween', emoji: '🎃', loesung: 'KERZE',
    lesen12: { titre: 'Das Kürbisfest', texte: 'Heute ist Halloween. Nia und Paul verkleiden sich. Nia ist eine lustige Hexe. Paul ist ein kleines Gespenst. Papa schnitzt ein Gesicht in einen Kürbis. Am Abend leuchtet der Kürbis vor der Tür. Die Kinder lachen.',
      fragen: [['Als was ist Nia verkleidet?', 'Als lustige Hexe.'], ['Als was ist Paul verkleidet?', 'Als kleines Gespenst.'], ['Wer schnitzt den Kürbis?', 'Papa.']],
      rf: [['Heute ist Halloween.', 1], ['Nia ist ein Gespenst.', 0], ['Mama schnitzt den Kürbis.', 0], ['Der Kürbis leuchtet vor der Tür.', 1]] },
    lesen34: { titre: 'Die Party in der Schule', texte: 'Am Freitag feierte die Klasse 3b eine Halloweenparty. Alle Kinder kamen verkleidet in die Schule. Moussa trug ein schwarzes Fledermauskostüm mit großen Flügeln. Fatou hatte sich als freundliche Hexe verkleidet und trug einen spitzen Hut. Die Lehrerin hatte orange Luftballons aufgehängt. Zuerst spielten die Kinder Kürbis-Kegeln. Danach gab es Muffins mit Spinnen aus Schokolade. Zum Schluss wählten alle das lustigste Kostüm. Gewonnen hat Moussa.',
      fragen: [['Wann feierte die Klasse die Party?', 'Am Freitag.'], ['Was trug Fatou auf dem Kopf?', 'Einen spitzen Hut.'], ['Welche Farbe hatten die Luftballons?', 'Orange.'], ['Wer hatte das lustigste Kostüm?', 'Moussa.']],
      rf: [['Die Klasse 3b feierte eine Party.', 1], ['Moussa war als Gespenst verkleidet.', 0], ['Fatou war eine freundliche Hexe.', 1], ['Die Lehrerin hängte grüne Luftballons auf.', 0], ['Die Kinder spielten Kürbis-Kegeln.', 1], ['Es gab Pizza.', 0]] },
    diktat12: 'Bald ist Halloween. Wir holen einen großen Kürbis. Papa schneidet ein Gesicht hinein. Ich stelle eine Kerze in den Kürbis. Jetzt leuchtet er hell.',
    diktat34: 'Am Abend klingelten viele Kinder an unserer Tür. Sie trugen bunte Kostüme und riefen laut: „Süßes oder Saures!“ Meine Mutter füllte ihre Taschen mit Bonbons und Äpfeln. Ein kleiner Junge war als Kürbis verkleidet. Er bedankte sich freundlich und winkte uns zum Abschied. Das war ein lustiger Abend.',
    luecken: [['Papa schnitzt ein Gesicht in den ___.', 'Kürbis'], ['Nia trägt einen spitzen ___.', 'Hut'], ['Die ___ hat große Flügel.', 'Fledermaus'], ['Im Kürbis brennt eine ___.', 'Kerze'], ['Die Kinder tragen bunte ___.', 'Kostüme'], ['Die ___ fliegt auf ihrem Besen.', 'Hexe'], ['Das ___ trägt ein weißes Tuch.', 'Gespenst'], ['An der Tür bekommen wir ___.', 'Bonbons']],
    rechnen: [['-', '{n} hat {a} Bonbons. {Er} isst {b} Bonbons. Wie viele Bonbons hat {n} noch?', '{n} hat noch {c} Bonbons.'],
      ['x', 'An {k} Häusern bekommen die Kinder je {g} Äpfel. Wie viele Äpfel sind es?', 'Es sind {c} Äpfel.'],
      ['+', 'Auf dem Fest sind {a} Hexen und {b} Gespenster. Wie viele Kinder sind verkleidet?', 'Es sind {c} Kinder verkleidet.']] },
  winter: { nom: 'Winter', emoji: '⛄', loesung: 'SCHNEE',
    lesen12: { titre: 'Schnee!', texte: 'Heute Nacht hat es geschneit. Alles ist weiß. Yao zieht seine Mütze und seine Handschuhe an. Er geht mit Mia nach draußen. Die Kinder bauen einen Schneemann. Er bekommt eine Karotte als Nase. Danach trinken sie warmen Kakao.',
      fragen: [['Was zieht Yao an?', 'Seine Mütze und seine Handschuhe.'], ['Was bauen die Kinder?', 'Einen Schneemann.'], ['Was trinken die Kinder danach?', 'Warmen Kakao.']],
      rf: [['Heute Nacht hat es geregnet.', 0], ['Yao geht mit Mia nach draußen.', 1], ['Der Schneemann bekommt eine Karotte als Nase.', 1], ['Die Kinder trinken kalten Saft.', 0]] },
    lesen34: { titre: 'Der erste Schnee für Kwame', texte: 'Kwame kam im Sommer aus Ghana nach Stuttgart. Im Dezember sah er zum ersten Mal Schnee. Am Morgen schaute er aus dem Fenster und staunte: Die Dächer, die Autos und die Straße waren ganz weiß. Seine Nachbarin Lena lieh ihm einen Schlitten. Zusammen fuhren sie den kleinen Hügel hinter der Schule hinunter. Kwame lachte laut, weil der Schnee so kalt im Gesicht kitzelte. Am Nachmittag rief er seine Oma in Ghana an. „Oma, der Schnee ist wie Puderzucker!“, erzählte er.',
      fragen: [['Woher kommt Kwame?', 'Aus Ghana.'], ['In welchem Monat sah Kwame zum ersten Mal Schnee?', 'Im Dezember.'], ['Was lieh Lena ihm?', 'Einen Schlitten.'], ['Wen rief Kwame am Nachmittag an?', 'Seine Oma in Ghana.']],
      rf: [['Kwame kam im Winter nach Stuttgart.', 0], ['Die Dächer waren ganz weiß.', 1], ['Lena lieh Kwame einen Schlitten.', 1], ['Die Kinder fuhren hinter dem Bahnhof Schlitten.', 0], ['Kwame lachte laut.', 1], ['Kwame sagte: Der Schnee ist wie Salz.', 0]] },
    diktat12: 'Im Winter ist es kalt. Es schneit. Wir ziehen dicke Socken an. Ich baue mit meinem Bruder einen Schneemann. Er hat einen roten Schal.',
    diktat34: 'Im Winter friert der See im Park zu. Viele Familien laufen dann Schlittschuh. Die Kinder tragen dicke Jacken, Mützen und Handschuhe. Auf dem Weg nach Hause fallen dicke Schneeflocken vom Himmel. Zu Hause wärmen wir uns am Ofen und trinken heißen Kakao. Draußen glitzert der Schnee im Licht der Laternen.',
    luecken: [['Im Winter fällt weißer ___.', 'Schnee'], ['Der ___ hat eine Karotte als Nase.', 'Schneemann'], ['Mit dem ___ fahren wir den Hügel hinunter.', 'Schlitten'], ['Um den Hals trage ich einen warmen ___.', 'Schal'], ['An den Händen trage ich ___.', 'Handschuhe'], ['Auf dem See laufen wir ___.', 'Schlittschuh'], ['Nach dem Spielen trinken wir heißen ___.', 'Kakao'], ['Auf dem Kopf trage ich eine ___.', 'Mütze']],
    rechnen: [['x', '{n} baut {k} Schneemänner. Jeder Schneemann bekommt {g} Knöpfe. Wie viele Knöpfe braucht {n}?', '{n} braucht {c} Knöpfe.'],
      ['-', 'Auf dem Hügel sind {a} Kinder. {b} Kinder gehen nach Hause. Wie viele Kinder sind noch auf dem Hügel?', 'Es sind noch {c} Kinder auf dem Hügel.'],
      ['+', '{n} findet {a} rote und {b} blaue Handschuhe. Wie viele Handschuhe sind es zusammen?', 'Es sind {c} Handschuhe.']] },
  weihnachten: { nom: 'Weihnachten', emoji: '🎄', loesung: 'STERN',
    geschichte12: { titre: 'Die Weihnachtsgeschichte', texte: 'Maria und Josef gehen nach Betlehem. Der Weg ist lang. In der Stadt ist kein Platz für sie. Sie schlafen in einem Stall. Dort wird das Jesuskind geboren. Engel erzählen den Hirten davon. Die Hirten kommen und freuen sich.',
      fragen: [['Wohin gehen Maria und Josef?', 'Nach Betlehem.'], ['Wo schlafen sie?', 'In einem Stall.'], ['Wer erzählt den Hirten davon?', 'Engel.']],
      rf: [['Maria und Josef gehen nach Betlehem.', 1], ['In der Stadt ist viel Platz.', 0], ['Das Jesuskind wird im Stall geboren.', 1], ['Die Hirten bleiben zu Hause.', 0]] },
    geschichte34: { titre: 'Die Weihnachtsgeschichte', texte: 'Vor langer Zeit lebten Maria und Josef in der Stadt Nazaret. Der Kaiser befahl, dass sich alle Menschen in ihrer Heimatstadt zählen lassen mussten. Deshalb machten sich Maria und Josef auf den weiten Weg nach Betlehem. Maria erwartete ein Baby. Als sie endlich ankamen, waren alle Gasthäuser voll. Nur in einem Stall fanden sie einen Platz. In dieser Nacht wurde Jesus geboren. Maria legte ihn in eine Futterkrippe. Auf dem Feld hüteten Hirten ihre Schafe. Ein Engel erschien ihnen und sagte: „Fürchtet euch nicht! Heute ist der Retter geboren.“ Die Hirten liefen zum Stall und freuten sich über das Kind. Daran denken Christen jedes Jahr an Weihnachten.',
      fragen: [['In welcher Stadt lebten Maria und Josef?', 'In Nazaret.'], ['Warum gingen sie nach Betlehem?', 'Der Kaiser wollte alle Menschen zählen lassen.'], ['Wohin legte Maria das Kind?', 'In eine Futterkrippe.'], ['Was machten die Hirten auf dem Feld?', 'Sie hüteten ihre Schafe.']],
      rf: [['Maria und Josef wohnten in Betlehem.', 0], ['Alle Gasthäuser waren voll.', 1], ['Jesus wurde in einem Stall geboren.', 1], ['Maria legte das Kind in ein Bett.', 0], ['Ein Engel erschien den Hirten.', 1], ['Die Hirten blieben auf dem Feld.', 0]] },
    lesen12: { titre: 'Plätzchen backen', texte: 'Bald ist Weihnachten. Lena und Kofi backen mit Papa Plätzchen. Sie formen Sterne und Herzen. Kofi streut bunte Streusel auf den Teig. Dann kommen die Plätzchen in den Ofen. Die Küche riecht lecker.',
      fragen: [['Mit wem backen Lena und Kofi?', 'Mit Papa.'], ['Welche Formen machen sie?', 'Sterne und Herzen.'], ['Was streut Kofi auf den Teig?', 'Bunte Streusel.']],
      rf: [['Bald ist Ostern.', 0], ['Die Kinder backen mit Papa.', 1], ['Kofi streut Salz auf den Teig.', 0], ['Die Küche riecht lecker.', 1]] },
    lesen34: { titre: 'Der Adventskalender', texte: 'Am ersten Dezember hängte Mama für Nia einen selbst gemachten Adventskalender auf. Er bestand aus vierundzwanzig kleinen Säckchen an einer Schnur. Jeden Morgen durfte Nia ein Säckchen öffnen. Im ersten Säckchen lag ein kleiner Schneemann aus Holz. Am sechsten Dezember fand sie einen Zettel mit einem Rätsel. Die Lösung führte sie zu einem Buch unter ihrem Bett. Nia freute sich jeden Tag auf das nächste Säckchen. Am einundzwanzigsten Dezember zählte sie: Es waren nur noch drei Tage bis Heiligabend.',
      fragen: [['Wer hängte den Adventskalender auf?', 'Mama.'], ['Wie viele Säckchen hatte der Kalender?', 'Vierundzwanzig.'], ['Was lag im ersten Säckchen?', 'Ein kleiner Schneemann aus Holz.'], ['Wo lag das Buch?', 'Unter ihrem Bett.']],
      rf: [['Der Kalender hing ab dem ersten Dezember.', 1], ['Nia durfte jeden Abend ein Säckchen öffnen.', 0], ['Im ersten Säckchen lag ein Schneemann.', 1], ['Am sechsten Dezember fand Nia einen Ball.', 0], ['Das Buch lag unter dem Bett.', 1], ['Am einundzwanzigsten Dezember waren es noch fünf Tage bis Heiligabend.', 0]] },
    diktat12: 'Im Dezember ist es kalt. Wir schmücken den Tannenbaum. Er hat rote Kugeln. Oben ist ein Stern. Wir singen Lieder.',
    diktat34: 'In der Adventszeit leuchten in vielen Fenstern helle Lichter. Auf dem Weihnachtsmarkt riecht es nach gebrannten Mandeln und Kinderpunsch. Wir kaufen kleine Geschenke für unsere Familie und packen sie in buntes Papier. Zu Hause backen wir Plätzchen und schreiben Karten an unsere Verwandten in Kamerun. Am Abend zünden wir eine Kerze am Adventskranz an.',
    luecken: [['Am Tannenbaum hängen rote ___.', 'Kugeln'], ['Oben auf dem Baum leuchtet ein ___.', 'Stern'], ['Wir backen leckere ___.', 'Plätzchen'], ['Jeden Tag öffne ich ein Türchen am ___.', 'Adventskalender'], ['Die Geschenke packen wir in buntes ___.', 'Papier'], ['Auf dem ___ kaufen wir gebrannte Mandeln.', 'Weihnachtsmarkt'], ['Am Adventskranz brennt eine ___.', 'Kerze'], ['Unter dem Baum liegen viele ___.', 'Geschenke']],
    rechnen: [['x', '{n} backt {k} Bleche Plätzchen. Auf jedem Blech liegen {g} Plätzchen. Wie viele Plätzchen sind es?', 'Es sind {c} Plätzchen.'],
      ['+', 'Am Baum hängen {a} rote und {b} goldene Kugeln. Wie viele Kugeln sind es?', 'Es sind {c} Kugeln.'],
      ['-', '{n} hat {a} Euro gespart. {Er} kauft ein Geschenk für {b} Euro. Wie viel Geld hat {n} noch?', '{n} hat noch {c} Euro.']] },
  fasching: { nom: 'Fasching', emoji: '🎭', loesung: 'MASKE',
    lesen12: { titre: 'Wir feiern Fasching', texte: 'Heute ist Fasching. Awa ist ein bunter Papagei. Jonas ist ein Pirat mit einer Augenklappe. In der Schule gibt es eine Feier. Die Kinder tanzen und werfen Konfetti. Es gibt Berliner zum Essen.',
      fragen: [['Als was ist Awa verkleidet?', 'Als bunter Papagei.'], ['Was hat Jonas über dem Auge?', 'Eine Augenklappe.'], ['Was werfen die Kinder?', 'Konfetti.']],
      rf: [['Heute ist Fasching.', 1], ['Jonas ist ein Papagei.', 0], ['Die Kinder tanzen.', 1], ['Es gibt Pizza zum Essen.', 0]] },
    lesen34: { titre: 'Der Umzug', texte: 'Am Rosenmontag fuhr Familie Diallo in die Stadt. Dort fand ein großer Faschingsumzug statt. Bunte Wagen rollten langsam durch die Straßen. Auf einem Wagen stand ein riesiger Drache aus Pappe. Musiker spielten laut auf Trommeln und Trompeten. Die Narren warfen Bonbons und kleine Schokoriegel in die Menge. Moussa fing so viele Bonbons, dass seine Tasche voll war. Seine kleine Schwester trug ein Marienkäferkostüm und tanzte zur Musik. Erst am Abend fuhr die Familie müde, aber glücklich nach Hause.',
      fragen: [['An welchem Tag fuhr Familie Diallo in die Stadt?', 'Am Rosenmontag.'], ['Was stand auf einem Wagen?', 'Ein riesiger Drache aus Pappe.'], ['Was warfen die Narren?', 'Bonbons und kleine Schokoriegel.'], ['Welches Kostüm trug Moussas Schwester?', 'Ein Marienkäferkostüm.']],
      rf: [['Der Umzug war in der Stadt.', 1], ['Die Wagen fuhren sehr schnell.', 0], ['Musiker spielten auf Trommeln und Trompeten.', 1], ['Moussas Tasche blieb leer.', 0], ['Die Schwester tanzte zur Musik.', 1], ['Die Familie fuhr am Morgen nach Hause.', 0]] },
    diktat12: 'Bald ist Fasching. Ich bin ein Clown. Ich habe eine rote Nase. Meine Schwester ist eine Katze. Wir tanzen und lachen viel.',
    diktat34: 'In der Faschingszeit verkleiden sich viele Menschen. In Baden-Württemberg heißt das Fest oft Fasnet. Manche Narren tragen Masken aus Holz und ein Kostüm mit Glöckchen. Beim Umzug springen sie durch die Straßen und rufen laute Sprüche. Die Kinder am Straßenrand sammeln Bonbons. Am Aschermittwoch ist die bunte Zeit vorbei.',
    luecken: [['Jonas trägt eine ___ über dem Auge.', 'Augenklappe'], ['Die Kinder werfen buntes ___.', 'Konfetti'], ['Der Clown hat eine rote ___.', 'Nase'], ['Beim Umzug fahren bunte ___ durch die Straßen.', 'Wagen'], ['Die Narren tragen eine ___ aus Holz.', 'Maske'], ['Zum Fasching essen wir einen ___.', 'Berliner'], ['Awa ist als bunter ___ verkleidet.', 'Papagei'], ['Die Musiker spielen laut auf der ___.', 'Trommel']],
    rechnen: [['-', '{n} fängt beim Umzug {a} Bonbons. {Er} schenkt {b} Bonbons {seinem} Freund. Wie viele Bonbons hat {n} noch?', '{n} hat noch {c} Bonbons.'],
      ['x', 'Beim Umzug fahren {k} Wagen. Auf jedem Wagen stehen {g} Narren. Wie viele Narren sind es?', 'Es sind {c} Narren.'],
      ['+', 'Im Saal tanzen {a} Clowns und {b} Piraten. Wie viele Kinder tanzen?', 'Es tanzen {c} Kinder.']] },
  fruehling: { nom: 'Frühling', emoji: '🌷', loesung: 'BLUME',
    lesen12: { titre: 'Der Frühling ist da', texte: 'Die Sonne scheint warm. Im Garten blühen die ersten Blumen. Mia sieht gelbe Tulpen und weiße Schneeglöckchen. Ein Vogel baut ein Nest im Baum. Kofi pflanzt mit Oma Tomaten. Die Kinder spielen draußen.',
      fragen: [['Welche Blumen sieht Mia?', 'Gelbe Tulpen und weiße Schneeglöckchen.'], ['Was baut der Vogel?', 'Ein Nest.'], ['Was pflanzt Kofi mit Oma?', 'Tomaten.']],
      rf: [['Die Sonne scheint warm.', 1], ['Mia sieht rote Tulpen.', 0], ['Ein Vogel baut ein Nest.', 1], ['Kofi pflanzt mit Opa Kartoffeln.', 0]] },
    lesen34: { titre: 'Das Beet der Klasse 4a', texte: 'Im April legte die Klasse 4a im Schulgarten ein Beet an. Zuerst lockerten die Kinder die Erde mit kleinen Schaufeln. Danach säten sie Radieschen, Erbsen und Sonnenblumen. Nia schrieb für jede Reihe ein kleines Schild. Jeden Morgen goss ein anderes Kind die Pflanzen. Nach zwei Wochen sahen die Kinder die ersten grünen Spitzen. Ende Mai ernteten sie die Radieschen und machten daraus ein Brot mit Quark. Die Sonnenblumen brauchten länger. Im Sommer waren sie größer als die Kinder.',
      fragen: [['In welchem Monat legte die Klasse das Beet an?', 'Im April.'], ['Was säten die Kinder?', 'Radieschen, Erbsen und Sonnenblumen.'], ['Was schrieb Nia?', 'Für jede Reihe ein kleines Schild.'], ['Was ernteten die Kinder Ende Mai?', 'Die Radieschen.']],
      rf: [['Die Klasse 4a legte ein Beet an.', 1], ['Die Kinder lockerten die Erde mit großen Spaten.', 0], ['Jeden Morgen goss ein anderes Kind die Pflanzen.', 1], ['Nach zwei Tagen sahen sie grüne Spitzen.', 0], ['Aus den Radieschen machten sie ein Brot mit Quark.', 1], ['Die Sonnenblumen blieben klein.', 0]] },
    diktat12: 'Im Frühling wird es warm. Die Vögel singen. Auf der Wiese blühen Blumen. Ich pflücke einen Strauß für Mama. Sie freut sich sehr.',
    diktat34: 'Im Frühling erwacht die Natur. An den Bäumen wachsen frische grüne Blätter. Die Bienen fliegen von Blüte zu Blüte und sammeln Nektar. Auf den Wiesen hüpfen kleine Lämmer. Die Kinder holen ihre Fahrräder aus dem Keller und fahren in den Park. Endlich können wir wieder lange draußen spielen.',
    luecken: [['Im Frühling blühen die ___.', 'Blumen'], ['Der Vogel baut ein ___ im Baum.', 'Nest'], ['Die ___ sammelt Nektar.', 'Biene'], ['Kofi gießt die Pflanzen mit der ___.', 'Gießkanne'], ['Auf der Wiese hüpft ein kleines ___.', 'Lamm'], ['Die ___ scheint warm.', 'Sonne'], ['Im Garten säen wir ___.', 'Radieschen'], ['Mit dem ___ fahren wir in den Park.', 'Fahrrad']],
    rechnen: [['x', '{n} pflanzt {k} Reihen Tulpen. In jeder Reihe sind {g} Tulpen. Wie viele Tulpen sind es?', 'Es sind {c} Tulpen.'],
      ['-', '{n} pflückt {a} Blumen. {Er} schenkt {b} Blumen {sein} Mama. Wie viele Blumen hat {n} noch?', '{n} hat noch {c} Blumen.'],
      ['+', 'Im Park fahren {a} Kinder Fahrrad und {b} Kinder Roller. Wie viele Kinder sind es?', 'Es sind {c} Kinder.']] },
  ostern: { nom: 'Ostern', emoji: '🐣', loesung: 'HASE',
    geschichte12: { titre: 'Die Ostergeschichte', texte: 'Jesus kommt nach Jerusalem. Er reitet auf einem Esel. Die Menschen freuen sich. Sie winken mit Palmzweigen. Später stirbt Jesus am Kreuz. Seine Freunde sind sehr traurig. Am Ostermorgen ist das Grab leer. Jesus lebt! Darüber freuen sich Christen an Ostern.',
      fragen: [['Worauf reitet Jesus?', 'Auf einem Esel.'], ['Womit winken die Menschen?', 'Mit Palmzweigen.'], ['Was ist am Ostermorgen?', 'Das Grab ist leer.']],
      rf: [['Jesus reitet auf einem Pferd.', 0], ['Die Menschen freuen sich.', 1], ['Am Ostermorgen ist das Grab leer.', 1], ['An Ostern sind die Christen traurig.', 0]] },
    geschichte34: { titre: 'Die Ostergeschichte', texte: 'Jesus zog mit seinen Freunden, den Jüngern, nach Jerusalem. Er ritt auf einem Esel in die Stadt. Viele Menschen jubelten ihm zu und legten Palmzweige auf den Weg. Am Abend vor seinem Tod aß Jesus ein letztes Mal mit seinen Jüngern. Er teilte das Brot und den Wein mit ihnen. Am nächsten Tag wurde Jesus verurteilt und starb am Kreuz. Seine Freunde waren sehr traurig. Am dritten Tag gingen einige Frauen früh am Morgen zum Grab. Der große Stein vor dem Grab war weggerollt und das Grab war leer. Ein Engel sagte: „Jesus lebt!“ An Ostern feiern Christen dieses Fest der Freude.',
      fragen: [['Wohin zog Jesus mit seinen Jüngern?', 'Nach Jerusalem.'], ['Was legten die Menschen auf den Weg?', 'Palmzweige.'], ['Was teilte Jesus beim Abendessen?', 'Das Brot und den Wein.'], ['Was sahen die Frauen am dritten Tag?', 'Der Stein war weggerollt und das Grab war leer.']],
      rf: [['Jesus ritt auf einem Esel.', 1], ['Die Menschen waren wütend.', 0], ['Jesus aß mit seinen Jüngern.', 1], ['Die Frauen gingen am Abend zum Grab.', 0], ['Das Grab war leer.', 1], ['An Ostern sind die Christen traurig.', 0]] },
    lesen12: { titre: 'Eier bemalen', texte: 'Bald ist Ostern. Amara und Jonas bemalen Eier. Amara malt ihr Ei blau an. Jonas malt Punkte und Streifen. Oma legt die Eier in ein Körbchen. Am Sonntag suchen die Kinder die Eier im Garten.',
      fragen: [['Was machen Amara und Jonas?', 'Sie bemalen Eier.'], ['Welche Farbe hat Amaras Ei?', 'Blau.'], ['Wo suchen die Kinder die Eier?', 'Im Garten.']],
      rf: [['Bald ist Weihnachten.', 0], ['Jonas malt Punkte und Streifen.', 1], ['Opa legt die Eier in ein Körbchen.', 0], ['Am Sonntag suchen die Kinder die Eier.', 1]] },
    lesen34: { titre: 'Die Eiersuche', texte: 'Am Ostersonntag lud Familie Mensah die Nachbarskinder zu einer Eiersuche ein. Herr Mensah hatte im Garten dreißig bunte Eier versteckt. Manche lagen unter Büschen, andere hinter dem Gartenhaus oder im hohen Gras. Die Kinder bekamen kleine Körbe und liefen los. Paul fand ein goldenes Ei im Blumentopf. Awa entdeckte gleich drei Eier unter der Bank. Nach einer halben Stunde zählten alle ihre Eier. Es fehlte nur noch ein einziges Ei. Am Abend fand der Hund es unter der Hecke.',
      fragen: [['Wann war die Eiersuche?', 'Am Ostersonntag.'], ['Wie viele Eier hatte Herr Mensah versteckt?', 'Dreißig.'], ['Wo fand Paul das goldene Ei?', 'Im Blumentopf.'], ['Wer fand das letzte Ei?', 'Der Hund.']],
      rf: [['Familie Mensah lud die Nachbarskinder ein.', 1], ['Herr Mensah versteckte zwanzig Eier.', 0], ['Die Kinder bekamen kleine Körbe.', 1], ['Awa fand drei Eier unter der Bank.', 1], ['Nach einer Stunde zählten alle ihre Eier.', 0], ['Das letzte Ei lag im Teich.', 0]] },
    diktat12: 'Im Frühling ist Ostern. Wir färben bunte Eier. Der Hase hüpft über die Wiese. Ich suche Eier im Gras. Ich finde ein rotes Ei.',
    diktat34: 'Zu Ostern schmücken viele Familien einen Strauch mit bunten Eiern. Die Kinder blasen die Eier vorsichtig aus und bemalen sie mit Pinsel und Farbe. Am Ostermorgen beginnt die Suche im Garten. Hinter Steinen und Blumentöpfen liegen Schokoladenhasen und kleine Geschenke. Danach frühstückt die ganze Familie zusammen. Es gibt frisches Brot, gekochte Eier und einen Hefezopf.',
    luecken: [['Zu Ostern bemalen wir bunte ___.', 'Eier'], ['Der ___ hüpft über die Wiese.', 'Hase'], ['Die Eier liegen in einem ___.', 'Körbchen'], ['Wir suchen die Eier im ___.', 'Garten'], ['Paul findet ein goldenes Ei im ___.', 'Blumentopf'], ['Mit dem ___ male ich Streifen auf das Ei.', 'Pinsel'], ['Zum Frühstück gibt es frisches ___.', 'Brot'], ['Im Frühling blüht die erste ___.', 'Tulpe']],
    rechnen: [['-', '{n} findet {a} Eier. {Er} gibt {b} Eier {sein} Schwester. Wie viele Eier hat {n} noch?', '{n} hat noch {c} Eier.'],
      ['x', 'Im Korb liegen {k} Reihen mit je {g} Eiern. Wie viele Eier sind es?', 'Es sind {c} Eier.'],
      ['+', '{a} Eier sind blau und {b} Eier sind gelb. Wie viele Eier sind es zusammen?', 'Es sind {c} Eier.']] },
  sommer: { nom: 'Sommer', emoji: '☀️', loesung: 'SONNE',
    lesen12: { titre: 'Ferien bei Oma', texte: 'Endlich sind Ferien. Fatou fliegt mit Mama nach Senegal. Dort wohnt ihre Oma. Es ist sehr heiß. Fatou geht mit Oma auf den Markt. Sie kaufen Mangos und Fisch. Am Abend gehen sie zum Meer.',
      fragen: [['Wohin fliegt Fatou?', 'Nach Senegal.'], ['Was kaufen sie auf dem Markt?', 'Mangos und Fisch.'], ['Wohin gehen sie am Abend?', 'Zum Meer.']],
      rf: [['Fatou fliegt mit Papa.', 0], ['Es ist sehr heiß.', 1], ['Sie kaufen Äpfel.', 0], ['Am Abend gehen sie zum Meer.', 1]] },
    lesen34: { titre: 'Ein Tag im Freibad', texte: 'In den Sommerferien war es sehr heiß. Deshalb fuhren Jonas und Yao mit dem Fahrrad ins Freibad. Zuerst cremten sie sich gut mit Sonnencreme ein. Dann sprangen sie ins kühle Wasser. Yao traute sich zum ersten Mal vom Dreimeterbrett. Jonas klatschte laut, als sein Freund wieder auftauchte. Mittags aßen die beiden Pommes und ein Eis mit Erdbeergeschmack. Am Nachmittag spielten sie Volleyball auf der Wiese. Erst als die Sonne unterging, fuhren sie nach Hause.',
      fragen: [['Womit fuhren die Jungen ins Freibad?', 'Mit dem Fahrrad.'], ['Was machten sie zuerst?', 'Sie cremten sich mit Sonnencreme ein.'], ['Was traute sich Yao zum ersten Mal?', 'Vom Dreimeterbrett springen.'], ['Was spielten sie am Nachmittag?', 'Volleyball.']],
      rf: [['In den Ferien war es kalt.', 0], ['Die Jungen fuhren mit dem Bus.', 0], ['Yao sprang vom Dreimeterbrett.', 1], ['Jonas klatschte laut.', 1], ['Das Eis hatte Schokoladengeschmack.', 0], ['Sie fuhren nach Hause, als die Sonne unterging.', 1]] },
    diktat12: 'Im Sommer ist es heiß. Wir gehen ins Schwimmbad. Ich springe ins Wasser. Danach essen wir ein Eis. Das macht Spaß.',
    diktat34: 'Im Sommer sind die Tage lang und warm. Viele Familien fahren in den Urlaub ans Meer oder in die Berge. Am Strand bauen die Kinder große Sandburgen. Sie sammeln Muscheln und suchen kleine Krebse. Wer in der Sonne spielt, braucht einen Hut und viel Wasser. Am Abend grillen wir im Garten und schauen die Sterne an.',
    luecken: [['Im Sommer scheint die ___.', 'Sonne'], ['Am Strand bauen wir eine ___.', 'Sandburg'], ['Im Freibad springen wir ins ___.', 'Wasser'], ['Gegen die Sonne trage ich einen ___.', 'Hut'], ['Auf dem Markt kaufen wir süße ___.', 'Mangos'], ['Am Strand finden wir schöne ___.', 'Muscheln'], ['Zum Nachtisch gibt es ein kaltes ___.', 'Eis'], ['Am Abend sehen wir die ___ am Himmel.', 'Sterne']],
    rechnen: [['x', 'Eine Kugel Eis kostet {g} Euro. {n} kauft {k} Kugeln. Wie viel muss {n} bezahlen?', '{n} muss {c} Euro bezahlen.'],
      ['-', '{n} sammelt {a} Muscheln. {Er} verliert {b} Muscheln. Wie viele Muscheln hat {n} noch?', '{n} hat noch {c} Muscheln.'],
      ['+', 'Im Freibad sind {a} Kinder im Wasser und {b} Kinder auf der Wiese. Wie viele Kinder sind es?', 'Es sind {c} Kinder.']] },
  fussball: { nom: 'Fußball', emoji: '⚽', loesung: 'ELFMETER',
    lesen12: { titre: 'Das Spiel', texte: 'Heute spielt Kwame Fußball. Seine Mannschaft hat gelbe Trikots. Kwame ist schnell. Er läuft mit dem Ball zum Tor. Er schießt. Tor! Alle jubeln. Am Ende steht es drei zu eins.',
      fragen: [['Welche Farbe haben die Trikots?', 'Gelb.'], ['Wohin läuft Kwame mit dem Ball?', 'Zum Tor.'], ['Wie steht es am Ende?', 'Drei zu eins.']],
      rf: [['Kwame spielt Basketball.', 0], ['Kwame ist schnell.', 1], ['Die Trikots sind rot.', 0], ['Alle jubeln.', 1]] },
    lesen34: { titre: 'Das Turnier', texte: 'Am Samstag fand auf dem Sportplatz ein Fußballturnier statt. Acht Mannschaften aus verschiedenen Schulen spielten mit. Amara war die Torhüterin ihrer Mannschaft. Im ersten Spiel hielt sie einen Elfmeter. Ihre Freundin Mia schoss zwei Tore. Im Halbfinale war es sehr spannend, weil es lange unentschieden stand. In der letzten Minute traf Paul mit einem Kopfball. Das Finale verlor die Mannschaft knapp mit eins zu zwei. Trotzdem freuten sich alle über den zweiten Platz und einen silbernen Pokal.',
      fragen: [['Wo fand das Turnier statt?', 'Auf dem Sportplatz.'], ['Wie viele Mannschaften spielten mit?', 'Acht.'], ['Was hielt Amara im ersten Spiel?', 'Einen Elfmeter.'], ['Welchen Platz erreichte die Mannschaft?', 'Den zweiten Platz.']],
      rf: [['Das Turnier war am Sonntag.', 0], ['Amara war die Torhüterin.', 1], ['Mia schoss drei Tore.', 0], ['Paul traf mit einem Kopfball.', 1], ['Das Finale gewann die Mannschaft.', 0], ['Die Mannschaft bekam einen silbernen Pokal.', 1]] },
    diktat12: 'Ich spiele gern Fußball. Mein Ball ist rund. Ich schieße ihn ins Tor. Mein Freund hält den Ball. Wir lachen und spielen weiter.',
    diktat34: 'Jeden Dienstag trainiert unsere Mannschaft auf dem Sportplatz. Zuerst laufen wir zwei Runden zum Aufwärmen. Danach üben wir Pässe und Torschüsse. Unser Trainer ruft: „Spielt euch den Ball zu!“ Am Wochenende haben wir ein wichtiges Spiel gegen die Nachbarschule. Wir wollen fair spielen und hoffen auf einen Sieg.',
    luecken: [['Kwame schießt den Ball ins ___.', 'Tor'], ['Die Mannschaft trägt gelbe ___.', 'Trikots'], ['Die ___ hält den Elfmeter.', 'Torhüterin'], ['Am Ende bekommen wir einen ___.', 'Pokal'], ['Der ___ pfeift das Spiel an.', 'Schiedsrichter'], ['Der ___ ist rund.', 'Ball'], ['Wir spielen auf dem ___.', 'Sportplatz'], ['Unser ___ ruft: „Lauft schneller!“', 'Trainer']],
    rechnen: [['+', 'Im Stadion sitzen {a} Fans in Gelb und {b} Fans in Blau. Wie viele Fans sind es?', 'Es sind {c} Fans.'],
      ['x', 'Beim Turnier spielen {k} Mannschaften. Jede Mannschaft hat {g} Kinder. Wie viele Kinder spielen mit?', 'Es spielen {c} Kinder mit.'],
      ['-', '{n} hat {a} Fußballkarten. {Er} tauscht {b} Karten. Wie viele Karten hat {n} noch?', '{n} hat noch {c} Karten.']] }
};

// Mots « intrus » pour les Kuckuckswörter (ils ne vont dans aucune phrase).
const INTRUS = { A: ['Ananas'], B: ['Bagger', 'Bohrer'], C: ['Computer'], E: ['Elefant', 'Echse'], F: ['Feuerwehrauto'], G: ['Gabel'], H: ['Hammer', 'Hubschrauber'],
  I: ['Insel'], K: ['Kühlschrank', 'Krokodil'], L: ['Lineal'], M: ['Motorrad', 'Mixer'], N: ['Nudel', 'Nashorn'], O: ['Ozean'], R: ['Rakete', 'Radiergummi'],
  S: ['Staubsauger', 'Schraube'], T: ['Traktor', 'Toaster'], U: ['Unterhose'], Z: ['Zahnbürste'] };

const UEBUNGEN = { lesen: 'Lesetext mit Fragen', geschichte: 'Die Geschichte zum Fest', luecken: 'Lückensätze / Lückentext', kuckuck: 'Ein Wort zu viel (Lösungswort)', fehler: 'Fehlertext', diktat: 'Diktat', rechnen: 'Rechengeschichten' };

function remplir(modele, p, v) {
  return modele.replace(/\{n\}/g, p.n).replace(/\{Er\}/g, p.Er).replace(/\{er\}/g, p.er).replace(/\{sein\}/g, p.sein).replace(/\{seinem\}/g, p.seinem)
    .replace(/\{a\}/g, v.a).replace(/\{b\}/g, v.b).replace(/\{c\}/g, v.c).replace(/\{k\}/g, v.k).replace(/\{g\}/g, v.g);
}

// Crée des fautes d'orthographe typiques dans un texte juste (pour le Fehlertext).
function fauter(r, texte, nb) {
  const mots = texte.split(' ');
  const regles = [
    (m, debut) => (!debut && /^[A-ZÄÖÜ][a-zäöüß]{2,}/.test(m)) ? m[0].toLowerCase() + m.slice(1) : null, // Nomen klein
    m => /ie/.test(m) ? m.replace('ie', 'i') : null,
    m => /ß/.test(m) ? m.replace('ß', 's') : null,
    m => /(mm|nn|ll|tt|pp|ff|rr)/.test(m) ? m.replace(/(mm|nn|ll|tt|pp|ff|rr)/, x => x[0]) : null,
    m => /ck/.test(m) ? m.replace('ck', 'k') : null,
    m => /[aeouäöü]h[lmnrt]/.test(m) ? m.replace(/([aeouäöü])h([lmnrt])/, '$1$2') : null
  ];
  const cand = [];
  mots.forEach((m, i) => {
    const debut = i === 0 || /[.!?“:]$/.test(mots[i - 1]) || /^„/.test(m);
    const possibles = regles.map(f => f(m, debut)).filter(x => x && x !== m && !/schi(ß|ss|s)/i.test(x)); // évite les mots grossiers
    if (possibles.length && m.replace(/[^\wäöüÄÖÜß]/g, '').length >= 3) cand.push([i, possibles]);
  });
  const choisis = melanger(r, cand).slice(0, nb);
  const faux = mots.slice(), idx = new Set();
  choisis.forEach(([i, p]) => { faux[i] = choisir(r, p); idx.add(i); });
  return { faux: faux.join(' '), juste: mots.map((m, i) => idx.has(i) ? `<b class="rep">${m}</b>` : m).join(' '), nb: choisis.length };
}

// Texte selon la Klasse : K1 = *1, K2 = *12, K3 = *34, K4 = *4
function texteK(T, base, k) { return T[base + (k == 1 ? '1' : k == 2 ? '12' : k == 3 ? '34' : '4')] || T[base + (k <= 2 ? '12' : '34')]; }
const nbMots = t => t.split(/\s+/).filter(w => /[A-Za-zÄÖÜäöüß]/.test(w)).length;
const cercle = n => `<span class="num">${n}</span>`;
const section = (n, t) => `<h3 class="sous">${cercle(n)} ${t}</h3>`;

function genThema(r, o) {
  const T = THEMEN[o.thema], k = +o.klasse, u = o.uebung;
  const tete = `${T.emoji} ${T.nom}`;
  if (u === 'lesen' || u === 'geschichte') {
    const L = u === 'geschichte' && T.geschichte12 ? T[k <= 2 ? 'geschichte12' : 'geschichte34'] : texteK(T, 'lesen', k);
    const lignes = k == 1 ? '<i></i>' : '<i></i><i></i>';
    return { titre: L.titre, sur: tete, consigne: k == 1 ? 'Lies den Text. Beantworte die Fragen. Kreuze an.' : 'Lies den Text. Beantworte die Fragen. Kreuze an: richtig oder falsch?', audio: L.texte, aide: 't_lesen',
      rendu: sol => `<div class="cadre lesetexte k${nbMots(L.texte) > 100 ? 4 : k}">${L.texte}</div>
        <div class="deux-cols"><div class="bloc">${section(1, 'Fragen')}${L.fragen.map(([q, a]) => `<p class="q">${q}</p>${sol ? `<p class="rep">${a}</p>` : `<div class="lignes-ecr">${lignes}</div>`}`).join('')}</div>
        <div class="bloc">${section(2, 'Richtig oder falsch?')}<table class="rf"><tr><th></th><th>richtig</th><th>falsch</th></tr>${L.rf.map(([x, v]) => `<tr><td>${x}</td><td>${sol && v ? '<b class="rep">✗</b>' : '<span class="rond"></span>'}</td><td>${sol && !v ? '<b class="rep">✗</b>' : '<span class="rond"></span>'}</td></tr>`).join('')}</table></div></div>` };
  }
  if (u === 'luecken' && k >= 3) {      // Lückentext : texte suivi avec trous (Klasse 3 et 4)
    const t = texteK(T, 'diktat', k), mots = t.split(' '), nb = k == 3 ? 8 : 10;
    const nu = m => m.replace(/[.,!?]$/, ''), freq = {};
    mots.forEach(m => { freq[nu(m)] = (freq[nu(m)] || 0) + 1; });
    const cand = mots.map((m, i) => [m, i]).filter(([m, i]) => i > 0 && !/[.!?“:]$/.test(mots[i - 1]) && /^[A-ZÄÖÜ][a-zäöüß]{4,}[.,!?]?$/.test(m)
      && !/^(Herr|Herrn|Frau)$/.test(nu(m)) && !/^(Herr|Herrn|Frau),?$/.test(mots[i - 1]) && freq[nu(m)] === 1 && !PRENOMS.some(p => p[0] === nu(m)));
    const choix = [];
    melanger(r, cand).forEach(c => { if (choix.length < nb && !choix.some(x => Math.abs(x[1] - c[1]) < 2)) choix.push(c); });
    choix.sort((x, y) => x[1] - y[1]);
    const trous = new Map(choix.map(([m, i]) => [i, m.replace(/[.,!?]$/, '')]));
    const banque = melanger(r, [...trous.values()]);
    return { titre: 'Lückentext', sur: tete, consigne: 'Welche Wörter gehören in die Lücken? Setze ein.', aide: 't_luecken',
      rendu: sol => `<div class="banque"><span class="etiquette">Setze ein</span>${banque.join(' · ')}</div>
        <div class="cadre lesetexte texte-trous">${mots.map((m, i) => trous.has(i) ? (sol ? `<span class="rep">${trous.get(i)}</span>` : '<span class="ligne"></span>') + m.slice(trous.get(i).length) : m).join(' ')}</div>
        ${section(2, 'Schreibe zwei eigene Sätze mit Wörtern aus dem Kasten.')}${sol ? '<p class="petitnote">Eigene Lösung. Achte auf Großschreibung und Satzzeichen.</p>' : '<div class="lignes-ecr longues"><i></i><i></i><i></i><i></i></div>'}` };
  }
  if (u === 'luecken') {
    const ph = melanger(r, T.luecken).slice(0, k == 1 ? 5 : 8), banque = melanger(r, ph.map(x => x[1]));
    return { titre: 'Lückensätze', sur: tete, consigne: 'Welches Wort passt in die Lücke? Schreibe es auf.', aide: 't_luecken',
      rendu: sol => `<div class="banque"><span class="etiquette">Wörter</span>${banque.join(' · ')}</div><div class="liste-num">${ph.map(([x, w], i) => `<div class="item">${cercle(i + 1)}<p>${x.replace('___', sol ? `<span class="rep">${w}</span>` : '<span class="ligne"></span>')}</p></div>`).join('')}</div>` };
  }
  if (u === 'kuckuck') {
    const mot = T.loesung;
    // Klasse 2 : phrases courtes ; Klasse 3/4 : phrases du texte de lecture
    let source = T.luecken.map(x => x[0].replace('___', x[1]));
    if (k >= 3) { const L = texteK(T, 'lesen', k); const ps = L.texte.match(/[^.!?]+[.!?]/g).map(x => x.trim()).filter(x => !/[„“:]/.test(x) && x.split(' ').length >= 5 && x.split(' ').length <= 14); if (ps.length >= mot.length) source = ps; }
    const ph = melanger(r, source).slice(0, mot.length);
    const items = [...mot].map((lettre, i) => {
      const phrase = ph[i % ph.length].split(' ');
      const intrus = choisir(r, INTRUS[lettre]), pos = entre(r, 1, phrase.length - 1);
      return { mots: phrase, intrus, pos };
    });
    return { titre: 'Ein Wort zu viel', sur: tete, consigne: 'In jedem Satz ist ein Wort zu viel. Streiche es durch. Schreibe seinen ersten Buchstaben in das Kästchen.', aide: 't_kuckuck',
      rendu: sol => `<div class="exemple"><b>Beispiel:</b> Im Garten <s>Gabel</s> blüht eine Rose. → G</div><div class="liste-num">${items.map((x, i) => { const m = x.mots.slice(); m.splice(x.pos, 0, sol ? `<s class="rep">${x.intrus}</s>` : x.intrus); return `<div class="item">${cercle(i + 1)}<p>${m.join(' ')}</p></div>`; }).join('')}</div>
        <p class="q">Lösungswort:</p><div class="cases-mot">${[...mot].map((l, i) => `<span><span class="case grande">${sol ? `<b class="rep">${l}</b>` : ''}</span><small>${i + 1}</small></span>`).join('')}</div>` };
  }
  if (u === 'fehler') {
    const f = fauter(r, texteK(T, 'diktat', k), k == 2 ? 5 : k == 3 ? 8 : 10);
    return { titre: 'Fehlertext', sur: tete, consigne: `In diesem Text sind ${f.nb} Fehler. Unterstreiche sie. Schreibe den Text dann richtig ab.`, aide: 't_fehler',
      rendu: sol => `<div class="cadre lesetexte">${sol ? f.juste : f.faux}</div>${sol ? '' : '<div class="lignes-ecr longues">' + '<i></i>'.repeat(k == 2 ? 7 : k == 3 ? 10 : 11) + '</div>'}` };
  }
  if (u === 'diktat') {
    if (k == 1) {
      const [mots, phrases] = T.diktat1, texte = mots.join('. ') + '. ' + phrases.join(' ');
      return { titre: 'Wörterdiktat', sur: tete, consigne: 'Hör gut zu. Schreibe die Wörter und die Sätze auf.', audio: texte, lent: true, aide: 't_diktat',
        vorlesen: { titre: `${tete}: Wörterdiktat – Text zum Vorlesen`, html: `<div class="cadre"><p><b>Wörter:</b> ${mots.join(' · ')}</p><p><b>Sätze:</b> ${phrases.join(' ')}</p></div>` },
        rendu: sol => `${section(1, 'Wörter')}<div class="grille col2 mots-diktat">${mots.map((m, i) => `<div class="item">${cercle(i + 1)}${sol ? `<span class="rep grand">${m}</span>` : '<span class="lineatur"></span>'}</div>`).join('')}</div>
          ${section(2, 'Sätze')}${phrases.map((p, i) => `<div class="item">${cercle(i + 1)}${sol ? `<span class="rep grand">${p}</span>` : '<span class="lineatur"></span>'}</div>`).join('')}` };
    }
    const t = texteK(T, 'diktat', k);
    return { titre: 'Diktat', sur: tete, consigne: 'Hör gut zu und schreibe den Text auf. Ein Erwachsener liest vor oder drückt auf „Anhören“.', audio: t, lent: true, aide: 't_diktat',
      vorlesen: { titre: `${tete}: Diktat – Text zum Vorlesen`, html: `<div class="cadre lesetexte">${t}</div><p class="petitnote">${nbMots(t)} Wörter · Lies zuerst den ganzen Text vor. Dann diktiere Satz für Satz, langsam und deutlich. Lies am Ende alles noch einmal vor.</p>` },
      rendu: sol => sol ? `<div class="cadre lesetexte">${t}</div>` : '<div class="lignes-ecr longues">' + '<i></i>'.repeat(k == 2 ? 10 : k == 3 ? 13 : 15) + '</div>' };
  }
  // rechnen
  const items = histoires(r, RECHNEN[o.thema], k, k == 1 ? 3 : 4);
  return { titre: 'Rechengeschichten', sur: tete, consigne: 'Lies die Geschichte. Schreibe die Rechnung (R) und einen Antwortsatz (A).', audio: items.map(x => x.t).join(' '), aide: 'sachaufgaben',
    kontrolle: items.map(x => x.res), rendu: sol => renduHistoires(items, sol) };
}

// ---------- Mathe : Uhr-Domino et Spiegeln ----------
const NB_MOTS = ['zwölf', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf'];
function heureEnMots(h, m) {
  const H = x => NB_MOTS[((x - 1) % 12) + 1], suiv = H(h + 1);
  if (m === 0) return `Es ist ${h % 12 === 1 ? 'ein' : H(h)} Uhr.`;
  if (m === 30) return `Es ist halb ${suiv}.`;
  if (m === 15) return `Es ist Viertel nach ${H(h)}.`;
  if (m === 45) return `Es ist Viertel vor ${suiv}.`;
  const t = { 5: 'fünf nach', 10: 'zehn nach', 20: 'zwanzig nach', 25: 'fünf vor halb', 35: 'fünf nach halb', 40: 'zwanzig vor', 50: 'zehn vor', 55: 'fünf vor' }[m];
  return `Es ist ${t} ${[5, 10, 20].includes(m) ? H(h) : suiv}.`;
}
function genDomino(r, o) {
  const pas = o.klasse <= 2 ? [0, 30] : o.niveau == 1 ? [0, 15, 30, 45] : [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  const vus = new Set(), temps = [];
  while (temps.length < 11) { const h = entre(r, 1, 12), m = choisir(r, pas); if (!vus.has(h + ':' + m)) { vus.add(h + ':' + m); temps.push([h, m]); } }
  const cartes = [['START', temps[0]]];
  for (let i = 0; i < temps.length; i++) cartes.push([heureEnMots(...temps[i]), temps[i + 1] || null]);
  const ordre = melanger(r, cartes.map((_, i) => i));
  return { titre: 'Uhrzeiten-Domino', consigne: 'Schneide die Karten aus. Lege sie in die richtige Reihenfolge: Uhr und Text müssen zusammenpassen.', aide: 'domino',
    rendu: sol => sol
      ? `<ol class="ordre">${cartes.map(c => `<li>${c[0]}</li>`).join('')}<li>ZIEL</li></ol>`
      : `<div class="dominos">${ordre.map(i => { const c = cartes[i]; return `<div class="domino"><div class="d-txt">${c[0] === 'START' ? '<b>START</b>' : c[0]}</div><div class="d-uhr">${c[1] ? horlogeSVG(...c[1]) : '<b>ZIEL</b>'}</div></div>`; }).join('')}</div>` };
}

function genSpiegeln(r, o) {
  const figures = [];
  for (let f = 0; f < 2; f++) {
    const pts = [[6, entre(r, 1, 3)]]; let x = 6, y = pts[0][1];
    const n = o.niveau == 1 ? 4 : o.niveau == 2 ? 6 : 8;
    for (let i = 0; i < n; i++) {
      x = Math.max(1, Math.min(5, x + entre(r, -2, 1) - (i === 0 ? 1 : 0)));
      y = Math.max(1, Math.min(9, y + entre(r, 0, 2)));
      pts.push([x, y]);
    }
    pts.push([6, Math.min(9, y + 1)]);
    figures.push(pts);
  }
  const svg = (pts, sol) => {
    let pointsG = '';
    for (let i = 0; i <= 12; i++) for (let j = 0; j <= 10; j++) pointsG += `<circle cx="${i * 30 + 15}" cy="${j * 30 + 15}" r="2.2" fill="#555"/>`;
    const ligne = p => p.map(([a, b]) => `${a * 30 + 15},${b * 30 + 15}`).join(' ');
    return `<svg viewBox="0 0 390 330" class="spiegel">${pointsG}<line x1="195" y1="0" x2="195" y2="330" stroke="#c0392b" stroke-width="2.5" stroke-dasharray="8 5"/>
      <polyline points="${ligne(pts)}" fill="none" stroke="#1d3557" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>
      ${sol ? `<polyline points="${ligne(pts.map(([a, b]) => [12 - a, b]))}" fill="none" stroke="#c0392b" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>` : ''}</svg>`;
  };
  return { titre: 'Spiegeln an der Achse', consigne: 'Die rote Linie ist die Spiegelachse. Zeichne die andere Hälfte der Figur genau spiegelbildlich.', aide: 'spiegeln',
    rendu: sol => `<div class="grille col1 spiegels">${figures.map(p => svg(p, sol)).join('')}</div>` };
}

Object.assign(THEMEN, {
  haustiere: { nom: 'Haustiere', emoji: '🐶', groupe: 'Themen', loesung: 'KATZE',
    lesen12: { titre: 'Mias Hase', texte: 'Mia hat einen Hasen. Er heißt Flocke. Flocke ist weiß und hat lange Ohren. Jeden Morgen gibt Mia ihm Wasser und frisches Heu. Flocke frisst gern Karotten. Am Nachmittag darf er im Garten hoppeln.',
      fragen: [['Wie heißt der Hase?', 'Flocke.'], ['Welche Farbe hat Flocke?', 'Weiß.'], ['Was frisst Flocke gern?', 'Karotten.']],
      rf: [['Mia hat einen Hund.', 0], ['Flocke hat lange Ohren.', 1], ['Mia gibt ihm jeden Abend Heu.', 0], ['Flocke darf im Garten hoppeln.', 1]] },
    lesen34: { titre: 'Ein Hund aus dem Tierheim', texte: 'Seit einem Jahr wünschte sich Yao einen Hund. Seine Eltern sagten: „Ein Hund braucht viel Zeit und Liebe.“ Yao versprach, jeden Tag mit ihm spazieren zu gehen. Im Sommer holte die Familie einen kleinen braunen Hund aus dem Tierheim. Yao nannte ihn Bello. Am Anfang war Bello sehr ängstlich und versteckte sich unter dem Sofa. Yao setzte sich jeden Tag ruhig neben ihn und sprach leise mit ihm. Nach einer Woche kam Bello endlich hervor und leckte Yaos Hand. Heute rennen die beiden jeden Nachmittag zusammen durch den Park.',
      fragen: [['Was sagten die Eltern über einen Hund?', 'Ein Hund braucht viel Zeit und Liebe.'], ['Woher holte die Familie den Hund?', 'Aus dem Tierheim.'], ['Wo versteckte sich Bello am Anfang?', 'Unter dem Sofa.'], ['Was machen Yao und Bello heute jeden Nachmittag?', 'Sie rennen zusammen durch den Park.']],
      rf: [['Yao wünschte sich eine Katze.', 0], ['Die Familie holte den Hund im Sommer.', 1], ['Bello war am Anfang sehr mutig.', 0], ['Yao sprach leise mit Bello.', 1], ['Nach einem Monat kam Bello hervor.', 0], ['Bello leckte Yaos Hand.', 1]] },
    diktat12: 'Ich habe eine Katze. Sie heißt Mimi. Mimi hat ein weiches Fell. Sie spielt gern mit einem Ball. Am Abend schläft sie auf meinem Bett.',
    diktat34: 'Ein Haustier braucht jeden Tag Pflege. Der Hund muss mehrmals am Tag nach draußen. Die Katze braucht frisches Wasser und ein sauberes Katzenklo. Meerschweinchen fressen gern Gurken, Paprika und Heu. Wer ein Tier hat, trägt Verantwortung. Dafür bekommt man einen treuen Freund.',
    luecken: [['Der ___ bellt laut.', 'Hund'], ['Die ___ schnurrt auf dem Sofa.', 'Katze'], ['Der Hase frisst gern ___.', 'Karotten'], ['Mein Hamster schläft in seinem ___.', 'Käfig'], ['Der ___ singt im Käfig.', 'Wellensittich'], ['Im Aquarium schwimmt ein bunter ___.', 'Fisch'], ['An der ___ gehe ich mit dem Hund spazieren.', 'Leine'], ['Das Meerschweinchen frisst frisches ___.', 'Heu']],
    rechnen: [['x', '{n} hat {k} Fische. Jeder Fisch bekommt {g} Futterflocken. Wie viele Futterflocken braucht {n}?', '{n} braucht {c} Futterflocken.'],
      ['-', 'Im Tierheim leben {a} Tiere. {b} Tiere finden ein neues Zuhause. Wie viele Tiere sind noch im Tierheim?', 'Es sind noch {c} Tiere im Tierheim.'],
      ['+', 'Im Tierheim gibt es {a} Hunde und {b} Katzen. Wie viele Tiere sind es zusammen?', 'Es sind {c} Tiere.']] },
  dinosaurier: { nom: 'Dinosaurier', emoji: '🦕', groupe: 'Themen', loesung: 'SAURIER',
    lesen12: { titre: 'Im Museum', texte: 'Paul und Awa sind im Museum. Dort steht ein großes Skelett. Es ist ein Dinosaurier. Er hat einen langen Hals und einen langen Schwanz. Er hat nur Pflanzen gefressen. Awa staunt. Der Dinosaurier ist größer als ein Haus.',
      fragen: [['Wo sind Paul und Awa?', 'Im Museum.'], ['Was hat der Dinosaurier?', 'Einen langen Hals und einen langen Schwanz.'], ['Was hat er gefressen?', 'Pflanzen.']],
      rf: [['Paul und Awa sind im Zoo.', 0], ['Der Dinosaurier hat einen langen Hals.', 1], ['Er hat Fleisch gefressen.', 0], ['Der Dinosaurier ist größer als ein Haus.', 1]] },
    lesen34: { titre: 'Spuren im Stein', texte: 'Dinosaurier lebten vor sehr langer Zeit auf der Erde, lange bevor es Menschen gab. Manche waren so klein wie ein Huhn, andere so lang wie ein Bus. Wir wissen viel über sie, weil Forscher ihre Knochen in der Erde finden. Diese Knochen sind in Millionen von Jahren zu Stein geworden. Man nennt sie Fossilien. Auch in Afrika haben Forscher viele Dinosaurier entdeckt, zum Beispiel in Tansania und in Marokko. An den Zähnen können die Forscher erkennen, was ein Dinosaurier gefressen hat. Spitze Zähne zeigen einen Fleischfresser, flache Zähne einen Pflanzenfresser.',
      fragen: [['Wann lebten die Dinosaurier?', 'Vor sehr langer Zeit, bevor es Menschen gab.'], ['Wie nennt man Knochen, die zu Stein geworden sind?', 'Fossilien.'], ['In welchen afrikanischen Ländern fand man Dinosaurier?', 'In Tansania und in Marokko.'], ['Was zeigen spitze Zähne?', 'Einen Fleischfresser.']],
      rf: [['Dinosaurier lebten zusammen mit den Menschen.', 0], ['Manche Dinosaurier waren so klein wie ein Huhn.', 1], ['Forscher finden Knochen in der Erde.', 1], ['In Afrika gab es keine Dinosaurier.', 0], ['Flache Zähne zeigen einen Pflanzenfresser.', 1], ['Fossilien sind aus Holz.', 0]] },
    diktat12: 'Der Dinosaurier ist groß. Er hat einen langen Schwanz. Er frisst Blätter von den Bäumen. Seine Füße sind dick und schwer. Ich male ihn grün an.',
    diktat34: 'Heute besuchte unsere Klasse das Naturkundemuseum in Stuttgart. In einer großen Halle standen die Skelette von riesigen Dinosauriern. Unser Lehrer erklärte uns, wie die Forscher die Knochen ausgraben. Dazu benutzen sie kleine Pinsel und feine Werkzeuge. Am Ende durften wir selbst im Sand nach Fossilien suchen. Ich fand einen versteinerten Zahn und war sehr stolz.',
    luecken: [['Der Dinosaurier hat einen langen ___.', 'Schwanz'], ['Im ___ steht ein großes Skelett.', 'Museum'], ['Die Forscher graben ___ aus.', 'Knochen'], ['Ein kleiner Dinosaurier schlüpft aus dem ___.', 'Ei'], ['Der Fleischfresser hat spitze ___.', 'Zähne'], ['Mit einem ___ putzen die Forscher die Knochen.', 'Pinsel'], ['Versteinerte Knochen heißen ___.', 'Fossilien'], ['Der Pflanzenfresser frisst ___.', 'Blätter']],
    rechnen: [['+', 'Im Museum stehen {a} große und {b} kleine Dinosaurier. Wie viele Dinosaurier sind es zusammen?', 'Es sind {c} Dinosaurier.'],
      ['x', 'Ein Dinosaurier macht {k} Schritte. Jeder Schritt ist {g} Meter lang. Wie viele Meter läuft er?', 'Er läuft {c} Meter.'],
      ['-', 'Die Forscher finden {a} Knochen. {b} Knochen sind kaputt. Wie viele Knochen sind ganz?', '{c} Knochen sind ganz.']] },
  weltraum: { nom: 'Weltraum', emoji: '🚀', groupe: 'Themen', loesung: 'RAKETE',
    lesen12: { titre: 'Der Mond', texte: 'Am Abend schaut Nia aus dem Fenster. Der Mond ist rund und hell. Daneben leuchten viele Sterne. Nia möchte Astronautin werden. Dann fliegt sie mit einer Rakete zum Mond. Dort will sie hüpfen und Steine sammeln.',
      fragen: [['Wann schaut Nia aus dem Fenster?', 'Am Abend.'], ['Was möchte Nia werden?', 'Astronautin.'], ['Womit will sie zum Mond fliegen?', 'Mit einer Rakete.']],
      rf: [['Der Mond ist rund und hell.', 1], ['Nia sieht keine Sterne.', 0], ['Nia möchte Ärztin werden.', 0], ['Nia will auf dem Mond Steine sammeln.', 1]] },
    lesen34: { titre: 'Unsere Planeten', texte: 'Die Erde ist einer von acht Planeten. Alle Planeten kreisen um die Sonne. Der Merkur ist der Sonne am nächsten. Dort ist es am Tag sehr heiß. Der größte Planet ist der Jupiter. Er besteht vor allem aus Gas und hat einen großen roten Fleck. Der Saturn ist bekannt für seine schönen Ringe aus Eis und Staub. Nur auf der Erde gibt es Wasser, Luft zum Atmen und Leben, wie wir es kennen. Deshalb müssen wir gut auf unseren Planeten aufpassen.',
      fragen: [['Wie viele Planeten gibt es?', 'Acht.'], ['Welcher Planet ist der Sonne am nächsten?', 'Der Merkur.'], ['Welcher Planet ist der größte?', 'Der Jupiter.'], ['Woraus bestehen die Ringe des Saturn?', 'Aus Eis und Staub.']],
      rf: [['Alle Planeten kreisen um die Erde.', 0], ['Auf dem Merkur ist es am Tag sehr heiß.', 1], ['Der Jupiter hat einen roten Fleck.', 1], ['Der Saturn ist der kleinste Planet.', 0], ['Die Ringe des Saturn sind aus Eis und Staub.', 1], ['Auf allen Planeten gibt es Wasser.', 0]] },
    diktat12: 'Am Himmel leuchten die Sterne. Der Mond ist hell. Eine Rakete fliegt hoch. Darin sitzt eine Astronautin. Sie winkt uns zu.',
    diktat34: 'Astronauten leben manchmal viele Monate auf einer Raumstation. Dort schweben sie, weil sie die Schwerkraft nicht spüren. Sie schlafen in Schlafsäcken, die an der Wand befestigt sind. Ihr Essen ist in kleinen Beuteln verpackt. Jeden Tag machen sie Sport, damit ihre Muskeln stark bleiben. Durch das Fenster sehen sie unsere blaue Erde.',
    luecken: [['Die ___ fliegt in den Weltraum.', 'Rakete'], ['Am Himmel leuchten viele ___.', 'Sterne'], ['Der ___ ist rund und hell.', 'Mond'], ['Die Erde kreist um die ___.', 'Sonne'], ['Die ___ trägt einen weißen Anzug.', 'Astronautin'], ['Der Saturn hat schöne ___.', 'Ringe'], ['Der Jupiter ist ein großer ___.', 'Planet'], ['In der ___ schweben die Astronauten.', 'Raumstation']],
    rechnen: [['+', 'Eine Rakete fliegt {a} Kilometer und dann noch {b} Kilometer. Wie viele Kilometer sind es zusammen?', 'Es sind {c} Kilometer.'],
      ['-', '{n} zählt {a} Sterne am Himmel. Dann kommen Wolken und {b} Sterne verschwinden. Wie viele Sterne sieht {n} noch?', '{n} sieht noch {c} Sterne.'],
      ['x', 'Auf der Raumstation isst jeder von {k} Astronauten am Tag {g} Beutel. Wie viele Beutel sind das zusammen?', 'Das sind {c} Beutel.']] },
  geburtstag: { nom: 'Geburtstag', emoji: '🎂', groupe: 'Themen', loesung: 'TORTE',
    lesen12: { titre: 'Kofis Fest', texte: 'Heute hat Kofi Geburtstag. Er wird sieben Jahre alt. Am Nachmittag kommen seine Freunde. Mama hat eine Torte mit Schokolade gebacken. Auf der Torte brennen sieben Kerzen. Kofi pustet alle Kerzen aus. Dann packt er seine Geschenke aus.',
      fragen: [['Wie alt wird Kofi?', 'Sieben Jahre.'], ['Was hat Mama gebacken?', 'Eine Torte mit Schokolade.'], ['Wie viele Kerzen brennen?', 'Sieben.']],
      rf: [['Kofi wird acht Jahre alt.', 0], ['Am Nachmittag kommen seine Freunde.', 1], ['Papa hat die Torte gebacken.', 0], ['Kofi packt seine Geschenke aus.', 1]] },
    lesen34: { titre: 'Eine Überraschung für Oma', texte: 'Oma Adjoa wurde am Sonntag siebzig Jahre alt. Fatou und ihr Bruder wollten ihr eine Überraschung machen. Schon eine Woche vorher übten sie heimlich ein Lied auf Deutsch und auf Twi, der Sprache von Oma. Papa bestellte einen großen Kuchen mit Früchten. Mama schmückte das Wohnzimmer mit Luftballons und einer bunten Girlande. Als Oma die Tür öffnete, riefen alle: „Herzlichen Glückwunsch!“ Dann sangen die Kinder ihr Lied. Oma hatte Tränen in den Augen, aber sie lachte dabei. „Das ist das schönste Geschenk“, sagte sie.',
      fragen: [['Wie alt wurde Oma?', 'Siebzig Jahre.'], ['In welchen Sprachen übten die Kinder das Lied?', 'Auf Deutsch und auf Twi.'], ['Womit schmückte Mama das Wohnzimmer?', 'Mit Luftballons und einer bunten Girlande.'], ['Was sagte Oma am Ende?', 'Das ist das schönste Geschenk.']],
      rf: [['Oma hatte am Samstag Geburtstag.', 0], ['Die Kinder übten heimlich ein Lied.', 1], ['Papa bestellte einen Kuchen mit Früchten.', 1], ['Mama hängte Bilder auf.', 0], ['Alle riefen: Herzlichen Glückwunsch!', 1], ['Oma war traurig.', 0]] },
    diktat12: 'Heute ist mein Geburtstag. Ich bin acht Jahre alt. Wir essen Kuchen. Meine Freunde singen ein Lied. Ich bekomme ein neues Buch.',
    diktat34: 'Für meinen Geburtstag bastelte ich bunte Einladungen. Ich lud sechs Kinder aus meiner Klasse ein. Wir spielten Topfschlagen und machten eine Schatzsuche im Garten. Zum Essen gab es Würstchen, Salat und eine große Torte. Am Abend bekam jedes Kind eine kleine Tüte mit Süßigkeiten. Alle sagten, es war ein toller Tag.',
    luecken: [['Auf der Torte brennen sieben ___.', 'Kerzen'], ['Ich packe meine ___ aus.', 'Geschenke'], ['Mama backt eine leckere ___.', 'Torte'], ['An der Decke hängen bunte ___.', 'Luftballons'], ['Alle singen ein ___.', 'Lied'], ['Ich schreibe ___ für meine Freunde.', 'Einladungen'], ['Beim Spiel suchen wir einen ___.', 'Schatz'], ['Zum Geburtstag sagen wir: Herzlichen ___!', 'Glückwunsch']],
    rechnen: [['x', '{n} lädt {k} Kinder ein. Jedes Kind bekommt {g} Bonbons. Wie viele Bonbons braucht {n}?', '{n} braucht {c} Bonbons.'],
      ['-', 'Auf dem Tisch liegen {a} Muffins. Die Kinder essen {b} Muffins. Wie viele Muffins sind noch da?', 'Es sind noch {c} Muffins da.'],
      ['+', '{n} bekommt {a} Euro von Oma und {b} Euro von Opa. Wie viel Geld bekommt {n} zusammen?', '{n} bekommt {c} Euro.']] },
  essen: { nom: 'Essen und Obst', emoji: '🍎', groupe: 'Themen', loesung: 'BIRNE',
    lesen12: { titre: 'Auf dem Markt', texte: 'Am Samstag gehen Moussa und Papa auf den Markt. Dort gibt es viel Obst und Gemüse. Moussa kauft Äpfel und Bananen. Papa kauft Tomaten und eine Ananas. Zu Hause machen sie einen Obstsalat. Er schmeckt süß und frisch.',
      fragen: [['Wann gehen Moussa und Papa auf den Markt?', 'Am Samstag.'], ['Was kauft Moussa?', 'Äpfel und Bananen.'], ['Was machen sie zu Hause?', 'Einen Obstsalat.']],
      rf: [['Moussa geht mit Mama auf den Markt.', 0], ['Papa kauft eine Ananas.', 1], ['Moussa kauft Kirschen.', 0], ['Der Obstsalat schmeckt süß.', 1]] },
    lesen34: { titre: 'Kochen mit Opa', texte: 'Jeden Sonntag kocht Opa Bakary für die ganze Familie. Heute zeigt er Amara, wie man Maafe kocht. Das ist ein Eintopf aus Westafrika mit Erdnusssoße. Zuerst schneiden die beiden Zwiebeln, Tomaten und Süßkartoffeln. Dann braten sie das Gemüse in einem großen Topf an. Danach rührt Amara die Erdnussbutter ein. Der Eintopf muss eine Stunde langsam kochen. In der Zwischenzeit kocht Opa den Reis. Als die Familie am Tisch sitzt, sagt Papa: „So gut hat Maafe noch nie geschmeckt!“',
      fragen: [['Was ist Maafe?', 'Ein Eintopf aus Westafrika mit Erdnusssoße.'], ['Was schneiden die beiden zuerst?', 'Zwiebeln, Tomaten und Süßkartoffeln.'], ['Wie lange muss der Eintopf kochen?', 'Eine Stunde.'], ['Was kocht Opa in der Zwischenzeit?', 'Den Reis.']],
      rf: [['Opa kocht jeden Samstag.', 0], ['Maafe kommt aus Westafrika.', 1], ['Amara rührt die Erdnussbutter ein.', 1], ['Der Eintopf kocht zehn Minuten.', 0], ['Opa kocht Nudeln.', 0], ['Papa findet das Essen sehr gut.', 1]] },
    diktat12: 'Ich esse gern Obst. Am liebsten mag ich Mangos. Sie sind gelb und süß. Mein Bruder isst lieber Äpfel. Obst ist gesund.',
    diktat34: 'Ein gesundes Frühstück gibt uns Kraft für den ganzen Schultag. Dazu gehören zum Beispiel Vollkornbrot, Käse, Joghurt und frisches Obst. In meiner Brotdose habe ich heute Gurkenscheiben und eine Birne. Süße Getränke machen nur kurz satt. Deshalb trinke ich am liebsten Wasser oder ungesüßten Tee. Am Mittag freue ich mich auf das warme Essen in der Mensa.',
    luecken: [['Die ___ ist gelb und krumm.', 'Banane'], ['Auf dem ___ kaufen wir Gemüse.', 'Markt'], ['Aus Äpfeln und Bananen machen wir einen ___.', 'Obstsalat'], ['In meiner ___ ist ein Brot.', 'Brotdose'], ['Die ___ ist rot und rund.', 'Tomate'], ['Zum Frühstück esse ich ein ___ mit Käse.', 'Brot'], ['Am liebsten trinke ich ___.', 'Wasser'], ['Die ___ wächst am Baum und schmeckt süß.', 'Birne']],
    rechnen: [['x', 'Ein Kilo Äpfel kostet {g} Euro. {n} kauft {k} Kilo. Wie viel muss {n} bezahlen?', '{n} muss {c} Euro bezahlen.'],
      ['-', '{n} hat {a} Erdbeeren. {Er} isst {b} Erdbeeren. Wie viele Erdbeeren hat {n} noch?', '{n} hat noch {c} Erdbeeren.'],
      ['+', 'Im Korb liegen {a} Mangos und {b} Bananen. Wie viele Früchte sind es zusammen?', 'Es sind {c} Früchte.']] },
  berufe: { nom: 'Feuerwehr und Berufe', emoji: '🚒', groupe: 'Themen', loesung: 'HELM',
    lesen12: { titre: 'Bei der Feuerwehr', texte: 'Heute besucht die Klasse 2a die Feuerwehr. Ein Feuerwehrmann zeigt den Kindern das große rote Auto. Jonas darf den Helm aufsetzen. Der Helm ist schwer. Die Feuerwehrfrau zeigt den langen Schlauch. Zum Schluss dürfen alle mit Wasser spritzen.',
      fragen: [['Wen besucht die Klasse 2a?', 'Die Feuerwehr.'], ['Welche Farbe hat das Auto?', 'Rot.'], ['Was darf Jonas aufsetzen?', 'Den Helm.']],
      rf: [['Die Klasse besucht die Polizei.', 0], ['Das Auto ist rot.', 1], ['Der Helm ist leicht.', 0], ['Alle dürfen mit Wasser spritzen.', 1]] },
    lesen34: { titre: 'Was will ich werden?', texte: 'In der Klasse 4b sprachen die Kinder über ihre Traumberufe. Kwame möchte Arzt werden, wie seine Tante in Accra. Er will kranken Menschen helfen. Lena träumt davon, Tierärztin zu werden, weil sie Tiere liebt. Paul möchte Bäcker werden. Er steht gern früh auf und backt am Wochenende mit seinem Vater Brötchen. Awa will Ingenieurin werden und Brücken bauen. Die Lehrerin sagte: „Für jeden Beruf muss man viel lernen. Aber wenn man etwas gerne macht, fällt das Lernen leichter.“',
      fragen: [['Was möchte Kwame werden?', 'Arzt.'], ['Warum möchte Lena Tierärztin werden?', 'Weil sie Tiere liebt.'], ['Was macht Paul am Wochenende?', 'Er backt mit seinem Vater Brötchen.'], ['Was will Awa bauen?', 'Brücken.']],
      rf: [['Kwames Tante arbeitet in Accra.', 1], ['Lena möchte Lehrerin werden.', 0], ['Paul steht gern früh auf.', 1], ['Paul backt mit seiner Mutter.', 0], ['Awa will Brücken bauen.', 1], ['Die Lehrerin sagt: Man muss nichts lernen.', 0]] },
    diktat12: 'Die Feuerwehr kommt schnell. Das Auto ist rot. Die Männer und Frauen tragen einen Helm. Sie löschen das Feuer. Alle sind froh.',
    diktat34: 'Viele Menschen arbeiten, damit unser Leben gut funktioniert. Die Busfahrerin bringt uns sicher zur Schule. Der Bäcker backt schon in der Nacht frisches Brot. Die Ärztin hilft uns, wenn wir krank sind. Die Müllabfuhr holt jede Woche unseren Abfall ab. Ohne diese Berufe wäre unser Alltag viel schwieriger.',
    luecken: [['Die ___ löscht das Feuer.', 'Feuerwehr'], ['Der Feuerwehrmann trägt einen ___.', 'Helm'], ['Der ___ backt frisches Brot.', 'Bäcker'], ['Die ___ hilft kranken Menschen.', 'Ärztin'], ['Mit dem ___ spritzt die Feuerwehr Wasser.', 'Schlauch'], ['Die ___ fährt uns zur Schule.', 'Busfahrerin'], ['Der ___ hilft kranken Tieren.', 'Tierarzt'], ['Die ___ bringt uns Briefe.', 'Postbotin']],
    rechnen: [['+', 'Bei der Feuerwehr arbeiten {a} Frauen und {b} Männer. Wie viele Menschen arbeiten dort?', 'Dort arbeiten {c} Menschen.'],
      ['x', 'Der Bäcker backt {k} Bleche. Auf jedem Blech liegen {g} Brötchen. Wie viele Brötchen sind es?', 'Es sind {c} Brötchen.'],
      ['-', 'Die Postbotin hat {a} Briefe. Sie hat schon {b} Briefe verteilt. Wie viele Briefe muss sie noch verteilen?', 'Sie muss noch {c} Briefe verteilen.']] },
  familie: { nom: 'Meine Familie, meine Länder', emoji: '🌍', groupe: 'Themen', loesung: 'FAMILIE',
    lesen12: { titre: 'Zwei Sprachen', texte: 'Amara wohnt in Freiburg. Ihre Mama kommt aus Kamerun. Ihr Papa kommt aus Deutschland. Zu Hause spricht Amara Französisch und Deutsch. Am Telefon spricht sie mit Oma in Kamerun. Oma sagt: „Bonjour, ma chérie!“ Amara lacht.',
      fragen: [['Wo wohnt Amara?', 'In Freiburg.'], ['Woher kommt ihre Mama?', 'Aus Kamerun.'], ['Welche Sprachen spricht Amara zu Hause?', 'Französisch und Deutsch.']],
      rf: [['Amara wohnt in Stuttgart.', 0], ['Ihr Papa kommt aus Deutschland.', 1], ['Amara spricht nur Deutsch.', 0], ['Amara telefoniert mit Oma.', 1]] },
    lesen34: { titre: 'Das Familienfest', texte: 'Einmal im Jahr feiert Familie Mensah ein großes Familienfest. Dann kommen Onkel, Tanten, Cousins und Cousinen aus ganz Deutschland, aus Frankreich und sogar aus Ghana. Jeder bringt etwas zu essen mit. Tante Esi kocht Jollof-Reis, Onkel Thomas bringt Kartoffelsalat mit. Die Kinder malen einen großen Stammbaum. Ganz oben stehen die Urgroßeltern, ganz unten die jüngsten Kinder. Yao staunt, wie viele Verwandte er hat. Am Abend tanzen alle zu Musik aus Ghana und Deutschland. „Unsere Familie ist wie ein großer Baum mit vielen Ästen“, sagt Opa.',
      fragen: [['Woher kommen die Verwandten?', 'Aus ganz Deutschland, aus Frankreich und aus Ghana.'], ['Was kocht Tante Esi?', 'Jollof-Reis.'], ['Was malen die Kinder?', 'Einen großen Stammbaum.'], ['Womit vergleicht Opa die Familie?', 'Mit einem großen Baum mit vielen Ästen.']],
      rf: [['Das Fest ist jeden Monat.', 0], ['Jeder bringt etwas zu essen mit.', 1], ['Onkel Thomas bringt Kartoffelsalat mit.', 1], ['Ganz oben im Stammbaum stehen die Kinder.', 0], ['Yao staunt über seine vielen Verwandten.', 1], ['Am Abend schlafen alle früh.', 0]] },
    diktat12: 'Meine Familie ist groß. Ich habe zwei Brüder. Meine Oma wohnt in Togo. Im Sommer besuchen wir sie. Ich freue mich schon.',
    diktat34: 'In meiner Klasse sprechen die Kinder viele Sprachen. Lena spricht Deutsch und Russisch, Moussa spricht Wolof und Französisch. Wir haben eine Liste gemacht: Zusammen sprechen wir elf Sprachen. Jeden Morgen sagen wir „Guten Morgen“ in einer anderen Sprache. Heute war Suaheli dran. Das hat allen viel Spaß gemacht.',
    luecken: [['Meine ___ wohnt in Kamerun.', 'Oma'], ['Mein ___ ist der Bruder von Mama.', 'Onkel'], ['Die Kinder malen einen ___.', 'Stammbaum'], ['Zu Hause sprechen wir zwei ___.', 'Sprachen'], ['Die Schwester von Papa ist meine ___.', 'Tante'], ['Zum Fest kommen viele ___.', 'Verwandte'], ['Mit dem ___ rufe ich Opa an.', 'Telefon'], ['Meine ___ ist sehr groß.', 'Familie']],
    rechnen: [['+', 'Zum Fest kommen {a} Verwandte aus Deutschland und {b} aus Ghana. Wie viele Verwandte kommen?', 'Es kommen {c} Verwandte.'],
      ['x', 'An {k} Tischen sitzen je {g} Personen. Wie viele Personen sind es?', 'Es sind {c} Personen.'],
      ['-', 'Tante Esi kocht {a} Portionen Reis. Die Gäste essen {b} Portionen. Wie viele Portionen bleiben übrig?', 'Es bleiben {c} Portionen übrig.']] },
  wald: { nom: 'Wald und Natur', emoji: '🌳', groupe: 'Themen', loesung: 'BAUM',
    lesen12: { titre: 'Im Wald', texte: 'Lena und Yao gehen mit Opa in den Wald. Die Bäume sind hoch. Ein Specht klopft am Baum. Yao findet einen Pilz. Opa sagt: „Den Pilz essen wir nicht!“ Die Kinder nehmen ihren Müll wieder mit nach Hause.',
      fragen: [['Mit wem gehen die Kinder in den Wald?', 'Mit Opa.'], ['Welcher Vogel klopft am Baum?', 'Ein Specht.'], ['Was nehmen die Kinder mit nach Hause?', 'Ihren Müll.']],
      rf: [['Die Kinder gehen mit Oma in den Wald.', 0], ['Die Bäume sind hoch.', 1], ['Lena findet einen Pilz.', 0], ['Opa sagt: Den Pilz essen wir nicht.', 1]] },
    lesen34: { titre: 'Der Wald braucht uns', texte: 'Der Wald ist für Tiere und Menschen sehr wichtig. Die Bäume machen saubere Luft und spenden Schatten. Viele Tiere wohnen dort, zum Beispiel Rehe, Füchse, Eulen und unzählige Käfer. Im Frühling bauen die Vögel ihre Nester in den Baumkronen. Leider lassen manche Menschen ihren Müll im Wald liegen. Eine Plastikflasche braucht mehrere hundert Jahre, bis sie zerfällt. Deshalb machte die Klasse 3c einen Aktionstag. Mit Handschuhen und Säcken sammelten die Kinder zwei Stunden lang Müll. Am Ende waren acht Säcke voll. Der Förster bedankte sich und schenkte der Klasse einen jungen Baum für den Schulhof.',
      fragen: [['Was machen die Bäume?', 'Sie machen saubere Luft und spenden Schatten.'], ['Wie lange braucht eine Plastikflasche, bis sie zerfällt?', 'Mehrere hundert Jahre.'], ['Wie viele Säcke waren am Ende voll?', 'Acht.'], ['Was schenkte der Förster der Klasse?', 'Einen jungen Baum.']],
      rf: [['Im Wald wohnen Rehe und Füchse.', 1], ['Eine Plastikflasche zerfällt in einer Woche.', 0], ['Die Kinder sammelten zwei Stunden lang Müll.', 1], ['Am Ende waren drei Säcke voll.', 0], ['Der Förster bedankte sich.', 1], ['Der Förster schenkte der Klasse einen Ball.', 0]] },
    diktat12: 'Im Wald ist es still. Ein Reh steht am Weg. Es frisst Gras. Über uns singt ein Vogel. Wir sind ganz leise.',
    diktat34: 'Am Waldrand steht ein alter Baum mit einer dicken Rinde. In seinem Stamm hat ein Specht eine Höhle gebaut. Unter den Wurzeln wohnt eine Familie von Mäusen. Im Herbst fallen seine Blätter auf den Boden und werden zu neuer Erde. So ist ein einziger Baum ein Zuhause für viele Lebewesen. Deshalb müssen wir die Natur schützen.',
    luecken: [['Der ___ klopft an den Baum.', 'Specht'], ['Im Wald wächst ein brauner ___.', 'Pilz'], ['Das ___ frisst Gras am Waldrand.', 'Reh'], ['Die ___ jagt in der Nacht.', 'Eule'], ['Den ___ nehmen wir wieder mit nach Hause.', 'Müll'], ['Der ___ passt auf den Wald auf.', 'Förster'], ['Der Baum hat eine dicke ___.', 'Rinde'], ['Die Vögel bauen ihre ___ in den Bäumen.', 'Nester']],
    rechnen: [['-', 'Im Wald stehen {a} Bäume. Der Förster fällt {b} alte Bäume. Wie viele Bäume stehen noch?', 'Es stehen noch {c} Bäume.'],
      ['x', 'Die Klasse pflanzt {k} Reihen Bäume. In jeder Reihe stehen {g} Bäume. Wie viele Bäume pflanzt die Klasse?', 'Die Klasse pflanzt {c} Bäume.'],
      ['+', '{n} zählt {a} Käfer und {b} Ameisen. Wie viele Tiere sind es zusammen?', 'Es sind {c} Tiere.']] }
});

// Ajout dans le catalogue : thèmes du Jahreskreis pour chaque classe + nouveaux exercices Mathe.
[1, 2, 3, 4].forEach(k => {
  Object.entries(THEMEN).forEach(([id, T]) => THEMES[k].push({ id: 'thema-' + id, fach: T.groupe || 'Jahreskreis', nom: `${T.emoji} ${T.nom}`, domaine: 'Lesen · Schreiben · Rechnen', aide: 't_lesen', gen: genThema,
    options: ['uebung'], fixe: { thema: id, klasse: k }, uebungen: (k === 1 ? ['lesen', 'luecken', 'diktat', 'rechnen'] : Object.keys(UEBUNGEN).filter(x => x !== 'geschichte')).concat(T.geschichte12 ? ['geschichte'] : []) }));
});
THEMES[2].splice(5, 0, { id: 'domino', fach: 'Mathe', nom: 'Uhrzeiten-Domino', domaine: 'Größen und Messen', gen: genDomino, options: [], fixe: { klasse: 2 } },
  { id: 'spiegeln', fach: 'Mathe', nom: 'Spiegeln', domaine: 'Raum und Form', gen: genSpiegeln, options: ['niveau'] });
THEMES[3].splice(6, 0, { id: 'domino', fach: 'Mathe', nom: 'Uhrzeiten-Domino', domaine: 'Größen und Messen', gen: genDomino, options: ['niveau'], fixe: { klasse: 3 } },
  { id: 'spiegeln', fach: 'Mathe', nom: 'Spiegeln', domaine: 'Raum und Form', gen: genSpiegeln, options: ['niveau'] });
