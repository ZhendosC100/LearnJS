console.log('hej');

class Options {
    //constructor(height, width, bg, fontSize, textAlign){
        constructor(height, width){
        this.height = height;
        this.width = width;
        //this.bg = bg;
        //this.fontSize = fontSize;
        //this.textAlign = textAlign;
    }
    
    createDiv(){
        let div = document.createElement('div');
        document.body.appendChild(div);

        //div.style.cssText = "height: this.height; / width: this.width; / background: this.bg; / font-size: this.fontSize; / text-align: this.textAlign; /";
        div.style.cssText = "height: this.height; / width: this.width; /";
    }
}

//let divArr = [100 + 'px', 200 + 'px'];

const ourDiv = new Options(100, 200);
//const ourDiv = new Options(200, 100, 'red', 15, 'center');
ourDiv.createDiv();


//let div = document.createElement('div');

//document.body.appendChild(div);
//div.style.cssText = "height: 100px; \ width: 200px; ";