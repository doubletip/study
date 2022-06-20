const Header = document.querySelector('header')

document.addEventListener('scroll', function(){
    let scroll = window.scrollY
    if(scroll > 50) {
        Header.classList.add('active')
        Header.innerHTML = '스크롤을 내리면 나옵니다.'
    } else {
        Header.classList.remove('active')
        Header.innerHTML = '헤더 내용입니다.'
    }
})