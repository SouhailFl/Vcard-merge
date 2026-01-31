# Zoman Gebäudereinigung - Kontakt Seite

Eine professionelle Kontaktseite für Zoman Gebäudereinigung mit drei Kontaktoptionen.

## Funktionen

- **Responsive Design**: Funktioniert auf allen Geräten (Desktop, Tablet, Mobile)
- **Moderne vCard-Ästhetik**: Professionelles Design mit Glasmorphismus-Effekten
- **Drei Kontaktoptionen**:
  1. Elyaagoubi (Inhaber) - Link zu vCard
  2. Schlobben (Abteilungsleiter) - Link zu vCard
  3. Support - Direkte Kontaktinformationen

## Dateien

```
vcard-merge/
├── index.html          # Haupt-HTML-Datei
├── style.css           # Stylesheet mit vCard-Design
├── script.js           # JavaScript für Interaktivität
├── zoman-logo.svg      # Logo (SVG-Format)
└── README.md           # Diese Datei
```

## Deployment auf Vercel

### Option 1: Über GitHub

1. Erstellen Sie ein neues Repository auf GitHub
2. Laden Sie alle Dateien hoch
3. Gehen Sie zu [vercel.com](https://vercel.com)
4. Klicken Sie auf "Import Project"
5. Wählen Sie Ihr GitHub-Repository aus
6. Vercel wird automatisch deployen

### Option 2: Vercel CLI

```bash
# Installieren Sie Vercel CLI
npm install -g vercel

# Navigieren Sie zum Projektordner
cd "C:\Users\souha\OneDrive\Bureau\‎‎‎‎‎‎‎‎ㅤ\Vcard-merge"

# Deployen
vercel
```

### Option 3: Drag & Drop

1. Gehen Sie zu [vercel.com](https://vercel.com)
2. Klicken Sie auf "Deploy"
3. Ziehen Sie den gesamten Ordner per Drag & Drop

## Anpassungen

### Logo ändern
Ersetzen Sie `zoman-logo.svg` mit Ihrem eigenen Logo (PNG oder SVG)

### vCard-Links aktualisieren
In `index.html`, Zeilen 84 und 100:
```html
<a href="https://vcard-project.vercel.app" ...>
<a href="https://zoman-vcard2.vercel.app" ...>
```

### Farben anpassen
In `style.css` ändern Sie die CSS-Variablen unter `:root`

### Kontaktinformationen
In `index.html` die E-Mail und Telefonnummer aktualisieren:
- Zeile 38: Email
- Zeile 47: Telefon
- Zeilen 111-117: Support-Kontakte

## Browser-Unterstützung

- Chrome (aktuell)
- Firefox (aktuell)
- Safari (aktuell)
- Edge (aktuell)

## Technologien

- HTML5
- CSS3 (mit CSS-Variablen und Grid/Flexbox)
- Vanilla JavaScript
- Ion Icons (für Icons)

## Lizenz

© 2026 Zoman Gebäudereinigung. Alle Rechte vorbehalten.