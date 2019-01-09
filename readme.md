###backend--------backend 文件夹作为后端文件的根目录
###dist-----------dist 文件夹里放的是前端打包的最终代码，也就是 npm run build 生成的代码
###view-----------view自然就是存放前端开发环境的代码了。

```
build: {
    // Template for index.html
    index: path.resolve(__dirname, '../../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../../dist'),
```
###这样在执行 npm run build 进行生产打包时，文件就能输出到我们想要的位置了。

##prj_venv  虚拟环境的名称

```
//进入虚拟环境：

venv\Scripts\activate

//退出虚拟环境：

venv\Scripts\deactivate

```
