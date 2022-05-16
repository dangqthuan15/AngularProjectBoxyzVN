import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesklistComponent } from './desklist.component';

describe('DesklistComponent', () => {
  let component: DesklistComponent;
  let fixture: ComponentFixture<DesklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
