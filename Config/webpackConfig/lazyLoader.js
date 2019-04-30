
const reg = /.*import\s+(\S*)\s+from\s+['"]!lazy(\S*)['"]/;
const importTemp = `
  import Loadable from 'react-loadable';
`;
const lazyTemp = (chunkName, chunkPath) => {
  return ` const ${chunkName} = Loadable({
      loading: () => (<div>loading...</div>),
      loader: () => import(/* webpackChunkName: "${chunkName}" */ '${chunkPath}')
    }) `;
};


module.exports = (source) => {
  try {
    const r = source.split('\n').map(line => {
      const matchArr = line.match(reg);
      if (matchArr !== null) {
        const chunkName = matchArr[1];
        const chunkPath = matchArr[2];
        return line.replace(matchArr[0], lazyTemp(chunkName, chunkPath));
      }
      return line;
    }).join('\n');

    return importTemp + r;
  } catch (e) {
    console.log(e);
  }
  return source;
};
