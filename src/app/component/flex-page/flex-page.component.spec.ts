import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexPageComponent } from './flex-page.component';

describe('FlexPageComponent', () => {
  let component: FlexPageComponent;
  let fixture: ComponentFixture<FlexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
