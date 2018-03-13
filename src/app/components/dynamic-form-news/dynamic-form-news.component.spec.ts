import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormNewsComponent } from './dynamic-form-news.component';

describe('DynamicFormNewsComponent', () => {
  let component: DynamicFormNewsComponent;
  let fixture: ComponentFixture<DynamicFormNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
