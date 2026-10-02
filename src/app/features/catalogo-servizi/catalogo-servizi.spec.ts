import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoServizi } from './catalogo-servizi';

describe('CatalogoServizi', () => {
  let component: CatalogoServizi;
  let fixture: ComponentFixture<CatalogoServizi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoServizi],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoServizi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
