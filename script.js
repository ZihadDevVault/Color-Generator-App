let DocWithId=(id)=>{
    return document.getElementById(id)
}

let RgbGeneratorButton = DocWithId('bgChangebtn')
let rgbCopyButton =  DocWithId('bgColorCopy')
let HexGeneratorButton = DocWithId('hexbgChangebtn')
let hexCopyButton = DocWithId('hexColorCopy')
let CloseButton=DocWithId('closeBtn')
let ShowColorRgbCode = DocWithId('backgroundColor');
let ShowColorHexCode = DocWithId('hexbackgroundColor')
let Toast=document.getElementsByClassName('toast')[0];
let ToastMsg=DocWithId('toastMsg')
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
       if(FromData.value==''){
        navigator.clipboard.writeText('#ffffff')
        ToastMsg.innerHTML=`${'#ffffff'} is Copied!`
        
        Toast.style.display='flex';
            setTimeout(()=>{
                Toast.style.display='none';
            },2000)
       }else{
        navigator.clipboard.writeText(FromData.value)
        ToastMsg.innerHTML=`${FromData.value} is Copied!`
        
        Toast.style.display='flex';
            setTimeout(()=>{
                Toast.style.display='none';
            },2000)
       }
    })
}


// CloseButton Section 
CloseButton.addEventListener('click',function(){
    Toast.style.display='none';
})

// Change Color Function Call 

ColorChange(RgbGeneratorButton)
ColorChange(HexGeneratorButton)

// Copy Color Function Call 
CopyColor(rgbCopyButton, ShowColorRgbCode)
CopyColor(hexCopyButton, ShowColorHexCode)