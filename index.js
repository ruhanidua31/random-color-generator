const button = document.getElementById('button');
const colortext = document.getElementById('color');


let hex = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'
];

button.addEventListener('click' , ()=> {
    const hexcolor = generateHexcolor();
    document.body.style.backgroundColor = hexcolor;
    colortext.textContent = hexcolor;
})

const generateHexcolor = () => {
    let hexcolor = "#";

    for(let i = 0 ; i < 6 ; i++ ){
        hexcolor += hex [generaterandomnumber()]
    }
    return hexcolor;
}

const generaterandomnumber = () => {
    return Math.floor(Math.random() * hex.length)
}