<h1 align="center"> marykay-hk </h1>

### 專案安裝
```bash
# 安裝
$ npm install
```

### nuxt 指令
```bash
# 執行開發環境
$ npm run dev

# 產生靜態頁面 至此路徑下: ./dist/
$ npm run generate 

```

### vscode 格式化套件安裝

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) vue檔格式解析

### 雲端檔案位置
* [商品分類](https://docs.google.com/spreadsheets/d/1rWjCAO8fDey9V4xt_mycrFjTQ1LMAyc-/edit#gid=231340791)
* [商品中英文檔 Excel](https://drive.google.com/drive/folders/1ml-QFVeOywaTi-ou1ak66e_9TjaupXBs)
* [影片檔](https://drive.google.com/drive/folders/1CE1GfwhF_mxcZgU5K-IUuIgvchI50nEp)

```bash
放至此專案路徑下 : assets/images/video
```


### 使用方式&資料夾說明

### `載入資源路徑範例`
<a> 連結更改為 <nuxt-link>
```html
//ex: 回首頁
<nuxt-link :to="localePath('/')"> Home </nuxt-link>

//ex path : pages/about
<nuxt-link :to="localePath('about')"> Home </nuxt-link>
  
```
[參考](https://i18n.nuxtjs.org/basic-usage#nuxt-link)
  
### `載入資源路徑範例`
以 "~" 為開頭作為根目錄起始位置。
```html
 // ex path: assets/image/image.jpg
 <img src="~assets/image/image.jpg">
```

### `assets`

上線會進行壓縮的的資源資料夾
目前為:
* image 圖檔位置
* sass  scss位置 <br/>

[參考](https://nuxtjs.org/docs/2.x/directory-structure/assets)

### `components`
組件資料夾 
```javascript
//命名方式為 大寫開頭
//ex: Header.vue

//引用方式也為大寫
<Header/>

//如過有多層資料夾  使用時須照路路徑 採大駝峰式命名法（upper camel case）
//ex path: components/section/s1.vue
<SectionS1/>

```
 [參考](https://nuxtjs.org/docs/2.x/directory-structure/components)

### `layouts`
版面配置資料夾，預設值為default
```javascript
//非預設值時 依照檔名引用
//ex layouts/about.vue
// index.vue 引用時
export default {
  layout: 'about',
}
```
[參考](https://nuxtjs.org/docs/2.x/directory-structure/layouts)


### `pages`
頁面資料夾，以資料夾當作頁面，資寮夾下圍index.vue。
以 "_" 為開頭命為動態頁面，由參數決定頁面名 
```javascript
// ex: 新增about 頁面
// path: pages/about/index.vue
```
 [參考](https://nuxtjs.org/docs/2.x/get-started/routing)

### `plugins`
引用第三方js套件資料夾，檔案放入後，需到設定檔新增路徑
```javascript
// ex: path: plugins/plugin.js

//nuxt.config.js
export default {
    plugins: [
    { src: '~/plugins/plugin.js', mode: 'client' },
  ],
}
```
[參考](https://nuxtjs.org/docs/2.x/directory-structure/plugins)

### `static`
不需要壓縮的靜態資源資料夾<br>

[參考](https://nuxtjs.org/docs/2.x/directory-structure/static)
