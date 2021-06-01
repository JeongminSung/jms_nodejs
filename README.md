# node 첫걸음 떼기

## 노드 버전 업데이트 하기

> 기존에 쓰던 노드 버전 : 14.16.1
> 업데이트 할 노드 버전 : 14.16.0

```
// 노드 업데이트
node -v //node 버전 확인
npm cache clean -f //캐시 삭제
sudo npm install -g n //nodejs 버전관리 플러그인
n lts //lts 버전

// npm 업데이트
npm -v //npm 버전 확인
sudo npm i -g npm //npm 업데이트(global 경로)

// 최종 버전 확인
node -v
npm -v
```

## 패키지 설치

> 타입스크립트 환경을 설정하고 익스프레스 서버를 구동하기 위해 필요한 패키지들을 설치한다.

- express
- @types/express : express라이브러리 + 타입스크립트
- @types/node : node 타입스크립트
- nodemon : 실시간으로 수정사항 반영
- ts-node : 타입스크립트 파일 실행
- typescript

```
npm i -s express @types/express @types/node nodemon ts-node typescript --dev
```

## ESLint 설정

```
sudo npm install -g eslint
eslint --init
// 이후 자동으로 .eslintrc.js가 생성된다
```

## Prettier 설정

```
npm install prettier --save-dev --save-exact // -exact 옵션으로 버전별로 달라지는 스타일 변화에 대응할 수 있다.

// 추가 모듈 설치
npm install eslint-config-prettier --save-dev // Prettier 와 ESLint의 충돌하는 설정을 맞춤
npm install eslint-plugin-prettier --save-dev // IDE에서 사용하는 코드 포멧을 Prettier로 함
```

## 궁금한것??

### —-save-dev 옵션은 왜 넣을까?

- npm install --save-dev [모듈이름] 으로 설치하는 것은 모듈을 설치할 때 package.json 내의 devDependencies 항목에 설치한 모듈과 버전을 넣는것을 의미한다.
- dev로 시작하는 이름처럼 '개발용'으로 쓸경우 devDependencies 항목에 기록한다.
- 즉 테스트를 위해 필요한 모듈이긴 하지만, 실제 릴리즈시에 필요없을 경우 devDependencies 항목에 넣는게 맞다.
- npm install -> dependencies, devDependencies 모든 모듈을 설치함.
- npm install --only=prod[uction] -> dependencies만 설치
- npm install --only=dev[elopment] -> devDependencies만 설치
