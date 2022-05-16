import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskaddComponent } from './deskadd.component';

describe('DeskaddComponent', () => {
  let component: DeskaddComponent;
  let fixture: ComponentFixture<DeskaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
