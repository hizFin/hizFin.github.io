---
title: "Python 기초"
description:
date: 2023-07-03 14:28:00
update: 2023-07-03 14:28:00
category: python
tags:
  - python
---

##  기본 함수 

### for문

```python
data = ['a','b','c','d']
```
#### for문 - range

```python
for i in range(4):
    print(i)        # 0, 1, 2, 3
    print(data[i])  # a, b, c, d
```

#### for문 - range(startIdx, endIdx, step)

```python
for i in range(0,4,1):
    print(data[i])  # a, b, c, d
```

#### for문 - 역행

```python
for i in reversed(data):
    print(i)        # d, c, b, a
```
