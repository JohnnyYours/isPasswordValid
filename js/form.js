/* form.js */

export function isPasswordValid(password) {
    console.log(password)
    if (password.length >= 12) {
        return true
    }

    else {
        return false
    }
  }