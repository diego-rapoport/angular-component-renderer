import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleWithInputComponent } from './example-with-input/example-with-input.component';
import { ExampleWithoutInputComponent } from './example-without-input/example-without-input.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExampleWithInputComponent, ExampleWithoutInputComponent, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'angular-component-renderer';
  selectedComponent: any;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  components = [
    { name: 'Example With Input', component: ExampleWithInputComponent },
    { name: 'Example Without Input', component: ExampleWithoutInputComponent }
  ];

  getComponent(componentName: string) {
    return this.components.find(comp => comp.name === componentName)?.component;
  }

  onSelect(componentName: any) {
    this.container.clear(); // Clear the previous component
    const component = this.getComponent(componentName.target.value);
    if (component) {
      this.container.clear(); // Clear the previous component
      const componentRef = this.container.createComponent(component);
      
      if (component === ExampleWithInputComponent) {
        const inputValue = prompt('Enter a value for the input:');
        componentRef.setInput('inputValue', inputValue);
      }
    }
   
  }
}
