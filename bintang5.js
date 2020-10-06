// baris 3
var baris=3;
var polaBintang= "*";
var polaSamaDengan= "=";
var hasil = "";

for (let index = 1; index<6; index++){
   
    if((index %2)==0){
        hasil = hasil.concat(polaSamaDengan);
    } else {
        hasil = hasil.concat(polaBintang);
    }

}
console.log("" +hasil);

hasil= "";

for (let index = 1; index<4; index++){
    if((index %2)==0){
        hasil = hasil.concat(polaSamaDengan);
    } else {
        hasil = hasil.concat(polaBintang);
    }

}
console.log(" " +hasil);
console.log("  "+polaBintang);

//baris5
var baris=5;
var polaBintang= "*";
var polaSamaDengan= "=";
var hasil =  "";

for (let index =1 ; index<10; index++){
   
    if((index %2)==0){
        hasil = hasil.concat(polaSamaDengan);
    } else {
        hasil = hasil.concat(polaBintang);
    }

}
console.log(hasil);

hasil= " ";

for (let index = 1; index<8; index++){
    if((index %2)==0){
        hasil = hasil.concat(polaSamaDengan);
    } else {
        hasil = hasil.concat(polaBintang);
    }

}
console.log(hasil);

hasil="  ";
for (let index = 1; index<6; index++){
   
    if((index %2)==0){
        hasil = hasil.concat(polaSamaDengan);
    } else {
        hasil = hasil.concat(polaBintang);
    }

}
console.log(hasil);

hasil="   ";
for (let index = 1; index<4; index++){
   
    if((index %2)==0){
        hasil = hasil.concat(polaSamaDengan);
    } else {
        hasil = hasil.concat(polaBintang);
    }

}
console.log(hasil);
console.log("    "+polaBintang);

//cepat 
var baris=10;
var polaBintang= "*";
var polaSamaDengan= "=";
var spasi =  "";

for(let index = baris; index > 0; index--){

    var hasil="";

    var jmplhcell = (index*2)-1;
    //console.log(jmplhcell);

    for (let index2 = jmplhcell; index2 > 0; index2--){
        if ((index2 %2)==0){
         hasil = hasil.concat(polaSamaDengan);
        } else{
         hasil = hasil = hasil.concat(polaBintang);
        } 
   
    }
    console.log(spasi+hasil)
    spasi += " ";
} 
