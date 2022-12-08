import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDusurComponent } from './addusur.component';

describe('ADDusurComponent', () => {
  let component: ADDusurComponent;
  let fixture: ComponentFixture<ADDusurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADDusurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADDusurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
