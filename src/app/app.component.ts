import { Component, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// import { forbiddenNameValidator } from './forbidden-name-validator.directive';
import { CustomValidators } from './forbidden-name-validator.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public heroForm: FormGroup;
  public hero: any = {
    alterEgo: '',
    name: '',
    power: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private customValidators: CustomValidators
  ) {
    // this.estructuraformUno();
    this.estructuraformDos();
  }

  ngOnInit(): void {}

  // estructuraformUno() {
  //   this.heroForm = this.formBuilder.group({
  //     name: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(2),
  //       forbiddenNameValidator(/SELECT/i), // <-- Here's how you pass in the custom validator.
  //     ]),
  //   });
  // }

  estructuraformDos() {
    this.heroForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        this.customValidators.nameValidator,
        // this.customValidators.isLegitimateStark,
      ]),
    });
  }

  get name() {
    return this.heroForm.get('name') as FormControl;
  }

  guardar() {
    console.log('formulario valido: ', this.heroForm.valid);
    console.log('formulario: ', this.heroForm.value);
  }
}
