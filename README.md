# AGH HERMES – Landing Page

Strona internetowa typu landing page koła naukowego **AGH HERMES** zbudowana w **Next.js 15** (App Router) z TypeScript i vanilla CSS.

---

## Uruchomienie

```bash
npm install      # Instalacja zależności
npm run dev      # Serwer deweloperski → http://localhost:3000
npm run build    # Build produkcyjny
npm run start    # Uruchomienie builda produkcyjnego
```

---

## Struktura plików

```
src/
├── app/
│   ├── globals.css        # System designu – kolory, typografia, animacje, klasy pomocnicze
│   ├── layout.tsx         # Root layout – czcionka (Space Grotesk), SEO meta tagi, język
│   └── page.tsx           # Strona główna – montaż wszystkich sekcji
│
├── components/
│   ├── Navbar.tsx         # Nawigacja – sticky, efekt na scrollu, menu mobilne
│   ├── Navbar.module.css
│   │
│   ├── Hero.tsx           # Sekcja hero – animacja logo (canvas), tytuł, przyciski CTA
│   ├── Hero.module.css
│   │
│   ├── About.tsx          # Sekcja "O nas" – opis, wyróżniki, karty statystyk
│   ├── About.module.css
│   │
│   ├── Board.tsx          # Sekcja "Zarząd" – karty członków zarządu
│   ├── Board.module.css
│   │
│   ├── Teams.tsx          # Sekcja "Zespoły" i "Podprojekty" – zespoły + karty projektów
│   ├── Teams.module.css
│   │
│   ├── Contact.tsx        # Sekcja "Kontakt" – CTA, e-mail, social media
│   ├── Contact.module.css
│   │
│   ├── Footer.tsx         # Stopka – nawigacja, projekt, social, copyright
│   └── Footer.module.css
│
public/
└── images/
    ├── logo.png           # Logo główne AGH HERMES (hero)
    └── logo-icon.png      # Ikona logo (navbar, footer)
```

---

## Jak edytować treści

### Zmiana tekstów na stronie

Każda sekcja jest osobnym komponentem w `src/components/`. Teksty są zapisane bezpośrednio w plikach `.tsx` jako stałe (tablice obiektów) lub tekst JSX.

#### Hero (`Hero.tsx`)
- **Tagline** — linia `<p className={styles.heroTagline}>...</p>`
- **Tytuł** — `<h1 className={styles.heroTitle}>...</h1>`
- **Opis** — `<p className={styles.heroDescription}>...</p>`

#### O nas (`About.tsx`)
- **Opis koła** — blok `<p>` wewnątrz `section-description`
- **Wyróżniki** — tablica `HIGHLIGHTS` na górze pliku (icon, title, description)
- **Statystyki** — tablica `STATS` (number, label)

#### Zarząd (`Board.tsx`)
- **Członkowie** — tablica `BOARD_MEMBERS` na górze pliku
- Każdy wpis: `{ name, role, initials, bio }`
- Aby dodać/usunąć osobę – dodaj/usuń obiekt z tablicy

#### Zespoły i Projekty (`Teams.tsx`)
- **Zespoły** — tablica `TEAMS` (icon, name, description, tags)
- **Podprojekty** — tablica `SUBPROJECTS` (title, description, status, statusLabel)
- Dozwolone statusy: `"active"`, `"completed"`, `"planned"`

#### Kontakt (`Contact.tsx`)
- **E-mail** — atrybut `href="mailto:..."` w `<a>`
- **Social media** — lista `<a>` wewnątrz `socialLinks`
- Aby dodać/usunąć serwis – dodaj/usuń blok `<a>` z ikoną

#### Stopka (`Footer.tsx`)
- **Opis** — `<p className={styles.footerDescription}>...</p>`
- **Linki nawigacyjne** — bloki `<a>` w odpowiednich kolumnach
- **Social media** — lista `<a>` w kolumnie "Social Media"

### Zmiana logo

1. Zamień plik `public/images/logo.png` (logo główne w hero)
2. Zamień plik `public/images/logo-icon.png` (ikona w navbar i footer)
3. Restartuj serwer deweloperski

### Zmiana kolorów

Kolory są zdefiniowane jako CSS custom properties w `src/app/globals.css`:
- `--color-accent` — główny kolor akcentu (domyślnie cyan `#5cc6d0`)
- `--color-bg-primary` — tło główne
- `--color-bg-secondary` — tło sekcji alternatywnych
- `--color-text-primary` — kolor tekstu głównego
- `--color-text-secondary` — kolor tekstu drugorzędnego

### SEO / Meta tagi

Metadane strony (tytuł, opis, Open Graph) edytujesz w `src/app/layout.tsx` w obiekcie `metadata`.

---

## Technologie

- **Next.js 15** (App Router)
- **TypeScript**
- **CSS Modules** (vanilla CSS, bez frameworków)
- **Google Fonts** (Space Grotesk)
