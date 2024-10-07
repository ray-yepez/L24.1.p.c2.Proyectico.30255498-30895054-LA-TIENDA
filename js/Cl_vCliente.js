export default class Cl_vCliente {
  constructor(controlador) {
    this.vista = document.getElementById("form_cliente");
    this.inCedula = document.getElementById("clienteForm_inCedula");
    this.inCodigo = document.getElementById("clienteForm_inCodigo");
    this.inCantidad = document.getElementById("clienteForm_inCantidad");
    this.btAgregar = document.getElementById("clienteForm_btAgregar");

    this.btAgregar.onclick = () =>
      controlador.agregarCliente({
        cedula: this.inCedula.value,
        codigo: this.inCodigo.value.toUpperCase(),
        cantidad: Number(this.inCantidad.value),
      });
    this.ocultar();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
}
