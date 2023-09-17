// inheiritance

class Negara {
  constructor(nama, luas) {
    this.nama = nama;
    this.luas = luas;
  }
  pulaau() {
    console.log(this.nampulau + "akan dijual");
  }
}
class Pulau extends Negara {
  constructor(nama, luas, nampulau, luaspulau) {
    super(nama, luas);
    this.nampulau = nampulau;
    this.luaspulau = luaspulau;
  }
  tampil() {
    return (
      "Pulau " +
      this.nampulau +
      " dengan luas pulau " +
      this.luaspulau +
      " berada di negara " +
      this.nama +
      " dengan luas wilayah " +
      this.luas
    );
  }
}
const pulau = new Pulau("Indonesia", "121211km", "jawa", "8282828km");
console.log(pulau.tampil());
pulau.pulaau();
