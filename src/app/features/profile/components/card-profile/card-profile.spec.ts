import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfile } from './card-profile';

describe('CardProfile', () => {
  let component: CardProfile;
  let fixture: ComponentFixture<CardProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
