#ReactNative 应用：汇率转换器
>ReactNative 学习项目

##如何运行
***
1. 首先从github上clone项目或者下载zip格式的项目包。
2. 需要将项目目录名称修改为News。<br/>
*注意：默认拉取的项目名称可能为ReactNaitve-ExchangeRate-master,需要将其修改为News。*
3. 安装好本地ReactNative环境！<br/>
*重要的事情说3遍：<br/>
安装好本地ReactNative环境！<br/>
安装好本地ReactNative环境！<br/>
安装好本地ReactNative环境！<br/>
可以参考：[环境配置](http://reactnative.cn/docs/0.39/getting-started.html)*
4. 在项目目录中执行 npm install --save 命令。
5. 在项目根目录中执行 react-native run-ios 或者 react-native run-adroid

##问题
***
####你在运行工程时，可能会遇到如下错误：
React cannot find entry file in any of the roots
####或者如下错误:
Unable to resolve module XXX from<br/>
#####以上两种错误都是js库链接失败所致，原因是使用的cnpm install进行了依赖库的安装，cnpm会采用软链的方式安装，导致找不到服务器文件，切记要使用npm install进行安装。

##效果
***
![iOS效果图](https://github.com/ZYHshao/ReactNative-ExchangeRate/raw/master/ios.png)
<br/>
<br/>
![安卓效果图](https://github.com/ZYHshao/ReactNative-ExchangeRate/raw/master/android.png)