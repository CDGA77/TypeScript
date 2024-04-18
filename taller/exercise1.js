// Paso 2: Crear la clase que implementa la interfaz de Producto
var ProductoConcreto = /** @class */ (function () {
    function ProductoConcreto(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    return ProductoConcreto;
}());
// Paso 3: Instanciar un objeto de Producto y asignarle valores a sus propiedades
var miProducto = new ProductoConcreto('tv', 456, 'Electrónica');

console.log(miProducto)