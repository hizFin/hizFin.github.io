---
title: "오류 : Failed to get remote.origin.url"
description:
date: 2023-06-18 23:28:00
update: 2023-06-18 23:28:00
category: etc
tags:
  - gatsby
series: "gatsby 블로그 시작하기"
---




##  오류 내용

```text
Failed to get remote.origin.url (task must either be run in a git repository
with a configured origin remote or must be configured with the "repo" option)
```

## 언제
블로그 배포 실행 간 발생
```javascript
npm run deploy-gh
```

## 원인
이전에 git 원격 정보 변경작업(별칭:origin -> master)이 있었는데 배포 실행 간 default 별칭인 origin으로 연결시도를 하는 것으로 보임
```text
# 현재 원격정보 조회
git remote -v

master	https://github.com/hizFin/hizFin.github.io (fetch)
master	https://github.com/hizFin/hizFin.github.io (push)
```
### 원인 상세

1. 해당명령어(`npm run deploy-gh`)는 package.json에 저장된 스크립트로 연결 및 실행됨

```text
# package.json 
"deploy-gh": "gatsby build && gh-pages -d public"

# gatsby build : local에서 빌드파일을 만듦(public 폴더에 생성)
# gh-pages -d public : public에 빌드된 파일을 gh-pages로 지정한 branch로 git 연결/배포
```

2. git 원격저장소 연결과정에서 오류 발생

3. git 원격저장소 별칭 조회

```
git remote -v
master	https://github.com/hizFin/hizFin.github.io (fetch)
master	https://github.com/hizFin/hizFin.github.io (push)
```

## 해결

1. master 별칭 삭제

```text
git remote remove master
```

2. origin 별칭 추가(default : origin)

```text
git remote add origin https://github.com/hizFin/hizFin.github.io
```

3. git 원격 정보 확인

```text
git remote -v

origin  https://github.com/hizFin/hizFin.github.io (fetch)
origin  https://github.com/hizFin/hizFin.github.io (push)
```



