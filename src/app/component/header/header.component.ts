import { Application } from './../models/application';
import { reset } from './../store/counter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  applications: Application[] = [];

  count$: Observable<number>;
  color$: Observable<number>;
  constructor(
    private store: Store<{ color: number; count: number }>,
    private applicationService: ApplicationService
  ) {
    this.color$ = store.select('color');
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
    this.applicationService.getApplication().subscribe((data) => {
      this.applications = data;
    });
  }

  reset() {
    this.store.dispatch(reset());
  }
}
