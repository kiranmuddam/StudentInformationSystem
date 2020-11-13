import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassroomsComponent } from './list-classrooms.component';

describe('ListClassroomsComponent', () => {
  let component: ListClassroomsComponent;
  let fixture: ComponentFixture<ListClassroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClassroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClassroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
