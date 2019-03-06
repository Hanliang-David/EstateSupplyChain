
项目名称：房产供应链区块链实现  
区块链名称：EstateSupplyChain
执行步骤：
- 使用ubuntu系统

- 进入项目目录　cd Node-Login

- truffle compile  truffle migrate 将硬编码的合约地址改一下 

- 安装依赖 npm install

- 修改数据库配置文件: vi ./config/database.js 

- 安装PHPmyadmin 数据库

- 链接数据库PHPmyadmin  : cd /opt/lampp          sudo ./xampp start

- 执行脚本创建对应表结构: node ./scripts/create_database

- 运行nodejs服务器: npm start

- 然后去浏览器访问　http://localhost:8080/

- 供应商先填写信息，后房产商根据ID向数据库中添加相应信息，顾客可在交易完成后录入自己的信息

