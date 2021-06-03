# H5Learning
平时自己学习H5前端相关的测试代码💘💘💘~~  内容包括：H5、CSS3、rem布局适配、JavaScript、jQUery、ajax、node.js~


### 截图：
   <img src="images/img1.png">

### 1、快速生成HTML结构语法

- 生成标签 直接输入标签名 按tab键即可   比如  div   然后tab 键， 就可以生成 <div></div>
- 如果想要生成多个相同标签  加上 * 就可以了 比如   div*3  就可以快速生成3个div
- 如果有父子级关系的标签，可以用 >  比如   ul > li就可以了
- 如果有兄弟关系的标签，用  +  就可以了 比如 div+p  
- 如果生成带有类名或者id名字的，  直接写  .demo  或者  #two   tab 键就可以了
- 如果生成的div 类名是有顺序的， 可以用 自增符号  $ 
- 如果想要在生成的标签内部写内容可以用  { }  表示

### 2、快速生成CSS样式语法

CSS 基本采取简写形式即可

​		比如 w200   按tab  可以 生成  width: 200px;

​		比如 lh26px   按tab  可以生成  line-height: 26px;

### 3、快速格式化代码、以及设置
>settings.json 打开方式： 设置--在搜索框里搜索settings.json --点击在settings.json编辑
Vscode  快速格式化代码:   shift+alt+f

也可以设置 当我们 保存页面的时候自动格式化代码:

1）文件 ------.>【首选项】---------->【设置】；

2）搜索emmet.include;

3）在settings.json下的【工作区设置】中添加以下语句：

​		"editor.formatOnType": true,
​		"editor.formatOnSave": true

4）修改默认底部蓝色在settings.json 中添加,自行修改颜色值查看效果

```json
    "workbench.colorCustomizations": {
​        "statusBar.background": "#484848",
​        "statusBar.noFolderBackground": "#0A0A0D",
​        "statusBar.debuggingBackground": "#511f1f"
​    }
```

5）VSCode列编辑 快捷键: 
> VSCode列选择快捷键：```alt+shift+鼠标左键拖动```

### 4、多行注释

多行注释的注释方式如下：

```html
/*
  获取用户年龄和姓名
  并通过提示框显示出来
*/
```

```
/* */  用来注释多行文字（ 默认快捷键  alt +  shift  + a ） 
```

快捷键修改为：   ctrl + shift  +  /

vscode → 首选项按钮 → 键盘快捷方式 → 查找 原来的快捷键 → 修改为新的快捷键 → 回车确认


### 5、vscode js文件中没有jQuery的语法提示?
- 方式一：js文件中顶部require('jQuery')
- 方式二：项目目录下新建一个jsconfig.json文件:
```json
{
  "typeAcquisition": {
      "include": [
          "jquery"
      ]
  }
}
```

### 6、在 Node.js 环境中执行 JavaScript 代码：
  - 在要运行的js文件夹的空白处 按住shitf的同时点击鼠标右键,选择powershell打开，即可快速定位到当前目录下。
  - 安装完node.js后，输入: node 文件名.js(文件名不用输入全，按tab可以补全)  即可快速运行js文件  
  <img src="images/img2.png">

  - 在 Windows 的 powershell(cmd的升级版) 或 cmd 终端中，以下快捷键可提高终端的操作效率：
    > 1、使用 ↑ 键，可以快速定位到上一次执行的命令
    > 2、使用 tab 键，能够快速补全路径
    > 3、使用 esc 键，能够快速清空当前已输入的命令
    > 4、输入 cls 命令，可以清空终端

  - VScode 里已集成终端、建议使用：终端->新终端-> cd定位到js路径 即可执行。
    在VScode 里启动的node http服务 可以通过 ```ctrl+c``` 停止服务。

### 7、Express 
  > Express是基于 Node.js 平台里内置的http 模块封装的第三方 Web 开发框架，能够极大的提高开发效率。 
  终端定位到 项目所处的目录中安装命令： ```nmp i express```

  - 基本使用：
  ```js
    // 1. 导入 express
  const express = require('express')
  // 2. 创建 web 服务器
  const web = express()

  //http://127.0.0.1:8080/userInfo
  //监听客户端的 GET 和 POST 请求， 并向客户端响应具体的内容
  web.get('/userInfo', (req, res) => {
    let user = {
      name: '阿三',
      age: 22,
      gender: '男'
    }
    // res.send()向客户端响应一个 JSON 对象
    res.send(user)
  })

  web.post('/userInfo', (req, res) => {
    //向客户端响应一个 文本字符串
    res.send('请求成功~')
  })

  //http://127.0.0.1:8080/?age=22&sex=%E7%94%B7
  web.get('/', (req, res) => {
    // 通过 req.query 可以获取到客户端发送过来的 查询参数,req.query 默认是一个空对象
    console.log(req.query)
    res.send(req.query)
  })

  //http: //127.0.0.1:8080/userInfo/2/comme
  //这里的 :ids 是一个动态的参数
  web.get('/userInfo/:ids/:username', (req, res) => {
    // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
    console.log(req.params)
    res.send(req.params)
  })
  // 启动 web 服务器
  web.listen(8080, () => {
    console.log('express server running at http://127.0.0.1:8080')
  }) 
  ``` 
### Node.js 里npm安装的包 
 - npm ,安装的包会在node_modules文件夹下多了包会很大 提交代码时一定要把需要文件夹，添加到 .gitignore 忽略文件中。
 - npm 包管理工具提供了一个快捷命令，``` npm init -y```可以在执行命令时所处的目录中(最好是英文目录)，快速创建 package.json 这个包管理
 - 运行 npm install 命令安装包的时候，npm 包管理工具会自动把包的名称和版本号，记录到 package.json 中。
 - 剔除了 node_modules 的项目之后，需要先把所有的包下载到项目中，才能将项目运行起来。可以运行 npm install 命令（或 ```npm i```）一次性安装所有的依赖包

   