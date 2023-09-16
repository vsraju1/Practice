// random color generate

function randomColor(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i =0 ; i<6 ; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let internal;

const startChangingColors = () => {
    if(!internal){
        internal = setInterval(change, 1000);
    }
    function change(){
        const change = document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColors = () =>{
    clearInterval(internal)
    internal = null;

}

document.querySelector("#start").addEventListener('click',startChangingColors);
document.querySelector("#stop").addEventListener('click',stopChangingColors);