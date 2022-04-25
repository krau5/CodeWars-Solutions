function validate(password) {
  return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])\w{6,}$/.test(password);
}
