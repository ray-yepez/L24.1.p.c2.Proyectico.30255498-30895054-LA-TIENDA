export default class Cl_mTienda {
  constructor({ precioA, precioB, precioC }) {
    this.auxCodigo = "";
    this.acA = 0;
    this.acB = 0;
    this.acC = 0;
    this.acTotal = 0;
    this.precioA = precioA;
    this.precioB = precioB;
    this.precioC = precioC;
  }
  set precioA(a) {
    this._precioA = a;
  }
  get precioA() {
    return this._precioA;
  }
  set precioB(b) {
    this._precioB = b;
  }
  get precioB() {
    return this._precioB;
  }
  set precioC(c) {
    this._precioC = c;
  }
  get precioC() {
    return this._precioC;
  }
  procesarCliente(cliente) {
    if (cliente.codigo === "A") {
      this.acA += cliente.cantidad;
      cliente.montoAPagar = cliente.cantidad * this.precioA;
    } else if (cliente.codigo === "B") {
      this.acB += cliente.cantidad;
      cliente.montoAPagar = cliente.cantidad * this.precioB;
    } else {
      this.acC += cliente.cantidad;
      cliente.montoAPagar = cliente.cantidad * this.precioC;
    }
    console.log(this.acA)
    console.log(this.acB)
    console.log(this.acC)
    if (this.acA > this.acB && this.acA > this.acC) {
      this.auxCodigo = "A";
    } else if ((this.acA < this.acB) && (this.acB > this.acC)) {
      this.auxCodigo = "B"; 
    } else if (this.acC > this.acA && this.acC > this.acB) {
      this.auxCodigo = "C";
    } else {
      this.auxCodigo = "N";
    }

    this.acTotal += cliente.montoAPagar;
  }
  artMayor() {
    return this.auxCodigo;
  }
  totalVendido() {
    return this.acTotal;
  }
}
