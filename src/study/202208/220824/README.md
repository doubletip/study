# every()  
## every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트한다.  

```
const arrayCheck = (check) => check < 10;

const array = [11,12,13,14,15,66];

console.log(array.every(arrayCheck))
// result : false
// 부등호를 반대로한다면 true
```
# some()
## some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트한다.

```
const array = [1,2,3,4,5]

const even = (ele) => ele % 2 === 0;

console.log(array.some(even)
// result : true
```

> every, some 은 map, filter 와 유사하게 사용한다.  

> 정리  
every : 모든게 true / false  
some : 한가지라도 true / false
