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

- Jedes Kapitel: `src/<kapitel>/chapter.yaml` (title, summary, pages in Lesereihenfolge); erste Seite `recap`. Abschnitts-Ids auf Inhaltsseiten: `einstieg` (erste Aufgabe vorweg, mit Begründung der Lösung), `idee` (Herleitung am Bild), `regel`, `beispiel` (Beispielkasten, ein Beispiel je Kasten), `uebung`. Jede Seite sagt am Anfang, was Lernende danach können, und am Ende, was kommt.
- Recap-Seite: Kopf „Das brauchst du für dieses Kapitel“, je Baustein eine Überschrift (Name der Karte), Fachbegriffe fett mit ein bis zwei Sätzen und Zahlenbeispiel (je auch als `definition` im Glossar), ein Beispielkasten, Komponente `Kurztest` (`src/components/Kurztest.*`, Vorlage aus den gemeinsamen Epic-Dateien), Satz mit Kartenseite `https://lernapps.net/apps/map/mathematik/c/<id>/`, Schluss „Du bist bereit, wenn du …“. Höchstens ein Bildschirm je Baustein. Keine Links in andere Apps.
- Länge: höchstens 350 Wörter Lesetext je Seite, Bild, Tabelle oder Aufgabe in den ersten vier Blöcken, mindestens vier Aufgaben, nicht alle vom selben Typ.
- Geschichte: realer Fall ohne erfundene Personen. Kapitel `wurzeln`: Bauen und Messen (Beet, Pflaster, Würfelverpackung). Kapitel `potenzen`: Zehnerpotenz-Reise vom Universum zum Atom. Jede Seite nimmt den Faden der vorigen auf und endet mit dem nächsten Schritt.

## Terminology

- Begriffe der Karte: Quadratwurzeln, Reelle Zahlen, Wurzelgesetze, Potenzgesetze, Negative Exponenten, N-te Wurzeln. Neue Wörter am Beispiel bei erster Verwendung (Radikand, Wurzelexponent, irrationale Zahl, Mantisse).
- Schreibweisen (regeln.md Abschnitt 2): Dezimalkomma; Minus `−` (U+2212), negative Zahl in Rechnung in Klammern; `·` und `:`; Brüche gesetzt (MathML), `a/b` nur in `mistakes` und Rückmeldungen von `generated` (Ausnahme W28, wird gezählt: siehe Plan); Einheiten mit geschütztem Leerzeichen (`2 m²`); Variablen kursiv; ab 5 Stellen Dreiergruppen mit schmalem geschütztem Leerzeichen; Zahlengerade (nie Zahlenstrahl); Anrede „du“.
- Ausgeschlossen: Rationalisieren des Nenners, Wurzelgleichungen, Funktionen (#396), Pythagoras (#399).
- Glossar (`definition`-Blöcke): Quadratzahl, Quadratwurzel, Radikand, Näherungswert, rationale Zahl, irrationale Zahl, reelle Zahl, Potenz, Basis, Exponent, Zehnerpotenz, Dezimalbruch, Vorzeichenregel, gleichartige Glieder, Ausklammern, Mantisse, n-te Wurzel.

## Exercise patterns

- Seite berechnen/schätzen (`generated`): Muster „Seite aus Fläche“ (Wurzel, Rundung `round(sqrt(A), 2)`), `mistakes` für halbiert, Quadrat statt Wurzel. Beispiel: `src/wurzeln/quadratwurzel-bestimmen.yaml`, Id `ex-seite`.
- Beurteilen (`true-false` mit Grund, `single-choice`): √(a²+b²) = a+b, π = 22/7, irrational/rational mit Dezimalentwicklung als `material`.
- Ordnen und Zuordnen: `ordering` (Wurzeln, Zahlen auf der Zahlengerade), `matching` (Term ↔ vereinfachter Term, Zahl ↔ kleinste Zahlmenge).
- Vereinfachen und Potenzen (`generated`): Eingabe Faktor und Radikand bzw. Basis und Exponent, Fehlertypen im Plan („Content method“).
- Große/kleine Zahlen (`generated`): zieht Datensätze aus `src/data/groessen.yaml` (Felder `name`, `mantisse`, `exponent`, `hinweis`); Antwort Mantisse und Exponent.
- Zufallswerte immer mit Rechenprobe in der Formel, nie Division durch 0, nie Wurzel aus negativer Zahl bei geradem n.

## Figures

- Quadrat und Würfel (SVG `image`): Quadrat mit gegebener Fläche und gesuchter Seite „?“, Würfel mit gegebenem Volumen und gesuchter Kante „?“. Das Bild zeigt nie die Lösung. Farbe nie allein als Information (Beschriftung am Bild).
- Zahlengerade mit Lupe: vier SVG-Bilder (1 bis 2, 1,4 bis 1,5, 1,41 bis 1,42, 1,414 bis 1,415), Grenzen beschriftet; Komponente `Lupe` (Regler Stufe, Tastatur, Textalternative; ohne JS die vier Bilder).
- Zehnerpotenz-Leiter: `table` aus `src/data/groessen.yaml`.
- Alle Bilder: eigene SVG im Explainer, `alt` beschreibt, was gezeigt ist, Bildunterschrift sagt, worauf man schaut; Lizenz wie die App (CC BY 4.0 Inhalt, MIT Code); funktioniert bei 360 px.

## Sources

- Lernlandkarte Mathematik (gelesen). KMK-Bildungsstandards ESA/MSA 2022 nur über die Karte. Eigene Herleitungen und Aufgaben, jede Zahlenaufgabe mit Rechenprobe.
- Größenordnungen der Zehnerpotenz-Reise nachgeschlagen, nachgerechnet, auf Größenordnung gerundet; sie stehen nicht als Quelle oder Link in der App. Keine Schulbuchtexte, keine Dritt-Inhalte, keine externen Links (auch nicht an Aufgaben).

## Adding a chapter or round

1. Kompetenzen aus der Karte (`https://lernapps.net/apps/map/mathematik.json`) mit Id übernehmen; Reihenfolge nach `requires`.
2. Ordner `src/<kapitel>/`, `chapter.yaml` mit `title`, `summary`, `pages`; Kapitel in `src/app.yaml` unter `chapters` eintragen.
3. Erste Seite `recap` für Voraussetzungen von außen (Format siehe „Content structure“).
4. Je Kompetenz eine oder zwei Seiten mit Abschnitten `einstieg`, `idee`, `regel`, `beispiel`, `uebung`; Aufgaben nach den Mustern oben; Daten einmal in `src/data/`.
5. Neue Fachbegriffe als `definition` ins Glossar.
6. `npx --no -- lernapps check`, dann Commit.

## Rules learned from mistakes

- Kein `$\sqrt{\ }$` (leere Formel, der Check `explainer-readable-without-js` schlägt an): das Wurzelzeichen allein als Zeichen `√` in den Text schreiben.
- Jeden Fachbegriff (Einheitsquadrat, Quadratzahl, Umfang, Wurzelziehen) auf der Seite erklären, bevor eine Aufgabe ihn benutzt; Hinweise nennen eine Strategie (Einschließen), nicht nur eine Frage.
- Aufgabenpools nicht mit Zahlen der Beispiele und der Aufgaben derselben Seite überlappen lassen (81, 144 stehen nur dort, nicht im Pool).
- Rückmeldungen der `generated`-Aufgaben nennen den häufigsten Fehler (halbiert, verdoppelt, Umfang statt Seite) und nie die Lösung.
- Überschriften (auch `title` eines `example`) ohne geschütztes Leerzeichen: der Test „heading levels follow the nesting“ vergleicht sonst Text und Quelle verschieden.
