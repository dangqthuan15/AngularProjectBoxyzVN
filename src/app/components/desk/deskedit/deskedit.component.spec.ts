import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskeditComponent } from './deskedit.component';

describe('DeskeditComponent', () => {
  let component: DeskeditComponent;
  let fixture: ComponentFixture<DeskeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
