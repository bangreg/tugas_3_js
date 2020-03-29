function ambil(x){ //1.create function have return and a parameter
  var x=10; //2.set value 10 to variable x
  console.log("X pertama = ",x);
  var x = x+1;//3.change value
  return x;//return value
}

var tampung = ambil();
console.log("X kedua = ",tampung);
