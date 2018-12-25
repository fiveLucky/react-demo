const path = require('path');

const cwd = process.cwd();
const spliceRootPath = (p) => path.resolve(cwd, p);
const spliceDirPath = (dir, p) => path.resolve(dir, p);




module.exports = {
  spliceRootPath,
  spliceDirPath,
};