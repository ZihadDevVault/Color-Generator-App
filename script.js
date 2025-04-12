let RgbGeneratorButton = document.getElementById('bgChangebtn');
let rgbCopyButton = document.getElementById('bgColorCopy')
let HexGeneratorButton = document.getElementById('hexbgChangebtn')
let hexCopyButton = document.getElementById('hexColorCopy')
let ShowColorRgbCode = document.getElementById('backgroundColor');
let ShowColorHexCode = document.getElementById('hexbackgroundColor');
let Toast=document.getElementsByClassName('toast')[0];
let ToastMsg=document.getElementById('toastMsg');
let DocBody = document.getElementsByTagName('body')[0];

// ColorGenerator Section 

function GenerateColor() {
    let Red = Math.floor(Math.random() * 255 + 1)
    let Green = Math.floor(Math.random() * 255 + 1)
    let Blue = Math.floor(Math.random() * 255 + 1)

    return{
        RGb:`rgb(${Red},${Green},${Blue})`,
        Hex:`#${Red.toString(16)}${Green.toString(16)}${Blue.toString(16)}`
    }
    
}

// Color Change Section 
function ColorChange(CButton) {
    CButton.addEventListener('click', function () {
        let Color = GenerateColor()
        ShowColorRgbCode.value = Color.RGb;
        ShowColorHexCode.value = Color.Hex;
        DocBody.style.backgroundColor = Color.Hex;
    })
}

// Color Copy Section 
function CopyColor(Button, FromData) {
    Button.addEventListener('click', function () {
        navigator.clipboard.writeText(FromData.value)
        ToastMsg.innerHTML=`${FromData.value} is Copied!`
        ToastMsg.style.color=FromData.value;
        Toast.style.display='flex';
            setTimeout(()=>{
                Toast.style.display='none';
            },2000)
    })
}

// Change Color Function Call 

ColorChange(RgbGeneratorButton)
ColorChange(HexGeneratorButton)

// Copy Color Function Call 
CopyColor(rgbCopyButton, ShowColorRgbCode)
CopyColor(hexCopyButton, ShowColorHexCode)