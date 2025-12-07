# 밧데리몬스터 - 산업용 배터리 설치 전문

365일 24시간 긴급 출동 가능한 산업용 배터리 전문 설치 웹사이트입니다. Astro와 Tailwind CSS로 구축된 현대적이고 반응형 웹사이트입니다.

![Astro](https://img.shields.io/badge/Astro-5.15.3-FF5D01?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.16-38B2AC?logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)

## 주요 기능

- **현대적인 디자인**: Tailwind CSS로 구축된 깔끔하고 반응형 UI
- **빠른 성능**: Astro의 정적 사이트 생성으로 최적화된 로딩 속도
- **포괄적인 콘텐츠**:
  - 히어로 섹션과 주요 통계
  - 서비스 소개 (산업용/자동차/중장비 배터리)
  - 제휴 브랜드 (델코, 로케트, 아트라스BX 등)
  - 핵심 경쟁력
  - 4단계 설치 절차
  - 주요 레퍼런스 (금융, 병원, 공공기관 등)
  - 고객 후기
  - FAQ 섹션
  - 긴급 출동 CTA
- **반응형 레이아웃**: 모든 기기에서 작동하는 모바일 우선 디자인
- **접근성**: 접근성 모범 사례로 구축
- **SEO 최적화**: 적절한 메타 태그 및 시맨틱 HTML

## 빠른 시작

### 사전 요구사항

- Node.js 18+ 및 npm (또는 yarn/pnpm)

### 설치

1. 저장소 복제:
```bash
git clone https://github.com/yourusername/battery-monster-website.git
cd battery-monster-website
```

2. 의존성 설치:
```bash
npm install
```

3. 개발 서버 시작:
```bash
npm run dev
```

4. 브라우저에서 `http://localhost:4321` 열기

## 사용 가능한 스크립트

| 명령어                | 동작                                           |
| :-------------------- | :--------------------------------------------- |
| `npm install`         | 의존성 설치                                    |
| `npm run dev`         | `localhost:4321`에서 로컬 개발 서버 시작       |
| `npm run build`       | `./dist/`에 프로덕션 사이트 빌드               |
| `npm run preview`     | 배포 전 로컬에서 빌드 미리보기                 |
| `npm run astro ...`   | `astro add`, `astro check` 같은 CLI 명령어 실행|

## 프로젝트 구조

```
/
├── public/
│   ├── favicon.svg              # 사이트 파비콘
│   └── battery-monster-logo.png # 로고 이미지
├── src/
│   ├── assets/                  # 이미지 및 정적 자산
│   ├── components/              # Astro 컴포넌트
│   │   ├── BatteryHero.astro
│   │   ├── BatteryServices.astro
│   │   ├── BatteryBrands.astro
│   │   ├── BatteryFeatures.astro
│   │   ├── BatteryProcess.astro
│   │   ├── BatteryReferences.astro
│   │   ├── BatteryTestimonials.astro
│   │   ├── BatteryFAQ.astro
│   │   ├── BatteryCTA.astro
│   │   ├── Statistics.astro
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── siteData.ts          # 사이트 설정 및 데이터
│   ├── layouts/
│   │   └── Layout.astro         # 메인 레이아웃 컴포넌트
│   ├── pages/                   # 라우트 페이지
│   │   └── index.astro          # 홈페이지
│   └── styles/
│       └── global.css           # 전역 스타일
├── astro.config.mjs             # Astro 설정
├── package.json                 # 프로젝트 의존성
└── tsconfig.json                # TypeScript 설정
```

## 커스터마이징

### 사이트 정보 업데이트

`src/data/siteData.ts`를 편집하여 커스터마이징:
- 회사명 및 태그라인
- 연락처 정보 (주소, 전화번호, 이메일)
- 소셜 미디어 링크
- 서비스 정보
- 브랜드 파트너
- 핵심 경쟁력
- FAQ
- 고객 후기

### 스타일링

프로젝트는 스타일링을 위해 Tailwind CSS를 사용합니다:
- 전역 스타일은 `src/styles/global.css` 수정
- 컴포넌트에서 직접 Tailwind 유틸리티 클래스 사용
- 필요시 Tailwind 설정 커스터마이징 (테마 변수 사용)

### 새 페이지 추가

1. `src/pages/`에 새 `.astro` 파일 생성
2. 파일명이 라우트가 됩니다 (예: `services.astro` → `/services`)
3. `src/layouts/Layout.astro`에서 `Layout` 컴포넌트 가져와서 사용

## 배포

### 프로덕션 빌드

```bash
npm run build
```

배포 준비가 된 정적 사이트가 포함된 `dist/` 폴더가 생성됩니다.

### 다양한 플랫폼에 배포

**Vercel:**
```bash
npm i -g vercel
vercel
```

**Netlify:**
- 저장소를 Netlify에 연결
- 빌드 명령어 설정: `npm run build`
- 퍼블리시 디렉토리 설정: `dist`

**GitHub Pages:**
- `astro.config.mjs`에서 기본 URL 업데이트
- GitHub Actions 사용 또는 수동 배포

**기타 플랫폼:**
- 모든 정적 호스팅 서비스 (Cloudflare Pages, AWS S3 등)

## 기술 스택

- **[Astro](https://astro.build)** - 빠르고 콘텐츠 중심 웹사이트를 위한 웹 프레임워크
- **[Tailwind CSS](https://tailwindcss.com)** - 유틸리티 우선 CSS 프레임워크
- **[TypeScript](https://www.typescriptlang.org)** - 타입이 있는 JavaScript
- **[Remix Icon](https://remixicon.com)** - 아이콘 라이브러리

## 색상 테마

- **Primary (Yellow-Gold)**: oklch(76% 0.15 85) - 배터리 브랜딩을 위한 밝은 노란색-골드
- **Background**: Slate-900, Slate-800 - 산업적인 다크 테마
- **Text**: White, Slate-300 - 높은 가독성

## 연락처

문의 사항이나 지원이 필요하시면 연락주세요:
- 전화: 010-3700-3859
- 이메일: maxdm8404@daum.net
- 본사: 경기도 김포시 금포로 1517 2층(운양동)
- 서울 지점: 서울 서초구 방배동 770 오릭스오피스텔 1004

---

산업 현장의 전력 파트너, 밧데리몬스터
