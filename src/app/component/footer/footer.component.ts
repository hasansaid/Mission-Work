import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  color$: Observable<number>;
  constructor(private store: Store<{ color: number }>) {
    this.color$ = this.store.select('color');
  }

  ngOnInit(): void {}
}
