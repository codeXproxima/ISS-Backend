const otpDB = require("../Model/auth/otpModel");

const callingCountlessFunction = async () => {
  await setInterval(async () => {
    const data = await otpDB.find({ isExpiry: false });
    // console.log(data);

    for (let index = 0; index < data.length; index++) {
      const currentDate = new Date();
      const originalDate = currentDate.getTime();
      const createdDate = new Date(data[index]?.createdAt).getTime();
      let timeDifference = Math.abs(originalDate - createdDate);
      let hoursDifference = timeDifference / (1000 * 60 * 60);

      if (Math.abs(hoursDifference - 1) < 0.0001) {
        console.log("The difference between the dates is exactly 1 hour.");
        await expireRecord(data[index]);
      } else if (hoursDifference > 1) {
        console.log("The difference between the dates is more than 1 hour.");
        await expireRecord(data[index]);
      } else {
        console.log("The difference between the dates is less than 1 hour.");
      }
    }
  }, 10000);
};

const expireRecord = async (data) => {
  await otpDB
    .findByIdAndUpdate(
      data,
      { $set: { isExpiry: true, status: "rejected" } },
      { new: true, useFindAndModify: false }
    )
    .then(() => {
      console.log("records expire  successfully");
    })
    .catch((error) => {
      console.log(error?.message);
    });
};

module.exports = { callingCountlessFunction };
