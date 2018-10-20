console.log('hej');
let inf = document.querySelector('.demo'),
    text = inf.value,
    btn = document.querySelector('.btn-add');
class Options {
    constructor(height, width, bg, fontSize, textAlign){
        //constructor(height, width){
        this.height = height + 'px';
        this.width = width + 'px';
        this.bg = bg;
        this.fontSize = fontSize + 'px';
        this.textAlign = textAlign;
    }
    
    createDiv(){
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = text;
        div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
        //div.style.cssText = "height: this.height; / width: this.width; /";
    }
}

//let divArr = [100 + 'px', 200 + 'px'];

const ourDiv = new Options(100, 200, 'red', 34, 'center');
//const ourDiv = new Options(200, 100, 'red', 15, 'center');
//ourDiv.createDiv();
////
btn.addEventListener('click', () => {
    
        text = inf.value;
        ourDiv.createDiv();

} );
////

//let div = document.createElement('div');

//document.body.appendChild(div);
//div.style.cssText = "height: 100px; \ width: 200px; ";