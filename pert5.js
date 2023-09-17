class Data{
    constructor (nama, umur){
        this.namaa = nama;
        this. umurr = umur;
    }
    static um(umur){
        console.log("hallo"+ umur);
    }
}
const dataa =  new Data("agus", 23);

console.log(dataa.namaa);
console.log(dataa.umurr);
Data.um(dataa.umurr);