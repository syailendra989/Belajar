//bintang dolar
var baris = 3;
var polaBintang = "*";
var dolar = "$"
var polaSamaDengan = "=";
var hasil = "";

console.log(baris)
for (let index = 2; index < 5; index++) {

  if ((index % 2) == 0) {
    hasil = hasil.concat(polaSamaDengan);
  } else {
    hasil = hasil.concat(polaBintang);
  }

}
console.log("" + dolar + hasil + dolar);

hasil = "";

for (let index = 2; index < 3; index++) {
  if ((index % 2) == 0) {
    hasil = hasil.concat(polaSamaDengan);
  } else {
    hasil = hasil.concat(polaBintang);
  }

}
console.log(" " + dolar+ hasil+dolar);
console.log("  " + dolar); 
