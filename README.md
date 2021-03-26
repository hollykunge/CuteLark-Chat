
## 快速开发gogogo
前提:

* [Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Meteor](https://www.meteor.com/install)

环境:

* window wsl2 (在wsl用户文件中clone项目)
* ubuntu
* Mac

> Meteor 自动给你装了 [NodeJS v12](https://nodejs.org/download/release/v12.18.4/) 和 [MongoDB v4.2](https://docs.mongodb.com/manual/introduction/) 。

clone仓库并执行命令:

```sh
git clone https://github.com/RocketChat/Rocket.Chat.git
cd Rocket.Chat
meteor npm install
meteor npm start
```

调试使用 [meteor debugging](https://docs.meteor.com/commandline.html#meteordebug). 用chrome新版浏览器:

```sh
meteor debug
```
有一个nodejs图标的开发控制台。

## 分支要求

参考 [Branches and Releases](https://rocket.chat/docs/developer-guides/branches-and-releases/)。

基于 [Gitflow Workflow](http://nvie.com/posts/a-successful-git-branching-model/)。

## 部署方式

### Node 版本

    12.18.4
### 命令行
```
    // 使用 meteor help build  查看命令参数
    
    $ meteor build 打包路径 --architecture os.linux.x86_64 
    $ tar -xzvf  CuteLark-Chat.tar.gz
    $ cd bundle
    $ (cd programs/server && npm install)
    $ export MONGO_URL='mongodb://127.0.0.1:27017/rocketchat'
    $ export ROOT_URL='http://localhost:3000'
    $ export MAIL_URL='smtp://smtp.email'
    $ export PORT=3000
    $ export DISABLE_DB_WATCH=false // 监听mongoDB --- 暂时不知道干什么的
    $ node main.js
```
### 遇到的问题
- sharp依赖， 运行 rm -rf node_modules/sharp，npm install sharp (删了重新下)
![image](https://user-images.githubusercontent.com/30425647/112615294-45422e80-8e5d-11eb-840f-73c493c669ca.png)

