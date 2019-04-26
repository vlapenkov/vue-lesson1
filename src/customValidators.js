import { Validator } from "vee-validate";

const emailsDB = ["logaretm1@gmail.com", "vlapenkov@ya.ru"];

export function uniqueValidate() {
  Validator.extend("unique", {
    validate: value =>
      new Promise(resolve => {
        setTimeout(() => {
          if (emailsDB.indexOf(value) === -1) {
            return resolve({
              valid: true
            });
          }

          return resolve({
            valid: false,
            data: {
              message: `${value} is already taken.`
            }
          });
        }, 200);
      }),
    getMessage: (field, params, data) => data.message
  });
}
