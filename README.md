# Forum-express 餐廳評論網
讓使用者找到好餐廳、查看餐廳的基本資訊！

Create an application server using Node.js with Express and a database server using MySQL in the local environment.

![image](https://github.com/pinjunpan/forum-express-grading-github-actions/blob/main/public/images/main.png)
![image](https://github.com/pinjunpan/forum-express-grading-github-actions/blob/main/public/images/restaurant.png)
![image](https://github.com/pinjunpan/forum-express-grading-github-actions/blob/main/public/images/feeds.png)
![image](https://github.com/pinjunpan/forum-express-grading-github-actions/blob/main/public/images/top.png)
![image](https://github.com/pinjunpan/forum-express-grading-github-actions/blob/main/public/images/top10.png)
![image](https://github.com/pinjunpan/forum-express-grading-github-actions/blob/main/public/images/profile.png)
![image](https://github.com/pinjunpan/forum-express-grading-github-actions/blob/main/public/images/admin.png)

## Features

**前台**
- 使用者可以註冊/登入/登出網站
- 使用者可以瀏覽所有餐廳和個別餐廳的詳細資訊
- 使用者可以透過分類篩選餐廳
- 使用者可以評論餐廳
- 使用者可以收藏餐廳(加到最愛、Like)
- 使用者可以查看餐廳的統計數(Dashboard)
- 使用者可以查看最新上架的 10 筆餐廳及 10 筆評論
- 使用者可以追蹤其他使用者、查看追蹤人數及排名
- 使用者可以查看收藏數前 10 名的餐廳
- 使用者可以編輯自己的個人資料
- 使用者可以查看追蹤中的使用者及追蹤自己的使用者
- 使用者可以查看評論過及收藏的餐廳

**後台**
- 只有網站管理者可以登入網站後台
- 網站管理者可以管理餐廳的基本資料
- 網站管理者可以更改其他使用者的權限
- 網站管理者可以管理餐廳分類

## Getting Started

### Prerequisites

**Node.js & Express 相關套件**
- node.js 18.20.5
- nodemon 3.1.4
- express 4.17.1
- method-override 3.0.0
- express-handlebars 5.3.3

**MySQL 資料庫相關套件**
- mysql2 2.3.0
- sequelize 6.6.5
- sequelize-cli 6.2.0

**登入驗證相關套件**
- express-session 1.18.1
- passport 0.4.1
- passport-local 1.0.0
- bcryptjs 2.4.3

**其他小工具**
- axios" 1.9.0
- dotenv 16.5.0
- multer 1.4.3
- connect-flash 0.1.1
- dayjs 1.10.6
- faker 5.5.3
- Bootstrap 5.0.2

**程式碼格式整理相關套件**
- eslint 7.32.0
- eslint-config-standard 16.0.3
- eslint-plugin-import 2.23.4
- eslint-plugin-node 11.1.0
- eslint-plugin-promise 5.1.0

**測試相關套件**
- chai 4.3.4
- mocha 9.1.1
- sinon 11.1.2
- supertest 6.1.6

### Initialize

1. Fork

2. 下載遠端專案至個人本地專案，建立上游連線

```
git clone https://github.com/pinjunpan/forum-express-grading-github-actions.git
cd forum-express
git remote add upstream https://github.com/pinjunpan/forum-express-grading-github-actions.git
```

3. 環境初始化，下載相關套件，設定資料庫，需要與 config/config.json 一致

```
npm install
npm install -g nodemon
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

4. 設定環境變數

```
export NODE_ENV=development
```

5. 啟動專案

```
npm run dev
http://localhost:3000
```

## 共用帳號
* 第一組帳號有 admin 權限：
  * email: root@example.com
  * password: 12345678
* 第二組帳號沒有 admin 權限：
  * email: user1@example.com
  * password: 12345678
* 第三組帳號沒有 admin 權限：
  * email: user2@example.com
  * password: 12345678