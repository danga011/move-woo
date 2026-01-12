# MOVE WOO Portfolio

이우현 (WOOhyeon Lee) - Sports Science 전공 포트폴리오 웹사이트

## 웹사이트 방문
- **GitHub Pages**: https://danga011.github.io/movewoo/
- **로컬 서버**: `python3 -m http.server 8000` 실행 후 http://localhost:8000

## 영상 파일 추가 방법

프로젝트에 `video1.mp4`와 `video2.mp4` 파일을 추가해주세요.

```bash
# 프로젝트 폴더에 영상 파일을 복사
cp /경로/video1.mp4 /Users/danghyeonsong/move_woo/
cp /경로/video2.mp4 /Users/danghyeonsong/move_woo/

# Git에 추가 및 푸시
cd /Users/danghyeonsong/move_woo
git add video1.mp4 video2.mp4
git commit -m "Add training videos"
git push
```

**권장 영상 사양:**
- 해상도: 1080p 이하
- 길이: 30초 ~ 2분
- 용량: 50MB 이하 권장
- 형식: MP4 (H.264 코덱)

## 주요 기능

### 갤러리 구성
**HYROX Seoul 2025** (3장)
- hyrox1.jpeg
- hyrox2.jpeg  
- hyrox3.jpeg

**Nike Run Jeju 10K** (사진 2장 + 영상 2개)
- runjeju1.jpeg
- runjeju2.jpeg
- video1.mp4 (훈련 영상)
- video2.mp4 (훈련 영상)

### 비디오 기능
- 재생 버튼 오버레이
- 클릭 시 라이트박스로 영상 재생
- 자동 재생 및 컨트롤 바 표시
- 반응형 레이아웃

### 이미지 라이트박스
- 이미지 클릭 시 전체 화면 확대
- ESC 키 또는 X 버튼으로 닫기
- 부드러운 애니메이션

## 파일 구조

```
move_woo/
├── index.html           # 메인 HTML
├── styles.css           # 스타일 (비디오 스타일 추가)
├── script.js            # JavaScript (비디오 재생 기능)
├── profile.jpeg         # 프로필 사진
├── hyrox1.jpeg          # HYROX 사진 1
├── hyrox2.jpeg          # HYROX 사진 2
├── hyrox3.jpeg          # HYROX 사진 3
├── runjeju1.jpeg        # Nike Run 사진 1
├── runjeju2.jpeg        # Nike Run 사진 2
├── video1.mp4           # 훈련 영상 1 (추가 필요)
├── video2.mp4           # 훈련 영상 2 (추가 필요)
└── README.md            # 이 파일
```

## 기술 스택

- HTML5 (Video API)
- CSS3 (Grid, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter, Noto Sans KR)

## 반응형 디자인

- **데스크톱**: HYROX 3열, Nike Run 2열
- **태블릿**: HYROX 2열, Nike Run 1열  
- **모바일**: 모두 1열

## 배포

GitHub Pages로 자동 배포됩니다.

```bash
git add .
git commit -m "Update content"
git push
```

## 로컬 개발

```bash
cd /Users/danghyeonsong/move_woo
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## 라이선스

© 2026 MOVE WOO. All rights reserved.

## 연락처

- Email: woohyeonlee@naver.com
- Instagram: [@move_woo_](https://instagram.com/move_woo_)
- GitHub: [danga011](https://github.com/danga011)
