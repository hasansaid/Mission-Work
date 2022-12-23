import { reset } from './../store/counter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  count$: Observable<number>;
  color$: Observable<number>;
  constructor(private store: Store<{ color: number; count: number }>) {
    this.color$ = store.select('color');
    this.count$ = store.select('count');
  }

  ngOnInit(): void {}

  reset() {
    this.store.dispatch(reset());
  }
}
