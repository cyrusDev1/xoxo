const bcrypt = require('bcrypt');

function genCode(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUV";
    const numbers = "0123456789";
    let code = '';

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      code += letters.charAt(randomIndex);
    }
  
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      code += numbers.charAt(randomIndex);
    }
    return code;
}


async function hashPassword(password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

module.exports = {
  genCode, hashPassword
}
