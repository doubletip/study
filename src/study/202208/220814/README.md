# SCSS 간단 정리
## scss 설치  
> npm install node-sass  

## 중첩 (Nesting)
```
.container {
    ul {
        li {
            font-size: 40px;
            .name {
                color:royalblue;
            }
            .age {
                color:orange;
            }
        }
    }
}
```
### 컴파일되면 나타나는 코드  
```
.container ul li {
    font-size:40px;
}
.container ul li .name {
    color:royalblue;
}
.container ul li .age {
    color:orange;
}
```

> 자식 선택자가 필요한 경우에는 선택자의 앞부분에 ">" 를 추가한다.  

## 상위 선택자 참조 ( & )  
### ex - 1
```
.btn {
    position: absolute;
    &.active {
        color: red;
    }
}  

.list {
    li {
        &:last-child {
            margin-right:0;
        }
    }
}
```
### 컴파일되면 나타나는 코드  
```
.btn {
    position:absolute;
}
.btn.active {
    color:red;
}
.list li:last-child {
    margin-right:0;
}
```
### ex - 2  
```
.fs {
    &-small {font-size:12px;}
    &-medium {font-size:14px;}
    &-large {font-size:16px;}
}
```
### 컴파일되면 나타나는 코드  
```
.fs-small {font-size:12px;}
.fs-medium {font-size:14px;}
.fs-large {font-size:16px;}
```

## 중첩된 속성  
```
.box {
    font: {
        weight: bold;
        size:10px;
        family: sans-serif;
    };
    margin: {
        top:10px;
        left:20px;
    };
    paddig: {
        top:10px;
        bottom:40px;
        left:20px;
        right:30px;
    };
}
```
### 컴파일되면 나타나는 코드  
```
.box {
    font-weight:bold;
    font-size:10px;
    font-family:sans-serif;
    margin-top:10px;
    margin-left:20px;
    padding-top:10px;
    padding-bottom:40px;
    padding-left:20px;
    padding-right:30px;
}
```

## 변수 (Variables)
```
$size: 100px;

.container {
    position: fixed;
    top:$size;
    .item {
        width:$size;
        height:$size;
        transform:translateX($size);
    }
}
```
### 컴파일되면 나타나는 코드  
```
.container {
    position:fixed;
    top:100px;
}
.container .item {
    width:100px;
    height:100px;
    transform:translateX(100px);
}
```
> 변수는 반복적으로 사용될 때 유용함  
유효범위가 존재함 ( 전역변수 , 지역변수)
변수가 재할당 되면 재할당된 값으로 사용이 된다.


출처  
https://fastcampus.co.kr/
