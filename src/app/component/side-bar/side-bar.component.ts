import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  color$: Observable<number>;
  constructor(private store: Store<{ color: number }>) {
    this.color$ = store.select('color');
  }

  ngOnInit(): void {}
}
