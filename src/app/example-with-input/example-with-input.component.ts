import { Component, input } from '@angular/core';

@Component({
  selector: 'app-example-with-input',
  imports: [],
  templateUrl: './example-with-input.component.html',
  styleUrl: './example-with-input.component.scss',
  standalone: true
})
export class ExampleWithInputComponent {

  inputValue = input<string>();

}
