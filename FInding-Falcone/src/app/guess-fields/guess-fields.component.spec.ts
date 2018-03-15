import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessFieldsComponent } from './guess-fields.component';

describe('GuessFieldsComponent', () => {
  let component: GuessFieldsComponent;
  let fixture: ComponentFixture<GuessFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
