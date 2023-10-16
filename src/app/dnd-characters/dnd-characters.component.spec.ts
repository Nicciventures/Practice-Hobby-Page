import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndCharactersComponent } from './dnd-characters.component';

describe('DndCharactersComponent', () => {
  let component: DndCharactersComponent;
  let fixture: ComponentFixture<DndCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DndCharactersComponent]
    });
    fixture = TestBed.createComponent(DndCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
