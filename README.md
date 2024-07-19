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
 대표화면 위치 <WHiteWhale></WHiteWhale>
  </a>

  <h3 align="center">WHITEWHALE</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
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

프로젝트 페이지 :https://alert-stove-2f8.notion.site/fdd3855bdadc4d188b858729d03ee285?pvs=4


## 2.실행 방법
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
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"><img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"><img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=react-query&logoColor=white"><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"><img src="https://img.shields.io/badge/FireBase-DD2C00?style=for-the-badge&logo=FireBase&logoColor=white">


## 4. 프로젝트 구성

```
root
├─dist
│ └─assets
├─node_modules
├─public
┣ logo
┃ ┣ Basket.png
┃ ┣ ClientIcon.png
┃ ┣ Elegant.png
┃ ┣ GitHub.png
┃ ┣ MenuIcon.png
┃ ┗ Notion.png
┣ src
┃ ┣ assets
┃ ┃ ┗ react.svg
┃ ┣ components
┃ ┃ ┣ context
┃ ┃ ┃┣ AuthContext.tsx
┃ ┃ ┃┣ CartContext.tsx
┃ ┃ ┃┗ ProductCategoryContext.tsx
┃ ┃ ┣ ui
┃ ┃ ┃┣ alert-dialog.tsx
┃ ┃ ┃┣ alert.tsx
┃ ┃ ┃┣ avatar.tsx
┃ ┃ ┃┣ button.tsx
┃ ┃ ┃┣ card.tsx
┃ ┃ ┃┣ carousel.tsx
┃ ┃ ┃┣ checkbox.tsx
┃ ┃ ┃┣ Footer.tsx
┃ ┃ ┃┣ hover-card.tsx
┃ ┃ ┃┣ input.tsx
┃ ┃ ┃┣ label.tsx
┃ ┃ ┃┣ MainProductCard.tsx
┃ ┃ ┃┣ PageHeader.tsx
┃ ┃ ┃┣ ProductCardLayOut.tsx
┃ ┃ ┃┣ select.tsx
┃ ┃ ┃┣ SideDrawer.tsx┃
┃ ┃ ┃┗ table.tsx
┃ ┃ ┗ Header.tsx
┃ ┣ config
┃ ┃ ┗ firebase.ts
┃ ┣ hooks
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
┃ ┗ pages
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
┃ ┃ ┗ Login
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

1. 메인 페이지
2. 로그인 페이지,
3. 회원가입 페이지
4. 마이 페이지
5. 상품 페이지
6. 상품 상세 페이지
7. 장바구니 페이지
8. 물건등록 페이지
9. 물건구매페이지

## 5. 구현 기능

### 1) 핵심 기능
  1. ReactQuery를 이용하여 서버의 상태 관리
     - 로그인 상태 관리, 구매상태, 장바구니 상태 정보 
  2. 인피니티스크롤을 이용한 페이지 로딩
     - reactQuery의 useInfiniteQuery를 사용.
  3. IMPortAPI를 적용하여 호출할 수 있는 기능
     - toss 결제 인터페이스를 적용하고 구매한 상품을 DB내에 저장


### 2) 주요 기능
  1. 회원가입, 로그인 기능
  2. 불러온 데이터를 Carosul 인터페이스로 출력
  3. 각 카테고리와 상태, 정렬등으로 분리 
  4. 비회원 구매 기능
     - localStorage와 sessionStroage를 이용해 회원, 비회원의 장바구니 상태 분리.

## 6. 트러블 슈팅 

### 1) 로그인 상태에서 담은 장바구니가 로그아웃 후에도 남아 있는 문제 해결
     - 코드를 직접 디버깅해보면서 로컬스토리지에 담긴 정보가 지워지지 않고 지속적으로 유지되는 경우 확인
     - 코드를 수정해 로그인 상태와 비로그인 상태에 따라 localStorage를 변경 

### 2) 사이트에서 카테고리별로 정상적으로 분류되지 않았던 버그 수정
     - 해당 페이지 내에서 관리를 위해 contextAPI사용 


## 6. 로드맵
* [x] 로그인 기능 구현
* [x] 회원가입 기능 구현
* [x] 데이터 저장, 불러오기, 수정 기능 구현
* [x] 인피니티 스크롤 출력 구현
* [x] 장바구니 기능 구현
* [x] 카테고리 기능 구현
* [x] 구매 기능 구현
* [ ] 마이페이지 기능 구현
* [ ] 에러 바운더리 구현
* [ ] SEO 효율 상승 방법
* [ ] lazy loading
* [ ] 랜더링 최적화 




## 7. 깃 컨벤션, 코드 컨벤션
코드 컨벤션 1.컴포넌트의 경우 대문자, 보통은 함수형 컴포넌트를 사용하고 정말 필요한 상황일 때는
기능형으로 지정 2.경로처럼 각 기능의 역할을 한번에 보여줘야하는 명사의 경우 파스칼 형태를 사용 3. 컴포넌트에서 지역 상태가 있을 경우 항상 최상단에 적용

위키 참조
