import Cl_mCliente from "./Cl_mCliente.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vCliente from "./Cl_vCliente.js";
import Cl_vTienda from "./Cl_vTienda.js";

export default class Cl_controlador {
  constructor() {
    this.vCliente = new Cl_vCliente(this);
    this.vTienda = new Cl_vTienda(this);
  }

  mostrarVistaCliente() {
    this.vTienda.ocultar();
    this.vCliente.mostrar();
  }
  mostrarVistaTienda() {
    this.vCliente.ocultar();
    this.vTienda.mostrar();
  }
  procesarTienda() {

    const precioA = prompt("Precio A");
    const precioB = prompt("Precio B");
    const precioC = prompt("Precio C");
    this.mTienda = new Cl_mTienda({ precioA, precioB, precioC });

  }
  agregarCliente({ cedula, codigo, cantidad }) {

    try{
      if (codigo != "A" && codigo != "B" && codigo != "C") throw "Código inválido";
      const cliente = new Cl_mCliente({ cedula, codigo, cantidad });
      this.mTienda.procesarCliente(cliente);
      this.vTienda.reportarCliente({
        cedula: cliente.cedula,
        codigo: cliente.codigo,
        cantidad: cliente.cantidad,
        montoAPagar: cliente.montoAPagar,
        artMayor: this.mTienda.artMayor(),
        acTotal: this.mTienda.totalVendido(),
      });
    }catch(error){
      alert("Error de entrada: " + error)
    }
    this.mostrarVistaTienda();
  }
}
