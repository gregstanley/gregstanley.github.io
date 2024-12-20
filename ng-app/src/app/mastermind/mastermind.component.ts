import { Component, inject, OnInit, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { faker } from '@faker-js/faker';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faAngry,
  faCircle,
  faCircleCheck,
  faXmarkCircle,
} from '@fortawesome/free-regular-svg-icons';

const guessValidator = (correctValue: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;

    if (!value) {
      return null;
    }

    const isCorrect = value === correctValue;

    const tokens = value.split('').map((char, index) => {
      let token = 0;

      if (correctValue.length >= index) {
        if (correctValue.charAt(index) === char) token = 2;
        else if (correctValue.includes(char)) token = 1;
      }
      return token;
    });

    return !isCorrect ? { incorrect: tokens } : null;
  };
};

interface MastermindForm {
  guess: FormControl<string>;
}

@Component({
  selector: 'app-mastermind',
  imports: [ReactiveFormsModule, FaIconComponent],
  templateUrl: './mastermind.component.html',
  host: { '[class.flex]': 'true', '[class.flex-col]': 'true' },
})
export class MastermindComponent implements OnInit {
  #fb = inject(NonNullableFormBuilder);

  protected textValue = signal('');

  protected formGroup: FormGroup<MastermindForm> = this.#fb.group({
    guess: this.#fb.control(''),
  });

  protected get guessIncorrectError(): number[] | null {
    return this.formGroup.controls.guess.getError('incorrect');
  }
  protected faXmarkCircle = faXmarkCircle;
  protected faCircle = faCircle;
  protected faCircleCheck = faCircleCheck;
  protected faAngry = faAngry;

  ngOnInit(): void {
    const f = faker.animal.type();
    this.textValue.set(f);

    this.formGroup.controls.guess.setValidators([
      Validators.required,
      guessValidator(f),
    ]);
  }
}
