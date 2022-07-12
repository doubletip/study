const button = document.querySelector('.btn')
const checkedbox = document.querySelectorAll('.chk')
const result = document.querySelector('.result')
let list = ''


button.addEventListener('click', ()=> {
    // 버튼 클릭하면 내가 선택한 체크박스 텍스트 노출
    for(let i=0; i<checkedbox.length; i++) {
        if(checkedbox[i].checked) {
            const text = checkedbox[i].value;
            list += text + " "
            console.log(list)
            result.innerText = list
        } else {
            console.log('선택안됨')
        }
    }
})