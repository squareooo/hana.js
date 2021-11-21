# hana.js

Hana SDK for JavaScript

## 설치하기

Using NPM

```
npm install hana.js
```

Using Yarn

```
yarn add hana.js
```

Using CDN

```html
<script src="https://"></script>
```

## 시작하기

JavaScript SDK 초기화 예제입니다.

```js
const Hana = require("hana.js")

Hana.init()
```

## 기능 명세

### Hana.Auth.authorize

사용자가 앱에 로그인할 수 있도록 인가 코드를 요청하는 함수입니다. 인가 코드를 받을 수 있는 서버 개발이 필요합니다.

```js
Hana.Auth.authorize({
  redirectUri: "https://hana.ooo/authorize",
})
```

#### 입력인자

| Name          |  Type  | Required | Description          |
| ------------- | :----: | :------: | -------------------- |
| `redirectUri` | string |    N     | 인가 코드를 받을 URI |
| `scope`       | string |    N     | 추가 동의 받을 항목  |
