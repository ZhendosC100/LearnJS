let num = 3721;

n = (''+num).split(''); //создаем массив

console.log(n);

let result = n.reduce(function(sum, current) { //перемножаем все числа массива между собой
    return sum * current;                      //при помощи метода reduce
  });
  console.log(result);

  let res = String(result ** 3);
  let rt = res.slice(-2);
  console.log(res);
  console.log(rt);

