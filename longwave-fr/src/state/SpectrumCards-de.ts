const SpectrumCards: [string, string][] = [
  ["Schlechter Schauspieler", "Guter Schauspieler"],
  ["Normalo", "Hipster"],
  ["Wertlos", "Unbezahlbar"],
  ["Natürlich", "Künstlich"],
  ["Passiert langsam", "Passiert plötzlich"],
  ["Job", "Karriere"],
  ["Rund", "Spitz"],
  ["Beweise, dass Gott existiert", "Beweise, dass Gott nicht existiert"],
  ["Geliebt", "Gehasst"],
  ["Die helle Seite der Macht", "Die dunkle Seite der Macht"],
  ["Dumm", "Brillant"],
  ["Handwerk", "Messenproduktion"],
  ["Niemand tut es", "Jeder tut es"],
  ["Kurzlebig", "Langlebig"],
  ["Gefährlicher Job", "Sicherer Job"],
  ["Fantasy", "Sci-Fi"],
  ["Schlicht", "Ausgefallen"],
  ["Hat einen schlechten Ruf", "Hat einen guten Ruf"],
  ["Ethisch zu essen", "Unethisch zu essen"],
  ["Fernsehfilm", "Kinofilm"],
  ["Unmodern", "Modisch"],
  ["Freiheitskämpfer", "Terrorist"],
  ["Schlechte Supermacht", "Gute Supermacht"],
  ["Ineffektiv", "Effektiv"],
  ["Besser heiß", "Besser kalt"],
  ["Quadratisch", "Rund"],
  ["Vorübergehend", "Dauerhaft"],
  ["Sieht aus wie ein Mensch", "Sieht nicht aus wie ein Mensch"],
  ["Uncool", "Cool"],
  ["Schlechteste lebende Person", "Größte lebende Person"],
  ["Unterschätzt", "Überschätzt"],
  ["Unordentliches Essen", "Sauberes Essen"],
  ["Unverzeihlich", "Verzeihlich"],
  ["Versager", "Meisterwerk"],
  ["Harmlos", "Schädlich"],
  ["Gryffindor", "Slytherin"],
  ["Unhygienisch", "Hygienisch"],
  ["Schlechte Musik", "Gute Musik"],
  ["Nutzlos", "Nützlich"],
  ["Film, den Godzilla ruinieren würde", "Film, den Godzilla verbessern würde"],
  ["Unwichtig", "Wichtig"],
  ["Leicht zu buchstabieren", "Schwer zu buchstabieren"],
  ["Laster", "Tugend"],
  ["Unterschätzter Musiker", "Überschätzter Musiker"],
  ["Unpopuläre Aktivität", "Beliebte Aktivität"],
  ["Geteilt", "Ganz"],
  ["Unzuverlässig", "Zuverlässig"],
  ["Leicht zu töten", "Schwer zu töten"],
  ["Unbeständig", "Beständig"],
  ["Rundes Tier", "Spitzes Tier"],
  ["Schlechte Fernsehsendung", "Gute Fernsehsendung"],
  ["Traditionell männlich", "Traditionell weiblich"],
  ["Unnützes Körperteil", "Nützliches Körperteil"],
  ["Unnützes Organ", "Nützliches Organ"],
  ["Modeerscheinung", "Klassiker"],
  ["Schwach", "Stark"],
  ["Ekelhaftes Müsli", "Leckeres Müsli"],
  ["Schlecht", "Gut"],
  ["Mild süchtig machend", "Hoch süchtig machend"],
  ["Nutzlos im Notfall", "Nützlich im Notfall"],
  ["Für Kinder", "Für Erwachsene"],
  ["Schurke", "Held"],
  ["Unterschätzte Dinge zum Machen", "Überschätzte Dinge zum Machen"],
  ["Langweilig", "Aufregend"],
  ["Stinkend auf eine schlechte Art", "Stinkend auf eine gute Art"],
  ["Unpopulär", "Beliebt"],
  ["Freund", "Feind"],
  ["Nutzlose Erfindung", "Nützliche Erfindung"],
  ["Liberal", "Konservativ"],
  ["Heiß", "Kalt"],
  ["Normal", "Seltsam"],
  ["Farblos", "Bunt"],
  ["Kalorienarm", "Kalorienreich"],
  ["Leichtes Thema", "Schweres Thema"],
  ["Unbekannt", "Berühmt"],
  ["Selten", "Häufig"],
  ["Unsexy Emoji", "Sexy Emoji"],
  ["Billig", "Teuer"],
  ["Unterbewertete Waffe", "Überbewertete Waffe"],
  ["Fühlt sich schlecht an", "Fühlt sich gut an"],
  ["Unwesentlich", "Wesentlich"],
  ["Dreckig", "Sauber"],
  ["Erfordert Glück", "Erfordert Können"],
  ["Geschmacklos", "Schmackhaft"],
  ["Langweiliges Thema", "Faszinierendes Thema"],
  ["Lässig", "Formell"],
  ["Unterbezahlt", "Überbezahlt"],
  ["Trocken", "Nass"],
  ["Unterschätzte Fähigkeit", "Überschätzte Fähigkeit"],
  ["Verboten", "Ermutigt"],
  ["Trauriges Lied", "Fröhliches Lied"],
  ["Zerbrechlich", "Haltbar"],
  ["Streber", "Trottel"],
  ["Gut", "Böse"],
  ["Schlimmster Tag des Jahres", "Bester Tag des Jahres"],
  ["Schlechte Angewohnheit", "Gute Angewohnheit"],
  ["Katzenmensch", "Hundemensch"],
  ["Klug", "Intelligent"],
  ["Schwer zu tun", "Leicht zu tun"],
  ["Geistige Aktivität", "Körperliche Aktivität"],
  ["Unumstrittenes Thema", "Umstrittenes Thema"],
  ["Unfreiwilliges Vergnügen", "Offenes Vergnügen"],
  ["Untalentiert", "Talentiert"],
  ["Schwer zu finden", "Leicht zu finden"],
  ["Hässlicher Mann", "Schöner Mann"],
  ["Schwer zu merken", "Leicht zu merken"],
  ["Anspruchslos", "Hochstapler"],
  ["Ungesund", "Gesund"],
  ["Schlechter Mensch", "Guter Mensch"],
  ["Historisch wichtig", "Historisch irrelevant"],
  ["Haarlos", "Haarig"],
  ["Unflexibel", "Flexibel"],
  ["Normales Haustier", "Exotisches Haustier"],
  ["Introvertiert", "Extrovertiert"],
  ["Buch war besser", "Film war besser"],
  ["Schlechter Film", "Guter Film"],
  ["Hässlich", "Schön"],
  ["Reife Person", "Unreife Person"],
  [
    "Unterschätzte Sache, die man besitzt",
    "Überschätzte Sache, die man besitzt",
  ],
  ["Gewöhnlich", "Außergewöhnlich"],
  ["Schwer auszusprechen", "Leicht auszusprechen"],
  ["Schlecht gemacht", "Gut gemacht"],
  ["Nicht ein Sandwich", "Ein Sandwich"],
  ["Gefährlich", "Sicher"],
  ["Kulturell bedeutsam", "Kulturell unbedeutend"],
  ["Optional", "Obligatorisch"],
  [
    "Unterschätzter Buchstabe des Alphabets",
    "Überschätzter Buchstabe des Alphabets",
  ],
  ["Niedrige Qualität", "Hohe Qualität"],
  ["Unsexy Tier", "Sexy Tier"],
  ["Ruhiger Ort", "Lauter Ort"],
  ["Komödie", "Drama"],
  ["Brauchen", "Wollen"],
  ["Trockenfutter", "Nassfutter"],
  ["Ersetzbar", "Unersetzlich"],
  ["Schlechtester Sportler aller Zeiten", "Größter Sportler aller Zeiten"],
  ["Unethisch", "Ethisch"],
  ["Langweiliges Hobby", "Interessantes Hobby"],
  ["Schlechter Pizzabelag", "Guter Pizzabelag"],
  ["Dystopie", "Utopie"],
  ["Rau", "Glatt"],
  ["Schlecht für dich", "Gut für dich"],
  ["Friedlich", "Kriegerisch"],
  ["Unterschätzter Movie", "Überschätzter movie"],
  ["Schmeckt schlecht", "Schmeckt gut"],
  ["Sport", "Spiel"],
  ["Trauriger Film", "Fröhlicher Film"],
  ["Zeitverschwendung", "Gute Zeitverwendung"],
  ["Am wenigsten böse Firma", "Am meisten böse Firma"],
  ["Snack", "Mahlzeit"],
  ["Unglaubwürdig", "Glaubwürdig"],
  ["Kitschig", "Eleganz"],
  ["Riecht schlecht", "Riecht gut"],
  ["Star Wars", "Star Trek"],
  ["Beängstigendes Tier", "Nettes Tier"],
  ["Mainstream", "Nische"],
  ["Dunkel", "Hell"],
  ["Unterschätzter Schauspieler", "Überschätzter Schauspieler"],
  ["Schwierig zu bedienen", "Einfach zu bedienen"],
  ["Müde", "Verkabelt"],
  ["80er", "90er"],
  ["Schlechte Person", "Gute Person"],
  ["Suppenküche", "Gehobene Küche"],
  ["Weich", "Hart"],
  ["Normales Ding zu besitzen", "Seltsames Ding zu besitzen"],
  ["Gerade", "Kurvig"],
  ["Vorbildlich", "Schlecher Einfluss"],
  ["Nutzloses Hauptfach", "Nützliches Hauptfach"],
  ["Fieser Mensch", "Netter Mensch"],
  ["Actionfilm", "Abenteuerfilm"],
];

const AdvancedSpectrumCards: [string, string][] = [
  ["Kurz", "Lang"],
  ["Schlechtestes Jahr der Geschichte", "Bestes Jahr der Geschichte"],
  ["Berühmt", "Berüchtigt"],
  ["Am wenigsten mächtiger Gott", "Mächtigster Gott"],
  ["Unsexy color", "Sexy color"],
  ["Nützt Dir", "Nützt der Menschheit"],
  ["Schlechter Präsident", "Guter Präsident"],
  ["Eigenartig", "Seltsam"],
  ["Abgeleitet", "Original"],
  ["Etiquette", "Manieren"],
  ["Das Schlimmste", "Das Beste"],
  ["Kleine Zahl", "Große Zahl"],
  ["Nicht genug", "Zu viel"],
  ["Schwer zu sitzen", "Leicht zu sitzen"],
  ["Talent", "Geschicklichkeit"],
  ["Schlechteste Ära für Zeitreisen", "Beste Ära für Zeitreisen"],
  ["Nicht umarmbar", "Umarmbar"],
  ["Heterogen", "Homogen"],
  ["Außer Kontrolle", "Unter Kontrolle"],
  ["Beliebt", "Elitär"],
  ["Überparteilich", "Parteilich"],
  ["Hundename", "Katzenname"],
  ["Wenig bekannte Tatsache", "Gut bekannte Tatsache"],
  ["Sozialist", "Kapitalist"],
  ["Schlechte Süßigkeiten", "Gute Süßigkeiten"],
  ["Traditionell", "Radikal"],
  ["Schlechtes Mundgefühl", "Gutes Mundgefühl"],
  ["Illegal", "Legal"],
  ["Nie pünktlich", "Immer pünktlich"],
  ["Wird nicht 100 Jahre alt", "Wird 100 Jahre alt"],
  ["Schlechte Disney-Figur", "Gute Disney-Figur"],
  ["Ähnlich", "Identisch"],
  ["Lose", "Fest"],
  ["Lustiges Thema", "Ernstes Thema"],
  ["Unparfümiert", "Parfümiert"],
  ["Horizontal", "Vertikal"],
  ["Klein", "Winzig"],
  ["Hässliches Wort", "Schönes Wort"],
  ["Tick", "Tock"],
  ["Schlechter Rat", "Guter Rat"],
  ["Illegal", "Verboten"],
  ["Nicht Kunst", "Kunst"],
  ["Klatsch", "Nachrichten"],
  ["Unfreiwilliges Vergnügen", "Eigentlich nur schlecht"],
  ["Altmodisch", "Avantgarde"],
  ["Wahr", "Falsch"],
  ["Normaler Gruß", "Schräger Gruß"],
  ["Diktatur", "Demokratie"],
  ["Machtlos", "Mächtig"],
  ["Verdampft", "Verdampft nicht"],
  ["Langweilige Person", "Lustige Person"],
  ["Unterbewertetes Buch", "Überbewertetes Buch"],
  ["Schwere  Gedanken", "Leichte Gedanken"],
  ["Schlechte Schule", "Gute Schule"],
  ["Allgemeine Weisheit", "Randglaube"],
  ["Schlimmste Hausarbeit", "Beste Hausarbeit"],
  ["Bedrohte Arten", "Überbevölkerte Arten"],
  ["Blau", "Grün"],
  ["Frucht", "Gemüse"],
  ["Wissenschaft", "Pseudowissenschaft"],
  ["Smalltalk", "Schweres Thema"],
  ["Schlechte Investition", "Gute Investition"],
  ["Stationär", "Mobil"],
  ["Lokales Thema", "Globales Thema"],
  ["Spannend", "Erschreckend"],
  ["Nerd", "Sportler"],
  ["Erwartet", "Unerwartet"],
  ["Person, die Sie verprügeln könnten", "Person, die Sie verprügeln würde"],
  ["Begrenzt", "Unendlich"],
  ["Beiläufiges Ereignis", "Formelles Ereignis"],
  ["Unvernünftige Phobie", "Vernünftige Phobie"],
  ["Unterbewertetes Spiel", "Überbewertetes Spiel"],
  ["Religiös", "Sakrileg"],
  ["Mild", "Scharf"],
  ["Echte Person", "Unechte Person"],
  ["Unnatürlich", "Natürlich"],
  ["Geheim", "Öffentlich bekannt"],
  ["Zu klein", "Zu groß"],
  ["Kunst", "Kommerz"],
  ["One Hit-Wonder", "Pop-Ikone"],
  ["Unsexy Pokémon", "Sexy Pokémon"],
  ["Leise", "Laut"],
  ["Inklusiv", "Exklusiv"],
  ["Böser Hund (Rasse)", "Guter Hund (Rasse)"],
];

const AdditionalSpectrumCards: [string, string][] = [
  ["Geizig", "Spendabel"],
  ["Gewinner", "Verlierer"],
  ["feige", "tapfer"],
  ["Essen", "Trinken"],
  ["betrunken", "nüctern"],
  ["gefangen", "frei"],
  ["fragen", "antworten"],
  ["dick", "dünn"],
  ["ängstlich", "mutig"],
  ["Ferne", "Nähe"],
  ["Grüßen", "Verabschieden"],
  ["Optimistmus", "Pessimismus"],
  ["Mann", "Frau"],
  ["Produktiv", "Kontaproduktiv"],
  ["Maximum", "Minimum"],
  ["Heirat", "Scheidung"],
  ["Haarig", "Glatt"],
  ["Wahr", "Illusion"],
  ["Yang", "Yin"],
  ["Tod", "Leben"],
  ["Vergangenheit", "Zukunft"],
  ["voll", "leer"],
  ["Zahlen", "Buchstaben"],
  ["Sprechen", "Singen"],
  ["Sprechen", "Schweigen"],
  ["hoch", "tief"],
  ["Spass", "Langweile"],
  ["ruhig", "hektisch"],
  ["Zurück", "Weiter"],
  ["rechts", "links"],
  ["verletzt", "heil"],
  ["Teufel", "Engel"],
  ["Schreien", "Flüstern"],
  ["positiv", "negativ"],
  ["Null", "Eins"],
  ["Dorf", "Metropole"],
  ["frisch", "abgelaufen"],
  ["kraftvoll", "kraftlos"],
  ["auf", "zu"],
  ["Auffällig", "Unauffällig"],
  ["Titanic", "Fischkutter"],
  ["Keller", "Dachboden"],
  ["Auto", "Flugzeug"],
  ["Kassenbereich", "Gangragal"],
  ["Geizig", "Spendabel"],
  ["See", "Ozean"],
];

const AgileSpectrumCards: [string, string][] = [["Agil", "Wasserfall"]];

export const AllCards = [
  ...SpectrumCards,
  ...AdvancedSpectrumCards,
  ...AdditionalSpectrumCards,
  ...AgileSpectrumCards,
];
