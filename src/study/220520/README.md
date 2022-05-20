# 자바스크립트 삼항연산자  
## 조건 ? A : B  
조건이 true 이면 A, false 면 B  

```
let a = 20;
let b = 10;

const c = a > b ? 'a는 b보다 크다' : 'a는 b보다 작다'
console.log(c)
```
>a가 b보다 크기때문에 true인 'a는 b보다 크다' 가 출력된다.    

### if 문  
if(조건) {  
　true   
} else {  
　alse  
}  
```
let a = 10;
let b = 20;

if(a > b) {
    console.log('a는 b보다 크다')
} else {
    console.log('a는 b보다 작다')
}
```
>a가 b보다 작기때문에 false인 'a는 b보다 작다' 가 출력된다.