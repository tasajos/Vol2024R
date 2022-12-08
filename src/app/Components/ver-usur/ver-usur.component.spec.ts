import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerUsurComponent } from './ver-usur.component';

describe('VerUsurComponent', () => {
  let component: VerUsurComponent;
  let fixture: ComponentFixture<VerUsurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerUsurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerUsurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
