export function validateEmail(email) {
    if (!email) {
      return true;
    }
  
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  
export function validatePassword(password) {
    if (!password) {
      return true;
    }
  
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{4,}/;
    return re.test(password);
}
  