
const reg = /.*lazy\(('(.*)')\).*/;
const temp = (chunkName) => {
  return `() => import(/* webpackChunkName: "${chunkName}" */ '${chunkName}')`;
};

module.exports = (source) => {
  try {
    const r = source.split('\n').map(line => {
      //eg: const List = lazy('./View/Demo/List');
      const matchArr = line.match(reg);

      if (matchArr !== null) {
        const chunkName = matchArr[2];
        const chunkPath = matchArr[1];
        return line.replace(chunkPath, temp(chunkName));
      }
      return line;
    }).join('\n');

    return r;
  } catch (e) {
    console.log(e);
  }
  return source;
};
