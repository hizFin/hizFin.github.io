---
# NO : 006
title: "[Sql] 정규식 이용하여 SQL쿼리 소스테이블 한번에 찾기"
date: 2023-01-10 21:00:00
update: 2023-01-10 21:00:00
category: sql
tags: 
    - sql
    - tip
    - 정규식
    - oracle
    - postgresql
    - tibero
---

![](006_01.png)


### 정규식 이용하여 SQL쿼리 소스테이블 한번에 찾기

- 찾는 문자열
  
```text
(FROM|JOIN)[ \t\r\n\v\f]+[a-zA-Z]
```

- 문자열 내용 : `[FROM 또는 JOIN] & [공백,탭,개행]1개이상 & [영문자]`

- 결과
![img2](006_02.png)


