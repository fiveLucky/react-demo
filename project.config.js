module.exports = {
  output: {
    publicPath: '/',      // js加载路径
    outputPath: './dist', // 打包输出的文件夹
  },
  devServer: {
    port: 4000, // 本地开发服务端口
    open: true, // 启动服务自动打开浏览器
    hot: true, // 热替换
  }
};