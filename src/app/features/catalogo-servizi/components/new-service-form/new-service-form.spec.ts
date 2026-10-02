import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServiceForm } from './new-service-form';

describe('NewServiceForm', () => {
  let component: NewServiceForm;
  let fixture: ComponentFixture<NewServiceForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewServiceForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewServiceForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
