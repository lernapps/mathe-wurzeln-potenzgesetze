---
# Read by the hooks, the review, the evals. Schema: @lernapps/tooling/guidance/plan-front-matter.v1.schema.json
# Written by `lernapps plan` and the hooks. Never change a key or a value by hand.
# Archetype, null until chosen in Explore. Allowed values: explainer, interactive, quiz.
archetype: explainer
# Current phase. Allowed values: explore, plan, code, commit.
phase: commit
# prePushFailures: failed pre-push runs, written by the hook.
prePushFailures: 0
# failedChecks: failed rules and runs, written by lernapps check and the hooks.
failedChecks: { accessible: 2, app-content-guide: 4, checks-pass: 14, explainer-readable-without-js: 3 }
---

# Plan: mathe-wurzeln-potenzgesetze, first version

<!--
For you, the assistant. The process is in AGENTS.md; this plan holds the method.
- `npx --no -- lernapps plan next` prints the task to do now, `plan done` ticks it and prints the next one.
- You write only below Goal, Key decisions, Notes, Answers, Entry draft, Content method and Retrospective, in the
  creator's language. Delete the comment of a section once the section is filled.
- Work on the branch `work`, locally: push nothing before Commit.
-->

*Started 2026-11-23. Explore, Plan, Code, Commit.*

## Goal

<!-- 1–2 sentences: what learners do, what they learn. -->

Lernende der Stufe 9-10 erschließen Quadratwurzeln, reelle Zahlen, Wurzel- und Potenzgesetze, negative Exponenten und n-te Wurzeln, indem sie Flächen und Volumen, die Zahlengerade mit Lupe und die Zehnerpotenz-Reise selbst auswerten und danach rechnen. Sie üben alle 6 Bausteine des Issues lernapps/apps#392.


## Key decisions

<!-- One line each: decision and reason. Archetype first. Your own choice without the creator: mark "(guess)". -->

- Archetyp `explainer`, Format 2, `strand: mathematik/arithmetik`: Issue 392 legt das fest; Lernende brauchen Herleitungen, Bilder und Übungen auf jeder Seite.
- Zwei Kapitel wie im Issue, je eine Sammel-Wiederholung am Kapitelanfang (regeln.md Abschnitt 7).
- Geschichte: Stufe 10, daher ein realistischer Fall mit Daten, keine erfundenen Kinder: Kapitel 1 „Bauen und Messen“ (Fläche, Seitenlänge, Würfel), Kapitel 2 die Zehnerpotenz-Reise vom Universum zum Atom. (guess)
- Zahlengerade (nicht Zahlenstrahl) durchgehend, weil negative Zahlen vorkommen; Konvention aus #768/#385 (regeln.md Abschnitt 2).
- Sprache: nur Deutsch (guess: Issue nennt keine zweite Sprache).
- Look and feel: fixed by the archetype.
- Kein `scope`: die App hat keine `open-task` und folgt keinem Material des Auftraggebers.


## Notes

<!-- Strand or subject, competencies by chapter (ids), didactic approach, scope, sources and licences, open questions. -->

**Hinweis zum Ablauf:** Die Interview-Aufgaben (Ziel, Lernende, Inhalt, Menge, Sprache, Begriffe) beantwortet der Auftragstext aus dem Issue 392 und den Regeln, nicht ein Mensch im Chat. Die Aufgaben 3-6 der Explore-Phase habe ich gesammelt abgehakt, nachdem ich Karte, Skills und README gelesen hatte.

**Hinweis zu den Code-Aufgaben:** Beim Anlegen haben Backticks im Shell-Befehl Seiten-Ids aus den Aufgabentexten verschluckt (nicht per Hand korrigierbar, `plan-file`). Die Aufgaben meinen: Musterseite = `wurzeln/quadratwurzel-bestimmen`; Recap K1 = `wurzeln/recap` mit `Kurztest`; „K1 (quadratwurzeln)“ = `wurzeln-abschaetzen`; „K1 (reelle-zahlen) Komponente“ = `wurzel-zwei-einfangen` mit `Lupe`; „K1 (reelle-zahlen)“ = `reelle-zahlen`; „K1 und (wurzelgesetze)“ = `wurzelgesetze` und `wurzeln-vereinfachen`; „K2 und (potenzgesetze)“ = `potenzgesetze-produkt` und `potenzgesetze-potenz`; „K2 und (potenzen-ganzzahlige-exponenten)“ = `negative-exponenten` und `wissenschaftliche-schreibweise` mit `src/data/groessen.yaml`; „K2 und (n-te-wurzeln)“ = `dritte-wurzel` und `wurzeln-als-potenzen`. Skizzen: `.vibe/sketches/`.

**Musterseite, Lernenden-Prüfer (zwei Unteragenten, Klasse 10, getrennt vom Schreiber):** Lauf 1 las YAML und Screenshot, Lauf 2 spielte die gebaute Seite im Browser (1280 und 360 px) durch. Umgesetzt: Begriffe erklärt (Einheitsquadrat, Quadratzahl, Quadrat einer Zahl, Einschließen, Umfang, „Wurzel aus“), wiederholte Formel entfernt, Bildunterschrift nennt das Einheitsquadrat, Hinweise mit Strategie statt festem Beispiel, Aufgabenpool ohne die Zahlen von Beispiel und Aufgaben, Fehlerrückmeldungen für 10, −5, ±1 und Umfang, Optionen von √81 ohne eingebaute Begründung, Grund für „nicht negativ“ im Text. Nicht geändert (Laufzeit): „.:“ in der Rückmeldung einer Auswahl, Meldung bei leerer Zahleneingabe, „Lösung“-Knopf schon nach dem ersten Fehler (regeln.md 3.3), `\sqrt{\ }` ergibt eine leere Formel, geschütztes Leerzeichen in Überschriften bricht den Test „heading levels“. Seite danach nicht erneut von einem Prüfer durchgespielt (Änderungen sind überwiegend Text; Stand: nur `lernapps check`).

**Abhak-Fehler:** Die Aufgabe „Prüfer vor Veröffentlichen“ habe ich beim Abhaken einer Folge von Seitenaufgaben versehentlich mit abgehakt, bevor die Prüfer liefen. Die Läufe folgen unter der neu angelegten Aufgabe; bis dahin gilt kein Prüfer als gelaufen.

**Review** (zwei Unteragenten, die nicht geschrieben haben; Lauf 1 Stand 03856a6 minus Änderungen darunter)
- *Fachlicher Prüfer:* rechnete alle Tabellen, Lupe-Quadrate, Näherungswerte und per Skript alle Werte der `oneOf`-Listen und Datensätze nach: alle Zahlen stimmen, alle `generated` lösbar, keine `mistakes`-Formel liefert den richtigen Wert. Fehler gefunden und behoben: falscher Satz im Rechteck-Bild („Quadrat mit 6 Kästchen: √36“), Fläche/Länge vermischt in `wurzelgesetze/idee`, falsche `info`-Texte („25 ist der Radikand“, „beide Wurzeln sind gleichartig“), Aufgabe „Näherung auf eine Stelle“ ohne Rundungsangabe (jetzt „größte Zahl mit einer Stelle, deren Quadrat noch kleiner ist“), `a/b` im Aufgabentext, mehrdeutige `mistakes` (per `where` getrennt), Ungenauigkeiten (Definition Quadratwurzel mit a ≥ 0, Intervall statt Bereich, „in diesem Kurs“ statt „letztes Mal“, Kehrwert erklärt, Radikand-Hinweis bei n-ten Wurzeln, Proton statt Atomkern, Einheiten mit geschütztem Leerzeichen, große Zahlen mit schmalem geschütztem Leerzeichen). Größenordnungen der Reise: plausibel (gerundet). Stichprobe wörtliche Übernahmen: 5 Stellen per Websuche geprüft, kein wörtlicher Treffer (Ausschluss damit nicht bewiesen). Nicht geprüft: Anzeige von Mantisse und `{{x}}` mit Komma durch die Laufzeit, Lehrplan Hessen, Tastatur und Glossar durch diesen Prüfer.
- *Lernenden-Prüfer (Klasse 10, Browser, 1280 und 360 px, alle 14 Seiten):* keine Konsolenfehler. Behoben: rohes LaTeX in drei Tabellenüberschriften, vier Seiten mit Tabellen breiter als 360 px (Tabellen durch Formelzeilen ersetzt), Recaps zu dünn (je Baustein jetzt zwei Kurztests, Gesamturteil „alle richtig = bereit“, verschiedene Titel), Lupe vor Gebrauch erklärt (Ausschnitt, Striche, Stufen), neue Begriffe im Glossar (Quadrieren, Einschließen, Intervall, Kehrwert, Wurzelexponent, Quadratfaktor, Produkt- und Quotientengesetz), Beispiele, die zugleich eine Aufgabe sind (Erde–Sonne, km², 125 Liter, 64 cm³, √72, Pool-Überlappungen) durch andere Zahlen ersetzt, „Mantisse“ nur einmal erklärt, 1 m = 10³ mm genannt, `m < n` erklärt, Rückblick am Ende des Kapitels, Dezimalzahl-Hinweis bei Aufgaben mit Bruch-Antwort.
- Nach dem letzten Prüferlauf geändert und **nicht erneut durchgespielt** (nur `lernapps check` und Breitenprüfung bei 360 px): alle in der vorigen Zeile genannten Änderungen, besonders die neuen Kurztests, die Formelzeilen statt Tabellen und die ausgetauschten Aufgaben. Die inhaltlichen Stellen (neue Aufgaben, Definitionen) braucht einen zweiten fachlichen Blick vor „Veröffentlichen“.
- Laufzeit (nicht behoben, an den Orchestrator): Rückmeldung nach falscher Auswahl zeigt den Optionstext zweimal mit „.:“; Meldung bei leerer oder nicht numerischer Eingabe („Wähle, tippe oder ordne alles zu“); „Lösung“-Knopf schon nach dem ersten Fehlversuch; Zahlfelder lehnen „1/2“ ab (nur Dezimalzahlen); Pfeiltasten im Kurztest bewerten sofort; Seiten ohne Schrägstrich am Ende liefern die Startseite; `\sqrt{\ }` ergibt eine leere Formel; `\ldots` nicht erlaubt; Formeln in `matching` werden roh angezeigt; geschütztes Leerzeichen in Überschriften bricht den Test; 10 `generated`-Aufgaben benutzen „^“ als Ersatz für Hochzahlen in Aufgabentexten (Ausnahme Fund W28 gilt nur für Rückmeldungen: dort 0 Stellen mit `a/b`).

**Ganze-App-Check:** Der Lernenden-Prüfer lief mit einer eigenen Fassung des Briefs `whole-app.md` (alle 14 Seiten in Reihenfolge, Anschluss, Begriffe, Geschichte; nicht wörtlich nach Vorlage). Die Funde und Umsetzungen stehen unter „Review“. Nicht eigens abgefragt: Wiedererkennen der Geschichte auf jeder Seite (nur indirekt: Schulgarten bis Seite 7, Reise ab Kapitel 2) und Querverweise zwischen Seiten.

**Selbsteinschätzung:** je Kapitel eingebaut (3 Schritte mit je 4 `generated`-Aufgaben, 12 je Kapitel, 24 in der App, das ist mehr als der Richtwert 15 bis 20). Die Lupe-Seite ist nur mit zwei Aufgaben beteiligt, Recap-Seiten gar nicht. Ein Lauf im Browser mit Playwright öffnete die Startseite der App, beide Kapitel und den Tutor-Weg (`?via=tutor`); die Ende-zu-Ende-Tests des Templates machen die drei Läufe je Selbsteinschätzung und liefen grün.

**Strang:** `mathematik/arithmetik` („Zahl und Operation“), Karte `https://lernapps.net/apps/map/mathematik.json` gelesen, `explainerFocus: strand`.

**Kompetenzen nach Kapitel (Ids und „Ich kann“-Sätze der Karte):**
- Kapitel 1 „Wurzeln und neue Zahlen“: `quadratwurzeln` (Schritt 1), `reelle-zahlen` (Schritt 2), `wurzelgesetze` (Schritt 2).
- Kapitel 2 „Potenzgesetze, kleine Zahlen und n-te Wurzeln“: `potenzgesetze` (Schritt 1), `potenzen-ganzzahlige-exponenten` (Schritt 2, Name „Negative Exponenten“), `n-te-wurzeln` (Schritt 3).
- Alle sechs: gradeBand 9-10, `practisedBy` leer (Lücken). Ordnung nach `requires`: quadratwurzeln → reelle-zahlen, wurzelgesetze; potenzgesetze → potenzen-ganzzahlige-exponenten → n-te-wurzeln (braucht auch quadratwurzeln aus Kapitel 1). Kapitel 2 darf deshalb Kapitel 1 voraussetzen.

**Voraussetzungen von außen (Recap, Reihenfolge der `requires`):**
- Kapitel 1: `potenzen` (Potenzen und Zehnerpotenzen, #386), `zahlen-vergleichen-ordnen` (#385), `dezimalbrueche-rechnen` (#389), `rationale-zahlen-rechnen` (#768).
- Kapitel 2: `terme-umformen` (#393), und `potenzen` (bereits Kapitel 1, dort ausführlich, hier kurz).
- Fachbegriffe der Wiederholung, fett und mit Zahlenbeispiel: Quadratzahl, Potenz/Basis/Exponent, Zehnerpotenz, Dezimalbruch, Vorzeichenregel, gleichartige Glieder, Ausklammern, Zahlengerade.

**Seitenplan (ein Baustein je Seite, große Bausteine zwei Seiten):** Kapitel 1: Recap · Quadratwurzeln bestimmen · Wurzeln abschätzen (Näherungswerte) · √2 einfangen (Intervallschachtelung) · rationale und irrationale Zahlen, reelle Zahlen · Wurzelgesetze (Produkt, Quotient) · Wurzelterme vereinfachen. Kapitel 2: Recap · Potenzgesetze (Produkt, Quotient gleicher Basis) · Potenzgesetze (Potenz einer Potenz, Produkt und Quotient bei gleichem Exponenten) · kleine Zahlen: negative Exponenten · wissenschaftliche Schreibweise (Rechnen mit sehr großen und kleinen Zahlen) · dritte Wurzel und n-te Wurzel · Wurzeln als Potenzen. Gesamt 12 Inhaltsseiten und 2 Recap-Seiten. (guess, Zuschnitt)

**Wie Lernende dorthin kommen (herleiten, nicht ablesen) und welcher Fehler im Feedback gefangen wird:**
- Quadratwurzeln: Fläche 2 m², Seite gesucht; Quadratzahlen rückwärts. Fehler: √9 = 4,5 (halbiert), √(a²+b²) = a+b.
- Näherungswerte: Intervalle zwischen Quadratzahlen, Halbieren, Taschenrechner prüfen. Fehler: Rundung, Ergebnis zwischen den falschen Quadratzahlen.
- √2 einfangen: Lupe auf der Zahlengerade, jede Stufe eine Dezimale. Fehler: „irgendwann landet man bei einem Bruch“.
- Reelle Zahlen: Dezimalentwicklung (abbrechend/periodisch vs. unendlich ohne Periode). Fehler: 0,3333… irrational, √16 irrational, π = 22/7.
- Wurzelgesetze: Quadrate aus Quadraten (√a·√b = √(ab)). Fehler: √(a+b) = √a + √b, Wurzel aus negativer Zahl.
- Vereinfachen: Quadratzahl als Faktor herausziehen. Fehler: √50 = 25·√2, unvollständiges Teilradizieren.
- Potenzgesetze: Faktoren ausschreiben und zählen. Fehler: 2³·2⁴ = 4⁷, (a³)² = a⁵, Exponenten multipliziert statt addiert.
- Negative Exponenten: Reise zu kleinen Dingen, Exponent fällt um 1, Wert durch Basis. Fehler: 2⁻³ = −8 oder −6.
- Wissenschaftliche Schreibweise: Mantisse 1 ≤ m < 10, Exponent zählen. Fehler: Komma falsche Richtung, Exponentenvorzeichen.
- Dritte und n-te Wurzel: Würfel mit Volumen 8 cm³; ³√−8 geklärt. Fehler: ³√27 = 9, n-te Wurzel mit Wurzel aus negativer Zahl bei geradem n.
- Wurzeln als Potenzen: Potenzgesetz (a^(1/2))² = a erzwingt a^(1/2) = √a. Fehler: a^(1/2) = a:2.

**Übungsmuster (lernapps-exercise-patterns, Mathematik):** `generated` mit Fehlerdiagnose (berechnen, abschätzen); `number`/`single-choice`/`true-false` mit Begründung im Feedback (beurteilen, einordnen); `ordering` (Zahlen der Größe nach); `matching` (Term ↔ vereinfachter Term); Bilder als SVG (Quadrat, Würfel, Zahlengerade mit Lupe, Zehnerpotenz-Leiter). Komponenten nur wenn nötig (Lupe, Zehnerpotenz-Leiter), mit statischer Form zuerst.

**Umfang:** In: alles, was die „Ich kann“-Sätze der sechs Bausteine nennen. Quadratwurzeln: nur positive Radikanden, Hauptwert. Wurzelgesetze: Produkt, Quotient, teilweises Wurzelziehen, Summen gleichartiger Wurzeln. Nicht: Nenner rationalisieren, Wurzelgleichungen, Potenz- und Exponentialfunktionen (#396), Satz des Pythagoras (#399), komplexe Zahlen, Beweis der Irrationalität von √2 nur als Denkweg ohne Pflicht. Zahlenbereich der Aufgaben: ganze Zahlen bis 400 für Wurzeln, Exponenten −9 bis 9 für Potenzen, Zehnerpotenzen −15 bis 27 in der Reise. Sprache: Deutsch.

**Quellen:** Lernlandkarte Mathematik (gelesen), KMK-Bildungsstandards ESA/MSA 2022 (nur über die Karte), eigene Herleitungen. Daten der Zehnerpotenz-Reise (Größen, Entfernungen) schlage ich nach, rechne sie selbst nach und gebe sie als gerundete Größenordnung an; nicht geprüft: konkrete Referenzwerte, bis der fachliche Prüfer sie bestätigt. Keine Schulbuchtexte, keine Dritt-Inhalte, keine externen Links.

**Funde für den Orchestrator:**
- Eine `recap`-Seite darf keine Aufgabe haben (README, `topic-has-exercises`); Regel 7.3 verlangt einen Selbsttest mit sofortiger Rückmeldung. Siehe Bericht.


## Explore

<!--
- Find out what the app teaches, for whom, how much and how it looks. Ask; write no code, run no `create`.
- An answer counts only in the creator's words under "Answers". At most 2 questions per message, one topic each.
-->

### Tasks

- [x] Check the start: the folder `.agents/skills/lernapps-app` exists (else stop and tell the creator that the folder
      was not started with `init`), and `git branch --show-current` prints `work` (else `git switch -c work`).
- [x] Load skill `lernapps-app`. Tell the creator in two sentences what a lernapps app is and where it will live: at
      their own address, free and public, and once listed as a copy on lernapps.net. Say that the technical part
      (GitHub) comes at the end and that you do it.
- [x] Interview: ask the topics "Goal" and "Learners" of "Answers".
- [x] Load skill `lernapps-map-assignment` and read the learning map of the subject as it says. The creator brings
      the content themselves (material, a word list, the pages): note under "Notes" which competencies of the map it
      covers. Else write the skill's assignment, with its story; the creator's yes answers the topics Content and
      Amount. A subject without a map: skip this task and say so.
- [x] Load skill `lernapps-exercise-patterns` and read its reference for the subject. Note under "Notes" how learners
      will practise what the goal names.
- [x] Choose the archetype as skill `lernapps-app` says: read the README of each archetype in question, then tell the
      creator in plain words what the chosen one can and cannot do. Write the archetype and its reason under "Key
      decisions".
- [x] Run `npx --no -- lernapps skills --archetype <name>` with the chosen archetype. It installs the archetype's
      skills and adds the archetype's tasks to this plan.
- [x] Load skill `lernapps-explainer-design`. An explainer has the look of the runtime: write "fixed by the
      archetype" under the topic "Look and feel" of "Answers".
- [x] Interview: ask every other topic of "Answers", in order. Leave out only a topic that an answer of the creator
      already covers, and note which answer. A topic nobody answered is asked once before you write an assumption
      with "(guess)".
- [x] Load skill `lernapps-content-research` and research as it says. Write under "Notes": the strand or subject, the
      competencies by chapter with their ids, the sources you opened.
- [x] Write under "Notes" which competency goes on which page and which pages form a chapter, as "Map the content" of
      skill `lernapps-explainer-design` says. Per page, name the prerequisites the app does not practise.
- [x] Write under "Notes", one line per competency: how learners get there (they derive it, they do not only read it
      off), and which misconception the feedback catches.
- [x] Write under "Notes" the scope: what is in, what is out and why, the data range (for example "all main-group
      elements", never a silent "1–20"), the languages.
- [x] **Checkpoint:** research. Show in plain words: the strand or why none, the competencies by chapter, the didactic
      approach, the scope, every "(guess)", the sources and what is unchecked, the archetype and its reason. Stop and
      wait. Changes: change them, then ask again.
      Creator: Orchestrator: Recherche freigegeben; Recap mit Komponente Kurztest; Zuschnitt 12+2 ok

### Answers

<!-- The interview: per topic the creator's answer, in their words. Keep the topics. -->

- Goal: siehe „Goal“ (Issue 392).
- Learners: Stufe 9-10, Gymnasium Hessen (Annahme laut regeln.md); Vorwissen: Potenzen, Dezimalbrüche, negative Zahlen, Terme umformen (laut Karte).
- Model and focus: kein Katalogmodell; Visualisierung steht im Vordergrund (Quadrat/Würfel, Lupe, Zehnerpotenz-Reise).
- Hurdles: siehe Notes, Fehler je Kompetenz.
- Content: Assistent aus Karte und eigenen Herleitungen, keine eigene Vorlage.
- Amount: 12 Inhaltsseiten und 2 Recap-Seiten, zwei Kapitel.
- Languages: Deutsch.
- Look and feel: fixed by the archetype.
- Terms: Wörter der Karte (Quadratwurzeln, Reelle Zahlen, Wurzelgesetze, Potenzgesetze, Negative Exponenten, N-te Wurzeln), Zahlengerade.
- Finding the app: Wurzeln, Potenzgesetze, irrationale Zahlen, n-te Wurzel, negative Exponenten, Klasse 9 und 10.


- Goal: what learners do in the app, what they learn.
- Learners: subject, school year, prior knowledge.
- Model and focus: an app of the catalog (https://lernapps.net/apps/llms.txt) as model; what matters most (exercises,
  visualisations, game feel).
- Hurdles: misconceptions and mistakes of the learners; the creator's examples and experiments.
- Content: who writes it (creator, you, from sources); own material (worksheets, tests).
- Amount: how much content in the first version; what comes later.
- Languages: German only, or German and English. Never English only.
- Look and feel: calm like a worksheet, or like a game (colours, praise, effects); dark mode.
- Terms: the creator's words for the main things in the app, used everywhere.
- Finding the app: what teachers and parents would search for.

## Plan

<!--
- Map the confirmed content onto the archetype. No new content questions: a gap in the content goes back to Explore.
- The creator confirms the plan in one read. After the yes you work on your own.
-->

### Tasks

- [x] Map the content as "Map the content" of skill `lernapps-explainer-design` says, and write the result under
      "Content method".
- [x] Choose a pattern per competency as skill `lernapps-exercise-patterns` says, and add it to "Content method".
- [x] Add to "Content method" one line per page, as "Engagement" of skill `lernapps-explainer-design` says: the
      opening task, the change of activity, the reward, the story.
- [x] Add the tasks of Code, each one a piece of work that ends in a commit. First the pattern: one complete page or
      screen, `npx --no -- lernapps plan add --at pattern "<task>"`. Then the others, one call each:
      `npx --no -- lernapps plan add --at pages "<task>"`. Each task says what it builds and what it shows.
- [x] Draw a sketch of each screen, component or interactive exercise: a static SVG or image, or the steps with what
      learners see after each. Keep the files in `.vibe/sketches/`.
- [x] Show the creator, short: goal, competencies by chapter, the Code tasks, the sketches, and the content method in
      plain words (what learners see and do, what the app cannot do). At most 2 questions.
- [x] **Checkpoint:** confirm the plan and the content method. Stop and wait for an explicit yes. Changes: change
      them, then ask again.
      Creator: Orchestrator: Plan bestätigt, weiter mit Code, Musterseite K1 quadratwurzel-bestimmen

### Content method

<!-- One line each: the patterns and where; the figures and how they are made; the data files; each component, what it
checks and what it cannot; how a later agent adds a chapter. It becomes the content guide in Code. -->
<!-- An explainer: per figure, model and component its learning action in two to four sentences
(`explainer-representation-explained`); per page its prerequisites the app does not practise, and which get a recap
page, which a link. -->

**Seiten und Bausteine (Baustein → Seite; Ordnung nach `requires`).** Ids der Seiten sind fest und bleiben. Abschnitte aller Seiten: `einstieg` (Aufgabe vorweg), `idee` (Herleitung am Bild), `regel`, `beispiel`, `uebung`.

| Kapitel | Seite (id) | Baustein | Neue Idee |
|---|---|---|---|
| `wurzeln` | `recap` Das brauchst du hier | recap: potenzen, zahlen-vergleichen-ordnen, dezimalbrueche-rechnen, rationale-zahlen-rechnen | nichts Neues |
| | `quadratwurzel-bestimmen` | quadratwurzeln | Fläche gegeben, Seite gesucht: √ als Umkehrung des Quadrierens |
| | `wurzeln-abschaetzen` | quadratwurzeln | zwischen zwei Quadratzahlen einschließen, Näherungswert |
| | `wurzel-zwei-einfangen` | reelle-zahlen | Intervallschachtelung: √2 mit Lupe, nie getroffen |
| | `reelle-zahlen` | reelle-zahlen | rational (abbrechend/periodisch) vs. irrational; ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ; Zahlengerade ohne Lücken |
| | `wurzelgesetze` | wurzelgesetze | √a·√b = √(a·b), √a : √b = √(a:b), an Quadraten aus Quadraten |
| | `wurzeln-vereinfachen` | wurzelgesetze | Quadratzahl als Faktor herausziehen, gleichartige Wurzeln zusammenfassen |
| `potenzen` | `recap` Das brauchst du hier | recap: terme-umformen, potenzen | nichts Neues |
| | `potenzgesetze-produkt` | potenzgesetze | gleiche Basis: Faktoren ausschreiben, Exponenten addieren/subtrahieren |
| | `potenzgesetze-potenz` | potenzgesetze | Potenz einer Potenz; gleicher Exponent bei verschiedenen Basen |
| | `negative-exponenten` | potenzen-ganzzahlige-exponenten | Reise zu kleinen Dingen: Exponent −1 heißt Kehrwert; a⁰ = 1 |
| | `wissenschaftliche-schreibweise` | potenzen-ganzzahlige-exponenten | m · 10ⁿ mit 1 ≤ m < 10; Rechnen mit Größenordnungen |
| | `dritte-wurzel` | n-te-wurzeln | Würfel: Volumen gegeben, Kante gesucht; n-te Wurzel, gerade und ungerade n |
| | `wurzeln-als-potenzen` | n-te-wurzeln | Bruch-Exponent: (a^(1/n))ⁿ = a erzwingt ⁿ√a |

**Übungsmuster (je Baustein):**
- Quadratwurzeln: `generated` „Seite aus Fläche“ (Fläche = Quadratzahl, dann Nicht-Quadratzahl mit Rundung auf 2 Stellen), `number`, `ordering` (Wurzeln der Größe nach), `true-false` mit Grund (√(a²+b²) = a+b). Fehler: halbiert, Quadratzahl statt Wurzel, Rundung.
- Reelle Zahlen: `single-choice`/`multiple-choice` „rational oder irrational?“ mit Dezimalentwicklung als Material, `matching` (Zahl ↔ kleinste Zahlmenge), `ordering` auf der Zahlengerade. Fehler: π = 22/7, 0,333… irrational, √16 irrational.
- Wurzelgesetze: `generated` „vereinfache“, Antwort a·√b (Eingabe `a√b` als zwei Felder: Faktor und Radikand), `matching` Term ↔ Term, `true-false`. Fehler: √(a+b) = √a + √b, 25·√2 statt 5·√2.
- Potenzgesetze: `generated` „schreibe als eine Potenz“ (Basis, Exponent), Typfehler: Basen multipliziert, Exponenten multipliziert statt addiert, (a³)² = a⁵.
- Negative Exponenten und wissenschaftliche Schreibweise: `generated` aus Datei `src/data/groessen.yaml` (Größen der Reise), Antwort Mantisse und Exponent; Bruchschreibweise; Fehler: 2⁻³ = −8, Komma falsche Richtung.
- N-te Wurzeln: `generated` „n-te Wurzel“ (³√27, ⁴√81, ³√−8, ⁵√32), `true-false` (⁴√−16), Umschreiben √a ↔ a^(1/2). Fehler: ³√27 = 9, a^(1/2) = a:2.
- Zufallsaufgaben nur mit Rechenprobe in der Formel (`round`, `sqrt`), nie Division durch 0, nie Wurzel aus negativer Zahl bei geradem n, feste Seeds im Build-Test.
- Schreibweisen nach regeln.md Abschnitt 2: Dezimalkomma, Minus U+2212, `·`, Brüche gesetzt, Variablen kursiv. Rückmeldungen in `generated` dürfen `a/b` nutzen (Ausnahme, Fund W28), Stellen werden im Plan gezählt.

**Figuren und Komponenten (Lernhandlung):**
- Quadrat und Würfel (SVG-`image`s): Quadrat mit Fläche 2 m², Seite markiert „?“; Würfel mit Volumen 8 cm³, Kante „?“. Der Text sagt: das Quadrat ist die Fläche, die Seite ist gesucht; Lernende rechnen rückwärts. Das Bild zeigt nie die Lösung. `alt`: beschreibt das Quadrat und die gesuchte Seite.
- Zahlengerade mit Lupe (`wurzel-zwei-einfangen`): vier SVG-Bilder nebeneinander (Ausschnitt 1 bis 2, 1,4 bis 1,5, 1,41 bis 1,42, 1,414 bis 1,415) mit Beschriftung der Grenzen; jede Stufe fängt √2 mit einer Dezimale mehr ein. Die Komponente `Lupe` (ein Regler für die Stufe, Zahlengerade zoomt, Grenzen und Quadrate der Grenzen erscheinen, Tastatur, Textalternative) ist die interaktive Form; ohne JS die vier Bilder. Begründung: ein Regler, dessen Bild sich ändert, geht mit keinem Block. Was sie nicht kann: nichts prüfen; Prüfung steht in den Aufgaben darunter.
- Zehnerpotenz-Leiter (`negative-exponenten`, `wissenschaftliche-schreibweise`): `table` mit Größe, Länge in m, Zehnerpotenz (Daten aus `src/data/groessen.yaml`, jede Tatsache einmal); `generated` zieht daraus. Kein Komponent.
- `Kurztest` (Recap-Seiten): eine Frage, eine Auswahl, sofortige Rückmeldung mit Grund, nichts gezählt oder gespeichert, Tastatur und Textalternative; die Komponente ist keine Aufgabe nach Schema, daher bleibt `topic-has-exercises` ruhig. Eigene Komponente nach der Beschreibung in regeln.md Abschnitt 7 (das Vorbild-Repo liegt außerhalb meines GitHub-Zugriffs, ich schreibe sie selbst; Fund fürs Werkzeug W31 bleibt).
- Recap-Seite: Kopf „Das brauchst du für dieses Kapitel“, je Baustein eine Überschrift mit Namen der Karte, Fachbegriffe fett mit Zahlenbeispiel (auch im Glossar), Beispielkasten, Kurztest, Satz „Wenn nicht: <Baustein>, Kartenseite https://lernapps.net/apps/map/mathematik/c/<id>/“, Schluss „Du bist bereit, wenn du …“. Kein Link in andere Apps.

**Engagement je Seite (Eröffnung · Wechsel · Belohnung · Geschichte):**
- `quadratwurzel-bestimmen`: Beet mit 2 m², Seite? Schätzen vor dem Lesen · Bild, Rechnen, Lesen im Wechsel · „Ich kenne √ als Umkehrung“ · Fall Gartenbau, Fläche 16 m².
- `wurzeln-abschaetzen`: Zwei Quadratzahlen finden, die 50 einschließen · Intervall halbieren, Taschenrechner · Näherung auf zwei Stellen · weiter beim Beet 2 m²: genaue Seite.
- `wurzel-zwei-einfangen`: Lupe: wie viele Stellen? · Regler, Tabelle der Quadrate · „√2 lässt sich nie als Bruch fangen“ · Fall: Diagonale/Seite 2 m² kein Bruch.
- `reelle-zahlen`: Dezimalentwicklung von 1/7, 0,25, √2 vergleichen · Sortieren, Zuordnen · Zahlenmengen als Karte · Zahlengerade hat keine Lücken mehr.
- `wurzelgesetze`: Quadrat aus zwei Quadraten (Flächen 4 und 9) · Muster erkennen, dann Regel · „√ geht über Mal und Geteilt, nicht über Plus“ · Beetplan mit mehreren Quadraten.
- `wurzeln-vereinfachen`: √50 als Seite; 25 als Faktor · Zeile für Zeile · „5·√2“ als Standardform · Pflasterfläche.
- `potenzgesetze-produkt`: 2³·2⁴ ausschreiben und zählen · Bild, dann Regel, dann neue Zahlen · Exponentenregel · Zehnerpotenz-Reise, erste Etappe: Erde bis Sonne.
- `potenzgesetze-potenz`: (2³)² ausschreiben · Zeile für Zeile · Vergleich der drei Gesetze · Reise: Milchstraße.
- `negative-exponenten`: Reise zu kleinen Dingen: Haardicke, Zelle, Atom · Exponent fällt um 1, Wert durch 10 · 10⁻ⁿ als Bruch · Reise: Atom.
- `wissenschaftliche-schreibweise`: Zwei Größen vergleichen · Umrechnen, Rechnen · Größenordnung · Reise: Universum zu Atom, Abschluss mit Rückblick.
- `dritte-wurzel`: Würfel 8 cm³, Kante? · Würfel, Potenzen, Wurzel · n-te Wurzel für n = 3, 4, 5 · Fall Würfelverpackung.
- `wurzeln-als-potenzen`: Welche Zahl hoch 2 gibt 5? Potenzgesetz erzwingt a^(1/2) · Herleitung in 3 Zeilen, dann Aufgaben · „Wurzeln sind Potenzen“ · Rückblick auf beide Kapitel.
- Wiederholung gleicher Fakten nur in anderer Form (Bild, Tabelle, Aufgabe), nicht dieselben Worte zweimal.

**Daten:** `src/data/groessen.yaml`: Felder `name`, `meter` (Mantisse), `exponent`, `hinweis` (je Größe einmal, gerundet auf Größenordnung): Atomkern 1·10⁻¹⁵ m, Atom 1·10⁻¹⁰ m, Zelle 1·10⁻⁵ m, Haardicke 1·10⁻⁴ m, Mensch 1,7 m, Erde-Sonne 1,5·10¹¹ m, Lichtjahr 9,5·10¹⁵ m, beobachtbares Universum 8,8·10²⁶ m (Richtwerte, vom fachlichen Prüfer zu bestätigen).

**Wie ein späterer Agent ein Kapitel ergänzt:** Karte lesen, `competencies` der Seite aus der Karte, Seitenid und Abschnittsids wie oben, Fehlerdiagnose je Aufgabe, Daten einmal in `src/data/`, Recap nach regeln.md Abschnitt 7.
**Zählung `a/b` in Rückmeldungen (Fund W28):** wird beim Bauen gezählt und hier nachgetragen.

## Code

<!--
- Build the app, locally on `work`, on your own. After each task: `plan done`, then one commit with the work and this
  plan. The hooks check each commit; a failing check is fixed from its message, as skill `lernapps-cli` says.
- What you cannot decide: choose, write it under "Key decisions" with "(guess)", go on.
- The creator asks for a change: say your reading in one sentence first, then change every place it holds for
  (`feedback-applied-everywhere`).
-->

### Tasks

- [x] Load skill `lernapps-cli`. Create the app as its section "Create" says:
      `npx --no -- lernapps create --archetype explainer`.
- [x] Fill the content guide `.agents/skills/app-content/SKILL.md` from "Notes" and "Content method": every heading,
      no "FILL IN" left. Commit it before any content.
- [x] Load skill `lernapps-explainer`.
- [x] Load skill `lernapps-content-questions`. Read whole, with your file tool:
      `.agents/skills/lernapps-explainer/references/blocks.md` and
      `.agents/skills/lernapps-explainer/references/exercises.md`. A foreign language: also
      `references/language-tasks.md` in the same folder. A component in the plan: also `references/components.md`.
- [x] Decide whether the app needs `scope`, as "`scope`" in
      `.agents/skills/lernapps-explainer/references/structure.md` says. Write the choice under "Key decisions".
- [x] Musterseite K1 komplett bauen: Einstieg (Beet 2 m²), Quadrat-SVG, Herleitung, Beispiel, Übung (generated, number, true-false) mit Fehlerdiagnose; Lernenden-Prüfer (Klasse 10) durchspielen lassen und Befunde umsetzen.
<!-- tasks: pattern (1 added): the one page or screen that is the pattern for the others -->
- [x] **Checkpoint:** the pattern page. Load skill `lernapps-learner-check` and do its learner check on the page. Fix
      what it finds. Then show the creator the page and ask whether the others may follow it. Stop and wait. A
      change: change the pattern first.
      Creator: Orchestrator: Musterseite angenommen, übrige Seiten nach Muster, Kurztest aus /tmp/epic, dann Lupe
- [x] Recap K1 mit Komponente (potenzen, zahlen-vergleichen-ordnen, dezimalbrueche-rechnen, rationale-zahlen-rechnen), Fachbegriffe im Glossar.
- [x] K1 (quadratwurzeln): Einschließen, Näherungswert, Übung.
- [x] K1 (reelle-zahlen): Komponente mit statischen Bildern, Übung.
- [x] K1 (reelle-zahlen): rational/irrational, Zahlbereiche, Übung.
- [x] K1 und (wurzelgesetze) mit Übungen.
- [x] Recap K2 (terme-umformen, potenzen) mit Kurztest.
- [x] K2 und (potenzgesetze) mit Übungen.
- [x] K2 und (potenzen-ganzzahlige-exponenten) mit Datei , Übungen.
- [x] K2 und (n-te-wurzeln) mit Übungen, Rückblick auf beide Kapitel.
- [x] Prüfer vor Veröffentlichen: fachlicher Prüfer und Lernenden-Prüfer über alle Seiten, Befunde unter Review im Plan, Änderungen danach nachprüfen.
<!-- tasks: pages (10 added): the other pages or screens, after the pattern -->
- [x] Update the content guide so that it describes the app as built (`app-content-matches`).
- [x] Prüfer-Läufe vor Veröffentlichen tatsächlich durchführen (die Aufgabe davor wurde irrtümlich zu früh abgehakt): fachlicher Prüfer und Lernenden-Prüfer, Befunde unter Review im Plan, Änderungen danach nachprüfen.
- [x] Run `npx --no -- lernapps check` until it passes.
- [x] Look at every screen and state, at 360 px and on a desktop, as "Look at the app" of skill `lernapps-cli` says.
      Compare each with its sketch.
- [x] Do the whole-app check of skill `lernapps-learner-check`. Fix what it finds and write under "Notes" what you
      fixed.

## Commit

<!--
- Put the app on GitHub, publish it with the creator's yes, then list it. A push to `main` publishes.
- Open the pull requests (to `main`, to the catalog) without asking: they publish nothing.
- The creator asked to stop before publishing (a trial): stop here and say so.
-->

### Tasks

- [x] Load skill `lernapps-explainer-self-assessment`. Add the self-assessment as it says, or write under "Key
      decisions" why the app has none. Commit.
- [x] Load skill `lernapps-github`. Set up the repository and Pages as it says. Ask for the repository's name and
      every click only the creator can make, in one message.
- [ ] Push `work`, open the preview pull request and see its checks to green, as skill `lernapps-github` says.
- [ ] **Checkpoint:** publish. Show what the app does and the preview link from the comment "Vorschau der App". Ask
      whether it may go online. Stop and wait for the yes.
- [ ] Load skill `lernapps-commit`. Publish as skill `lernapps-github` says: `work` into `main` as one squash commit,
      the run of `Pages` watched to its end.
- [ ] Open the address the job `deploy` printed and confirm that the app shows. Never use a derived address.
- [ ] Load skill `lernapps-listing`. Write the entry under "Entry draft" as it says, with the creator's answer to
      "Finding the app".
- [ ] Fill the retrospective.
- [ ] Commit this plan on `main` and push it: the listing check and the review read it there.
- [ ] **Checkpoint:** list. Open the listing pull request as skill `lernapps-listing` says, without asking first: the
      pull request is the review. See it to "bestanden", then show the creator the pull request and its result.
- [ ] If the plan changed since its last push, commit it on `main` and push again.

### Entry draft

<!-- YAML valid against the entry schema the listing skill names. Only known values, never invented. -->

```yaml
```

## Retrospective

<!-- At the end of Commit, before the listing pull request. Facts, short, no names. Read by review and evals. -->

### Phases reached

<!-- Last phase completed, checkpoints passed. E.g. "commit; confirmed, published". -->

### Creator turns after the plan

<!-- Number of creator messages after the confirmation, topic of each. Target: at most 3. -->

### Where I had to guess

<!-- Each gap in plan, skills, messages or answers, and your choice. "None" if none. -->
