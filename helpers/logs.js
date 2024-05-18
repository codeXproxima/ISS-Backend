const logs = (data) => {
  return console.log(data);
};

const stringfyLogs = (data) => {
  return console.log(JSON.stringify(data));
};

module.exports = { logs, stringfyLogs };
