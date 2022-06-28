const { readFile } = require('fs').promises;

const functionReadFile = async () => {
  const talker = await readFile('./talker.json', 'utf-8');
  return JSON.parse(talker);
};

module.exports = functionReadFile;
