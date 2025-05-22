# TekoWebengineeringNetlify

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Dokumentation: Learnings aus der Angular + Netlify Einrichtung

## Projektstart

Ich habe ein bestehendes GitHub-Repository, das nur ein `README.md` und eine `LICENSE` enthielt, in ein Angular-Projekt mit SSR- und Prerendering-Funktionalität erweitert. Das Ziel war, eine statisch generierte Angular-Anwendung aufzubauen, die auf Netlify deploybar ist.

Der Angular-Initialisierungsbefehl sah so aus:

```bash
ng new Teko-Webengineering-Netlify --directory . --skip-git --style=scss --ssr
```

Wichtig war dabei, dass keine App Engine APIs (Developer Preview) aktiviert wurden – diese sind für Netlify aktuell nicht stabil geeignet.

## Erweiterungen an der angular.json

Damit das Projekt erfolgreich prerendern kann, musste ich manuell einen `prerender`-Block zur `angular.json` hinzufügen:

```
"prerender": {
  "builder": "@angular-devkit/build-angular:prerender",
  "options": {
    "browserTarget": "Teko-Webengineering-Netlify:build:production",
    "serverTarget": "Teko-Webengineering-Netlify:server:production",
    "routes": ["/"]
  }
}
```

Zusätzlich habe ich geprüft, dass `outputPath` korrekt klein geschrieben ist (das ist auf Netlify/Linux-Dateisystemen relevant).

## tsconfig.server.json

Da Angular SSR ein separates Server-Build-Target benötigt, habe ich folgende Datei im Projektroot erstellt:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/out-tsc/server",
    "target": "ES2022",
    "types": ["node"]
  },
  "files": ["src/main.server.ts"]
}
```

Damit ist der Server-Build konfiguriert.

## main.server.ts: Fehlerhafte Rückgabe korrigiert

Der ursprünglich generierte Code gab `Promise<void>` zurück, was zu einem Typfehler im Prerendering-Prozess führte. Angular erwartet stattdessen `Promise<ApplicationRef>`. Ich habe den Code wie folgt angepasst:

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

export default function bootstrap() {
  console.log('>> Bootstrap SSR gestartet');
  return bootstrapApplication(AppComponent, config);
}
```

Damit ist sichergestellt, dass der SSR-Bootstrap korrekt läuft.

## package.json: Skripte ergänzt und angepasst

Um SSR und Prerendering korrekt lokal und in CI/CD-Systemen (wie Netlify) auszuführen, habe ich die folgenden Scripts eingerichtet:

```
"scripts": {
  "build:ssr": "ng build && ng run Teko-Webengineering-Netlify:server",
  "prerender": "cross-env NODE_OPTIONS=--trace-warnings ng run Teko-Webengineering-Netlify:prerender"
}
```

Dabei habe ich `cross-env` installiert, damit die Umgebungsvariable `NODE_OPTIONS` auch unter Windows korrekt gesetzt werden kann.

## netlify.toml

Netlify benötigt eine Build-Konfiguration. Diese habe ich wie folgt definiert:

```toml
[build]
  command = "npm run prerender"
  publish = "dist/teko-webengineering-netlify/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Wichtig war auch hier: der Pfad `dist/teko-webengineering-netlify/browser` muss exakt mit der Schreibweise im `angular.json` übereinstimmen.

## Lokaler Build- und Prerendering-Test

Nachdem alle Einstellungen korrigiert waren, konnte ich erfolgreich lokal bauen:

```bash
npm run build:ssr
npm run prerender
```

Dabei wurde der Output korrekt erzeugt, und Angular meldete:

> Prerendered 1 static route.
> Application bundle generation complete.

Damit war klar, dass alles funktioniert.

## Zusammenfassung

Ich habe gelernt, wie man:

* ein bestehendes GitHub-Repo in ein Angular-SSG-Projekt mit SSR-Funktionalität umwandelt
* Prerendering in der `angular.json` korrekt konfiguriert
* `main.server.ts` an die Typanforderungen von Angular SSR anpasst
* `cross-env` für plattformübergreifende Umgebungsvariablen nutzt
* Netlify mit dem richtigen Build-Script (`npm run prerender`) und Pfad (`dist/.../browser`) einrichtet
* Exit-Code-Probleme aus SSR-Bugs sauber umgeht

Die Anwendung ist jetzt stabil baubar, prerendered, und vollständig für statisches Hosting auf Netlify vorbereitet.


