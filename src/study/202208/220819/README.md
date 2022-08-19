# SCSS 간단 정리
## 색상 내장 함수
### html
```
<div class="box"></div>
<div class="box build-in"><div>
```

### scss
```
.box {
    $color: royalblue;
    width:200px;
    height:100px;
    border-radius:$color;
    background-color:$color;
    &.built-in {
        background-color: mix($color, red);
        background-color: lighten($color, 10%);
        background-color: darken($color, 10%);
        background-color: saturate($color, 10%);
        background-color: desaturate($color, 10%);
        background-color: grayscale($color);
        background-color: invert($color);
        background-color: rgba($color), .5;
    }
}
```

## 가져오기
> 다른 scss에 연결하려면  
@import "경로"  / "경로", "경로" ...  

## 데이터 종류
> number, string, color, boolean, null, list, map  

## 반복문 @each  
```
$list: orange, royalblue, yellow;
$map: (
    o:orange;
    r:royalblue;
    y:yellow;
)
@each $c in $list {
    .box {
        color: $c;
    }
}
@each $key, $value in $map {
    .box-#{$key} {
        color: $value;
    }
}
```
### 컴파일되면 나타나는 코드  
```
.box {
    color: orange;
}

.box {
    color: royalblue;
}

.box {
    color: yellow;
}

.box-o {
    color:orange;
}

.box-r {
    color:royalblue;
}

.box-y {
    color: yellow;
}
```

## 재활용 @content  
```
@mixin left-top {
    position:absolute;
    top:0;
    left:0;
    @content
}

.container {
    width:100px;
    height:100px;
    @include left-top;
}
.box {
    width:200px;
    height:300px;
    @include left-top {
        bottom:0;
        right:0;
        margin: auto;
    }
}
```
### 컴파일되면 나타나는 코드  
```
.container {
    width:100px;
    height:100px;
    position:absolute;
    top:0;
    left:0;
}
.box {
    width:200px;
    height:300px;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin:auto;
}
```

출처  
https://fastcampus.co.kr/