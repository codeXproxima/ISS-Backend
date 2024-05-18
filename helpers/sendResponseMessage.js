const successMessage = (data, message) => {
  return { message: message, details: data, status: true };
};

const errorMessage = (data, message) => {
  return { message: message, details: data, status: false };
};

module.exports = { successMessage, errorMessage };
