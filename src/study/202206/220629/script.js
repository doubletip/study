const text = 'nice to meet you , hi hello ~!!'

let index = 0;

function writeText(){
    document.body.innerText = text.slice(0,index)
    index++
    console.log(text.length)
    console.log(index)

    if(index > text.length -1 ) {
        index = 0;
    }
}

setInterval(writeText, 100)