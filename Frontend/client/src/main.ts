import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

<!-- Explain This -->
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
