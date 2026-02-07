# 🚀 limssong's Portfolio

개발자 임송희의 포트폴리오 웹사이트입니다. 
React를 사용하여 구축되었으며, GitHub Pages를 통해 배포됩니다.

## ✨ 주요 기능

- **포트폴리오 프로젝트 전시**: 다양한 개발 프로젝트를 카드 형태로 표시
- **동적 데이터 로딩**: 외부 JSON 파일에서 포트폴리오 정보를 가져와 동적으로 표시
- **반응형 디자인**: 모바일과 데스크톱 환경에 최적화된 UI

## 🛠️ 기술 스택

- **Frontend**: React 18.2.0
- **HTTP Client**: Axios
- **배포**: GitHub Pages
- **언어**: JavaScript (ES6+)

## 📁 프로젝트 구조

```
src/
├── components/
│   └── AdSense.jsx          # Google AdSense 광고 컴포넌트
├── config/
│   └── adsense.js           # AdSense 설정 파일
├── pages/
│   ├── FatchData.jsx        # 포트폴리오 데이터 가져오기
│   ├── Portfoliolist.jsx    # 포트폴리오 목록 컴포넌트
│   └── Cardlayout.jsx       # 포트폴리오 카드 레이아웃
├── App.js                   # 메인 애플리케이션 컴포넌트
└── App.css                  # 스타일시트
```

## 🚀 시작하기

### 필수 요구사항
- Node.js (v14 이상)
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/limssong/portfolio.git
   cd portfolio
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm start
   ```
   브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속

4. **프로덕션 빌드**
   ```bash
   npm run build
   ```

## 🌐 배포

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다.

- **배포 URL**: [https://limssong.github.io/portfolio/]
- **배포 명령어**: `npm run deploy`


## 📝 포트폴리오 데이터 구조

외부 JSON 파일에서 포트폴리오 정보를 가져옵니다:

```json
{
  "myPortfolio": [
    {
      "title": "프로젝트 제목",
      "desc": "프로젝트 설명",
      "skill": "사용 기술",
      "date": "개발 기간",
      "url": "프로젝트 링크",
      "target": "_blank",
      "imgUrl": "썸네일 이미지 URL"
    }
  ]
}
```

## 🔧 개발 환경 설정

### ESLint 설정
- React App 기본 ESLint 규칙 사용
- 코드 품질 및 일관성 유지

### 브라우저 지원
- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 📱 반응형 디자인

- **모바일 우선**: 모바일 환경에 최적화된 UI
- **그리드 시스템**: CSS Grid를 활용한 유연한 레이아웃
- **미디어 쿼리**: 다양한 화면 크기에 대응

## 🚀 성능 최적화

- **React 18**: 최신 React 기능 활용
- **컴포넌트 분리**: 재사용 가능한 컴포넌트 구조
- **이미지 최적화**: 적절한 이미지 크기 및 포맷 사용

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 연락처

- **GitHub**: [@limssong](https://github.com/limssong)
- **포트폴리오**: [https://limssong.github.io/portfolio/]

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
