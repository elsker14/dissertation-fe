import {FormControl, ValidationErrors} from "@angular/forms";

export class Luv2ShopValidators {

  // whitespace validation
  static notOnlyWhitespace(control: FormControl): ValidationErrors {

    // check if string oly contains whitespaces
    if ((control.value != null) && (control.value.trim().length === 0)) {

      // invalid, return error object
      return {'notOnlyWhitespace': true};
    } else {

      // valid, return null
      // @ts-ignore
      return null;
    }
  }
}
