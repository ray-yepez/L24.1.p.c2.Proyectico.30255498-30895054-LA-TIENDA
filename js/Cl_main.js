import Cl_controlador from "./Cl_controlador.js";
export class Cl_main {
  constructor() {
    let control = new Cl_controlador();
    
    control.procesarTienda();
  }
}
