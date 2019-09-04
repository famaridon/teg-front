import { Component, OnInit } from '@angular/core';
import { TegService } from './services/teg.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'teg-front';

  public ping$: Observable<string>;

  constructor(private tegService: TegService) { }

  public ngOnInit() {
    this.ping$ = this.tegService.ping();
    this.ping$.subscribe();
  }

}
