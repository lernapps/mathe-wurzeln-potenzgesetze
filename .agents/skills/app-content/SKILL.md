---
name: app-content
description: Use for any content work in this app - researching, writing, extending, correcting or reviewing its competencies, chapters, pages, rounds, questions, exercises, figures, terms or sources. This app's own content decisions; they take precedence over the generic lernapps content skills. Load it before you change any content.
---

# Content guide of this app

Explainer "Wurzeln, reelle Zahlen und Potenzgesetze" (Strang `mathematik/arithmetik`, Stufe 9-10), Teil des Mathe-Epics (lernapps/apps#402, Issue #392). Gemeinsame Regeln: Schreibweisen und Wiederholungen stehen unten.

## Curriculum

- Hessen, Gymnasium, Stufe 9-10 (Annahme; bei Abweichung gilt Lehrplan oder Issue). Keine Lehrplanseite zitiert: die Reihenfolge gibt die Lernlandkarte Mathematik (`https://lernapps.net/apps/map/mathematik/`), Orientierung KMK-Bildungsstandards ESA/MSA 2022 über die Karte.
- Kein eigenes Material des Auftraggebers; die App folgt der Karte und eigenen Herleitungen.

## Competencies

Kapitel `wurzeln` (Wurzeln und neue Zahlen), Kapitel `potenzen` (Potenzgesetze, kleine Zahlen und n-te Wurzeln). Seiten übernehmen die Ids der Karte (`competencies`), nie umformuliert.

- `quadratwurzeln`: „Ich kann Quadratwurzeln erklären und Näherungswerte bestimmen.“ Seiten `wurzeln/quadratwurzel-bestimmen`, `wurzeln/wurzeln-abschaetzen`.
- `reelle-zahlen`: „Ich kann rationale und irrationale Zahlen unterscheiden und die reellen Zahlen als Zahlbereich einordnen.“ Seiten `wurzeln/wurzel-zwei-einfangen`, `wurzeln/reelle-zahlen`.
- `wurzelgesetze`: „Ich kann Wurzelgesetze anwenden und einfache Wurzelterme vereinfachen.“ Seiten `wurzeln/wurzelgesetze`, `wurzeln/wurzeln-vereinfachen`.
- `potenzgesetze`: „Ich kann die Potenzgesetze für natürliche Exponenten anwenden.“ Seiten `potenzen/potenzgesetze-produkt`, `potenzen/potenzgesetze-potenz`.
- `potenzen-ganzzahlige-exponenten` („Negative Exponenten“): „Ich kann Potenzen mit negativen Exponenten als Bruch deuten und berechnen.“ Seiten `potenzen/negative-exponenten`, `potenzen/wissenschaftliche-schreibweise`.
- `n-te-wurzeln`: „Ich kann n-te Wurzeln bestimmen und Wurzeln als Potenzen mit Bruch-Exponenten schreiben.“ Seiten `potenzen/dritte-wurzel`, `potenzen/wurzeln-als-potenzen`.
- Recap (Voraussetzungen von außen, Seite `recap` je Kapitel, `recap:` statt `competencies`): Kapitel `wurzeln`: `mathematik/potenzen`, `mathematik/zahlen-vergleichen-ordnen`, `mathematik/dezimalbrueche-rechnen`, `mathematik/rationale-zahlen-rechnen`. Kapitel `potenzen`: `mathematik/terme-umformen`, `mathematik/potenzen`. Übungs-Ids stehen in den Seiten (`ex-…`, siehe Muster).

## Content structure

- Zwei Kapitel, Ordner `src/wurzeln/` (Wurzeln und neue Zahlen) und `src/potenzen/` (Potenzgesetze, kleine Zahlen und n-te Wurzeln), je mit `chapter.yaml` und der Seitenliste in Lesereihenfolge. Das Kapitel `wurzeln` hat 6 Inhaltsseiten (`quadratwurzel-bestimmen`, `wurzeln-abschaetzen`, `wurzel-zwei-einfangen`, `reelle-zahlen`, `wurzelgesetze`, `wurzeln-vereinfachen`), das Kapitel `potenzen` 6 (`potenzgesetze-produkt`, `potenzgesetze-potenz`, `negative-exponenten`, `wissenschaftliche-schreibweise`, `dritte-wurzel`, `wurzeln-als-potenzen`). Beide beginnen mit der Seite `recap`.
- Abschnitts-Ids auf Inhaltsseiten, in dieser Reihenfolge: `einstieg` (Ziel in einem Satz und eine erste Aufgabe, die ohne die Seite lösbar ist), `idee` (Herleitung an Bild, Tabelle oder Komponente), `regel` (Definition, Formel), `beispiel` (Beispielkasten, ein Beispiel je Kasten), `uebung` (mindestens vier Aufgaben, vom Erkennen zum Anwenden zur neuen Situation). Die Seite endet mit einem Satz, was kommt.
- Recap-Seite: `recap:` statt `competencies`, Abschnitte `kopf`, je Baustein eine Überschrift (Name der Karte), `bereit`. Je Baustein: Fachbegriffe als `definition` (Glossar), ein Beispielkasten, ein bis zwei Komponenten `Kurztest` (`src/components/Kurztest.*`, eine Frage, sofortige Rückmeldung mit Grund, nichts gezählt) und der Satz „Wenn du hier unsicher warst: …“ mit Kartenseite `https://lernapps.net/apps/map/mathematik/c/<id>/`. Kein Link in andere Apps. Die Kurztest-Fragen enthalten nur Text (keine Formeln), `nojs` nennt Frage, Optionen und Antwort.
- Länge: Inhaltsseiten höchstens 350 Wörter Lesetext (Hinweis `explainer-text-load` bei den Recaps und einer Seite bleibt, weil mehrere Bausteine auf einer Seite stehen).
- Geschichte: realer Fall ohne erfundene Personen. Kapitel `wurzeln`: Schulgarten (Beet, Zaun, Pflaster). Kapitel `potenzen`: Zehnerpotenz-Reise (Erde, Sonne, Atom, Virus, Universum), am Ende der Rückblick auf beide Kapitel.

## Terminology

- Begriffe der Karte: Quadratwurzeln, Reelle Zahlen, Wurzelgesetze, Potenzgesetze, Negative Exponenten, N-te Wurzeln. Neue Wörter am Beispiel bei erster Verwendung.
- Schreibweisen (regeln.md Abschnitt 2): Dezimalkomma; Minus `−` (U+2212), negative Zahl in Rechnung in Klammern; `·` und `:`; Brüche in Text und Aufgaben gesetzt (`\frac`), `a/b` nie als Bruch; Einheiten mit geschütztem Leerzeichen (`2 m²`), Zahlen ab fünf Stellen in Dreiergruppen mit schmalem geschütztem Leerzeichen (U+202F); Variablen kursiv (`$a$`); „Zahlengerade“ (nie „Zahlenstrahl“); Anrede „du“. Potenzen in Optionen und Rückmeldungen als Unicode (`2⁵`, `10⁻⁷`), weil Formeln dort nicht gesetzt werden; in `matching` keine Formeln (nur Wörter und Unicode).
- Ausgeschlossen: Rationalisieren des Nenners, Wurzelgleichungen, Funktionen (#396), Pythagoras (#399), Wurzel aus negativen Zahlen (außer als Hinweis, dass es sie nicht gibt).
- Glossar (`definition`-Blöcke, jeder Begriff einmal): Potenz, Basis, Exponent, Quadratzahl, Zehnerpotenz, Zahlengerade, Dezimalbruch, Vorzeichenregel (Recap Kapitel 1); gleichartige Glieder, Ausklammern (Recap Kapitel 2); Quadratwurzel, Radikand, Näherungswert, Intervallschachtelung, rationale Zahl, irrationale Zahl, reelle Zahl, gleichartige Wurzeln, negativer Exponent, Mantisse, n-te Wurzel.

## Exercise patterns

Alle Aufgaben stehen im Abschnitt `uebung` der Seite; Zufallsaufgaben (`generated`) mit Fehlerdiagnose (`mistakes`), `hint` und `steps`, kein `mistake` darf für eine gezogene Zahl gleich der Antwort sein (der Build prüft das mit festen Seeds).
- Seite aus Fläche, Zaun: `generated` mit `oneOf` aus Quadratzahlen, Antwort `sqrt(A)`. Beispiel: `src/wurzeln/quadratwurzel-bestimmen.yaml`, Ids `seite-aus-flaeche`, `zaun`.
- Einschließen und Näherung: `generated` `ganze-zahl-darunter` (Antwort `round(sqrt(a) - 0.5, 0)`), `naeherung-eine-stelle` (`round(sqrt(a), 1)`), `ordering` (`wurzeln-ordnen`) in `src/wurzeln/wurzeln-abschaetzen.yaml`.
- Intervallschachtelung: `number`, `ordering` (`schachtelung-schritte`), `multiple-choice`, `true-false`, `generated` `quadrieren-lupe` in `src/wurzeln/wurzel-zwei-einfangen.yaml`.
- Rational/irrational: `multiple-choice`, `single-choice`, `matching` (Zahl ↔ Zahlenmenge), `ordering`, `number` in `src/wurzeln/reelle-zahlen.yaml`.
- Wurzelgesetze mit Datensatz: `generated` mit `pick: 1` aus `src/data/wurzelprodukte.yaml`, `wurzelquotienten.yaml` (`produkt-wurzeln`, `quotient-wurzeln`), `quadratfaktoren.yaml` (`faktor-ziehen` in `src/wurzeln/wurzeln-vereinfachen.yaml`); `matching` Term ↔ Wert/vereinfachte Form.
- Potenzgesetze: `generated` mit Exponenten als Antwort (`produkt-potenzen`, `quotient-potenzen`, `potenz-potenz`, `produkt-in-klammer`) in `src/potenzen/potenzgesetze-produkt.yaml` und `potenzgesetze-potenz.yaml`; Fehler: Exponenten multipliziert statt addiert und umgekehrt.
- Negative Exponenten: `generated` `zehnerpotenz-dezimal`, `nenner-bestimmen`; Größen der Reise aus `src/data/groessen.yaml` (Felder `name`, `mantisse`, `exponent`) in `mm-exponent` auf `src/potenzen/wissenschaftliche-schreibweise.yaml`.
- n-te Wurzeln: `generated` aus `src/data/nwurzeln.yaml` (`n`, `a`, `w` mit `w^n = a`, Id `nte-wurzel-bestimmen`, `wurzel-als-potenz`) und aus `src/data/bruchexponenten.yaml` (`a`, `n`, `m`, `r`, Id `bruch-exponent-zaehler`).
- Je Seite mindestens eine Aufgabe in einer neuen Situation (Sachaufgabe wie Beet, Behälter, Reise).
- Zufallswerte immer mit Rechenprobe in der Formel, nie Division durch 0, nie Wurzel aus negativer Zahl.

## Figures

- SVG im Ordner `src/images/` (eigene Zeichnung, CC-BY-4.0, weißer Hintergrund im Bild, Text und Rahmen dunkel, jede Information auch als Text): `quadrat-seite-3.svg` (3×3 Quadrat, Einheitsquadrat 1 m²), `rechteck-wurzeln.svg` (Rechteck √9 mal √4), `zahlengerade-reell.svg` (gefüllte Punkte rational, offene irrational, zusätzlich beschriftet), `wuerfel-kante-2.svg` (2×2×2 Würfel). Bilder zeigen nie die Lösung der Aufgabe auf derselben Seite.
- Komponente `Lupe` (`src/components/Lupe.vue`, `.ts`, `.test.ts`) auf `src/wurzeln/wurzel-zwei-einfangen.yaml`: Regler für fünf Stufen der Intervallschachtelung für √2, Zahlengerade zoomt, Quadrate der Grenzen als Text; prüft nichts. Ohne JavaScript steht die Tabelle „Die Stufen der Lupe“ und der Text `nojs`.
- Komponente `Kurztest` (`src/components/Kurztest.vue`): nur auf den `recap`-Seiten. Farben nur über Variablen der Laufzeit.
- Tabellen mit drei Spalten höchstens, Formeln kurz (sonst Scroll-Bereich, der `accessible` verletzt).

## Sources

- Lernlandkarte Mathematik; KMK-Bildungsstandards ESA/MSA 2022 nur über die Karte. Eigene Herleitungen und Aufgaben, jede Zahl rechnerisch geprüft (Tabellen der Näherungswerte und alle Datensätze in `src/data/` sind mit Skripten nachgerechnet).
- Größenordnungen der Zehnerpotenz-Reise (`src/data/groessen.yaml`) nachgeschlagen, auf Größenordnung gerundet und selbst umgerechnet; sie stehen nicht als Quelle oder Link in der App. Keine Schulbuchtexte, keine Dritt-Inhalte, keine externen Links (an Fragen verlinkt nur die Kartenseite des Bausteins).

## Adding a chapter or round

1. Kompetenzen aus der Karte (`https://lernapps.net/apps/map/mathematik.json`) mit Id übernehmen; Reihenfolge nach `requires`.
2. Ordner `src/<kapitel>/` mit `chapter.yaml` (`title`, `summary`, `pages`); Kapitel in `src/app.yaml` unter `chapters` eintragen, jede Seite genau einmal in `pages`.
3. Erste Seite `recap`: eine Recap-Seite je Kapitel (Vorlage: `src/wurzeln/recap.yaml`), Kurztests mit `Kurztest`.
4. Je Kompetenz eine oder zwei Seiten mit den Abschnitten `einstieg`, `idee`, `regel`, `beispiel`, `uebung`; Aufgaben nach den Mustern oben; Datensätze einmal in `src/data/<name>.yaml` (Name nur Kleinbuchstaben und Ziffern).
5. Fachbegriffe als `definition` (jeder Begriff nur einmal im ganzen Explainer).
6. `npx vp check --fix`, `npx vp build`, `npx --no -- lernapps check`, dann Commit.

## Rules learned from mistakes

- Kein `$\sqrt{\ }$` (leere Formel, der Check `explainer-readable-without-js` schlägt an): das Wurzelzeichen allein als Zeichen `√` in den Text schreiben.
- Jeden Fachbegriff (Einheitsquadrat, Quadratzahl, Umfang, Wurzelziehen) auf der Seite erklären, bevor eine Aufgabe ihn benutzt; Hinweise nennen eine Strategie (Einschließen), nicht nur eine Frage.
- Aufgabenpools nicht mit Zahlen der Beispiele und der Aufgaben derselben Seite überlappen lassen (81, 144 stehen nur dort, nicht im Pool).
- Rückmeldungen der `generated`-Aufgaben nennen den häufigsten Fehler (halbiert, verdoppelt, Umfang statt Seite) und nie die Lösung.
- Überschriften (auch `title` eines `example`) ohne geschütztes Leerzeichen: der Test „heading levels follow the nesting“ vergleicht sonst Text und Quelle verschieden.
