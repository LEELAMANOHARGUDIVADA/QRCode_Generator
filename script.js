let imgBox = document.getElementById('img-container');
let Img = document.getElementById('img');
let Text = document.getElementById('text');

function generate() {
    if(Text.value.length>0){
        Img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= "+ Text.value;
    
        imgBox.classList.add('active');
    }
    else{
        Text.classList.add("error");

        setTimeout(() => {
            Text.classList.remove("error");
        }, 800);
    }
}
