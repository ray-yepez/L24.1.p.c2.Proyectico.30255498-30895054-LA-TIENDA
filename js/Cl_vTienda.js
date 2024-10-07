export default class Cl_vTienda {
  constructor(controlador) {
    this.vista = document.getElementById("mainForm");
    this.tabla = document.getElementById("mainForm_tabla");
    this.btAgregar = document.getElementById("mainForm_btAgregar");
    this.lbArtMayor = document.getElementById("mainForm_lbArtMayor");
    this.lbAcTotal = document.getElementById("mainForm_lbAcTotal");

    this.btAgregar.onclick = () => controlador.mostrarVistaCliente();
  }

  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  reportarCliente({
    cedula,
    codigo,
    cantidad,
    montoAPagar,
    artMayor,
    acTotal,
  }) {
    this.tabla.innerHTML += `<tr>
        <th>${cedula}</th>
        <th>${codigo}</th>
        <th>${cantidad}</th>
        <th> $ ${montoAPagar.toFixed(2)}</th>
        </tr>`;
    this.lbArtMayor.innerHTML = artMayor;
    this.lbAcTotal.innerHTML = "$" + acTotal.toFixed(2);
  }
}
