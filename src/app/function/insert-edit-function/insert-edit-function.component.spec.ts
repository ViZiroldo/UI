import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEditFunctionComponent } from './insert-edit-function.component';

describe('InsertEditFunctionComponent', () => {
  let component: InsertEditFunctionComponent;
  let fixture: ComponentFixture<InsertEditFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertEditFunctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertEditFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
