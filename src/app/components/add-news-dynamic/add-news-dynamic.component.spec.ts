import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsDynamicComponent } from './add-news-dynamic.component';

describe('AddNewsDynamicComponent', () => {
  let component: AddNewsDynamicComponent;
  let fixture: ComponentFixture<AddNewsDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
