# MOVE WOO - 이우현 프로필 웹사이트

Sports Science 전공 기반 러닝·훈련 기록과 스포츠 코칭 관점의 성장 콘텐츠

## 기술 스택

- HTML5
- CSS3 (Advanced Animations & Transitions)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter, Noto Sans KR)

## 주요 기능

### 이미지 갤러리
- HYROX Seoul 2025 대회 사진 3장
- Nike Run Jeju 10K 대회 사진 3장
- 라이트박스 기능 (이미지 클릭 시 확대)
- 호버 시 오버레이 정보 표시
- 반응형 그리드 레이아웃

### 애니메이션 효과
- 스크롤 기반 페이드인 애니메이션
- 카드 스태거 애니메이션
- 패럴랙스 스크롤 효과
- 호버 시 3D 틸트 효과
- 마그네틱 효과 (버튼/아이콘)
- 리플 효과 (버튼 클릭)
- 그라데이션 애니메이션
- 플로팅 애니메이션
- 커서 트레일 효과
- 프로그레스 바 (스크롤 진행도)
- 이미지 줌 애니메이션

### 반응형 디자인
- 모바일 (< 480px)
- 태블릿 (480px - 1024px)
- 데스크톱 (> 1024px)

### 섹션 구성
1. Hero - 메인 비주얼 및 소개
2. About - 배경 및 학력
3. Highlights - 주요 성과 (HYROX Seoul 2025, Nike Run Jeju 10K)
4. Experience - NIKE GANGNAM 경력
5. Certifications - 자격증
6. Skills - 기술 역량
7. Gallery - 대회 사진 갤러리 (HYROX 3장, Nike Run Jeju 3장)
8. Contact - 연락처

## 브라우저 호환성

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 사용 방법

1. `index.html` 파일을 브라우저로 열기
2. 또는 로컬 서버 실행:
   ```bash
   python -m http.server 8000
   ```
   그 후 `http://localhost:8000` 접속

## 파일 구조

```
move_woo/
├── index.html          # 메인 HTML
├── styles.css          # 스타일시트
├── script.js           # JavaScript 애니메이션 & 라이트박스
├── 이우현.jpeg         # 프로필 이미지
├── hyrox1.jpeg         # HYROX 대회 사진 1
├── hyrox2.jpeg         # HYROX 대회 사진 2
├── hyrox3.jpeg         # HYROX 대회 사진 3
├── runjeju1.jpeg       # Nike Run Jeju 사진 1
├── runjeju2.jpeg       # Nike Run Jeju 사진 2
├── runjeju3.jpeg       # Nike Run Jeju 사진 3
└── README.md           # 문서
```

## 커스터마이징

### 색상 변경
`styles.css` 파일의 `:root` 섹션에서 CSS 변수 수정:

```css
:root {
    --primary-color: #000000;
    --secondary-color: #ffffff;
    --accent-color: #ff6b35;
    /* 기타 색상 변수 */
}
```

### 콘텐츠 수정
`index.html` 파일에서 텍스트 및 링크 수정

### 이미지 교체
`이우현.jpeg` 파일을 원하는 이미지로 교체하거나,
`index.html`에서 이미지 경로 수정

## 성능 최적화

- Intersection Observer API 사용
- Debounce를 통한 스크롤 이벤트 최적화
- RequestAnimationFrame을 통한 애니메이션 최적화
- CSS Transform 및 Opacity를 활용한 GPU 가속

## 접근성

- 시맨틱 HTML 마크업
- 적절한 대비율 (WCAG 기준)
- 키보드 네비게이션 지원
- 스크린 리더 호환

## 라이선스

© 2026 MOVE WOO. All rights reserved.
