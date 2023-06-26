export default function validatePassword(password) {
  if (!password) {
    return true;
  }

  var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{4,}/;
  return re.test(password);
}
