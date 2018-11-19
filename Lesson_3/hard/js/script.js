let str = "урок-3-был слишком легким";

str1 = str.replace(/у/, 'У');
str2 = str1.replace(/-/g, ' ');
str3 = str2.match(/легким/i);

for(let i = 0; i < str3.length; i++){
    str5 = str3[0].replace(/им/, 'o');
}


document.write(str1 + "<br/>");
document.write(str2 + "<br/>");
document.write(str5 + "<br/>");

let arr = [20, 33, 1, "Человек", 2, 3];

arr1 = arr.splice(3, 1);
console.log(arr1);
console.log(arr);

let a = 0; 

for(let i = 0; i<arr.length; i++){
    a += arr[i]**3;                 //возводим числа массива в 3 степень и складываем их
    m =Math.sqrt(a);                //берем квадратный корень из того значения
}
console.log(m);
document.write(`<i>квадратный корень</i> из суммы кубов элементов полученного <b>массива</b> : ${m}`);


function turnOff (j) {
    if((typeof(j)) != 'string'){
        console.log("Not a string!!");
    } else {
        v = j.replace(/^-/, '');
        console.log(v);
    }
}

turnOff("-ere-ere-erer-eere-");





