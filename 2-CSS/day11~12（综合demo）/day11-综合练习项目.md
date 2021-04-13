# 品优购项目-上

## 目标

- 能够遵循品优购代码规范
- 能够在品优购首页中引入 favicon 图标
- 能够说出三大标签 SEO 优化
- 能够在品优购首页中使用字体图标
- 能够说出 LOGO 需要哪些 SEO 优化

## 品优购项目规划

### 网站制作流程

![](md_images/网站制作流程.png)

**原型图：** 页面的布局，告知我们开发人员，整个页面的结构是怎样的，说白了就是什么地方放什么内容

![](md_images/原型图.jpg)

**效果图：**告知我们开发人员，最终做出来的成品应该是什么样子，相比原型图，效果图里面包含内容，风格，字体大小等等

![](md_images/效果图.jpg)

### 品优购项目介绍

- **项目名称：**品优购
- **项目描述：**品优购是一个电商网站，我们要完成 PC 端首页、列表页、注册页面的制作

**主页**

![](md_images/主页.png)

**列表页**

![](md_images/列表页.png)

**注册页**

![](md_images/注册页.png)

### 品优购项目的学习目的

- 电商类网站比较综合，里面需要大量的布局技术，包括布局方式、常见效果以及周边技术
- 品优购项目能复习、总结、提高基础班所学布局技术
- 写完品优购项目，能对实际开发中制作 **PC 端页面流程**有一个整体的感知
- 为后期学习移动端项目做铺垫

### 开发工具以及技术栈

#### 开发工具

`VScode`  、`Photoshop（fw）`、主流浏览器（以`Chrome`浏览器为主）

#### 技术栈

- 利用 HTML5 + CSS3 手动布局，可以大量使用 H5 新增标签和样式 
- 采取结构与样式相分离，模块化开发
- 良好的代码规范有利于团队更好的开发协作，提高代码质量，因此品优购项目里面，请同学们遵循以下代码规范。（[详情见素材文件夹--- 品优购代码规范.md](../素材/品优购代码规范.md)）

### 品优购项目搭建工作

#### 创建的文件夹如下（称为项目结构）

![](md_images/文件夹.png)

#### 创建文件如下

![](md_images/文件.png)

**初始化样式**

```css
有些网站初始化的不太提倡  * { margin: 0;  padding: 0; }
比如新浪： html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img{margin:0;padding:0} 
```

### 项目模块化开发

所谓的模块化：将一个项目按照功能划分，一个功能一个模块，互不影响，模块化开发具有重复使用、更换方便等优点

![](md_images/模块化.png)

**代码也如此**，有些样式和结构在很多页面都会出现，**比如页面头部和底部，大部分页面都有(如下图)**。此时，可以把这些结构和样式单独作为一个模块，然后重复使用

![](md_images/模块化开发.png)

- 有些样式和结构在很多页面都会出现，比如页面头部和底部，大部分页面都有。此时，可以把这些结构和样式单独作为一个模块，然后重复使用
- 这里最典型的应用就是 **`common.css`** 公共样式。写好一个样式，其余的页面用到这些相同的样式
- 模块化开发具有重复使用、修改方便等优点

![](md_images/commonCSS.png)

### 网站 favicon 图标（★★★）

favicon.ico 一般用于作为缩略的网站标志，它显示在浏览器的地址栏或者标签上。目前主要的浏览器都支持 favicon.ico 图标。

![](md_images/favicon.png)

#### 制作favicon图标

- 把品优购图标切成 `png` 图片
- 把 `png` 图片转换为 `ico` 图标，这需要借助于第三方转换网站，例如比特虫：http://www.bitbug.net/

![](md_images/比特虫.png)

#### 使用favicon图标

##### **favicon图标放到网站根目录下**

![](md_images/使用favicon.png)

##### HTML页面引入favicon图标

在html 页面里面的 `<head> </head>`元素之间引入代码

```html
 <link rel="shortcut icon" href="favicon.ico"  type="image/x-icon"/> 
```

### TDK三大标签SEO优化（★★）

#### SEO是什么

**SEO（Search Engine Optimization）**汉译为搜索引擎优化，是一种利用搜索引擎的规则提高网站在有关搜索引擎内自然排名的方式。

**SEO** 的目的是对网站进行深度的优化，从而帮助网站获取免费的流量，进而在搜索引擎上提升网站的排名，提高网站的知名度。

页面必须有三个标签用来符合 SEO 优化

![](md_images/SEO优化.png)

#### TDK是什么

##### T -- Title（网站标题）

**title** 具有不可替代性，是我们内页的第一个重要标签，是搜索引擎了解网页的入口和对网页主题归属的最佳判断点。

**建议：**网站名（产品名）- 网站的介绍  （尽量不要超过30个汉字）

**例如：**

- 京东(JD.COM)-综合网购首选-正品低价、品质保障、配送及时、轻松购物！
- 小米商城 - 小米5s、红米Note 4、小米MIX、小米笔记本官方网站

##### D -- description（网站描述）

简要说明我们网站主要是做什么的。

**我们提倡**，description 作为网站的总体业务和主题概括，多采用“我们是…”、“我们提供…”、“×××网作为…”、“电话：010…”之类语句。

**例如：**

`<meta name="description" content="京东JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!" />`

##### K -- keywords （关键字）

**keywords 是页面关键词**，是搜索引擎的关注点之一。

keywords 最好限制为 6～8 个关键词，关键词之间用英文逗号隔开，采用 关键词1,关键词2 的形式

**例如：**

`<meta name= " keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东" />`

**对于我们前端人员来说，我们只需要准备好这三个标签，具体里面的内容，有专门的 SEO 人员准备**

**示例代码**

```html
<head>
    ...
    <title>品优购商城-综合网购首选-正品低价、品质保障、配送及时、轻松购物！
    </title>
    <!-- 网站说明 -->
    <meta name="description"
        content="品优购商城-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!" />
    <!-- 关键字 -->
    <meta name="keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东" />
    ...
</head>
```

## 品优购首页制作

我们开始制作首页的头部和底部的时候，根据模块化开发，样式要写到common.css里面

### 常用模块类名命名

![](md_images/命名.png)

### 公共部分 -- header 头部制作

#### 快捷导航 shortcut 制作（★★）

![](md_images/快捷导航布局.png)

##### 布局思路

- 通栏的盒子命名为 shortcut ，是快捷导航的意思。 注意这里的行高，可以继承给里面的子盒子
- 里面包含版心的盒子
- 版心盒子里面包含 1 号左侧盒子左浮动
  - 1 号盒子 里面包含一个`ul`，`ul`包裹li，第一个li里面包裹文字就行，因为不能点击，第二个li包含两个a标签
  - 里面的内容是水平排列，所以需要给`li`设置浮动
  - 文字要垂直居中，我们可以给 shortcut设置行高，因为行高可以继承，里面的孩子就不需要设置了
- 版心盒子里面包含 2 号右侧盒子右浮动
  - 2 号盒子 里面包含一个`ul`，`ul`包裹`li`，中间的`|`可以用样式去设置，也可以用字符 |
  - 里面内容水平排列，给`li`设置浮动
  - 找到里面所有偶数的 `li` 设置样式（偶数的 `li` 显示是一个 | 竖线，所以需要单独选择出来设置样式，利用nth-child就可以实现）
- 需要用到字体图标
  - 利用伪元素的方式来实现字体图标，给需要添加的标签设置类名为 ： `arrow-icon`
  - 先要引入字体图片的资源
  - 在样式里面利用 font-face 来进行声明
  - 在伪元素的 content属性设置 图标的编码
  - 给伪元素设置font-family属性

##### 结构示例代码

```html
<!-- 快捷导航模块 start -->
<section class="shortcut">
    <div class="w">
        <div class="fl">
            <ul>
                <li>品优购欢迎您！&nbsp;</li>
                <li>
                    <a href="#">请登录</a> &nbsp; <a href="#" class="style_red">免费注册</a>
                </li>
            </ul>
        </div>
        <div class="fr">
            <ul>
                <li>我的订单</li>
                <li></li>
                <li class="arrow-icon">我的品优购</li>
                <li></li>
                <li>品优购会员</li>
                <li></li>
                <li>企业采购</li>
                <li></li>
                <li class="arrow-icon">关注品优购</li>
                <li></li>
                <li class="arrow-icon">客户服务</li>
                <li></li>
                <li class="arrow-icon">网站导航</li>
            </ul>
        </div>
    </div>
</section>
```

##### 样式示例代码

```css
/* 声明字体图标 这里一定要注意路径的变化 */
@font-face {
  font-family: 'icomoon';
  src:  url('../fonts/icomoon.eot?tomleg');
  src:  url('../fonts/icomoon.eot?tomleg#iefix') format('embedded-opentype'),
    url('../fonts/icomoon.ttf?tomleg') format('truetype'),
    url('../fonts/icomoon.woff?tomleg') format('woff'),
    url('../fonts/icomoon.svg?tomleg#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
/* 快捷导航模块 */
.shortcut {
    height: 31px;
    line-height: 31px;
    background-color: #f1f1f1;
}
.shortcut ul li {
    float: left;
}
/* 选择所有的偶数的小li */
.shortcut .fr ul li:nth-child(even) {
    width: 1px;
    height: 12px;
    background-color: #666;
    margin: 9px 15px 0;
}
.arrow-icon::after {
    content: '\e91e';
    font-family: 'icomoon';
    margin-left: 6px;
}
```

#### header头部模块搭建（★★★）

![](md_images/header.png)

-  header 盒子必须要有高度

-  1 号盒子是 `logo` 标志定位，在正常开发过程中，**logo的布局其实是有讲究的，需要进行 `logoSEO`的优化 （★★★）**

  - `logo` 里面首先放一个 `h1` 标签，目的是为了提权，告诉搜索引擎，这个地方很重要
  - `h1` 里面再放一个链接，可以返回首页的，把 `logo` 的背景图片给链接即可
  - 为了搜索引擎收录我们，我们链接里面要放文字（网站名称），但是文字不要显示出来
    - 方法1：`text-indent` 移到盒子外面（`text-indent: -9999px`) ，然后 `overflow:hidden` ，淘宝的做法
    - 方法2：直接给 `font-size: 0;`  就看不到文字了，京东的做法
  - 最后给链接一个 `title` 属性，这样鼠标放到 `logo` 上就可以看到提示文字了

  **结构代码**

  ```html
  <!-- logo模块 -->
  <div class="logo">
      <h1>
          <a href="index.html" title="品优购商城">品优购商城</a>
      </h1>
  </div>
  ```

  **样式代码**

  ```css
  /* header 头部制作 */
  .header {
      position: relative;
      height: 105px;
   
  }
  .logo {
      position: absolute;
      top: 25px;
      width: 171px;
      height: 61px;
      
  }
  .logo a {
      display: block;
      width: 171px;
      height: 61px;
      background: url(../md_images/logo.png) no-repeat;
      /* font-size: 0;京东的做法*/
      /* 淘宝的做法让文字隐藏 */
      text-indent: -9999px;
      overflow: hidden;
  }
  ```

-  2 号盒子是 `search` 搜索模块定位

  - search盒子利用定位的方式放在对应的位置
  - search盒子设置绝对定位，header盒子设置相对定位
  - search盒子里面包含两个子元素，一个是输入框，一个是按钮，分别跟定固定的宽高（搜索框 宽度：454px；按钮宽度：80px）
  - 输入框和按钮本来就是行内块元素，在一行显示，但是中间会有间隙，所以我们可以让让这两个元素浮动起来

  **结构代码**

  ```html
  <!-- search搜索模块 -->
  <div class="search">
      <input type="search" name="" id="" placeholder="语言开发">
      <button>搜索</button>
  </div>
  ```

  **样式代码**

  ```css
  .search {
      position: absolute;
      left: 346px;
      top: 25px;
      width: 538px;
      height: 36px;
      border: 2px solid #b1191a;
  }
  .search input {
      float: left;
      width: 454px;
      height: 32px;
      padding-left: 10px;
  }
  .search button {
      float: left;
      width: 80px;
      height: 32px;
      background-color: #b1191a;
      font-size: 16px;
      color: #fff;
  }
  ```

-  3 号盒子是 `hotwords`  热词模块定位

  - 热词模块怎么简单怎么来，直接在里面放a标签即可
  - 给里面所有的a标签设置 左右10px的外边距
  - 给第一个a标签设置文字变红色（#c81623）

  **结构代码**

  ```html
  <!-- hotwords模块制作 -->
  <div class="hotwords">
      <a href="#" class="style_red">优惠购首发</a>
      <a href="#">亿元优惠</a>
      <a href="#">9.9元团购</a>
      <a href="#">美满99减30</a>
      <a href="#">办公用品</a>
      <a href="#">电脑</a>
      <a href="#">通信</a>
  </div>
  ```

  **样式代码**

  ```css
  .hotwords {
      position: absolute;
      top: 66px;
      left: 346px;
  }
  .hotwords a {
      margin: 0 10px;
  }
  ```

-  4 号盒子是 `shopcar` 购物车模块

  - 在`shopcar`里面添加一个before伪元素和after伪元素，分别放置 购物车的图标和 右箭头

  - count 统计部分用绝对定位做
  - count 统计部分不要给宽度，因为可能买的件数比较多，让件数撑开就好了，给一个高度
  - 一定注意左下角不是圆角，其余三个是圆角  写法： border-radius: 7px 7px 7px 0;

  **结构代码**

  ```html
  <!-- 购物车模块 -->
  <div class="shopcar">
      我的购物车
      <i class="count">8</i>
  </div>
  ```

  **样式代码**

  ```css
  .shopcar {
      position: absolute;
      right: 60px;
      top: 25px;
      width: 140px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      border: 1px solid #dfdfdf;
      background-color: #f7f7f7;
  }
  .shopcar::before {
      content: '\e93a';
      font-family: 'icomoon';
      margin-right: 5px;
      color: #b1191a;
  }
  .shopcar::after {
      content: '\e920';
      font-family: 'icomoon';
      margin-left: 10px;
  }
  .count {
      position: absolute;
      top: -5px;
      left: 105px;
      height: 14px;
      line-height: 14px;
      color: #fff;
      background-color: #e60012;
      padding: 0 5px;
      border-radius: 7px 7px 7px 0;
  }
  ```

#### `nav`导航模块制作（★★★）

![](md_images/nav导航布局.png)

- `nav` 盒子通栏有高度，而且有个下边框，里面包含版心，版心里面包含 1 号盒子 和 2号盒子

  **结构代码**

  ```html
  <nav class="nav">
      <div class="w">
          <div class="dropdown">
             ...
          </div>
          <div class="navitems">
             ...
          </div>
      </div>
  </nav>
  ```

  **样式代码**

  ```css
  .nav {
      height: 47px;
      border-bottom: 2px solid #b1191a;
  }
  ```

- 1 号盒子左侧浮动，`dropdown` 

  - 1号盒子有讲究，根据相关性 里面包含 `.dt`  和 `.dd` 两个盒子
  - `.dt` 内容是全部商品分类，然后把这个盒子的宽高设置跟父亲一样，这样就把 `.dd` 挤到下面去了
  - 给 `.dd` 盒子设置宽度 和 高度，以及背景颜色
  - 给 `.dd` 盒子里面定义 无序列表 （`ul > li > a`）
  - 每个 `li` 都有一个高度（`31px`），宽度可以不用设置，让文字垂直居中，左边设置2个像素的margin值
  - 给 `li` 里面的a设置文字大小（`14px`）
  - 给 `li` 设置 `hover`，当鼠标移入的时候，让`li`的背景变成白色，让里面的文字变成红色
  - `li` 右侧的三角 就可以利用 伪元素来实现，给伪元素设置字体图标，利用定位的方式放在`li`的右侧，那么给`li`设置相对定位

  **结构代码**

  ```html
  <div class="dropdown">
       <div class="dt">全部商品分类</div>
       <div class="dd">
           <ul>
               <li><a href="#">家用电器</a> </li>
               <li><a href="#">手机</a>、 <a href="#">数码</a>、<a href="#">通信</a> </li>
               <li><a href="#">电脑、办公</a> </li>
               <li><a href="#">家居、家具、家装、厨具</a> </li>
               <li><a href="#">男装、女装、童装、内衣</a> </li>
               <li><a href="#">个户化妆、清洁用品、宠物</a> </li>
               <li><a href="#">鞋靴、箱包、珠宝、奢侈品</a> </li>
               <li><a href="#">运动户外、钟表</a> </li>
               <li><a href="#">汽车、汽车用品</a> </li>
               <li><a href="#">母婴、玩具乐器</a> </li>
               <li><a href="#">食品、酒类、生鲜、特产</a> </li>
               <li><a href="#">医药保健</a> </li>
               <li><a href="#">图书、音像、电子书</a> </li>
               <li><a href="#">彩票、旅行、充值、票务</a> </li>
               <li><a href="#">理财、众筹、白条、保险</a> </li>
           </ul>
       </div>
   </div>
  ```

  **样式代码**

  ```css
  .dropdown .dt {
      width: 100%;
      height: 100%;
      color: #fff;
      text-align: center;
      line-height: 45px;
      font-size: 16px;
  }
  .dropdown .dd {
      display: none;
      width: 210px;
      height: 465px;
      background-color: #c81623;
      margin-top: 2px;
  }
  .dropdown .dd ul li {
      position: relative;
      height: 31px;
      line-height: 31px;
      margin-left: 2px;
      padding-left: 10px;
  }
  .dropdown .dd ul li:hover {
     background-color: #fff;
  }
  .dropdown .dd ul li::after {
      position: absolute;
      top: 1px;
      right: 10px;
      color: #fff;
      font-family: 'icomoon';
      content: '\e920';
      font-size: 14px;
  }
  .dropdown .dd ul li a {
      font-size: 14px;
      color: #fff;
  }
  .dropdown .dd ul li:hover a {
      color: #c81623;
  }
  ```

- 2 号盒子左侧浮动，`navitems` 导航栏组

  - 里面结构是 `ul > li > a`
  - 导航栏都是能点击的，所以我们不能给定宽度，给`a`左右的`padding`把两侧撑开
  - 让文字垂直居中（行高等于高度）

  **结构代码**

  ```html
  <div class="navitems">
      <ul>
          <li><a href="#">服装城</a></li>
          <li><a href="#">服装城</a></li>
          <li><a href="#">服装城</a></li>
          <li><a href="#">服装城</a></li>
          <li><a href="#">服装城</a></li>
          <li><a href="#">服装城</a></li>
          <li><a href="#">服装城</a></li>
          <li><a href="#">服装城</a></li>
      </ul>
  </div>
  ```

  **样式代码**

  ```css
  .navitems ul li {
      float: left;
  }
  .navitems ul li a {
      display: block;
      height: 45px;
      line-height: 45px;
      font-size: 16px;
      padding: 0 25px;
  }
  ```

### 公共部分 -- footer 底部制作

![](md_images/footer布局.png)

- `footer` 页面底部盒子通栏给一个高度（415px）和灰色的背景

- `footer` 里面有一个大的版心

- 版心里面包含 1 号盒子，`mod_service` 是服务模块，mod 是模块的意思

  - 给 `mod_service` 设置高度（80px）和下边框
  - 在里面定义  `ul  > li` ,每个`li` 宽度是300px 高度是 50px，给每个`li`设置35px的左内边距
  - 在每个`li`里面，放一个 `h5`（里面放图标），一个`div`（里面放`div`和`p`）
  - 给 `h5`设置浮动，让h5与这个div左右排列
  - 通过精灵图技术（核心思路：利用background-position来实现），把图标设置给h5

  **结构代码**

  ```html
  <div class="mod_service">
      <ul>
          <li>
              <h5></h5>
              <div class="service_txt">
                  <h4>正品保障</h4>
                  <p>正品保障,提供发票</p>
              </div>
          </li>
          <li>
              <h5></h5>
              <div class="service_txt">
                  <h4>正品保障</h4>
                  <p>正品保障,提供发票</p>
              </div>
          </li>
          <li>
              <h5></h5>
              <div class="service_txt">
                  <h4>正品保障</h4>
                  <p>正品保障,提供发票</p>
              </div>
          </li>
          <li>
              <h5></h5>
              <div class="service_txt">
                  <h4>正品保障</h4>
                  <p>正品保障,提供发票</p>
              </div>
          </li>
      </ul>
  </div>
  ```

  **样式代码**

  ```css
  /* 底部模块制作 */
  .footer {
      height: 415px;
      background-color: #f5f5f5;
      padding-top: 30px;
  }
  .mod_service {
      height: 80px;
      border-bottom: 1px solid #ccc;
  }
  .mod_service ul li {
      float: left;
      width: 300px;
      height: 50px;
      padding-left: 35px;
  }
  .mod_service ul li h5 {
      float: left;
      width: 50px;
      height: 50px;
      background: url(../md_images/icons.png) no-repeat -252px -2px;
      margin-right: 8px;
  }
  .service_txt h4 {
      font-size: 14px;
  }
  .service_txt  p {
      font-size: 12px;
  }
  ```

- 版心里面包含 2 号盒子，mod_help 是帮助模块

  - 给 mod_help 设置 50px的左内边距和20px的上内边距，给定高度（185px）
  - 里面的布局利用 自定义列表来实现（`dl > dt + dd`）
  - 给 `dl` 设置浮动，让其可以水平排列，给每个dl盒子设置宽度
  - 给 `dt` 设置文字大小（16px），设置下外边距（10px），让`dt`和`dd`之间有些距离
  - 最后一个 dl 结构和样式不一样，需要单独设置

  ```html
  <div class="mod_help">
      <dl>
          <dt>服务指南</dt>
          <dd><a href="#">购物流程</a></dd>
          <dd><a href="#">会员介绍</a></dd>
          <dd><a href="#">生活旅行/团购</a></dd>
          <dd><a href="#">常见问题</a></dd>
          <dd><a href="#">大家电</a></dd>
          <dd><a href="#">联系客服</a></dd>
      </dl>
      <dl>
          <dt>服务指南</dt>
          <dd><a href="#">购物流程</a></dd>
          <dd><a href="#">会员介绍</a></dd>
          <dd><a href="#">生活旅行/团购</a></dd>
          <dd><a href="#">常见问题</a></dd>
          <dd><a href="#">大家电</a></dd>
          <dd><a href="#">联系客服</a></dd>
      </dl>
      <dl>
          <dt>服务指南</dt>
          <dd><a href="#">购物流程</a></dd>
          <dd><a href="#">会员介绍</a></dd>
          <dd><a href="#">生活旅行/团购</a></dd>
          <dd><a href="#">常见问题</a></dd>
          <dd><a href="#">大家电</a></dd>
          <dd><a href="#">联系客服</a></dd>
      </dl>
      <dl>
          <dt>服务指南</dt>
          <dd><a href="#">购物流程</a></dd>
          <dd><a href="#">会员介绍</a></dd>
          <dd><a href="#">生活旅行/团购</a></dd>
          <dd><a href="#">常见问题</a></dd>
          <dd><a href="#">大家电</a></dd>
          <dd><a href="#">联系客服</a></dd>
      </dl>
      <dl>
          <dt>服务指南</dt>
          <dd><a href="#">购物流程</a></dd>
          <dd><a href="#">会员介绍</a></dd>
          <dd><a href="#">生活旅行/团购</a></dd>
          <dd><a href="#">常见问题</a></dd>
          <dd><a href="#">大家电</a></dd>
          <dd><a href="#">联系客服</a></dd>
      </dl>
      <dl>
          <dt>帮助中心</dt>
          <dd>
              <img src="md_images/wx_cz.jpg" alt=""> 品优购客户端
          </dd>
      </dl>
  </div>
  ```

  **样式代码**

  ```css
  .mod_help {
      height: 185px;
      border-bottom: 1px solid #ccc;
      padding-top: 20px;
      padding-left: 50px;
  }
  .mod_help dl {
      float: left;
      width: 200px;
  }
  .mod_help dl:last-child {
      width: 90px;
      text-align: center;
  }
  .mod_help dl dt {
      font-size: 16px; 
      margin-bottom: 10px;
  }
  ```

- 版心里面包含 3 号盒子，mod_copyright 是版权模块

  - 分为上下两块，上面是 `links` 友情链接，下面是 `copyright`，给mod_copyright 大盒子设置 文字水平居中，20px的上内边距，让上面内容和下面内容之间有些间隙
  - 把内容分别复制到相应模块中
  - 给 `links` 设置 15px 的下外边距，给`links` 里面 的 `a` 标签设置 左右 3px 的外边距
  - 给`copyright` 设置 20px 的行高

  **结构代码**

  ```html
  <div class="mod_copyright">
      <div class="links">
          <a href="#">关于我们</a> | <a href="#">联系我们</a> | 联系客服 | 商家入驻 | 营销中心 | 手机品优购 | 友情链接 | 销售联盟 | 品优购社区 | 品优购公益 | English Site | Contact U
      </div>
      <div class="copyright">
          地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn <br> 京ICP备08001421号京公网安备110108007702
      </div>
  </div>
  ```

  **样式代码**

  ```css
  .mod_copyright {
      text-align: center;
      padding-top: 20px;
  }
  .links {
      margin-bottom: 15px;
  }
  .links a {
      margin: 0 3px;
  }
  .copyright {
      line-height: 20px;
  }
  ```

  
  
  
 =========================================================================================





# 目标

- 能够写出列表页 
- 能够写出注册页
- 能够把品优购网站部署到本地服务器
- 能够把品优购网站上传到远程服务器

# 品优购项目

## 首页制作

### main 主体模块制作

以前书写的就是模块化中的公共部分。

**main** 主体模块是 **index** 里面专有的，注意需要新的样式文件 **index.css**

![](md_images/main的结构划分.png) 

-  main 盒子宽度为 980 像素，高度是455像素，位置距离左边 220px (margin-left ) ，给高度就不用清除浮动

- main 里面包含左侧盒子，宽度为 721像素，左浮动，focus 焦点图模块

- main 里面包含右侧盒子，宽度为 250像素，右浮动，newsflash 新闻快报模块

  **结构代码**

  ```html
  <div class="w">
      <div class="main">
          <div class="focus">
              ...
          </div>
          <div class="newsflash">
              ...
          </div>
      </div>
  </div>
  ```

  **样式代码**

  ```css
  .main {
      width: 980px;
      height: 455px;
      margin-left: 220px;
      margin-top: 10px;
  }
  .focus {
      float: left;
      width: 721px;
      height: 455px;
      background-color: purple;
  }
  .newsflash {
      float: right;
      width: 250px;
      height: 455px;
  }
  ```

#### 左侧 focus 模块制作

![](md_images/focus.png)

- 大的 focus 盒子  包裹 1 号展示图片的盒子，2号 3号 左右箭头的盒子，4号 小圆点的盒子

  ```html
  <div class="focus fl">
  	<a href="#" class="arrow-l"> < </a>
  	<a href="#" class="arrow-r"> > </a>
  	<ul>
  		<li>
  		  <a href="#"><img src="upload/focus.jpg" alt=""></a>
  		</li>
  	</ul>
  	<ol class="circle">
  		<li></li>
  		<li class="current"></li>
  		<li></li>
  		<li></li>
  		<li></li>
  		<li></li>
  		<li></li>
  		<li></li>
  	</ol>
  </div>
  ```

-  包裹 1 号盒子（`ul > li > a > img`），轮播图这样的布局是为了后面方便配置`js`逻辑代码

  

- 2 号盒子 跟 3 号盒子 左右箭头，利用定位的方式来实现

  **样式代码**

  ```css
  .arrow-l,
  .arrow-r {
  	position: absolute;
  	top: 50%;
  	margin-top: -20px;
  	width: 24px;
  	height: 40px;
  	background: rgba(0, 0, 0, .3);
  	text-align: center;
  	line-height: 40px;
  	color: #fff;
  	font-family: 'icomoon';
  	font-size: 18px;
  }
  .arrow-r {
  	right: 0;
  }
  ```

- 4 号盒子 里面放 小圆点 （`ol > li`）

  - 小圆圈利用边框实现
  - 小圆点里面背景颜色来实现

  **样式代码**

  ```css
  .circle {
  	position: absolute;
  	bottom: 10px;
  	left: 50px;
  }
  .circle li {
  	float: left;
  	width: 8px;
  	height: 8px;
  	/*background-color: #fff;*/
  	border: 2px solid rgba(255, 255, 255, 0.5);
  	margin: 0 3px;
  	border-radius: 50%;
  	/*鼠标经过显示小手*/
  	cursor: pointer;
  
  }
  .current {
  	background-color: #fff;
  	box-shadow: 
  }
  ```

#### 右侧 newsflash 模块制作

![](md_images/newsflash.png)

- 右侧的模块 分为上中下三个盒子

  **结构代码**

  ```html
  <div class="newsflash">
      <div class="news">
          ...
      </div>
      <div class="lifeservice">
          ...
      </div>
      <div class="bargain">
          ...
      </div>
  </div>
  ```

- 1 号盒子为 `news` 新闻模块  高度为 165px

  ![](md_images/news.png)

  - 分为上下两个结构，但是两个模块都用 div，上面是 `news-hd`，下面是 `news-bd`

    **结构代码**

    ```html
    <div class="news">
        <div class="news-hd">
            ...
        </div>
        <div class="news-bd">
            ...
        </div>
    </div>
    ```

    **样式代码**

    ```css
    .news {
       height: 165px;
       border: 1px solid #e4e4e4;
    }
    ```

  - 上面是`news-hd`，设置高度是 33px，设置下边框

    - 里面放一个`h5` 标题
    - 放一个a`标签`，内容是 更多，然后让 `a` 进行右浮动，三角用伪元素设置字体图标就好

    **结构代码**

    ```html
    <div class="news-hd">
        <h5>品优购快报</h5>
        <a href="#" class="more">更多</a>
    </div>
    ```

    **样式代码**

    ```css
    .news-hd {
        height: 33px;
        line-height: 33px;
        border-bottom: 1px dotted #e4e4e4;
        padding: 0 15px;
    }
    .news-hd h5 {
        float: left;
        font-size: 14px;
    }
    .news-hd .more {
        float: right;
    }
    .news-hd .more::after {
        font-family: 'icomoon';
        content: '\e920';
    }
    ```

  - 下面是`news-bd`

    - 里面包含 `ul` 和 `li` 还有链接
    - 给`li`设置高度，24px，设置单行文字溢出省略： 1. 设置 `overflow: hidden;` 2.设置 `white-space: nowrap;` 3. 设置 `text-overflow: ellipsis;`

    **结构代码**

    ```html
    <div class="news-bd">
        <ul>
            <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了, 它是谁？</a></li>
            <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了</a></li>
            <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了</a></li>
            <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了</a></li>
            <li><a href="#"><strong>[重磅]</strong> 它来了它来了，pink老师走来了, 它是谁？</a></li>
        </ul>
    </div>
    ```

    **样式代码**

    ```css
    .news-bd {
        padding: 5px 15px 0;
    }
    .news-bd ul li {
        height: 24px;
        line-height: 24px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    ```

- 2 号盒子为 `lifeservice` 生活服务模块  高度为 209px

  ![](md_images/lifeservice.png)

  - 设置边框（左右下 边框）
  - 里面的内容 是  `ul > 12*li`，给`li`设置宽 63px，高71px，设置 右边和下边的边框，设置浮动
  - 这样设置后，第四个li会装不开，掉下来，解决办法如下
    - `lifeservice` 盒子宽度为 250 ，但是装不开里面的 4 个小 li 
    - 可以让 `lifeservice` 里面的 `ul` 宽度为 252，就可以装的下 4 个 小 li
    - `lifeservice` 盒子 overflow 隐藏多余的部分就可以了
  - 在 `li` 里面放一个 `i`（里面放图标），下面的文本用  `p` 标签包裹
  - 给 `i` 设置 24px宽和28px的高（注意 `i` 是行内元素， 转成行内块），给 `li` 设置 `text-align:center` 让里面内容居中显示

  **结构代码**

  ```html
  <div class="lifeservice">
      <ul>
          <li>
              <i></i>
              <p>话费</p>
          </li>
          <li>
              <i></i>
              <p>话费</p>
          </li>
          <li>
              <i></i>
              <p>话费</p>
          </li>
          <li>
              <i></i>
              <p>话费</p>
          </li>
          <li>
              <i></i>
              <p>话费</p>
          </li>
          <li>
              <i></i>
              <p>话费</p>
          </li>
          <li>
              <i></i>
              <p>话费</p>
          </li>
          <li>
              <i></i>
              <p>话费</p>
          </li>
          <li>
              <i></i>
              <p>话费</p>
          </li>
          <li>
              <i></i>
              <p>话费</p>
          </li>
          <li>
              <i></i>
              <p>话费</p>
          </li>
          <li>
              <i></i>
              <p>话费</p>
          </li>
      </ul>
  </div>
  ```

  **样式代码**

  ```css
  .lifeservice {
      overflow: hidden;
      height: 209px;
      /* background-color: purple; */
      border: 1px solid #e4e4e4;
      border-top: 0;
  }
  .lifeservice ul {
      width: 252px;
  }
  .lifeservice ul li {
      float: left;
      width: 63px;
      height: 71px;
      border-right: 1px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
      text-align: center;
  }
  .lifeservice ul li i {
      display: inline-block;
      width: 24px;
      height: 28px;
      background-color: pink;
      margin-top: 12px;
      background: url(../md_images/icons.png) no-repeat -19px -15px;
  }
  ```

- 3 号盒子为 `bargain` 特价商品  

  - 这个比较简单，直接插入一张图片即可

  **结构代码**

  ```html
  <div class="bargain">
      <img src="upload/bargain.png" alt="">
  </div>
  ```

  **样式代码**

  ```css
  .bargain {
      margin-top: 5px;
  }
  ```

### 推荐模块制作 -- `recom`

![](md_images/recom.png)

- 大盒子 `recom`  推荐模块   recommend

  - 给这个 `recom` 大盒子 设置版心，设置 163px的高，背景颜色（`#ebebeb`），设置距离上边 12px

  **结构代码**

  ```html
  <div class="w recom">
      ...
  </div>
  ```

  **样式代码**

  ```css
  .recom {
      height: 163px;
      background-color: #ebebeb;
      margin-top: 12px;
  }
  ```

- 里面包含 2 个盒子， 浮动即可

  **结构代码**

  ```html
   <div class="w recom">
      <div class="recom_hd">
          ...
      </div>
      <div class="recom_bd">
          ...
      </div>
  </div>
  ```

- 1 号盒子 `recom_hd`   

  - 设置宽度205px，高度163px
  - 里面放一个`img`标签，插入图片即可

  **结构代码**

  ```html
  <div class="recom_hd">
      <img src="md_images/recom.png" alt="">
  </div>
  ```

  **样式代码**

  ```css
  .recom_hd {
      float: left;
      height: 163px;
      width: 205px;
      background-color: #5c5251;
      text-align: center;
      padding-top: 30px;
  }
  ```

- 2 号盒子 `recom_bd` ，注意里面的小竖线  

  - 右侧结构里面放 `ul` 包含 4个 `li`，每个li里面包含一个`img`
  - 直接利用切片工具把里面的内容当成一张图片
  - 给 `li` 设置浮动
  - 给 `img` 设置宽高，宽度 248px，高度 163px
  - 小竖线利用伪元素来实现，给每一个li设置一个 after 伪元素，然后给这个伪元素设置绝对定位，设置`top 10px`，给`li`设置相对定位（注意，最后一个`li`不用设置伪元素），可以利用 `nth-child(-n+3){...}`

  **结构代码**

  ```html
  <div class="recom_bd">
      <ul>
          <li><img src="upload/recom_03.jpg" alt=""></li>
          <li><img src="upload/recom_03.jpg" alt=""></li>
          <li><img src="upload/recom_03.jpg" alt=""></li>
          <li><img src="upload/recom_03.jpg" alt=""></li>
      </ul>
  </div>
  ```

  **样式代码**

  ```css
  .recom_bd {
      float: left;
  }
  .recom_bd ul li {
      position: relative;
      float: left;
  }
  .recom_bd ul li img {
      width: 248px;
      height: 163px;
  }
  .recom_bd ul li:nth-child(-n+3)::after {
      content: '';
      position: absolute;
      right: 0;
      top: 10px;
      width: 1px;
      height: 145px;
      background-color: #ddd;
  }
  ```

### 家用电器模块

![](md_images/floor.png)

**注意这个 floor ，不要给高度，内容有多少，算多少**

第一楼是家用电器模块： 里面包含两个盒子

#### `box_hd` 制作

- 1 号盒子 `box_hd`，给一个高度，有个下边框，里面分为左右 2 个盒子

  ![](md_images/box-hd.png)

  - `box_hd` 给 30px 的高度，2个像素的下边框
  - 里面放一个左侧 h3 的盒子，右侧一个div盒子，div盒子里面放 `ul > li > a`
  - 左侧盒左浮动，右侧盒子右浮动
  - `a`标签之间的距离用左右的`padding`撑开即可

  **结构代码**

  ```html
  <div class="box_hd">
      <h3>家用电器</h3>
      <div class="tab_list">
          <ul>
              <li> <a href="#" class="style_red">热门</a>|</li>
              <li><a href="#">大家电</a>|</li>
              <li><a href="#">生活电器</a>|</li>
              <li><a href="#">厨房电器</a>|</li>
              <li><a href="#">生活电器</a>|</li>
              <li><a href="#">个护健康</a>|</li>
              <li><a href="#">应季电器</a>|</li>
              <li><a href="#">空气/净水</a>|</li>
              <li><a href="#">新奇特</a>|</li>
              <li><a href="#"> 高端电器</a></li>
          </ul>
      </div>
  </div>
  ```

  **样式代码**

  ```css
  .box_hd {
      height: 30px;
      border-bottom: 2px solid #c81623;
  }
  .box_hd  h3 {
      float: left;
      font-size: 18px;
      color: #c81623;
      font-weight: 400;
  }
  .tab_list {
      float: right;
      line-height: 30px;
  }
  .tab_list ul li {
      float: left;
  }
  .tab_list ul li a {
      margin: 0 15px;
  }
  ```

#### `box_bd` 制作

- 2 号盒子 `box_bd`，不要给高度

  ![](md_images/box-bd.png)

  - `box_bd` 属于是tab栏的内容区域，所以在这个里面先嵌套一个盒子 `tab_content`，在`tab_content` 里面包裹tab选项卡对应的内容
  - 内容被一个大盒子包裹（`tab_list_item`），里面是 `ul` 包裹 5个 `li`，每个`li`设置对应的宽度，然后设置浮动
  - 而这5个`li`的宽度是不一致的，在这里我们的做法是 先把宽度的样式列出来，然后给对应的`li`设置
    - 第一个小 `li` 分为上下结构，上面是 `ul` 包裹 `li` ，`li`里面包裹 `a`，下面插入一张图片
    - 上面的li设置宽高，设置浮动，这样就排列下来了
    - 后面的小 `li` 里面先放一个`a`标签，然后在`a`标签里面插入图片即可

  **结构代码**

  ```html
  <div class="box_bd">
      <div class="tab_content">
          <div class="tab_list_item">
              <div class="col_210">
                  <ul>
                      <li><a href="#">节能补贴</a></li>
                      <li><a href="#">节能补贴</a></li>
                      <li><a href="#">节能补贴</a></li>
                      <li><a href="#">节能补贴</a></li>
                      <li><a href="#">节能补贴</a></li>
                      <li><a href="#">节能补贴</a></li>
                  </ul>
                  <a href="#">
                      <img src="upload/floor-1-1.png" alt="">
                  </a>
              </div>
              <div class="col_329">
                  <a href="#">
                      <img src="upload/floor-1-b01.png" alt="">
                  </a>
              </div>
              <div class="col_221">
                  <a href="#" class="bb"> <img src="upload/floor-1-2.png" alt=""></a>
                  <a href="#"> <img src="upload/floor-1-3.png" alt=""></a>
              </div>
              <div class="col_221">
                      <a href="#"> <img src="upload/floor-1-4.png" alt=""></a>
                    
              </div>
              <div class="col_219">
                      <a href="#" class="bb"> <img src="upload/floor-1-5.png" alt=""></a>
                      <a href="#"> <img src="upload/floor-1-6.png" alt=""></a>
              </div>
          </div>
      </div>
  </div>
  ```

  **样式代码**

  ```css
  .box_bd {
      height: 361px;
    
  }
  .tab_list_item>div {
      float: left;
      height: 361px;
  }
  
  .col_210 {
      width: 210px;
      background-color: #f9f9f9;
      text-align: center;
  }
  .col_210  ul li {
      float: left;
      width: 85px;
      height: 34px;
      border-bottom: 1px solid #ccc;
      text-align: center;
      line-height: 33px;
      margin-right: 10px;
  }
  .col_210  ul {
      padding-left: 12px;
  }
  .col_329 {
      width: 329px;
  }
  .col_221 {
      width: 221px;
      border-right: 1px solid #ccc;
  }
  .col_219 {
      width: 219px;
  }
  .bb {
      /* 一般情况下，a如果包含有宽度的盒子，a需要转为块级元素 */
      display: block;
      border-bottom: 1px solid #ccc;
  }
  ```

#### tab栏切换需求

![](md_images/tab.png)

- `tab`栏的布局是  `ul > li > a`
- 有多少个`tab`选项卡，那么对应就有多少个内容
- 但是每一次只会显示一个内容块，其他内容进行的隐藏
- 等后面我们学习了`js`之后，我们就会配合`js`来实现，`tab`栏的切换

## 列表制作（★★★）

### 品优购列表页制作准备工作

- 列表页面是新的页面，我们需要新建页面文件 list.html 
- 因为列表页的头部和底部基本一致，所以我们需要把首页中的头部和底部的结构复制过来
- 头部和底部的样式也需要，因此 list.html 中还需要引入 common.css 
- 需要新的 list.css 样式文件，这是列表页专门的样式文件

### 列表页 `header` 和 `nav` 修改

![](md_images/header的修改.png)

- 秒杀盒子 sk（ second  kill ）  定位即可

**结构代码**

```html
<header class="header w">
     <!-- logo模块 -->
     ...
     <!-- 列表页的秒杀模块 -->
     <div class="sk">
         <img src="md_images/sk.png" alt="">
     </div>
     <!-- search搜索模块 -->
     ...
     <!-- hotwords模块制作 -->
     ...
     <!-- 购物车模块 -->
     ...
 </header>
```

**样式代码**

```css
.sk {
    position: absolute;
    left: 190px;
    top: 40px;
    border-left: 1px solid #c81523;
    padding: 3px 0 0  14px;
}
```

- 1 号盒子左侧浮动 `sk_list` 里面包含 `ul` 和 `li` 
- 2 号盒子左侧浮动 `sk_con` 里面包含 `ul` 和 `li`

**结构代码**

```html
<!-- nav模块制作 start -->
<nav class="nav">
    <div class="w">
        <div class="sk_list">
            <ul>
                <li><a href="#">品优秒杀</a></li>
                <li><a href="#">品优秒杀</a></li>
                <li><a href="#">品优秒杀</a></li>
            </ul>
        </div>
        <div class="sk_con">
            <ul>
                <li><a href="#">女装</a></li>
                <li><a href="#" class="style_red">女鞋</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">女装</a></li>
                <li><a href="#">更多分类</a></li>
            </ul>
        </div>
    </div>
</nav>
```

**样式代码**

```css
.sk_list {
    float: left;
}
.sk_list  ul li {
    float: left;
}
.sk_list  ul li a {
    display: block;
    line-height: 47px;
    padding: 0 30px;
    font-size: 16px;
    font-weight: 700;
    color: #000;
}
.sk_con {
    float: left;
}
.sk_con ul li {
    float: left;
}
.sk_con  ul li a {
    display: block;
    line-height: 49px;
    padding: 0 20px;
    font-size: 14px;
   
}
.sk_con  ul li:last-child a::after {
    content: '\e91e';
    font-family: 'icomoon';
}
```

### 列表页主体  `sk_container`

![](md_images/列表主体.png)

- 1 号盒子 `sk_container` 给宽度 1200，不要给高度 

**结构代码**

```html
<!-- 列表页主体部分 -->
<div class="w sk_container">
    <div class="sk_hd">
        ...
    </div>
    <div class="sk_bd">
        ...
    </div>
</div>
```

#### `sk_hd` 制作

- 2 号盒子 `sk_hd` ，插入图片即可  

**结构代码**

```html
<div class="sk_hd">
    <img src="upload/bg_03.png" alt="">
</div>
```

#### `sk_bd` 制作

- 3 号盒子 `sk_bd` ，里面包含很多的 `ul` 和 `li`
  - 当鼠标移入到 `li` 上面的时候显示红色的边框，在这里先给 `li` 设置透明的边框，当鼠标移入的时候 设置为红色即可
  - 由于给每个 `li` 都设置了外边距，导致一行的最后一个 `li` 掉了下来，在这里我们利用 `nth-child(4n)` 来选择出来每一行最后一个 `li`，去掉外边距就好了

**结构代码**

```html
<div class="sk_bd">
     <ul class="clearfix">
        <li>
            <img src="upload/list.jpg" alt="">
        </li>
        <li>
            <img src="upload/list.jpg" alt="">
        </li>
        <li>
            <img src="upload/list.jpg" alt="">
        </li>
        <li>
            <img src="upload/list.jpg" alt="">
        </li>
        <li>
            <img src="upload/list.jpg" alt="">
        </li>
        <li>
            <img src="upload/list.jpg" alt="">
        </li>
        <li>
            <img src="upload/list.jpg" alt="">
        </li>
        <li>
            <img src="upload/list.jpg" alt="">
        </li>
        <li>
            <img src="upload/list.jpg" alt="">
        </li>
    </ul>
</div>
```

**样式代码**

```css
.sk_bd ul li {
    overflow: hidden;
    float: left;
    margin-right: 13px;
    width: 290px;
    height: 460px;
    border: 1px solid transparent;
}
.sk_bd ul li:nth-child(4n) {
    margin-right: 0;
}
.sk_bd ul li:hover {
    border: 1px solid #c81523;
}
```

## 注册页面（★★★）

![](md_images/注册页面命名规范.png)

**注意：**注册页面比较隐私，为了保护用户信息，我们不需要对当前页面做SEO优化

![](md_images/注册页面.png)

### 准备工作

- 创建register.html，引入 base.css，引入favicon图标
- 创建register.css ，在html页面进行引入

### `header` 头部实现

- 整个内容用 版心 进行包裹
- 第一个头部区域怎么简单怎么来，用一个header盒子包裹链接，链接里面放图片即可

**结构代码**

```html
<header>
    <div class="logo">
        <a href="index.html"> <img src="md_images/logo.png" alt=""></a>
    </div>
</header>
```

**样式代码**

```css
.w {
    width: 1200px;
    margin: 0 auto;
}
header {
    height: 84px;
    border-bottom: 2px solid #c81523;
}
.logo {
    padding-top: 18px;
}
```

### `registerarea` 主体模块实现

![](md_images/registerarea.png)

- 整个大盒子 高度为 522px，设置4个边框

  **结构代码**

  ```html
  <div class="registerarea">
     ...
  </div>
  ```

  **样式代码**

  ```css
  .registerarea {
      height: 522px;
      border: 1px solid #ccc;
      margin-top: 20px;
  }
  ```

- 1号盒子 是一个 h3 标签，放标题

  - 里面放 注册新用户 的文字，然后包一个 div的标签，让div标签右浮动

  **结构代码**

  ```html
  <h3>注册新用户
      <div class="login">我有账号，去<a href="#">登陆</a></div>
  </h3>
  ```

  **样式代码**

  ```css
  .registerarea h3 {
      height: 42px;
      border-bottom: 1px solid #ccc;
      background-color: #ececec;
      line-height: 42px;
      padding: 0 10px;
      font-size: 18px;
      font-weight: 400;
  }
  .login {
      float: right;
      font-size: 14px;
  }
  .login a {
      color: #c81523;
  }
  ```

- 2号盒子 里面放注册的内容

  - 先用一个盒子，把整个内容包裹起来，设置盒子宽度（600px），让这个盒子距上边50px，水平居中显示

  - 里面的内容利用 `ul` 包含 `li` 来实现的（不需要用表格）

  - 每个 `li` 里面，左侧放 `label` 标签， 中间放`input` 标签， 右侧放 `span` 提示信息

  - 左侧 `label`里面的文字都是右对齐，我们可以给`label`设置一个宽度（88px），然后利用`text-align` 来设置右对齐

  - input 表单设置 宽度 242px，高度 37px，设置边框

  - 右侧 span修饰一下文字颜色

  - 提示信息的样式优化

    - 定义一个 错误的样式，定义一个 正确的样式，然后给对应的盒子设置类名

    - 在span里面放一个小盒子，这个小盒子用来显示 图标的，设置一下宽高 （20x20）
    - 插入图片了之后，默认与文字是基线对齐，通过 `vertical-algin` 来设置 图片与文字对齐方式

  - 安装程度的布局，在第4个小 li 里面放 三个盒子，分别放 弱、中、强

    - 设置 `em` 的 左右 12px 的内边距，设置一下文字颜色
    - 分别设置 背景颜色

  - 同意协议 和 完成注册 都是用 `li` 进行包裹

  **结构代码**

  ```html
  <div class="reg_form">
      <form action="">
          <ul>
              <li><label for="">手机号：</label> <input type="text" class="inp">
                  <span class="error"> <i class="error_icon"></i> 手机号码格式不正确，请从新输入 </span></li>
              <li><label for="">短信验证码：</label> <input type="text" class="inp">
                  <span class="success"> <i class="success_icon"></i> 短信验证码输入正确 </span></li>
              <li><label for="">登录密码：</label> <input type="password" class="inp">
                  <span class="error"> <i class="error_icon"></i> 手机号码格式不正确，请从新输入 </span></li>
              <li class="safe">安全程度 <em class="ruo">弱</em> <em class="zhong">中</em> <em class="qiang">强</em> </li>
              <li><label for="">确认密码：</label> <input type="password" class="inp">
                  <span class="error"> <i class="error_icon"></i> 手机号码格式不正确，请从新输入 </span></li>
              <li class="agree"><input type="checkbox" name="" id=""> 
                  同意协议并注册 <a href="#">《知晓用户协议》</a>
              </li>
              <li>
                  <input type="submit" value="完成注册" class="btn">
              </li>
          </ul>
      </form>
  </div>
  ```

  **样式代码**

  ```css
  .reg_form {
      width: 600px;
  
      margin: 50px auto 0;
  }
  .reg_form ul li {
      margin-bottom: 20px;
  }
  .reg_form ul li label {
      display: inline-block;
      width: 88px;
      text-align: right;
  }
  .reg_form ul li .inp {
      width: 242px;
      height: 37px;
      border: 1px solid #ccc;
  }
  .error {
      color: #c81523;
  }
  .error_icon,
  .success_icon {
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      background: url(../md_images/error.png) no-repeat;
      margin-top: -2px;
  }
  .success {
      color: green;
  }
  .success_icon {
      background: url(../md_images/success.png) no-repeat;
  }
  .safe {
      padding-left: 170px;
  }
  .safe em {
      padding: 0 12px;
      color: #fff;
  }
  .ruo {
      background-color: #de1111;
  }
  .zhong {
      background-color: #40b83f;
  }
  
  .qiang {
      background-color: #f79100;
  }
  .agree {
      padding-left: 95px;
  }
  .agree input {
      vertical-align: middle;
  }
  .agree a {
      color: #1ba1e6;
  }
  .btn {
      width: 200px;
      height: 34px;
      background-color: #c81623;
      font-size: 14px;
      color: #fff;
      margin: 30px 0 0 70px;
  }
  ```

### 底部实现

**结构代码**

```html
<footer>
    <div class="mod_copyright">
        <div class="links">
            <a href="#">关于我们</a> | <a href="#">联系我们</a> | 联系客服 | 商家入驻 | 营销中心 | 手机品优购 | 友情链接 | 销售联盟 | 品优购社区 |
            品优购公益 | English Site | Contact U
        </div>
        <div class="copyright">
            地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn <br>
            京ICP备08001421号京公网安备110108007702
        </div>
    </div>
</footer>
```

**样式代码**

```css
.mod_copyright {
    text-align: center;
    padding-top: 20px;
}
.links {
    margin-bottom: 15px;
}
.links a {
    margin: 0 3px;
}
.copyright {
    line-height: 20px;
}
```

# Web服务器

把自己网站上传到服务器上，可以让其他人访问

## 什么是Web服务器

我们写的品优购网站，目前是放到自己电脑上的，只能自己访问浏览。

如果想要很多人访问我们的网站，可以把品优购放到服务器上，这样就可以多人访问我们的品优购网站了

![](md_images/服务器.png)

**服务器**（我们也会称之为主机）是提供计算服务的设备，它也是一台计算机。在网络环境下，根据服务器提供的服务类型不同，服务器又分为文件服务器、数据库服务器、应用程序服务器、**Web 服**

**务器**等。

**Web 服务器****一般指网站服务器**，是指驻留于因特网上某种类型计算机的程序，可以向浏览器等 Web 客户端提供文档，也可以放置网站文件，让全世界浏览；可以放置数据文件，让全世界下载。

以下服务器我们主要指的是Web服务器。

根据服务器在网络中所在的位置不同，又可分为**本地服务器**和**远程服务器**。

### 本地服务器

我们可以把自己的电脑设置为本地服务器， 这样同一个局域网内的同学就可以访问你的品优购网站了。 后面学ajax的时候，再进行讲解

### 远程服务器

本地服务器主要在局域网中访问，如果想要在互联网中访问，可以把品优购网站上传到远程服务器。

远程服务器是通常是别的公司为我们提供的一台电脑（主机），我们只要把网站项目上传到这台电脑上，任何人都可以利用域名访问我们的网站了。

比如域名： www.mi.com      可以访问小米网站

### 小结

- 服务器就是一台电脑。因为我们主要是做网站，所以我们主要使用web服务器
- 服务器可以分为本地服务器和远程服务器
- 远程服务器是别的公司为我们提供了一台计算机。
- 我们可以把网站上传到远程服务器里面， 别人就可以通过域名访问我们的网站了

## 将自己的网站上传到远程服务器（★★★）

**注意：一般稳定的服务器都是需要收费的。  比如：阿里云**

这里给大家推荐一个免费的远程服务器（免费空间）  http://free.3v.do/ 

- 去免费空间网站注册账号。
- 记录下主机名、用户名、密码、域名。
- 利用 `utftp` 软件 上传网站到远程服务器
- 在浏览器中输入域名，即可访问我们的品优购网站了 
  
  