export default class Cl_mCliente {
  constructor({ cedula, codigo, cantidad, montoAPagar }) {
    this.cedula = cedula;
    this.codigo = codigo;
    this.cantidad = cantidad;
    this.montoAPagar = montoAPagar;
  }
  set cedula(c) {
    this._cedula = c;
  }
  get cedula() {
    return this._cedula;
  }
  set codigo(cc) {
    this._codigo = cc;
  }
  get codigo() {
    return this._codigo;
  }
  set cantidad(ca) {
    this._cantidad = ca;
  }
  get cantidad() {
    return this._cantidad;
  }
  set montoAPagar(mP) {
    this._montoAPagar = mP;
  }
  get montoAPagar() {
    return this._montoAPagar;
  }
}
