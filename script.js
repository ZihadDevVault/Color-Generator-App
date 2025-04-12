let GeneratorButton=document.getElementById('bgChangebtn');
let ShowColorCode=document.getElementById('backgroundColor');
let DocBody=document.getElementsByTagName('body')[0]



GeneratorButton.addEventListener('click',function(){
    let RgbColor=GenerateRGBCode()
        ShowColorCode.value=RgbColor;
        DocBody.style.backgroundColor=RgbColor;
})

function GenerateRGBCode(){
    let Red=Math.floor(Math.random()*255+1)
    let Green=Math.floor(Math.random()*255+1)
    let Blue=Math.floor(Math.random()*255+1)

    return `rgb(${Red},${Green},${Blue})`
}