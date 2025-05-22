import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = async () => {
  try {
    console.log('>> Bootstrap SSR gestartet');
    await bootstrapApplication(AppComponent, config);
  } catch (err) {
    console.error('!! SSR-Fehler beim Bootstrap:', err);
    // Nur in CI/CD-Umgebungen relevant:
    if (typeof process !== 'undefined' && process.exit) {
      process.exit(1);
    }
  }
};

export default bootstrap;
