import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActionExpansionComponent } from './card-action-expansion.component';

describe('MatCardExpansionComponent', () => {
  let component: CardActionExpansionComponent;
  let fixture: ComponentFixture<CardActionExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardActionExpansionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActionExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
