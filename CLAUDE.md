# CLAUDE.md

이 파일은 이 저장소에서 작업할 때 Claude Code(claude.ai/code)에 제공되는 안내 문서입니다.

## 프로젝트 개요

빌드 단계, 의존성, 패키지 매니저가 없는 순수 정적 HTML 프로젝트입니다.

## 실행 방법

`index.html`을 브라우저에서 직접 열면 됩니다:

```powershell
Start-Process index.html
```

## 아키텍처

파일 3개로 역할이 분리되어 있습니다:

- `index.html` — 마크업 뼈대. `style.css`와 `script.js`를 로드하며, 명언 카드 DOM 요소(`#quoteText`, `#quoteAuthor`, `#category` 등)와 이전/다음 버튼을 정의합니다.
- `style.css` — 전체 스타일. 어두운 남색 그라데이션 배경, 골드(`#e2c27d`) 포인트 컬러, 카드 페이드 전환 애니메이션(`.fade-out` 클래스)을 포함합니다.
- `script.js` — 명언 데이터(100개 배열)와 네비게이션 로직. `changeQuote(direction)` 함수가 `.fade-out` 클래스를 토글하며 350ms 후 `current` 인덱스를 변경합니다. 키보드 `←` `→` 방향키도 지원합니다.

## 명언 추가 방법

`script.js`의 `quotes` 배열에 아래 형식으로 객체를 추가합니다:

```js
{ text: "명언 내용", author: "저자명", origin: "Author Name · 직함", category: "카테고리" }
```
