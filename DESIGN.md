---
name: Redwixoft
description: A small Bratislava studio's home, set as a Slovak first-grade primer; its product pages wear each product's own world.
colors:
  paper: "#ffffff"
  ink: "#141414"
  ink-soft: "#3d3d3d"
  yolk: "#f6c21c"
  yolk-ink: "#b38600"
  cobalt: "#1f4fbf"
  grass: "#23773a"
  vermilion: "#c8361f"
  rule: "#a9bde3"
  pending-cream: "#fdf1c7"
  abecedo-bg: "#faf9f6"
  abecedo-surface: "#f0eee8"
  abecedo-surface-raised: "#e4e0d5"
  abecedo-text: "#1d1a14"
  abecedo-text-muted: "#6d675a"
  abecedo-text-faint: "#767060"
  abecedo-border: "#e5e1d6"
  abecedo-input-bg: "#ffffff"
  abecedo-correct-bg: "#d7ecd9"
  abecedo-tape: "#f4c51d"
  abecedo-tape-soft: "#fbe9a6"
  abecedo-on-tape: "#1d1a14"
  abecedo-fresh: "#d8262e"
  abecedo-window-border: "#1d1a14"
  abecedo-dark-bg: "#171614"
  abecedo-dark-surface: "#232120"
  abecedo-dark-text: "#f2f0ea"
  abecedo-dark-text-muted: "#b3ac9e"
  abecedo-dark-tape: "#c99d27"
  abecedo-dark-tape-soft: "#3d3315"
  abecedo-dark-fresh: "#f26a5f"
typography:
  display:
    fontFamily: "Gabarito, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(150px, 17vw, 290px)"
    fontWeight: 900
    lineHeight: 0.78
    letterSpacing: "-0.06em"
  headline:
    fontFamily: "Gabarito, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(40px, 5vw, 72px)"
    fontWeight: 900
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  margin-letter:
    fontFamily: "Gabarito, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(76px, 8vw, 124px)"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.05em"
  title:
    fontFamily: "Gabarito, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(28px, 2.6vw, 38px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Gabarito, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1
  abecedo-display:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "clamp(54px, 6.6vw, 100px)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  abecedo-headline:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "clamp(40px, 4.6vw, 64px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  abecedo-title:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 800
    lineHeight: 1
  abecedo-body:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.4
  abecedo-prose:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  abecedo-label:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1
rounded:
  pill: "999px"
  focus: "4px"
  abecedo-cap: "8px"
  abecedo-field: "10px"
  abecedo-button: "14px"
  abecedo-panel: "22px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  margin-column: "clamp(96px, 11vw, 168px)"
  plate-pad: "clamp(18px, 2vw, 28px)"
  section-y: "clamp(56px, 7vw, 104px)"
  abecedo-section-y: "clamp(48px, 6vw, 88px)"
  abecedo-container: "1280px"
  abecedo-doc: "760px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "15px 22px"
  button-ink-hover:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
  nav-write:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "11px 18px"
  plate-yolk:
    backgroundColor: "{colors.yolk}"
    textColor: "{colors.ink}"
    padding: "{spacing.plate-pad}"
  plate-cobalt:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    padding: "{spacing.plate-pad}"
  plate-grass:
    backgroundColor: "{colors.grass}"
    textColor: "{colors.paper}"
    padding: "{spacing.plate-pad}"
  plate-vermilion:
    backgroundColor: "{colors.vermilion}"
    textColor: "{colors.paper}"
    padding: "{spacing.plate-pad}"
  pending-pill:
    backgroundColor: "{colors.pending-cream}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  abecedo-button:
    backgroundColor: "{colors.abecedo-text}"
    textColor: "{colors.abecedo-bg}"
    typography: "{typography.abecedo-label}"
    rounded: "{rounded.abecedo-button}"
    padding: "16px 26px"
  abecedo-guess-input:
    backgroundColor: "{colors.abecedo-tape-soft}"
    textColor: "{colors.abecedo-text}"
    rounded: "{rounded.abecedo-field}"
    padding: "10px 12px"
  abecedo-promise:
    backgroundColor: "{colors.abecedo-tape}"
    textColor: "{colors.abecedo-on-tape}"
    rounded: "{rounded.abecedo-panel}"
    padding: "clamp(28px, 4vw, 48px)"
  abecedo-doc-jump:
    backgroundColor: "{colors.abecedo-surface}"
    textColor: "{colors.abecedo-text}"
    rounded: "{rounded.abecedo-field}"
    padding: "10px 16px"
  abecedo-doc-jump-hover:
    backgroundColor: "{colors.abecedo-surface-raised}"
---

# Design System: Redwixoft

This file holds two systems. The **studio system** (the primer) governs the studio's own surfaces: `index.html`, `styles.css`, `script.js`. The **Abecedo sub-system** governs the Abecedo product pages (`abecedo.html`, `abecedo-privacy.html`, `abecedo-delete-account.html`, `abecedo.css`, `abecedo.js`) and is a mirror of the Abecedo mobile app, not an extension of the studio. Tokens prefixed `abecedo-` belong to the sub-system only; unprefixed tokens belong to the studio only. Never mix them on one page.

## Overview

**Creative North Star: "The Šlabikár"**

The studio's home is a Slovak first-grade primer (šlabikár). Each product is a primer page: its initial letter set at monumental scale, its picture, its name split into syllables. Flat colour plates sit offset on white stock, and colour fields alone do the grouping. The type is heavy, round and confident for letters and heads, calm and highly legible for prose. The one ruled device is the copybook guide line (linajky): two pale blue rules and an ink baseline, which both underlines the hook headline and divides the plates from the reading page.

Density is low and the pace is a children's book: a hook line, four full-height plates filling the width, then a reading page where each entry hangs from a big coloured letter in a left margin column. Motion is print-like: plates reveal bottom-up in alphabet order on load, and pointing at a plate lifts its phone screen and spreads its syllables apart.

The Abecedo pages follow a different world on purpose, because each product keeps its own identity. That world is the app's: warm paper, a yellow alphabet tape from which things hang, Barlow Condensed throughout, light and dark palettes that follow the system setting. **Source of truth for the sub-system is the app**, `C:\IT\Abecedo\mobile\src\theme.ts` (palettes), `src\components\Text.tsx` (face and weights) and `src\components\TapeBoard.tsx` (the tape board). When the app's palette or face changes, carry the change into `abecedo.css` custom properties under the same role names (camelCase in the app, kebab-case on the web: `textMuted` becomes `--text-muted`), then refresh this file.

**Key Characteristics:**
- Studio: flat colour plates on white, no borders, boxes, shadows or colour gradients.
- Studio: monumental initial letters (Gabarito 900) as the organising device, in plates and in the margin column.
- Studio: linajky guide lines are the only ruled line.
- Studio: pill-shaped ink controls; yolk underlines on links.
- Abecedo: a mirror of the app, light and dark, with the alphabet tape as its signature.
- Abecedo: bilingual, Slovak first, English beneath in muted text.

## Colors

The studio palette is four primary-school plate colours plus ink on white; the Abecedo palette is warm paper browns with one saturated yellow tape.

### Primary
- **Primer Yolk** (`yolk`): the first plate (Abecedo's), the studio section field, text selection, and the underline colour of links and nav hovers. Ink text on it, never white.
- **Schoolbook Cobalt** (`cobalt`): the second plate, the contact section field, and the hover fill of ink buttons. White text on it.

### Secondary
- **Copybook Grass** (`grass`): the third plate and its margin letter. White text on it.
- **Stamp Vermilion** (`vermilion`): the fourth plate and its margin letter. White text on it.
- **Deep Yolk** (`yolk-ink`): the yolk margin letter on white, where yolk itself is too pale to read. Used only at margin-letter size (76px and up).

### Neutral
- **Stock White** (`paper`): the page, the top bar, text on cobalt/grass/vermilion plates.
- **Primer Ink** (`ink`): body text, ink buttons, the linajky baseline, focus rings, the phone-bezel outline on plate screenshots.
- **Soft Ink** (`ink-soft`): the hook paragraph, entry tags, footer text.
- **Guide-line Blue** (`rule`): the two pale linajky rules. Lines only, never fills.
- **Pending Cream** (`pending-cream`): the "store link coming soon" pill.

### Abecedo sub-system (mirrors theme.ts)
- **Alphabet Tape** (`abecedo-tape`; dark `abecedo-dark-tape`): the tape cells, step and list markers, the promise panel, the highlighter behind words in the hero headline, the current-page underline, link underlines, the doc section rule. In the app the tape is "where you are"; on the web it marks the same.
- **Pale Tape** (`abecedo-tape-soft`; dark `abecedo-dark-tape-soft`): fills that hold their own text, the guess input.
- **Ink on Tape** (`abecedo-on-tape`): text and ticks drawn on the tape; the same dark ink in both palettes because the tape stays yellow.
- **Fresh Red** (`abecedo-fresh`; dark `abecedo-dark-fresh`): something new, the latest-guess dot and the guess error. Reserved for "look here".
- **Correct Green** (`abecedo-correct-bg`): the background behind the solved word.
- **Warm Paper** (`abecedo-bg`, dark `abecedo-dark-bg`), **Paper Surface** (`abecedo-surface`, dark `abecedo-dark-surface`), **Raised Surface** (`abecedo-surface-raised`): tonal layers, page, doc-jump chips, their hover.
- **Brown Ink** (`abecedo-text`, dark `abecedo-dark-text`), **Muted** (`abecedo-text-muted`, dark `abecedo-dark-text-muted`), **Faint** (`abecedo-text-faint`): text tiers; muted carries all English translations.
- **Hairline** (`abecedo-border`): the footer top rule. **Window Frame** (`abecedo-window-border`, warm grey `#6d675a` in dark): the 2px frame around the answer window, on `abecedo-input-bg`.

### Named Rules
**The Plate Contrast Rule.** Every plate colour passes 4.5:1 against its text: ink on yolk, white on cobalt, grass and vermilion. The direction contract named a brighter grass (#2f9a4c) and vermilion (#e8462a); the build deepened both to carry white text, and the build's values are the system.

**The One World Per Page Rule.** A studio page uses only unprefixed tokens; an Abecedo page uses only `abecedo-` tokens. The studio yolk and the Abecedo tape are close but not the same colour and must not be swapped.

**The App Leads Rule.** Abecedo colour values are copied from `theme.ts`, never tuned on the web. A new web need first looks for an existing app role; a value that does not exist in the app does not get invented in `abecedo.css`.

## Typography

**Display Font:** Gabarito (with Atkinson Hyperlegible, system-ui)
**Body Font:** Atkinson Hyperlegible (with system-ui)
**Abecedo Face:** Barlow Condensed 500–800; Barlow 400–700 for long legal prose only

**Character:** Gabarito at 800–900 is the primer's round, chunky schoolbook letter; Atkinson Hyperlegible is the reading primer's clear body. Abecedo uses the app's condensed face everywhere, with regular drawn at 500 because the condensed 400 is thin, exactly as `Text.tsx` maps it.

### Hierarchy
- **Display** (900, clamp(150px, 17vw, 290px), 0.78): the plate letters, upper case with a smaller lower-case partner (0.56em).
- **Headline** (900, clamp(40px, 5vw, 72px), 1.08): the hook, set on linajky guide lines that repeat per wrapped line. Section heads (studio, contact) run 900 at up to 68–92px, line-height 0.92–0.98.
- **Margin Letter** (900, clamp(76px, 8vw, 124px), 0.8): the coloured initial in the left column of each entry and the studio section's "R".
- **Title** (800, clamp(28px, 2.6vw, 38px), 1.05): entry and product names; plate words run 800 at clamp(26px, 2.5vw, 38px).
- **Body** (400, 18px, 1.55; 17px under 560px): prose, capped at 62–70ch.
- **Label** (700, 15–17px, 1): nav, buttons, links, entry tags, plate sub-lines.
- **Abecedo** display 800 at clamp(54px, 6.6vw, 100px)/0.9; headline 800 at clamp(40px, 4.6vw, 64px)/0.95; title 800 30px; body 500 20px/1.4; buttons 700 22px; legal prose Barlow 400 18px/1.65 within 760px.

### Named Rules
**The Syllable Rule.** Product names on plates are split into syllables with a middle dot, the way a primer splits a word; the dots widen on hover and focus. This is the primer's own device, not decoration to reuse elsewhere.

**The Slovak First Rule.** On Abecedo pages Slovak leads; English follows in `abecedo-text-muted`, usually on its own line at a smaller size (18–20px, or 0.45em of a heading with a 22px floor).

## Layout

Studio: full-bleed sections with a single horizontal gutter (`gutter`). The plates are a four-column grid filling the width at clamp(480px, 100svh − 300px, 760px) tall; two columns under 1000px; 300px-tall plates under 560px. The reading page and studio section use a two-column grid with a left margin column (`margin-column`, 64px under 720px) that holds the big letter, the text column capped near 64–70ch. Contact is two equal columns (text on cobalt, map) collapsing to one under 1000px. Section padding is `section-y`. Under 560px the nav keeps only the "Write to us" pill.

Abecedo: centred container at 1280px max with the same gutter. The hero is a 1.05fr/0.95fr split, text beside the playable tape board (440px max), stacking under 920px. Sections pad `abecedo-section-y`. Legal documents are a single 760px column. Under 560px the header keeps only the "od Redwixoft" link.

## Elevation & Depth

Both systems are flat. The studio has no shadows at all: depth comes from colour fields abutting, and from the one layered moment where a phone screenshot sits behind a plate's word band and rises on hover. Abecedo conveys depth by tonal layering (paper, surface, raised surface) and by the 2px window frame. The app's `shadow` role is mirrored as a custom property but unused on the web.

### Named Rules
**The Flat Plate Rule.** No box-shadows, no blur, no colour gradients in the studio. Hard-stop `linear-gradient`s that draw thin rules (linajky, the Abecedo highlighter) are line drawing, not gradients, and are allowed.

## Shapes

Studio: plates and sections are square-cornered fields with no borders. Controls are full pills (`pill`); focus rings are 3px ink with a 4px radius (inset 6px in currentColor on plates). Phone screenshots carry a rounded corner (clamp(14px, 1.6vw, 24px)) and a thick ink outline drawn as the phone's bezel; that outline depicts the object and is not a container border. Screenshots tilt −5° at rest, −2° on hover.

Abecedo: the tape's silhouette is the signature. Tape shapes are square on the left (the tape's edge) and rounded only on the right: board `0 22px 22px 0`, zoom strip `0 10px 10px 0`, step tapes `0 8px 8px 0`, list markers and the doc rule likewise. Free-standing elements round all corners: buttons 14px, input and chips 10px, the promise panel 22px.

## Components

### Buttons
- **Shape:** full pill (999px).
- **Ink button:** ink fill, white Gabarito 700 17px, 15px 22px padding, optional 18px inline SVG icon. Hover shifts to cobalt; active scales to 0.97.
- **Nav "Write to us":** same ink pill, 11px 18px; hover cobalt.
- **Map caption pill:** white pill on the map, ink text; hover yolk.
- **Abecedo button:** the app's primary, text colour on bg so it inverts the screen; 700 22px, 16px 26px, 14px radius; hover opacity 0.88; active scale 0.97. On the tape panel it becomes on-tape ink with paper text.

### Links
- **Studio link:** Gabarito 700 17px, 2px yolk underline offset 5px; hover underline turns ink. The email in contact uses a 4px yolk underline, white on hover.
- **Nav links:** no underline at rest; 3px yolk underline on hover.
- **Abecedo text link:** 700, 3px tape underline offset 5px; hover to text colour.

### Plates (signature)
A whole plate is one link: letter at top, phone screen rising from the bottom behind the word band, syllabified name and a one-line tag in the band. Background is the plate colour, text per the Plate Contrast Rule. On load, plates print bottom-up in order (0.9s, 110ms stagger); hover/focus lifts the screen and spreads the syllables.

### Entries
Margin letter in the plate colour, title, tag (Gabarito 700 16px soft ink), prose, then actions: an ink button plus a link, or the pending pill (700 16px soft ink on pending cream) when no store link exists. Targeting an entry nods its letter.

### Navigation
Sticky white top bar: wordmark (32px logo, Gabarito 800 22px) left, Apps / Studio links and the ink pill right. Abecedo header: 42px logo and wordmark (800 30px), muted nav links, current page marked by a 4px tape underline.

### Tape board (Abecedo signature)
A playable copy of the app's `TapeBoard`: a 22px yellow tape column with letter cells and ticks, guesses hanging from their letter in muted text (latest in text colour with a fresh-red dot), and the answer window framed in 2px window border holding the two closest bounds and the guess field (pale tape fill, 10px radius). A landed bound flashes tape yellow; the zoom strip squeezes on each guess. The solved word sits on correct green.

### Hung lists and legal docs (Abecedo)
Feature lists and steps hang from a 30px tape column with lowercase letters, in alphabet order, like guesses on the board. Legal docs use tape-coloured bullets, tape-numbered ordered lists, surface chips for the language jump, and a short 64px tape bar as the section rule.

## Do's and Don'ts

### Do:
- **Do** group studio content with colour fields only: yolk, cobalt, grass, vermilion on white.
- **Do** use the linajky guide lines (two `rule` lines and a 2px ink baseline) as the only ruled line on studio surfaces.
- **Do** lead studio sections and entries with a Gabarito 900 initial letter in the margin column.
- **Do** keep studio controls as ink pills that turn cobalt on hover, and links underlined in yolk.
- **Do** copy Abecedo values from `C:\IT\Abecedo\mobile\src\theme.ts` under the same role names, and update `abecedo.css` whenever the app's palette changes.
- **Do** support both light and dark on Abecedo pages through `prefers-color-scheme`, as the app does.
- **Do** round tape shapes on the right edge only.

### Don't:
- **Don't** add borders, cards, box-shadows or colour gradients to studio surfaces.
- **Don't** put white text on yolk, or yolk text on white below margin-letter size.
- **Don't** use studio tokens, Gabarito or Atkinson on Abecedo pages, or Abecedo tokens and Barlow on studio pages.
- **Don't** tune an Abecedo colour on the web that the app does not have.
- **Don't** use fresh red for anything but "new" and errors on Abecedo pages.

## Unresolved
- The home Abecedo plate uses `assets/abecedo.jpg`, an older list-style app screen from before the tape board, pending a fresh capture from the user.
- Store links for PooRain and AstroShift do not exist yet; their entries carry the pending pill.
