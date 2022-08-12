# SCSS 간단 정리
## CSS 전처리기  
css가 동작하기전에 먼저 사용이 된다.  

## SASS 와 SCSS의 차이점  
mixin 구문의 차이  
세미클론(;) 과 중괄호({})의 차이  
### sass  
```
.section
    width:300px
    height:300px
    .dep1
        color:red
        border:1px solid black
        font-size:12px
```  
### scss
```
.section {
    width:300px;
    height:300px;
    .dep1 {
        color:red;
        border:1px solid black;
        font-size:12px;
    }
}
``` 

출처  
https://fastcampus.co.kr/
