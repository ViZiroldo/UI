import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserEditGroupComponent } from './inser-edit-group.component';

describe('InserEditGroupComponent', () => {
  let component: InserEditGroupComponent;
  let fixture: ComponentFixture<InserEditGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserEditGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserEditGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
