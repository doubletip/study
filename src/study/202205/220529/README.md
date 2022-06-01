# React filter()    
## filter()  
> filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.  
```
const foods = ["chicken","pizza","bulgogi","kimchi"];
const foodfilter = foods.filter(food => food.includes("c"))
console.log(foodfilter)
// ["chicken", "kimchi"]
```  

### React filter 예시 - 삭제  
```
...   
const onDelete = (id) => {
    const newFoods = foods.filter(food => food.id !== id)
    setFoods(newFoods)
}
...
```
### React filter 예시 - 검색  
```
import { useState } from "react";

const names = [
  {
    f_name: "like"
  },
  {
    f_name: "style"
  },
  {
    f_name: "css"
  },
  {
    f_name: "boom"
  },
  {
    f_name: "purple"
  },
  {
    f_name: "mackbook"
  },
  {
    f_name: "react"
  },
  {
    f_name: "skill"
  },
  {
    f_name: "melon"
  }
];

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {names
        .filter((name) => name.f_name.toLowerCase().includes(searchInput))
        .map((name, idx) => (
          <div key={name.idx}>{name.f_name}</div>
        ))}
    </div>
  );
};

export default App
```  

> toLowerCase() 메서드는 문자열을 소문자로 변환해 반환합니다.  