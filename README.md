# vehicle-rental-service
원티드 프리온보딩 과제: B2C 차량 대여 서비스<br/>
[📎 배포링크 바로가기](https://vehicle-rental-service.vercel.app/vehicles)

<br/>

# 데모
<img src="https://user-images.githubusercontent.com/76088728/205851944-8eb92802-94ea-40e0-8982-1c5e4771d130.gif" />

- [Figma](https://www.figma.com/file/PMgzyRneNkm3sjiNUf6BIp/vehicle-rental-service?node-id=0%3A1&t=bv2K0hAZuRdF1vQp-1
) 상의 디자인 및 기능 구현
  - 지정된 조건(segment, fuelType)에 맞게 데이터 요청 및 표시
  - 카테고리(좌우 슬라이드)
  - 신규 차량 표시(생성일 기준 1일 이내)
  - 차량 리스트(차량 없을 때, 차량 불러오는 중 처리), 차량 상세
  - 모바일 웹 기준으로 제작
<br/>

# 실행 방법
### 1. repository clone
```
$ git clone https://github.com/seonsy44/vehicle-rental-service.git
```

### 2. `.env.local` 파일 생성
```
REACT_APP_BASE_URL = "https://preonboarding.platdev.net/api/"
```

### 3. 의존성 설치 및 실행
```
npm install
npm start
```

<br/>

# 기술스택
- React
- TypeScript
- Styled-Components
- Axios

<br/>

# 폴더구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📜Container.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜SectionList.tsx
 ┃ ┣ 📜TagLarge.tsx
 ┃ ┣ 📜TagRaw.tsx
 ┃ ┗ 📜TagSmall.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useGetVehicles.ts
 ┣ 📂pages
 ┃ ┣ 📂Error
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂VehicleDetail
 ┃ ┃ ┣ 📜SectionHeader.tsx
 ┃ ┃ ┣ 📜SectionItem.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂VehicleList
 ┃ ┃ ┣ 📜Category.tsx
 ┃ ┃ ┣ 📜VehicleItem.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┣ 📜mixin.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂types
 ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┣ 📜axiosInstance.ts
 ┃ ┣ 📜const.ts
 ┃ ┗ 📜utils.ts
 ┣ 📜App.tsx
 ┗ 📜index.tsx
 ```
