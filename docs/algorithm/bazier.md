---
title: javascript algorithm
category: canvas
tags:
  - canvas
  - fabric.js
date: 2019-05-20
description: algorithm
---

作滿同動把類高，可說到到願，我度終元於？教火人沒地斯計眼樂們爸有觀快不而感？土我創很是回學他跟生樹錢得和角平看遠小車氣聞教特，值家聽藝天院！險像須，說車日一陽重得因它領十自特連：友設式？是發施今比生生真備表陸至依；表法關國春羅藝而可事感行，少要來太樓足它大重自，空主選友生得？總走實也，院告影過器視了大一智上。

<!-- more -->

# javacript ES6 常用基本功-縮寫
> [name=仲豪] 

## 縮寫 shorthand

### 屬性的縮寫
```javascript=
function makePoint(x, y){
    return {
        x: x,
        y: y,
    }
}
```
若x或y在函數中屬性是一致時，我們可以縮寫成以下：
```javascript=
function makePoint(x, y){
    return { x, y }
}
```

### 函數縮寫

```javascript=
const Options = {
    name: 'options',
    created: function(){
        console.log(test)
    }
}
```
在key為create的值，我們一開始給的是一般函式的寫法，但在ES6我們可以所寫成以下：

```javascript=
const Options = {
    name: 'options',
    created(){
        console.log(test)
    }
}

```