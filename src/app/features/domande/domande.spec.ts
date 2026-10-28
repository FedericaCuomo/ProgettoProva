import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Domande } from './domande';

describe('Domande', () => {
  let component: Domande;
  let fixture: ComponentFixture<Domande>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Domande]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Domande);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
