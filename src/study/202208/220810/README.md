# CSS 방법론 ( SMACSS, BEM , OOCSS) 간단 요약
## CSS 방법론  
```CSS 방법론이란 CSS를 효율적으로 작성하기 위한 방법들```


## SMACSS (Scalable and Modular Architecture for CSS)
```CSS를 범주화로 패턴화 하고자 하는 방법론이다.```   
1.기본(base)  
Reset, Variable 등을 포함하고 !important를 쓰지 않는다.  
2.레이아웃(layout)  
주요 요소(id)와 하위요소(class)로 구분하고 접두사(l, layout)를 사용 
3.모듈(module)  
재사용성이 높은 구성요소를 정의  
4.상태(state)  
요소의 상태변화의 표현을 s-, is- 를 사용  
5.테마(theme)  
사용자가 선택 가능하도록 스타일을 재선언  

> 장점  
1.클래스명을 통한 예측 용이  
2.재사용  
3.확장의 용이  

>단점  
1.카테고리 기준의 불분명  
2.CSS 사용의 번거로움  
3.복잡해지고 번거로운 코드  
  
    
## BEM  (Block Element Modifer)
```Block(블록), Element(요소), Modifier(상태) 로 나누어서 클래스명을 기술```  
block, element 는 __ 로 element, modifier 는 -- 로 연결하여 정의 
> .main {}  // 블록  
.main__aside {}  // 요소  
.main__aside--active {} // 상태  

>장점
1.마크업 구조를 보지 않아도 구조 파악이 쉬움 

>단점  
1.클래스명이 길어져 코드가 길어지고 복잡해짐  
2.클래스명 재수정이 불편  

## OOCSS (Object Oriented CSS)  
```외형,구조를 분리한다 / 컨테이너, 내용을 분리한다.```  
>구조, 외형 분리  
-구조 : width, height, border, padding, margin...  
-외형 : color, background, font-color ...  

>컨테이너, 내용 분리  
-위치에 의존하지 않는 스타일 정의  
-동일한 외형   
-클래스형 모듈로 재사용 가능 

> 장점  
1.재사용
2.구조에 관계 없이 동일 클래스면 동일스타일
3.코드 양이 줄어듬 

>단점  
1.수정 시 멀티클래스
2.이로 인해 유지보수 어려움   
3.코드의 가독성이 떨어짐 



## 출처  
https://velog.io/@hahan/CSS%EB%B0%A9%EB%B2%95%EB%A1%A0OOCSS-BEM-SMACSS  
https://whales.tistory.com/33