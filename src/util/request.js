
/**
 * 一个请求方法需要做哪些事情？
 * 
 * 1、get请求防止缓存
 * 2、解析响应值
 * 3、处理错误
 * 4、兜底catch？
 * 5、
 */

const getOptions = (option = {}) => ({
  timeout: 10000,
  credentials: 'same-origin',
  ...option,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json, text/javascript',
    ...option.header,
  },
});

const getUri = (uri, param) => (`${uri}${/\?/.test(uri) ? '&' : '?'}${param}`);
// const queryString = (data) => {
//   if (data instanceof Object) {

//   }
// };


class Request {

  get(uri, param) {
    const options = {
      ...getOptions(param),
      method: 'GET',
    };

    fetch(getUri(uri), options)
      .then(response => {
        if (response.ok) {
          response.text().then();
        }
      });

  }

}


export default new Request();