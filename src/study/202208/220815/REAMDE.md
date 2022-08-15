# SCSS 간단 정리
## 산술 연산  
### ex - 1
```
div {
    width:20px + 20px;
    hegiht:40px - 10px;
    font-size: 10px * 2;
    margin: 30px / 2;
    padding: 20px % 7;
}
span {
    font-size:10px;
    line-height:10px;
    font-family:serif;
    font : 10px / 10px serif
}
```
### 컴파일되면 나타나는 코드  
```
div {
    width:40px;
    height:30px;
    font-size:20px;
    margin: 30px/2;
    padding:7px;
}
span {
    font-size:10px;
    line-height:10px;
    font-family: serif;
    font:10px/10px serif;
}
```
> 단축 속성을 사용하는 것처럼 / 를 사용하면 나누기가 되지 않는다.  
그래서 나누기가 되게 하려면  
1.중괄호로 묶는다. ()
2.변수를 만들어서 할당한다.
3.다른 연산자와 함께 사용한다.  

## 재활용 (Mixin)
### ex - 1
```
@mixin center {
    display:flex;
    justify-content:center;
    align-items:center;
}

.container {
    @include center;
    .item {
        @include center;
    }
}

.box {
    @include center'
}
```
### 컴파일되면 나타나는 코드  
```
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
> 인수 활용, 키워드 인수
### ex - 2
```
@mixin box($size: 80px, $color: tomato) {
    width: $size;
    height: $size;
    background-color: $color;
}

.container {
    @include box(200px, red);
    .item {
        @include box($color: green);
    }
}
.box {
    @include box(100px);
}
```
### 컴파일되면 나타나는 코드  
```
.container {
  width: 200px;
  height: 200px;
  background-color: red;
}
.container .item {
  width: 80px;
  height: 80px;
  background-color: green;
}

.box {
  width: 100px;
  height: 100px;
  background-color: tomato;
}
```
## 반복문  
```
@for $i from 1 through 10 {
    .box:nth-child(#{$i}) {
        width:100px * $i;
    }
}
```
### 컴파일되면 나타나는 코드  
```
.box:nth-child(1) {
  width: 100px;
}

.box:nth-child(2) {
  width: 200px;
}

.box:nth-child(3) {
  width: 300px;
}

.box:nth-child(4) {
  width: 400px;
}

.box:nth-child(5) {
  width: 500px;
}

.box:nth-child(6) {
  width: 600px;
}

.box:nth-child(7) {
  width: 700px;
}

.box:nth-child(8) {
  width: 800px;
}

.box:nth-child(9) {
  width: 900px;
}

.box:nth-child(10) {
  width: 1000px;
}
```
> 문자 보간을 활용한다. 

## 함수  
```
@mixin center {
    display:flex;
    justify-content:center;
    align-item:center
}

@function ratio($size, $ratio) {
    @return $size * $ratio
}

.box {
    $width: 100px;
    width: $width;
    height:ratio($width, 1/2);
    @include center
}
```
### 컴파일되면 나타나는 코드  
```
.box {
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-item: center;
}
```
> mixin, function의 차이점  
mixin => css 코드의 모음  
function => 반환된 결과를 활용 


출처  
https://fastcampus.co.kr/
