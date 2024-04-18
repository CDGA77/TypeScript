// Paso 1: Definir la interfaz de Producto
interface Producto {
    nombre: string;
    precio: number;
    categoria: string;
  }
  
  // Paso 2: Crear la clase que implementa la interfaz de Producto
  class ProductoConcreto implements Producto {
    nombre: string;
    precio: number;
    categoria: string;
  
    constructor(nombre: string, precio: number, categoria: string) {
      this.nombre = nombre;
      this.precio = precio;
      this.categoria = categoria;
    }
  }
  
  // Paso 3: Instanciar un objeto de Producto y asignarle valores a sus propiedades
  const miProducto: Producto = new ProductoConcreto('Smartphone', 700.000, 'Electrónica');