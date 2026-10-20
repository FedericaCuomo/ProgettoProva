import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormProfile } from './edit-form-profile';

describe('EditFormProfile', () => {
  let component: EditFormProfile;
  let fixture: ComponentFixture<EditFormProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFormProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFormProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
