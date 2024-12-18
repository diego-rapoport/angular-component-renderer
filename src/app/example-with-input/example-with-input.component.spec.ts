import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleWithInputComponent } from './example-with-input.component';

describe('ExampleWithInputComponent', () => {
  let component: ExampleWithInputComponent;
  let fixture: ComponentFixture<ExampleWithInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleWithInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleWithInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
