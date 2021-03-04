import {ValidationRules} from 'react-hook-form';
import * as regex from 'utils/regex';

export const rules = {
  userName: (isPerson: boolean): ValidationRules => ({
    required: true,
    minLength: isPerson ? 11 : 9,
    pattern: regex.username,
  }),
  repeatUserName: (watch: any): ValidationRules => ({
    required: true,
    validate: (value) => value === watch('userName'),
  }),

  nameField: (): ValidationRules => ({
    required: true,
    pattern: regex.nameField(),
  }),
};
