# Platzhalter – was du noch eintragen musst

Alle Stellen, an denen noch keine echten Daten stehen. Suche im Repository nach dem Text in eckigen Klammern
(z. B. `[KONTAKT-E-MAIL]`) und ersetze ihn **überall** (alle drei Sprachen DE/TR/EN stehen in derselben Datei).

> ⚠️ Die Rechtstexte sind ein **Entwurf und kein Rechtsrat**. Vor dem Store-Start bitte prüfen lassen
> oder mit einem Generator (z. B. eRecht24, IT-Recht Kanzlei) abgleichen.

## 1. Persönliche Angaben (Impressum und Datenschutz)

| Platzhalter | Wo | Was eintragen |
|---|---|---|
| `[VOLLER NAME]` | `impressum.html` (Anschrift + „Verantwortlich für den Inhalt“, DE/TR/EN), `datenschutz.html` (Abschnitt 1 „Verantwortlicher“, DE/TR/EN) | Dein voller Vor- und Nachname (bzw. Firmenname mit Rechtsform, falls du eine Firma gründest) |
| `[STRASSE HAUSNUMMER]` | `impressum.html`, `datenschutz.html` (Abschnitt 1), je DE/TR/EN | Ladungsfähige Anschrift: Straße und Hausnummer (kein Postfach) |
| `[PLZ ORT]` | `impressum.html`, `datenschutz.html` (Abschnitt 1), je DE/TR/EN | Postleitzahl und Ort |
| `[KONTAKT-E-MAIL]` | `impressum.html` (2× pro Sprache), `datenschutz.html` (Abschnitt 1 und 13), `konto-loeschen.html` („Ohne App“), `support.html` (oben) – jeweils DE/TR/EN, als Text **und** im Link `mailto:[KONTAKT-E-MAIL]` | Eine E-Mail-Adresse, die du regelmäßig liest, z. B. eine eigene Adresse auf deiner Domain |
| `[DATUM]` | `datenschutz.html`, Zeile „Stand: [DATUM]“ (DE/TR/EN) | Datum, ab dem die Datenschutzerklärung gilt, z. B. `01.12.2026` |

„Deutschland“ ist bereits eingetragen (TR: „Almanya“, EN: „Germany“).

## 2. Werbung

| Platzhalter | Wo | Was eintragen |
|---|---|---|
| `[WERBENETZWERK – wird eingetragen]` | `datenschutz.html`, Abschnitt 7 „Werbung“ (DE/TR/EN) | Name und Anbieter des Werbenetzwerks für das Belohnungsvideo. Den roten Hinweiskasten darunter durch die Angaben des Netzwerks ersetzen (welche Daten es verarbeitet, Link zu seiner Datenschutzerklärung). Falls nötig, auch Abschnitt 9 (Rechtsgrundlage Einwilligung) und 11 (Drittland) ergänzen. |

## 3. Store-Links

| Platzhalter | Wo | Was eintragen |
|---|---|---|
| `#` (Tooltip `[GOOGLE-PLAY-LINK]`) | Knopf „Google Play“ in `index.html` und `einladen/index.html` (je DE/TR/EN, also 6×) | `href="#"` durch den Link zur App in Google Play ersetzen, z. B. `https://play.google.com/store/apps/details?id=[PAKETNAME]`, und das `title`-Attribut entfernen |
| `#` (Tooltip `[APP-STORE-LINK]`) | Knopf „App Store“ in `index.html` und `einladen/index.html` (je DE/TR/EN, also 6×) | `href="#"` durch den Link zur App im App Store ersetzen und das `title`-Attribut entfernen |

## 4. Bilder

| Datei | Was tun |
|---|---|
| `logo.png` | Platzhalter-Logo (Stein mit „7“ und „LOGO“). Durch das echte Logo ersetzen, **gleicher Dateiname**, quadratisch, am besten 512 × 512 px. Wird auch als Browser-Symbol benutzt. |
| `assets/screenshots/screenshot-1.png` … `screenshot-4.png` | Platzhalter. Durch echte Handy-Screenshots aus dem Spiel ersetzen (Hochformat, ca. 9 : 19,5, z. B. 780 × 1690 px), gleiche Dateinamen. Keine Waffen, Zigarren oder Aschenbecher auf den Bildern. |

## 5. App-Verknüpfung (Einladungslink)

| Platzhalter | Wo | Was eintragen |
|---|---|---|
| `[PAKETNAME]` | `.well-known/assetlinks.json` | Android-Paketname der App (Unity: Player Settings → Other Settings → Package Name, z. B. `com.firma.spiel`) |
| `[SHA256_FINGERABDRUCK]` | `.well-known/assetlinks.json` | SHA-256-Fingerabdruck des **App-Signaturschlüssels** aus der Play Console (Einrichtung/Test und Veröffentlichung → App-Integrität → App-Signatur). Format `AB:CD:…` (32 Paare). Nur der öffentliche Fingerabdruck – **niemals** den Schlüssel selbst oder ein Passwort ins Repository legen. |
| `[TEAM_ID]` | `.well-known/apple-app-site-association` (2×: `appIDs` und `appID`) | Apple-Team-ID (10 Zeichen, Apple Developer → Membership) |
| `[BUNDLE_ID]` | `.well-known/apple-app-site-association` (2×) | Bundle-ID der iOS-App, z. B. `com.firma.spiel` |

Im Spiel selbst müssen die App Links (Android, Intent-Filter für `https://[DOMAIN]/einladen/`) und Associated Domains
(iOS, `applinks:[DOMAIN]`) eingerichtet sein – das ist nicht Teil dieser Website.

## 6. Eigene Adresse `[DOMAIN]`

| Platzhalter | Wo | Was eintragen |
|---|---|---|
| `[DOMAIN]` | Datei `CNAME` (einzige Zeile) | Deine gekaufte Adresse **ohne** `https://` und ohne `/`, z. B. `okeyfriends.de` |
| `[DOMAIN]` | nur in dieser Anleitung und im Beispiel-Einladungslink `https://[DOMAIN]/einladen/?code=ABC123` | Die Seiten selbst nutzen nur relative Links, dort muss nichts geändert werden. Im Spiel muss der Einladungslink auf `https://[DOMAIN]/einladen/?code=…` zeigen. |

> **Wichtig:** Solange noch keine Adresse gekauft ist, die Datei `CNAME` vor dem Mergen **löschen**.
> Sonst versucht GitHub Pages, die ungültige Adresse `[DOMAIN]` zu benutzen. Ohne `CNAME` ist die Seite unter
> `https://devo-deck.github.io/` erreichbar.

### DNS-Einträge bei deinem Domain-Anbieter

Laut GitHub-Anleitung „Managing a custom domain for your GitHub Pages site“:

1. **Zuerst** auf GitHub im Repository `devo-deck.github.io` → **Settings → Pages → Custom domain** die Adresse eintragen und **Save** drücken
   (GitHub empfiehlt, die Domain vorher unter Profil → Settings → Pages zu verifizieren – schützt vor Übernahme).
2. Beim Anbieter für die Hauptadresse (`@`, z. B. `okeyfriends.de`) **vier A-Einträge** anlegen:

   | Typ | Name | Wert |
   |---|---|---|
   | A | @ | `185.199.108.153` |
   | A | @ | `185.199.109.153` |
   | A | @ | `185.199.110.153` |
   | A | @ | `185.199.111.153` |

   Optional für IPv6 zusätzlich vier AAAA-Einträge: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.
3. Für `www` einen **CNAME-Eintrag**: Name `www` → Wert `devo-deck.github.io` (ohne Repository-Namen).
4. Vom Anbieter automatisch gesetzte Standard-Einträge für `@` / `www` entfernen. **Keine** Platzhalter-Einträge wie `*.okeyfriends.de` anlegen.
5. Warten (bis zu 24 Stunden), dann in **Settings → Pages** das Häkchen **„Enforce HTTPS“** setzen.

## 7. Prüfen nach dem Veröffentlichen

- `https://[DOMAIN]/.well-known/assetlinks.json` und `https://[DOMAIN]/.well-known/apple-app-site-association` müssen ohne Weiterleitung erreichbar sein.
- Android-Prüfung: `https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://[DOMAIN]&relation=delegate_permission/common.handle_all_urls`
- Die Seite `https://[DOMAIN]/konto-loeschen.html` in der Google Play Console als Link zum Löschen des Kontos eintragen,
  `https://[DOMAIN]/datenschutz.html` als Datenschutz-Link (Google Play und App Store), `https://[DOMAIN]/support.html` als Support-URL (App Store).
