const { writeFile } = require('fs').promises;

const functionWriteFile = async (data) => {
  await writeFile('./talker.json', JSON.stringify(data));
};

module.exports = functionWriteFile;