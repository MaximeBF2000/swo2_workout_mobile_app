import { get } from 'lodash'
import { hasLower, hasNumber, hasUpper, isEmail } from '../../utils/string'

const CREDS_ERRORS = {
  missing_information: 'Please fill all the informations',
  email_invalid: 'Please provide a real email adress',
  password_mismatch: 'Passwords do not match',
  password_short: 'Password should be at least 8 characters',
  password_weak:
    'Password should contain at least one minuscule, one majucule and one number'
}

export const checkCreds = (
  { email, password, confirmPassword } = {},
  { checkComfirmPassword = false } = {}
) => {
  const errors = []
  const missingEmailOrPassword = !email || !password
  const missingConfirmPassword = checkComfirmPassword && !confirmPassword

  if (missingEmailOrPassword || missingConfirmPassword)
    errors.push(CREDS_ERRORS.missing_information)

  if (!isEmail(email)) errors.push(CREDS_ERRORS.email_invalid)

  if (checkComfirmPassword && password !== confirmPassword)
    errors.push(CREDS_ERRORS.password_mismatch)

  if (get(password, 'length') < 8) errors.push(CREDS_ERRORS.password_short)

  if (!hasLower(password) || !hasUpper(password) || !hasNumber(password))
    errors.push(CREDS_ERRORS.password_weak)

  return errors.length > 0 ? errors : null
}
