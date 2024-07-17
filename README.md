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

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

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
      <a href="#about-the-project">프로젝트 소개 </a>
      <ul>
        <li><a href="#built-with">설계 이유</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">실행 조건</a>
      <ul>
        <li><a href="#prerequisites">사용방법</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">개발기술</a></li>
    <li><a href="#roadmap">프로젝트 구조</a></li>
    <li><a href="#contributing">핵심기능</a></li>
    <li><a href="#license">페이지별 기능</a></li>
    <li><a href="#contact">트러블 슈팅</a></li>
    <li><a href="#acknowledgments">개선목표</a></li>
    <li><a href="#acknowledgments">프로젝트 후기</a></li>
  </ol>
</details>

## 1. WHITEWHALE이란?

## 2. 메인 기능

## 3. 개발 환경

- 개발 인원 : 1인
- 개발 기간 : 2024.06 ~
- 사용기술
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"><img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"><img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=react-query&logoColor=white"><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"><img src="https://img.shields.io/badge/FireBase-DD2C00?style=for-the-badge&logo=FireBase&logoColor=white">

1. 메인 : React, TypeScript
2. 빌드 툴 : Vite
3. 스타일 : Tailwind CSS
4. 서버 상태 관리 : @tanstack/react-query
5. 클라이언트 상태 관리 : React Context API
6. Back-End : Firebase(FireStore, Firecloud)
7. 배포 : Vercel
8. 페이지 라우팅 : React Router

## 4. 프로젝트 구성

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

### 1. 핵심 기능

### 2. 주요 기능

### 사용이유

1. 작은 규모의 프로젝트이기 때문에 복잡한 브랜치 전략을 사용하지 않고 간단하게 사용하기 위해서
2. 작업 내용을 빠르게 공유하고 피드백을 받기 위해서
3. 작업 내용을 빠르게 배포하기 위해서

## 6. 깃 컨벤션, 코드 컨벤션

코드 컨벤션 1.컴포넌트의 경우 대문자, 보통은 함수형 컴포넌트를 사용하고 정말 필요한 상황일 때는
기능형으로 지정 2.경로처럼 각 기능의 역할을 한번에 보여줘야하는 명사의 경우 파스칼 형태를 사용 3. 컴포넌트에서 지역 상태가 있을 경우 항상 최상단에 적용

위키 참조
