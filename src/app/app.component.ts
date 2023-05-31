import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bike-repair-form';
  isLoading: Subject<boolean> = this.loader.isLoading;
  constructor(private loader: LoaderService) {}
}
