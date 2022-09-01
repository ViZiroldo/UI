import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEditUserComponent } from './insert-edit-user.component';

describe('InsertEditUserComponent', () => {
  let component: InsertEditUserComponent;
  let fixture: ComponentFixture<InsertEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertEditUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
