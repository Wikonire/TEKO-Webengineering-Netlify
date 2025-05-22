import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

export default function bootstrap() {
  try {
    console.log('>> Bootstrap SSR gestartet');
    return bootstrapApplication(AppComponent, config);
  } catch (err) {
    console.error('!! SSR-Fehler beim Bootstrap:', err);
    if (typeof process !== 'undefined' && process.exit) {
      process.exit(1);
    }
    return Promise.reject(err);
  }
}
