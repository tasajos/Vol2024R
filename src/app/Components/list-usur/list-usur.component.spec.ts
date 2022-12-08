import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUSURComponent } from './list-usur.component';

describe('ListUSURComponent', () => {
  let component: ListUSURComponent;
  let fixture: ComponentFixture<ListUSURComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUSURComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUSURComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
