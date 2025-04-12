let RgbGeneratorButton=document.getElementById('bgChangebtn');
let HexGeneratorButton=document.getElementById('hexbgChangebtn')
let ShowColorRgbCode=document.getElementById('backgroundColor');
let ShowColorHexCode=document.getElementById('hexbackgroundColor');
let DocBody=document.getElementsByTagName('body')[0]



RgbGeneratorButton.addEventListener('click',function(){
    let RgbColor=GenerateRGBCode()
    ShowColorRgbCode.value=RgbColor;
        DocBody.style.backgroundColor=RgbColor;
})

HexGeneratorButton.addEventListener('click',function(){
    let HexColor=GenerateHexCode()
    ShowColorHexCode.value=HexColor;
        DocBody.style.backgroundColor=HexColor;
})

function GenerateRGBCode(){
    let Red=Math.floor(Math.random()*255+1)
    let Green=Math.floor(Math.random()*255+1)
    let Blue=Math.floor(Math.random()*255+1)

    return `rgb(${Red},${Green},${Blue})`
}
function GenerateHexCode(){
    let Red=Math.floor(Math.random()*255+1)
    let Green=Math.floor(Math.random()*255+1)
    let Blue=Math.floor(Math.random()*255+1)
   

    return `#${Red.toString(16)}${Green.toString(16)}${Blue.toString(16)}`
}


