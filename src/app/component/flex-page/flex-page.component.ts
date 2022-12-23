import { changeColor } from './../store/color.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { increment } from '../store/counter.actions';

@Component({
  selector: 'app-flex-page',
  templateUrl: './flex-page.component.html',
  styleUrls: ['./flex-page.component.css'],
})
export class FlexPageComponent implements OnInit {
  form: FormGroup;
  count$: Observable<number>;
  color$: Observable<number>;
  constructor(
    private store: Store<{ color: number; count: number }>,
    private formBuilder: FormBuilder
  ) {
    this.color$ = store.select('color');
    this.count$ = store.select('count');
  }

  colorChange(color: number) {
    this.store.dispatch(changeColor(color));
    this.store.dispatch(increment());
  }

  ngOnInit(): void {
    this.createForm();
  }
  clear() {
    this.form.reset();
  }
  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  color1() {
    this.colorChange(1);
  }
  color2() {
    this.colorChange(2);
  }
  color3() {
    this.colorChange(3);
  }

  color4() {
    this.colorChange(4);
  }
  color5() {
    this.colorChange(5);
  }

  color6() {
    this.colorChange(6);
  }
  color7() {
    this.colorChange(7);
  }

  color8() {
    this.colorChange(8);
  }
  color9() {
    this.colorChange(9);
  }
  color10() {
    this.colorChange(10);
  }
  color11() {
    this.colorChange(11);
  }
}
