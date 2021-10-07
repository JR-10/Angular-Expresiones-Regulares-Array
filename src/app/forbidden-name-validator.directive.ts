import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  console.log('valor de nameRe: ', nameRe);
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    console.log('valor de forbidden: ', forbidden);

    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

export class CustomValidators {
  nameValidator(control: FormControl): { [key: string]: boolean } {
    let invalidName: boolean;
    // console.log('Valor del input: ', control.value);
    // const nameRegexp: RegExp = /pedro/;
    const nameRegexp: RegExp[] = [
      /CREATE/,
      /ALTER/,
      /DROP/,
      /TRUNCATE/,
      /COMMENT/,
      /RENAME/,
      /INSERT/,
      /UPDATE/,
      /DELETE/,
      /GRANT/,
      /REVOKE/,
      /COMMIT/,
      /ROLLBACK/,
      /CONCAT/,
    ];

    for (const index in nameRegexp) {
      // console.log(`${index}: ${nameRegexp[index]}`);
      if (
        control.value &&
        nameRegexp[index].test(control.value.toUpperCase())
      ) {
        // console.log('cumple');
        invalidName = true;
        break;
      } else {
        invalidName = false;
        // console.log('No cumple');
      }
    }
    console.log('resultado: ', invalidName);
    return { invalidName };
  }
}
