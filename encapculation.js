function buku(nama, harga){

    // publik menggunankan this
    this.nama = nama;
    this.harga = harga;
    
    // enkapsulasi dengan menggunakan var
    var diskon = 0.1;

    this.detail_buku= function(){
        return "buku "+ nama + " dengan harga awal "+ harga
    }
    this.detail_diskon= function(){
        return "buku "+ nama + " dengan setelah diskon "+ (harga-(harga*diskon));
    }
}
const bukuu= new buku("komik", 100000)
console.log(bukuu.detail_buku())
console.log(bukuu.detail_diskon())