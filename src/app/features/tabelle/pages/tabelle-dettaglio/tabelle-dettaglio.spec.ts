import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleDettaglio } from './tabelle-dettaglio';

describe('TabelleDettaglio', () => {
  let component: TabelleDettaglio;
  let fixture: ComponentFixture<TabelleDettaglio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelleDettaglio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelleDettaglio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
