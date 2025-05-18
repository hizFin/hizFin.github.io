---
title: "gatsby 블로그 만들기"
description:
date: 2023-06-25 14:22:00
update: 2023-06-25 14:22:00
category: etc
tags:
  - gatsby
  - github
  - hoodie
series: "gatsby 블로그 시작하기"
seq: "2"
---

기존 jekyll 테마를 이용해서 사용중이었는데 ruby가 계속 말썽을 일으켜
gatsby를 이용해보기로 했다.  

* hoodie 템플릿을 이용
* github pages 연동
  
시스템 환경 : Mac OS(Silicon M1)  


# 1. gatsby 블로그 생성

## 개발환경 구축

### nodeJS 설치

homebrew를 통해서 nodeJS를 설치해보자.  

**nodeJS 18버전 설치**

```shell
brew install node@18
```

**nodeJS 18버전을 연결**

```shell
brew link --overwrite node@18
```

**nodeJS 버전 확인**  
위 연결 과정을 거치지 않으면 node 명령어는 수행되지 않는다.
```shell
node -v
```

### git 설치

**git 설치**  

```shell
brew install git
```

**git 버전 확인**  

```shell
git -v
```

## gatsby 환경 구축

### Gatsby CLI(커맨드 라인 인터페이스) 설치

프로젝트 파일을 만들 위치로 이동해서 CLI 설치

```shell
cd /Users/choeyeongjun/Documents/git # 위치 이동(프로젝트 생성 할 곳)
npm install -g gatsby-cli            # Gatsby CLI 설치
```

### 템플릿 설치

**템플릿 설치**

```shell
# npx gatsby new [블로그명] [템플릿주소]
npx gatsby new hizFin.github.io https://github.com/devHudi/gatsby-starter-hoodie 
```
* hoodie 템플릿 이용
  
**로컬 빌드**

```shell
cd hizFin.github.io # 위치 이동(프로젝트 폴더 내)
gatsby build        # 로컬 빌드
```
빌드를 하게 되면 정적 html 페이지를 재생성해서 사이트를 최적화 시킨다(public 폴더 내 생성)
이후 배포는 public 폴더 내에 있는 파일을 기반으로 이루어진다.


**로컬 배포**

```shell
npm run start       # 로컬 배포(자동 빌드)
```
* 배포 후 `http://localhost:8000`에서 확인 가능


# 2. github pages와 연동

## github 레퍼지토리 생성

github 홈페이지에서 레퍼지토리를 생성하면 된다.
* github pages로 사용하기 위해서는 `public` 으로 설정 필요

## github과 연동

```shell
cd hizFin.github.io # 위치 이동(프로젝트 폴더 내)
git init            # git 생성
git remote add origin https://github.com/hizFin/hizFin.github.io  # git과 원격레퍼지토리 연결
```

# 3. 서버 배포

```shell
 npm run deploy-gh
```
서버 배포 후 웹에서 `github레퍼지토리명`으로 검색하면 정상적으로 배포됐는지 확인이 가능하다.  
위 명령어는 pakage.json에 기입된 명령어(`gatsby build && gh-pages -d public`)를 호출하게 된다.  
* 빌드 후 github에 gh-pages 브랜치로 빌드파일(public 폴더 내) add, push하게 되고 이후 github에서 배포를 진행하게 된다.  


> ⚠️오류발생 : [Failed to get remote.origin.url](https://hizFin.github.io/012-fix-git-remote/)




# Z. 기타


빌드 초기화

```shell
 gatsby clean
```

로컬 빌드

```shell
 gatsby build
```



# 참고

gatsby 설치1 : https://richwind.co.kr/165  
gatsby 설치2 : https://hislogs.com/make-gatsby-blog/  
gatsby 개념 : https://congjang.medium.com/개발-모르는-디자이너-gatsbyjs-사이트-제작-도전기-1-1d557b4155d9  
hoodie 템플릿 설명서: https://github.com/devHudi/gatsby-starter-hoodie/blob/develop/README-kr.md  