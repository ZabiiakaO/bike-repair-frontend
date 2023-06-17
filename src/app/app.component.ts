import { Component } from '@angular/core';
import { LoaderService } from './services/loader-service/loader.service';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bike-repair-form';
  isLoading: Subject<boolean> = this.loader.isLoading;
  constructor(private loader: LoaderService, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
