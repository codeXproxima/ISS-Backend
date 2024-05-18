const generateOTP = (length) => {
  const digits = "0123456789";
  let OTP = "";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * digits.length);
    OTP += digits[index];
  }

  return OTP;
};

const generateRandomPassword = (length) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&*_-";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

const checkCollectionisEmpty = async (DB) => {
  return await DB.countDocuments({})
    .then((count) => {
      // console.log(count);
      if (count == 0) {
        return true;
      } else {
        return false;
      }
    })
    .catch(() => {
      return true;
    });
};

module.exports = { generateOTP, generateRandomPassword, checkCollectionisEmpty };
