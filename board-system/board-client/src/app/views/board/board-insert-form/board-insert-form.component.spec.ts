import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardInsertFormComponent } from './board-insert-form.component';

describe('BoardInsertFormComponent', () => {
  let component: BoardInsertFormComponent;
  let fixture: ComponentFixture<BoardInsertFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardInsertFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardInsertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
