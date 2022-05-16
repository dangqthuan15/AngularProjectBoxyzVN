import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewmemberComponent } from './addnewmember.component';

describe('AddnewmemberComponent', () => {
  let component: AddnewmemberComponent;
  let fixture: ComponentFixture<AddnewmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
