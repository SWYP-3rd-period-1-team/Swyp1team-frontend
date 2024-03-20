# 직짱건강 (JobJjangHealth)
스위프 3기 1팀 프로젝트 (프론트)

## 프로젝트 개요
- "직짱건강" 프로젝트는 직장인 대상의 건강 관리 서비스로, 사용자의 증상을 바탕으로 한 건강 설문을 제공하고 위치 기반 병원 추천, 별점 및 리뷰 기반 병원 선택, 건강 관리 캘린더 등을 통해 올인원 건강 관리 솔루션을 제공합니다.
- 팀은 기획자, 디자이너, 프론트엔드 개발자, 백엔드 개발자로 구성되었으며, 협업 도구로 디스코드, 피그마, 노션, 스위프를 활용해 효율적인 프로젝트 관리와 개발 과정을 진행했습니다.
- 프로젝트의 기획 배경은 의료 정보의 불균형 해소 및 직장인들의 건강 관리 필요성에서 출발하였으며, 데스크 리서치와 기획자의 경험을 바탕으로 서비스 아이디어를 구체화했습니다.

### 파일 구조
```
JopJangHealth-frontend
├── mock                // 모의(가짜) 데이터 파일
├── public              // 정적 파일 (이미지, favicon 등) 디렉토리
│   ├── assets          // 로컬 이미지 폴더
│   ├── fonts           // 폰트 파일
│   ├── _redirects      // 리디렉션 설정 파일
│   ├── favicon.ico     // 웹사이트 아이콘
│   └── index.html      // 메인 HTML 파일
├── src                 // 소스 코드 디렉토리
│   ├── components      // 리액트 컴포넌트 디렉토리
│   │   ├── CalendarOption
│   │   ├── common        // 공통 컴포넌트
│   │   ├── MyPage     
│   │   └── Share   
│   ├── hooks           // 리액트 훅 파일
│   │   ├── react-query 
│   │   ├── useAuthRedirect.ts 
│   │   ├── useAxiosConfig.ts
│   │   ├── useResponsiveDevice.ts
│   │   ├── useSaveLocalContent.ts
│   │   └── useToken.ts
│   ├── pages           // 페이지 컴포넌트
│   │   ├── Calendar    
│   │   ├── Find       
│   │   ├── Home      
│   │   ├── Join        
│   │   ├── Like        
│   │   ├── Login       
│   │   ├── Map         
│   │   ├── MyPage   
│   │   ├── Search     
│   │   ├── Survey     
│   │   ├── _app.tsx    
│   │   ├── _document.tsx 
│   │   └── index.tsx  
    ├── state          
    ├── styles        
    ├── types         
    └── utils          
```

### 사전 요구사항 (최소)
- `node` : `v12.22.0`,
- `npm` : `v6.9.0`,
- `next`: `v12.3.4`,
- `react`: `v18.2.0`,

### 프론트 기능 기술 요약
- Recoil을 사용하여 React 애플리케이션의 전역 상태 관리를 수행, 복잡한 데이터 흐름을 효과적으로 관리하며, "atoms"와 "selectors"를 통해 상태 관리 로직을 간소화하고 성능 최적화를 달성했습니다.
- Google Maps API를 통합하여 사용자 경험을 개선, 병원 목록을 지도 상에 시각적으로 표현하고, 댓글과 별점 기능으로 커뮤니티 형성 및 정보 공유를 촉진했습니다.
- React Query의 도입으로 애플리케이션 내 비동기 데이터 관리의 복잡성을 줄이고, 데이터 캐싱 및 자동 동기화를 통해 애플리케이션의 성능과 사용자 경험을 크게 향상시켰습니다.

### 주요 서비스 구현 가이드
1. 건강 설문 기능:
   사용자가 입력한 증상을 바탕으로 건강 상태에 대한 설문을 진행합니다. 이 설문은 사용자의 현재 건강 상태를 파악하기 위해 설계되었으며, 이 데이터를 바탕으로 사용자에게 맞춤형 건강 관리 정보를 제공합니다.



2. 위치 기반 병원 추천:
   사용자의 현재 위치 정보를 활용하여 주변의 병원을 추천합니다. 이 기능은 Google Maps API를 통합하여 구현되었으며, 사용자는 지도 상에서 병원의 위치를 쉽게 확인할 수 있고, 병원까지의 경로도 파악할 수 있습니다.



3. 병원 리뷰 및 별점 기능:
   각 병원에 대한 리뷰와 별점을 제공하여, 사용자가 병원을 선택할 때 유용한 정보를 얻을 수 있게 합니다. 이 기능을 통해 사용자는 다른 이용자들의 경험을 바탕으로 더 신뢰할 수 있는 의료 서비스 선택을 할 수 있습니다.



6. 건강 관리 캘린더:
   사용자가 자신의 건강 관리 스케줄을 계획하고 관리할 수 있도록 도와주는 캘린더 기능을 제공합니다. 이 캘린더에는 의사 방문 일정, 건강 검진 일정 등 사용자가 관리해야 할 건강 관련 일정을 기록하고 추적할 수 있습니다.


   
7. 사용자 계정 및 인증 기능:
   이메일 인증과 JWT를 활용한 로그인 과정을 통해 사용자 계정을 안전하게 관리합니다. 사용자는 자신의 계정을 통해 개인화된 서비스를 이용할 수 있으며, 건강 정보와 개인 설정을 안전하게 저장할 수 있습니다.



8. 찜 기능:
   사용자가 특정 병원을 '찜'하고, 이를 자신의 계정에서 쉽게 접근할 수 있는 기능을 추가했습니다. 이 기능을 통해 사용자는 관심 있는 병원을 저장하고, 나중에 빠르게 접근하여 정보를 확인하거나 예약할 수 있습니다.



9. 마이페이지 기능:
   사용자는 마이페이지를 통해 자신의 개인 정보, 설문 응답 결과등을 확인할 수 있습니다. 이 기능은 사용자가 자신의 건강 관리 정보를 한 눈에 볼 수 있도록 중앙화된 관리 시스템을 제공합니다. 또한, 개인 설정 변경이나 비밀번호 변경 같은 계정 관리 기능도 이곳에서 이루어집니다.



10. 질병 관리 리스트:
   사용자는 자신이 경험했거나 관심 있는 질병에 대한 정보를 관리할 수 있는 건강 설문 결과 리스트를 제공받습니다. 이 리스트에는 질병에 대한 기본 정보, 예방법, 관리법 등이 포함되어 있으며, 사용자는 이를 통해 자신의 건강 상태를 더 잘 이해하고 관리할 수 있습니다. 사용자는 질병 정보를 추가, 삭제하거나 관심 있는 내용을 북마크하여 나중에 쉽게 접근할 수 있습니다.
