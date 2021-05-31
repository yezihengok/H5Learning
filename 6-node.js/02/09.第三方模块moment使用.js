// 1. 导入需要的包
// 注意：导入的名称，就是装包时候的名称
const moment = require('moment')

const dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt)
console.log(`今天是星期:${moment().weekday()}`)



// 在项目根目录中， 创建一个叫做 package.json 的配置文件， 即可用来记录项目中安装了哪些包。 从而方便剔除 node_modules 目录之后， 在团队成员之间共享项目的源代码。
// 注意：在实际项目开发中， 一定要把 node_modules 文件夹， 添加到.gitignore 忽略文件中。

//npm 包管理工具提供了一个快捷命令，可以在执行命令时所处的目录中，快速创建 package.json 这个包管理配置文件：nmp init -y 
// 注意：
// 上述命令只能在英文的目录下成功运行！ 所以， 项目文件夹的名称一定要使用英文命名， 不要使用中文， 不能出现空格。
// 运行 npm install 命令安装包的时候， npm 包管理工具会自动把包的名称和版本号， 记录到 package.json 中。




