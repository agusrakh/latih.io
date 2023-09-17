// polymorphsm


class Perpus{
    constructor(buku) {
        this.bukuu = buku;
    }
    jumlah(){
        return "Jumlah jenis" + this.bukuu +" 100 buah";
    }
}
class Komik extends Perpus{
    constructor(buku) {
        super(buku)
    }
    jumlah(){
        return "Jumlah jenis" + this.buku +" 1 buah";
    }
}

const perpus = new Perpus (' Uzumaki');
const naruto = new Komik ('Naruto Uzumaki');
console.log(naruto.jumlah())
console.log(perpus.jumlah())