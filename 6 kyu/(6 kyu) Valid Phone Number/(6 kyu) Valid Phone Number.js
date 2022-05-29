function validPhoneNumber(phoneNumber){
  return /^\([0-9]{3}\)\ [0-9]{3}\-[0-9]{4}$/.test(phoneNumber)
}
