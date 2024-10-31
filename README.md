<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/user-attachments/assets/eb8b9051-03c5-425c-aa96-d59f842f3619" alt='WhiteWhaleLogo'>
 <WHiteWhale></WHiteWhale>
  </a>

  <h3 align="center">WHITEWHALE</h3>

  <p align="center">
    커스텀 키보드가 필요한 사용자들을 위해 제작된 커스텀 키보드 판매 사이트 WhiteWhale입니다.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">WHITEWAHLE이란? </a>
    </li>
    <li>
      <a href="#getting-started">실행 조건</a>
      <ul>
        <li><a href="#prerequisites">사용방법</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">개발기술</a></li>
    <li><a href="#roadmap">프로젝트 구성</a></li>
    <li><a href="#contributing">핵심기능</a></li>
    <li><a href="#license">페이지별 기능</a></li>
    <li><a href="#contact">트러블 슈팅</a></li>
    <li><a href="#acknowledgments">개선목표</a></li>
    <li><a href="#acknowledgments">프로젝트 후기</a></li>
  </ol>
</details>

## 1. WHITEWHALE이란?

커스텀 키보드에 대한 남다른 관심을 가진 고객들을 위해 제작된 커스텀 키보드 제작 사이트입니다. Vite를 통해 빠른 화면전환과 렌더링 시간을 단축시켰고 reactQuery를 통해 데이터를 전역으로 관리하는 데 집중했습니다.

프로젝트 Notion : https://alert-stove-2f8.notion.site/fdd3855bdadc4d188b858729d03ee285?pvs=4

## 2.실행 방법

데모 페이지 : https://white-whale-l34jo2bot-595988s-projects.vercel.app

테스트 계정

- 판매자 : test1313@gmail.com 패스워드 : 1q2w3e4r!
- 구매자 : test3131@gmail.com 패스워드 : 1q2w3e4r!

```
$ git clone https://github.com/pass98/whiteWhale.git
$ npm i
```

```
$ npm run dev
```

## 3. 개발 환경

- 개발 인원 : 1인
- 개발 기간 : 2024.06 ~
- 사용기술

  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"><img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"><img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=react-query&logoColor=white"><img src="https://img.shields.io/badge/FireBase-DD2C00?style=for-the-badge&logo=FireBase&logoColor=white">

## 4. 프로젝트 구성

```
root
├─dist
│ └─assets
├─node_modules
├─public
┣ logo
┣ src
┃ ┣ assets
┃ ┣ components
┃ ┃ ┣ context  //ContextAPI만 담을 수 있는 공간을 제작했습니다.
┃ ┃ ┃┣ AuthContext.tsx
┃ ┃ ┃┣ CartContext.tsx
┃ ┃ ┃┗ ProductCategoryContext.tsx
┃ ┃ ┣ ui
┃ ┣ config   // 파이어베이스의 db를 초기화하는 로직입니다.
┃ ┃ ┗ firebase.ts
┃ ┣ hooks   // db내에서 유저 정보를 가져오는 훅을 담았습니다.
┃ ┃ ┣ FetchPageData.tsx
┃ ┃ ┣ FetchProductCardData.tsx
┃ ┃ ┣ FetchProductList.tsx
┃ ┃ ┣ FetchProducts.tsx
┃ ┃ ┣ FetchSortedProducts.tsx
┃ ┃ ┣ FetchUser.tsx
┃ ┃ ┣ Payment.tsx
┃ ┃ ┗ UseFetchData.tsx
┃ ┗ lib
┃ ┃┗ utils.ts
┃ ┗ pages  // 페이지와 최소한의 state를 담았습니다.
┃ ┃ ┣ AllProdcutPage.tsx
┃ ┃ ┣ BackGroundPage.tsx
┃ ┃ ┣ BasketPage.tsx
┃ ┃ ┣ BuyProductPage.tsx
┃ ┃ ┣ DeliveryStatusPage.tsx
┃ ┃ ┣ LoginPage.tsx
┃ ┃ ┣ MainPageLayOut.tsx
┃ ┃ ┣ MyPage.tsx
┃ ┃ ┣ OrderStatusPage.tsx
┃ ┃ ┣ ProductDetailPage.tsx
┃ ┃ ┣ ProductEditForm.tsx
┃ ┃ ┣ SignUpPage.tsx
┃ ┃ ┗ UploadProductPage.tsx
┃ ┗ sections
┃ ┃ ┗ Login // 로그인에 대한 레이아웃과 관련로직을 가져왔습니다.
┃ ┃ ┃ ┣ Login.tsx
┃ ┃ ┃ ┣ LoginForm.tsx
┃ ┃ ┃ ┣ LoginInfoGuest.tsx
┃ ┃ ┃ ┣ LoginInfoSeller.tsx
┃ ┃ ┃ ┗ LoginInfoUser.tsx
┃ ┣ **tests**
┃ ┃ ┗ Login.test.ts
┃ ┣ App.css
┃ ┣ App.tsx
┃ ┣ index.css
┃ ┣ main.tsx
┃ ┗ vite-env.d.ts
┣ .env
┣ .eslintrc.cjs
┣ .gitignore
┣ .prettierrc.cjs
┣ components.json
┣ index.html
┣ package-lock.json
┣ package.json
┣ tailwind,config.js
┣ tsconfig.app.json
┣ tsconfig.json
┣ tsconfig.node.json
┗ vite.config.ts
```

## 5. 구현 기능

1. 메인 페이지 : 데이터를 crasul 형태로 출력함.
   ![image](https://github.com/user-attachments/assets/9c87db65-44e1-4d02-b9ca-c0d448de632a)
2. 로그인 페이지 : db내의 데이터를 확인하여 같은 ID가 있다면 '로그인 성공' 메시지가 출력하고 전체 로그인 상태를 '로그인'으로 처리함.
   ![image](https://github.com/user-attachments/assets/0124b59c-5b7e-418a-9a87-532202516a2c)

3. 회원가입 페이지 : 유효성 검사 기능, db 내의 데이터 없을 시 '회원가입 성공' 메시지와 데이터 저장
4. 마이 페이지 : 페이지 내 데이터 변경
5. 상품 페이지 : 상품에 대한 데이터 출력, 상품 수량
6. 상품 상세 페이지 : 데이터 변경 가능
7. 장바구니 페이지 : 주문 목록에 대한 데이터 저장, 수량 변경 및 삭제 가능
8. 물건등록 페이지 : 이미지 업로드,
9. 물건구매 페이지 : 결제 API를 이용해서 데이터 받고

## 6. 트러블 슈팅

### 1) 로그인 상태에서 담은 장바구니가 로그아웃 후에도 남아 있는 문제 해결

     - 코드를 직접 디버깅해보면서 로컬스토리지에 담긴 정보가 지워지지 않고 지속적으로 유지되는 경우 확인
     - 코드를 수정해 로그인 상태와 비로그인 상태에 따라 localStorage를 변경

### 2) 사이트에서 카테고리별로 정상적으로 분류되지 않았던 버그 수정

     - 해당 페이지 내에서 관리를 위해 contextAPI사용

## 6. 로드맵

- [x] 로그인 기능 구현
- [x] 회원가입 기능 구현
- [x] 데이터 저장, 불러오기, 수정 기능 구현
- [x] 인피니티 스크롤 출력 구현
- [x] 장바구니 기능 구현
- [x] 카테고리 기능 구현
- [x] 구매 기능 구현
- [ ] 마이페이지 기능 구현
- [ ] 에러 바운더리 구현
- [ ] SEO 효율 상승 방법
- [ ] lazy loading
- [ ] 랜더링 최적화

## 7. 깃 컨벤션, 코드 컨벤션

위키 참조
