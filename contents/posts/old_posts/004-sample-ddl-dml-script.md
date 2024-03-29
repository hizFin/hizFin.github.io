---
# NO : 004
title: "[Oracle] 샘플 테이블 DDL, DML script"
date: 2023-01-05 20:37:00
update: 2023-01-05 20:37:00
category: sql
tags: 
    - oracle
    - sql
    - 샘플
    - 샘플테이블
    - ddl
    - dml
---

![](004_01.png)

## 계정생성
```sql
CREATE USER [계정명] IDENTIFIED BY [패스워드];
```

## 권한 부여 (TABLESPACE 할당에 관한)
이유 : DML 작업 간 ``ORA-01950: 테이블스페이스 'DATA'에 대한 권한이 없습니다.`` 발생
```sql
ALTER USER [계정명] QUOTA UNLIMITED ON [테이블스페이스명];
```

## TABLESPACE 접근권한 확인
```sql
SELECT * 
FROM   DBA_TS_QUOTAS 
WHERE  1=1
AND    USERNAME = [계정명];
```


## DDL(Create) Script
```sql

/*----DDL 스크립트 목록-----
1. EMP (직원정보) / 7
-----------------------*/



/*------DDL script -----
1. EMP (직원정보)
-----------------------*/


-- DROP TABLE S_FNA.EMP CASCADE CONSTRAINTS PURGE;

CREATE TABLE S_FNA.EMP (
EMPNO NUMBER NOT NULL,
ENAME VARCHAR (10) ,
JOB VARCHAR (10) ,
MGR NUMBER ,
HIREDATE DATE ,
SAL NUMBER ,
COMM NUMBER 
) TABLESPACE DATA LOGGING NOCOMPRESS;
CREATE UNIQUE INDEX S_FNA.EMP_PK ON S_FNA.EMP ( EMPNO) TABLESPACE DATA LOGGING;
ALTER TABLE S_FNA.EMP ADD CONSTRAINT EMP_PK PRIMARY KEY(
EMPNO
) USING INDEX S_FNA.EMP_PK;


COMMENT ON TABLE S_FNA.EMP IS '직원정보';
COMMENT ON COLUMN S_FNA.EMP.EMPNO IS '직원번호';
COMMENT ON COLUMN S_FNA.EMP.ENAME IS '이름';
COMMENT ON COLUMN S_FNA.EMP.JOB IS '직업';
COMMENT ON COLUMN S_FNA.EMP.MGR IS '담당매니저';
COMMENT ON COLUMN S_FNA.EMP.HIREDATE IS '생일';
COMMENT ON COLUMN S_FNA.EMP.SAL IS '월급';
COMMENT ON COLUMN S_FNA.EMP.COMM IS '보너스';

```

## DML(Insert) Script

```sql

-- DML

INSERT INTO S_MGA.EMP VALUES( 7839, 'KING', 'PRESIDENT', NULL, TO_DATE('1996-11-17','YYYY-MM-DD'), 5000, NULL);
INSERT INTO S_MGA.EMP VALUES( 7698, 'BLAKE', 'MANAGER', 7839, TO_DATE('1991-1-05','YYYY-MM-DD'), 2850, NULL);
INSERT INTO S_MGA.EMP VALUES( 7782, 'CLARK', 'MANAGER', 7839, TO_DATE('1999-9-06','YYYY-MM-DD'), 2450, NULL);
INSERT INTO S_MGA.EMP VALUES( 7566, 'JONES', 'MANAGER', 7839, TO_DATE('2001-02-04','YYYY-MM-DD'), 2975, NULL);
INSERT INTO S_MGA.EMP VALUES( 7788, 'SCOTT', 'ANALYST', 7566, TO_DATE('2003-06-17','YYYY-MM-DD'), 3000, NULL);
INSERT INTO S_MGA.EMP VALUES( 7902, 'FORD', 'ANALYST', 7566, TO_DATE('1981-03-12','YYYY-MM-DD'), 3000, NULL);
INSERT INTO S_MGA.EMP VALUES( 7369, 'SMITH', 'CLERK', 7902, TO_DATE('2007-12-1','YYYY-MM-DD'), 800, NULL);
INSERT INTO S_MGA.EMP VALUES( 7499, 'ALLEN', 'SALESMAN', 7698, TO_DATE('20-2-1981','DD-MM-YYYY'), 1600, 300);
INSERT INTO S_MGA.EMP VALUES( 7521, 'WARD', 'SALESMAN', 7698, TO_DATE('22-2-1981','DD-MM-YYYY'), 1250, 500);
INSERT INTO S_MGA.EMP VALUES( 7654, 'MARTIN', 'SALESMAN', 7698, TO_DATE('28-9-1981','DD-MM-YYYY'), 1250, 1400);
INSERT INTO S_MGA.EMP VALUES( 7844, 'TURNER', 'SALESMAN', 7698, TO_DATE('8-9-1981','MM-DD-YYYY'), 1500, 0);
INSERT INTO S_MGA.EMP VALUES( 7876, 'ADAMS', 'CLERK', 7788, TO_DATE('13-7-87', 'DD-MM-YY'), 1100, NULL);
INSERT INTO S_MGA.EMP VALUES( 7900, 'JAMES', 'CLERK', 7698, TO_DATE('3-12-1981','MM-DD-YYYY'), 950, NULL);
INSERT INTO S_MGA.EMP VALUES( 7934, 'MILLER', 'CLERK', 7782, TO_DATE('2003-1-23','YYYY-MM-DD'), 1300, NULL);
INSERT INTO S_MGA.EMP VALUES( 7610, 'MILLER', 'SALESMAN', 7698, TO_DATE('2013-12-01','YYYY-MM-DD'), 1300, NULL);

COMMIT;

```
