import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleWithoutInputComponent } from './example-without-input.component';

describe('ExampleWithoutInputComponent', () => {
  let component: ExampleWithoutInputComponent;
  let fixture: ComponentFixture<ExampleWithoutInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleWithoutInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleWithoutInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
