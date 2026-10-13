import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceForm } from './add-service-form';

describe('AddServiceForm', () => {
  let component: AddServiceForm;
  let fixture: ComponentFixture<AddServiceForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddServiceForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiceForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
