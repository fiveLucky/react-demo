
class MyPlugin {

	constructor(options) {

		console.log(options);
	}

	filter() {

	}

	// 必须有的，webpack会调用 new MyPlugin() 的 apply 方法
	apply(compile) {
		// 开始编译
		compile.plugin('compile', function (arg) {
			console.log('start compile', arg);
		});




		// 正在编译
		compile.plugin('compilation', function (compilation) {
			// compilation 是编译过程对象
			// console.log('compilation', JSON.stringify(compilation));

			// 监听optimize事件
			compilation.plugin('optimize', function (arg) {
				console.log('optimize', arg);
			});
		});

		// emit 生成资源的事件
		compile.plugin('emit', function (compilation, callback) {
			// console.log('emit compilation', JSON.stringify(compilation));

			// chunks是 所有块的集合  编译之后的结果
			compilation.chunks.forEach((chunk) => {

				// index === 0 && console.log('chunk', JSON.stringify(chunk));

				// chunk.modules 是模块的集合，是原材料
				chunk.forEachModule(function (module) {
					// console.log('keys', Object.keys(module));
					console.log('keys', module.assets);
					// module.fileDependencies 是具体的文件  可能会是undefined
					if (module.fileDependencies !== undefined) {
						module.fileDependencies.forEach(function (filepath) {
							// 这里可以操作源文件
							console.log('filepath', filepath);
						});
					}


				});

				chunk.files.forEach(function (filename) {
					console.log('filename', filename);
					// 得到每个文件的源码
					// var source = compilation.assets[filename].source();

				});



			});


			// 必须执行回调
			callback();
		});






	}






}
module.exports = MyPlugin;







