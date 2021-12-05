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
<script src="https://unpkg.com/hana.js"></script>
```

## 시작하기

### Hana.init

JavaScript SDK 초기화 예제입니다.

```js
const Hana = require("hana.js")

Hana.init({
  clientId: "31024ffa-5ef0-413e-9bf5-f1761638b6d8",
})
```

#### 입력인자

| Name       |  Type  | Required | Description     |
| ---------- | :----: | :------: | --------------- |
| `clientId` | string |    Y     | 애플리케이션 ID |

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

### Hana.Auth.token

사용자가 앱에 로그인할 수 있도록 인가 코드를 요청하는 함수입니다. 인가 코드를 받을 수 있는 서버 개발이 필요합니다.

```js
Hana.Auth.token({
  redirectUri: "https://hana.ooo/authorize",
  code: "128ba3b3-f2ca-4a33-afaf-aae20ba79093",
})
```

#### 입력인자

| Name          |  Type  | Required | Description          |
| ------------- | :----: | :------: | -------------------- |
| `redirectUri` | string |    Y     | 인가 코드를 받을 URI |
| `code`        | string |    Y     | 추가 동의 받을 항목  |

#### 출력결과

```js
{
  access_token: '...',
  expires_in: 3599,
  id_token: '...',
  scope: 'openid',
  token_type: 'Bearer'
}
```
