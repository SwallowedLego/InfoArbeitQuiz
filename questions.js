const QUESTIONS = [
  // ===== 3D-Druck und Fertigungsverfahren =====
  {
    id: "3d_01",
    topic: "3D-Druck und Fertigungsverfahren",
    type: "single",
    question: "Welches Fertigungsverfahren fügt Material Schicht für Schicht hinzu?",
    options: ["Subtraktives Verfahren", "Additives Verfahren", "Urformen", "Trennen"],
    answer: 1,
    explanation: "Additive Verfahren wie der 3D-Druck fügen Material Schicht für Schicht hinzu, um ein Objekt aufzubauen."
  },
  {
    id: "3d_02",
    topic: "3D-Druck und Fertigungsverfahren",
    type: "single",
    question: "Welches Verfahren entfernt Material aus einem Rohling?",
    options: ["Additives Verfahren", "Urformen", "Subtraktives Verfahren", "Fügen"],
    answer: 2,
    explanation: "Subtraktive Verfahren wie Fräsen oder Drehen entfernen Material aus einem Rohling."
  },
  {
    id: "3d_03",
    topic: "3D-Druck und Fertigungsverfahren",
    type: "single",
    question: "Was bedeutet FDM beim 3D-Druck?",
    options: [
      "Fused Deposition Modeling",
      "Fast Digital Manufacturing",
      "Flexible Design Method",
      "Fluid Dynamic Modeling"
    ],
    answer: 0,
    explanation: "FDM steht für Fused Deposition Modeling – ein Verfahren, bei dem Kunststofffaden erhitzt und schichtweise aufgetragen wird."
  },
  {
    id: "3d_04",
    topic: "3D-Druck und Fertigungsverfahren",
    type: "single",
    question: "Welches Material ist typisch für FDM-3D-Drucker?",
    options: ["Flüssiges Harz", "PLA oder ABS-Kunststofffilament", "Metallpulver", "Papierbogen"],
    answer: 1,
    explanation: "FDM-Drucker verwenden Kunststofffilamente wie PLA (Polylactid) oder ABS (Acrylnitril-Butadien-Styrol)."
  },
  {
    id: "3d_05",
    topic: "3D-Druck und Fertigungsverfahren",
    type: "single",
    question: "Welches Fertigungsverfahren gehört zum Urformen?",
    options: ["Fräsen", "Drehen", "Gießen", "Laserschneiden"],
    answer: 2,
    explanation: "Gießen ist ein Urformverfahren, bei dem flüssiger Werkstoff in eine Form gegossen und verfestigt wird."
  },
  {
    id: "3d_06",
    topic: "3D-Druck und Fertigungsverfahren",
    type: "single",
    question: "Welches Verfahren wird beim SLA-3D-Druck verwendet?",
    options: [
      "Schmelzen von Kunststofffilament",
      "Aushärten von flüssigem Harz mit UV-Licht",
      "Lasersintern von Metallpulver",
      "Fräsen aus einem Block"
    ],
    answer: 1,
    explanation: "SLA (Stereolithografie) härtet flüssiges Photopolymer-Harz schichtweise mit UV-Licht aus."
  },
  {
    id: "3d_07",
    topic: "3D-Druck und Fertigungsverfahren",
    type: "single",
    question: "Für welche Anwendung eignet sich PLA am besten?",
    options: [
      "Hochtemperaturteile im Motorraum",
      "Prototypen und Dekorationsobjekte",
      "Lebensmittelverpackungen mit Säurekontakt",
      "Unterwasserbauteile"
    ],
    answer: 1,
    explanation: "PLA ist ideal für Prototypen und Dekorationsobjekte, da es leicht zu drucken ist, aber niedrige Hitzebeständigkeit hat."
  },
  {
    id: "3d_08",
    topic: "3D-Druck und Fertigungsverfahren",
    type: "single",
    question: "Was ist ein Vorteil des additiven Fertigungsverfahrens gegenüber dem subtraktiven?",
    options: [
      "Höhere Materialfestigkeit",
      "Weniger Materialverschwendung",
      "Schnellere Produktion bei Großserien",
      "Günstigere Maschinen"
    ],
    answer: 1,
    explanation: "Bei additiven Verfahren wird nur das Material verwendet, das tatsächlich benötigt wird – weniger Verschnitt als beim Fräsen."
  },

  // ===== Datentypen und Variablen =====
  {
    id: "var_01",
    topic: "Datentypen und Variablen",
    type: "single",
    question: "Welchen Datentyp hat der Wert 42 in Python?",
    options: ["str", "float", "int", "bool"],
    answer: 2,
    explanation: "42 ist eine ganze Zahl und hat deshalb den Datentyp int (Integer/Ganzzahl)."
  },
  {
    id: "var_02",
    topic: "Datentypen und Variablen",
    type: "single",
    question: "Welchen Datentyp hat der Wert \"Hallo\" in Python?",
    options: ["int", "str", "bool", "float"],
    answer: 1,
    explanation: "Text in Anführungszeichen ist ein String (str) – der Datentyp für Zeichenketten."
  },
  {
    id: "var_03",
    topic: "Datentypen und Variablen",
    type: "single",
    question: "Welchen Datentyp hat der Wert True in Python?",
    options: ["int", "str", "float", "bool"],
    answer: 3,
    explanation: "True und False sind Wahrheitswerte und haben den Datentyp bool (Boolean)."
  },
  {
    id: "var_04",
    topic: "Datentypen und Variablen",
    type: "single",
    question: "Welcher Variablenname entspricht den Python-Konventionen (PEP 8)?",
    options: ["MeinAlter", "mein-alter", "mein_alter", "MeinAlter123"],
    answer: 2,
    explanation: "In Python werden Variablennamen in snake_case geschrieben: Kleinbuchstaben, Wörter mit Unterstrichen getrennt."
  },
  {
    id: "var_05",
    topic: "Datentypen und Variablen",
    type: "single",
    question: "Welchen Datentyp hat 3.14 in Python?",
    options: ["int", "str", "float", "bool"],
    answer: 2,
    explanation: "3.14 ist eine Dezimalzahl und hat den Datentyp float (Gleitkommazahl)."
  },
  {
    id: "var_06",
    topic: "Datentypen und Variablen",
    type: "single",
    question: "Warum ist die Wahl des Datentyps wichtig?",
    options: [
      "Weil Python nur int-Variablen versteht",
      "Weil falsche Datentypen zu Fehlern oder falschen Ergebnissen führen können",
      "Weil der Name der Variable vom Datentyp abhängt",
      "Weil bool-Variablen schneller sind"
    ],
    answer: 1,
    explanation: "Der falsche Datentyp kann zu Laufzeitfehlern oder unerwarteten Ergebnissen führen (z. B. '3' + '4' = '34' statt 7)."
  },
  {
    id: "var_07",
    topic: "Datentypen und Variablen",
    type: "single",
    question: "Was ist das Ergebnis von type(True) in Python?",
    options: ["<class 'int'>", "<class 'str'>", "<class 'bool'>", "<class 'float'>"],
    answer: 2,
    explanation: "type(True) gibt <class 'bool'> zurück, da True ein Boolean-Wert ist."
  },
  {
    id: "var_08",
    topic: "Datentypen und Variablen",
    type: "single",
    question: "Welcher Variablenname ist in Python UNGÜLTIG?",
    options: ["alter", "_name", "2mal", "ergebnis_1"],
    answer: 2,
    explanation: "Variablennamen dürfen nicht mit einer Zahl beginnen. '2mal' ist daher ungültig."
  },

  // ===== Operatoren und logische Ausdrücke =====
  {
    id: "op_01",
    topic: "Operatoren und logische Ausdrücke",
    type: "single",
    question: "Was ergibt der Ausdruck 5 == 5 in Python?",
    options: ["5", "False", "True", "Error"],
    answer: 2,
    explanation: "== ist der Gleichheitsoperator. Da 5 gleich 5 ist, ergibt der Ausdruck True."
  },
  {
    id: "op_02",
    topic: "Operatoren und logische Ausdrücke",
    type: "single",
    question: "Was ergibt True and False in Python?",
    options: ["True", "False", "None", "Error"],
    answer: 1,
    explanation: "and ergibt nur True, wenn BEIDE Operanden True sind. True and False ergibt False."
  },
  {
    id: "op_03",
    topic: "Operatoren und logische Ausdrücke",
    type: "single",
    question: "Was ergibt True or False in Python?",
    options: ["False", "True", "None", "Error"],
    answer: 1,
    explanation: "or ergibt True, wenn MINDESTENS EIN Operand True ist. True or False ergibt True."
  },
  {
    id: "op_04",
    topic: "Operatoren und logische Ausdrücke",
    type: "single",
    question: "Was ergibt not True in Python?",
    options: ["True", "False", "0", "Error"],
    answer: 1,
    explanation: "not kehrt den Wahrheitswert um. not True ergibt False."
  },
  {
    id: "op_05",
    topic: "Operatoren und logische Ausdrücke",
    type: "single",
    question: "Was ergibt 3 != 4 in Python?",
    options: ["False", "True", "3", "4"],
    answer: 1,
    explanation: "!= prüft auf Ungleichheit. Da 3 nicht gleich 4 ist, ergibt 3 != 4 den Wert True."
  },
  {
    id: "op_06",
    topic: "Operatoren und logische Ausdrücke",
    type: "single",
    question: "Was ergibt der Ausdruck (3 > 2) and (5 < 4)?",
    options: ["True", "False", "3", "Error"],
    answer: 1,
    explanation: "(3 > 2) ist True und (5 < 4) ist False. True and False ergibt False."
  },
  {
    id: "op_07",
    topic: "Operatoren und logische Ausdrücke",
    type: "single",
    question: "Welcher Operator prüft auf Kleiner-Gleich?",
    options: ["<", ">", "<=", ">="],
    answer: 2,
    explanation: "<= ist der Kleiner-Gleich-Operator: Er gibt True zurück, wenn der linke Wert kleiner oder gleich dem rechten ist."
  },
  {
    id: "op_08",
    topic: "Operatoren und logische Ausdrücke",
    type: "single",
    question: "Was ergibt not (3 == 3)?",
    options: ["True", "False", "3", "0"],
    answer: 1,
    explanation: "(3 == 3) ist True, und not True ergibt False."
  },

  // ===== Eingaben und Typumwandlung =====
  {
    id: "inp_01",
    topic: "Eingaben und Typumwandlung",
    type: "single",
    question: "Welchen Datentyp liefert input() immer zurück?",
    options: ["int", "float", "str", "bool"],
    answer: 2,
    explanation: "input() gibt immer einen String (str) zurück, egal was der Benutzer eingibt."
  },
  {
    id: "inp_02",
    topic: "Eingaben und Typumwandlung",
    type: "single",
    question: "Wie wandelt man einen String '42' in eine ganze Zahl um?",
    options: ["float('42')", "str(42)", "int('42')", "bool('42')"],
    answer: 2,
    explanation: "int('42') konvertiert den String '42' in die ganze Zahl 42."
  },
  {
    id: "inp_03",
    topic: "Eingaben und Typumwandlung",
    type: "single",
    question: "Was ist eine explizite Typumwandlung?",
    options: [
      "Python wandelt Typen automatisch um",
      "Der Programmierer verwendet eine Funktion wie int() oder float() zur Umwandlung",
      "Variablen ändern ihren Typ zufällig",
      "Der Typ wird beim Drucken geändert"
    ],
    answer: 1,
    explanation: "Bei der expliziten Typumwandlung (Type Casting) nutzt der Programmierer Funktionen wie int(), float() oder str(), um den Typ bewusst zu ändern."
  },
  {
    id: "inp_04",
    topic: "Eingaben und Typumwandlung",
    type: "single",
    question: "Was macht der folgende Code: alter = int(input('Dein Alter: '))?",
    options: [
      "Gibt das Alter als Gleitkommazahl aus",
      "Liest eine Texteingabe und wandelt sie in eine ganze Zahl um",
      "Liest eine Zahl und wandelt sie in Text um",
      "Gibt einen Fehler aus"
    ],
    answer: 1,
    explanation: "input() liest eine Texteingabe (str), und int() wandelt diesen String in eine ganze Zahl (int) um."
  },
  {
    id: "inp_05",
    topic: "Eingaben und Typumwandlung",
    type: "single",
    question: "Was passiert bei: ergebnis = '3' + '4'?",
    options: [
      "ergebnis = 7",
      "ergebnis = '34'",
      "Es gibt einen Fehler",
      "ergebnis = 3.4"
    ],
    answer: 1,
    explanation: "'3' und '4' sind Strings. Der +-Operator bei Strings führt Verkettung durch: '3' + '4' = '34'."
  },
  {
    id: "inp_06",
    topic: "Eingaben und Typumwandlung",
    type: "single",
    question: "Wie rechnet man korrekt mit einer Nutzereingabe als Zahl?",
    options: [
      "x = input('Zahl: ') und dann x + 1",
      "x = int(input('Zahl: ')) und dann x + 1",
      "x = str(input('Zahl: ')) und dann x + 1",
      "x = input('Zahl: ') + 1"
    ],
    answer: 1,
    explanation: "Man muss input() mit int() umwandeln, bevor man rechnen kann: x = int(input('Zahl: '))"
  },

  // ===== Bedingungen und Programmabläufe =====
  {
    id: "if_01",
    topic: "Bedingungen und Programmabläufe",
    type: "single",
    question: "Was gibt der folgende Code aus?\n\nx = 10\nif x > 5:\n    print('groß')\nelse:\n    print('klein')",
    options: ["klein", "groß", "10", "Fehler"],
    answer: 1,
    explanation: "Da x = 10 und 10 > 5 wahr ist, wird der if-Block ausgeführt und 'groß' ausgegeben."
  },
  {
    id: "if_02",
    topic: "Bedingungen und Programmabläufe",
    type: "single",
    question: "Was gibt der folgende Code aus?\n\nx = 3\nif x > 5:\n    print('A')\nelif x > 1:\n    print('B')\nelse:\n    print('C')",
    options: ["A", "B", "C", "A und B"],
    answer: 1,
    explanation: "x = 3: Die erste Bedingung (x > 5) ist falsch. Die zweite (x > 1) ist wahr, daher wird 'B' ausgegeben."
  },
  {
    id: "if_03",
    topic: "Bedingungen und Programmabläufe",
    type: "single",
    question: "Wie viele elif-Blöcke kann ein if-Statement in Python haben?",
    options: ["Genau einen", "Maximal zwei", "Keinen", "Beliebig viele"],
    answer: 3,
    explanation: "In Python können beliebig viele elif-Blöcke nach einem if-Block stehen."
  },
  {
    id: "if_04",
    topic: "Bedingungen und Programmabläufe",
    type: "single",
    question: "Was ist die Ausgabe?\n\nx = 5\nif x == 5:\n    print('fünf')\nif x > 3:\n    print('größer drei')",
    options: [
      "fünf",
      "größer drei",
      "fünf\ngrößer drei",
      "Fehler"
    ],
    answer: 2,
    explanation: "Beide if-Bedingungen sind unabhängig. Da x = 5 beide wahr macht, werden beide Ausgaben gedruckt."
  },
  {
    id: "if_05",
    topic: "Bedingungen und Programmabläufe",
    type: "single",
    question: "Warum ist die Reihenfolge der Bedingungen bei if-elif wichtig?",
    options: [
      "Sie hat keinen Einfluss auf das Ergebnis",
      "Python prüft Bedingungen von unten nach oben",
      "Die erste zutreffende Bedingung wird ausgeführt, der Rest wird übersprungen",
      "Elif muss immer vor if stehen"
    ],
    answer: 2,
    explanation: "Bei if-elif wird die erste zutreffende Bedingung ausgeführt. Alle nachfolgenden elif/else werden dann übersprungen."
  },
  {
    id: "if_06",
    topic: "Bedingungen und Programmabläufe",
    type: "single",
    question: "Was gibt dieser Code aus?\n\nnote = 2\nif note == 1:\n    print('Sehr gut')\nelif note <= 2:\n    print('Gut')\nelif note <= 3:\n    print('Befriedigend')",
    options: ["Sehr gut", "Gut", "Befriedigend", "Nichts"],
    answer: 1,
    explanation: "note = 2: Erste Bedingung (note == 1) ist falsch. Zweite Bedingung (note <= 2) ist wahr → 'Gut' wird ausgegeben."
  },

  // ===== Funktionen =====
  {
    id: "func_01",
    topic: "Funktionen",
    type: "single",
    question: "Wie definiert man in Python eine Funktion namens 'begrüßung'?",
    options: [
      "function begrüßung():",
      "def begrüßung():",
      "define begrüßung():",
      "func begrüßung():"
    ],
    answer: 1,
    explanation: "In Python werden Funktionen mit dem Schlüsselwort def definiert: def funktionsname():"
  },
  {
    id: "func_02",
    topic: "Funktionen",
    type: "single",
    question: "Was gibt die folgende Funktion aus?\n\ndef sage_hallo():\n    print('Hallo!')\n\nsage_hallo()",
    options: ["sage_hallo()", "Nichts", "Hallo!", "Fehler"],
    answer: 2,
    explanation: "Die Funktion sage_hallo() wird aufgerufen und gibt 'Hallo!' aus."
  },
  {
    id: "func_03",
    topic: "Funktionen",
    type: "single",
    question: "Warum sind Funktionen in Programmen nützlich?",
    options: [
      "Weil Python ohne Funktionen nicht läuft",
      "Weil sie Code wiederverwertbar und übersichtlicher machen",
      "Weil sie Programme schneller machen",
      "Weil sie Variablen automatisch benennen"
    ],
    answer: 1,
    explanation: "Funktionen ermöglichen Wiederverwendbarkeit von Code, machen Programme übersichtlicher und vermeiden Doppelungen."
  },
  {
    id: "func_04",
    topic: "Funktionen",
    type: "single",
    question: "Was ist der Unterschied zwischen print() und return in einer Funktion?",
    options: [
      "Es gibt keinen Unterschied",
      "print() gibt einen Wert zurück, return() gibt ihn aus",
      "print() zeigt etwas auf dem Bildschirm, return gibt einen Wert zurück an den Aufrufer",
      "return() ist schneller als print()"
    ],
    answer: 2,
    explanation: "print() gibt Text auf dem Bildschirm aus. return gibt einen Wert an die aufrufende Stelle zurück, damit er weiterverwendet werden kann."
  },
  {
    id: "func_05",
    topic: "Funktionen",
    type: "single",
    question: "Wofür wird das Schlüsselwort global in Python verwendet?",
    options: [
      "Um eine Variable in allen Programmen zu definieren",
      "Um auf eine Variable außerhalb der Funktion zuzugreifen und sie zu ändern",
      "Um eine Funktion global zu machen",
      "Um Python-Programme global verfügbar zu machen"
    ],
    answer: 1,
    explanation: "global erlaubt es, innerhalb einer Funktion auf eine Variable im globalen Geltungsbereich (außerhalb der Funktion) zuzugreifen und sie zu ändern."
  },
  {
    id: "func_06",
    topic: "Funktionen",
    type: "single",
    question: "Was gibt der folgende Code aus?\n\ndef verdopple(x):\n    return x * 2\n\nprint(verdopple(5))",
    options: ["5", "x * 2", "10", "Fehler"],
    answer: 2,
    explanation: "verdopple(5) berechnet 5 * 2 = 10 und gibt 10 zurück. print() gibt dann 10 aus."
  },
  {
    id: "func_07",
    topic: "Funktionen",
    type: "single",
    question: "Wie lautet der korrekte Funktionsaufruf für: def berechne(a, b): ?",
    options: [
      "berechne",
      "berechne()",
      "berechne(3, 7)",
      "def berechne(3, 7)"
    ],
    answer: 2,
    explanation: "Eine Funktion mit zwei Parametern wird mit zwei Argumenten aufgerufen: berechne(3, 7)"
  },

  // ===== Rechnen mit Variablen =====
  {
    id: "calc_01",
    topic: "Rechnen mit Variablen",
    type: "single",
    question: "Was ist der Wert von x nach diesen Anweisungen?\n\nx = 5\nx += 3",
    options: ["3", "5", "8", "53"],
    answer: 2,
    explanation: "+= addiert den rechten Wert zum aktuellen Wert der Variable. x = 5 + 3 = 8."
  },
  {
    id: "calc_02",
    topic: "Rechnen mit Variablen",
    type: "single",
    question: "Was bewirkt x *= 2 wenn x = 4?",
    options: [
      "x wird zu 2",
      "x wird zu 6",
      "x wird zu 8",
      "x wird zu 42"
    ],
    answer: 2,
    explanation: "*= multipliziert die Variable mit dem rechten Wert. x = 4 * 2 = 8."
  },
  {
    id: "calc_03",
    topic: "Rechnen mit Variablen",
    type: "single",
    question: "Was ist der Endwert von z?\n\nz = 10\nz -= 3\nz *= 2",
    options: ["14", "7", "20", "4"],
    answer: 0,
    explanation: "z = 10, dann z = 10 - 3 = 7, dann z = 7 * 2 = 14."
  },
  {
    id: "calc_04",
    topic: "Rechnen mit Variablen",
    type: "single",
    question: "Was ist der Wert von a nach:\n\na = 3\na += a",
    options: ["3", "6", "0", "33"],
    answer: 1,
    explanation: "a += a bedeutet a = a + a = 3 + 3 = 6."
  },
  {
    id: "calc_05",
    topic: "Rechnen mit Variablen",
    type: "single",
    question: "Was bedeutet x //= 3 wenn x = 10?",
    options: [
      "x wird zu 3.33",
      "x wird zu 3 (Ganzzahldivision)",
      "x wird zu 30",
      "x wird zu 1"
    ],
    answer: 1,
    explanation: "//= führt eine ganzzahlige Division durch. 10 // 3 = 3 (Rest wird abgeschnitten)."
  },
  {
    id: "calc_06",
    topic: "Rechnen mit Variablen",
    type: "single",
    question: "Was ergibt x % 3 wenn x = 10?",
    options: ["3", "1", "0", "3.33"],
    answer: 1,
    explanation: "% ist der Modulo-Operator und gibt den Rest der Division zurück. 10 % 3 = 1, da 10 = 3*3 + 1."
  },

  // ===== Anwendung und Begründung =====
  {
    id: "app_01",
    topic: "Anwendung und Begründung",
    type: "single",
    question: "Ein Schüler gibt sein Alter als Text ein. Warum kann man damit nicht direkt rechnen?",
    options: [
      "Weil Python Zahlen nicht kennt",
      "Weil input() einen String zurückgibt und man Strings nicht addieren/subtrahieren kann",
      "Weil Alter immer bool sein muss",
      "Weil das Alter zu groß ist"
    ],
    answer: 1,
    explanation: "input() gibt immer str zurück. Arithmetische Operationen wie + oder - funktionieren nur mit numerischen Typen (int, float)."
  },
  {
    id: "app_02",
    topic: "Anwendung und Begründung",
    type: "single",
    question: "Warum sollte man für eine Ja/Nein-Entscheidung einen bool-Typ verwenden?",
    options: [
      "Weil bool-Variablen mehr Speicher benötigen",
      "Weil bool genau zwei Zustände (True/False) hat, was eine klare Bedeutung gibt",
      "Weil Python keine anderen Typen für Entscheidungen unterstützt",
      "Weil bool schneller als int ist"
    ],
    answer: 1,
    explanation: "bool hat genau zwei Zustände: True (ja) und False (nein). Das macht den Code lesbarer und die Absicht klarer."
  },
  {
    id: "app_03",
    topic: "Anwendung und Begründung",
    type: "single",
    question: "Welches Fertigungsverfahren würdest du für einen individuellen Prototypen aus Kunststoff wählen?",
    options: [
      "Gießen in einer Metallform",
      "FDM-3D-Druck",
      "Drehen auf einer CNC-Maschine",
      "Stanzen"
    ],
    answer: 1,
    explanation: "FDM-3D-Druck eignet sich ideal für Einzelprototypen: kein Formenbau nötig, flexibel und günstig."
  },
  {
    id: "app_04",
    topic: "Anwendung und Begründung",
    type: "single",
    question: "Welcher Datentyp eignet sich für die Speicherung des Namens einer Person?",
    options: ["int", "float", "bool", "str"],
    answer: 3,
    explanation: "Namen bestehen aus Zeichen/Text, daher ist str (String/Zeichenkette) der passende Datentyp."
  },

  // ===== Allgemein =====
  {
    id: "gen_01",
    topic: "Allgemein",
    type: "single",
    question: "Was ist ein Algorithmus?",
    options: [
      "Ein Programmierfehler",
      "Eine Folge von klar definierten Anweisungen zur Lösung eines Problems",
      "Eine Python-Bibliothek",
      "Ein spezieller Datentyp"
    ],
    answer: 1,
    explanation: "Ein Algorithmus ist eine endliche Folge von klar definierten Anweisungen, die ein Problem Schritt für Schritt lösen."
  },
  {
    id: "gen_02",
    topic: "Allgemein",
    type: "single",
    question: "Was ist der Unterschied zwischen einem Compiler und einem Interpreter?",
    options: [
      "Es gibt keinen Unterschied",
      "Ein Compiler übersetzt das gesamte Programm auf einmal, ein Interpreter Zeile für Zeile",
      "Ein Compiler ist für Python, ein Interpreter für Java",
      "Ein Interpreter ist schneller als ein Compiler"
    ],
    answer: 1,
    explanation: "Ein Compiler übersetzt den gesamten Code in Maschinencode, bevor das Programm läuft. Ein Interpreter (wie Python) übersetzt und führt den Code Zeile für Zeile aus."
  },
  {
    id: "gen_03",
    topic: "Allgemein",
    type: "single",
    question: "Was ist ein Syntaxfehler in Python?",
    options: [
      "Ein Fehler im Programmablauf zur Laufzeit",
      "Ein Fehler, weil das Programm das falsche Ergebnis berechnet",
      "Ein Fehler, weil der Code nicht den Sprachregeln von Python entspricht",
      "Ein Fehler in der Datenbankverbindung"
    ],
    answer: 2,
    explanation: "Ein Syntaxfehler tritt auf, wenn der Code nicht den Grammatikregeln von Python entspricht, z. B. fehlende Doppelpunkte oder falsche Einrückung."
  },
  {
    id: "gen_04",
    topic: "Allgemein",
    type: "single",
    question: "Wofür steht CAD im Zusammenhang mit 3D-Druck?",
    options: [
      "Computer Aided Design – computergestütztes Konstruieren",
      "Calculated Additive Deposition",
      "Computer Aided Drilling",
      "Centralized Additive Device"
    ],
    answer: 0,
    explanation: "CAD steht für Computer Aided Design und bezeichnet die computergestützte Konstruktion von 3D-Modellen, die dann gedruckt werden können."
  },
  {
    id: "gen_05",
    topic: "Allgemein",
    type: "single",
    question: "Was versteht man unter einem Schichtwerkstoff beim 3D-Druck?",
    options: [
      "Ein Material, das in vielen Farben verfügbar ist",
      "Ein Verfahren, bei dem Material Schicht für Schicht aufgebaut wird",
      "Ein extrem hartes Material",
      "Ein Material für industrielle Anwendungen"
    ],
    answer: 1,
    explanation: "Beim 3D-Druck werden Objekte durch schichtweises Auftragen von Material aufgebaut – daher der Begriff 'Schichtfertigung' oder 'Additive Fertigung'."
  }
];

// Topic colors for visual distinction
const TOPIC_COLORS = {
  "3D-Druck und Fertigungsverfahren": "#e74c3c",
  "Datentypen und Variablen": "#3498db",
  "Operatoren und logische Ausdrücke": "#2ecc71",
  "Eingaben und Typumwandlung": "#f39c12",
  "Bedingungen und Programmabläufe": "#9b59b6",
  "Funktionen": "#1abc9c",
  "Rechnen mit Variablen": "#e67e22",
  "Anwendung und Begründung": "#e91e63",
  "Allgemein": "#607d8b"
};

const TOPICS = [...new Set(QUESTIONS.map(q => q.topic))];
