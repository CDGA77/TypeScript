// Paso 1: Definir la clase Cuenta Bancaria
var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(numeroCuenta, saldo, nombreTitular) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
        this.nombreTitular = nombreTitular;
    }
    CuentaBancaria.prototype.depositar = function (monto) {
        this.saldo += monto;
        console.log("Se ha depositado $".concat(monto, " en la cuenta de ").concat(this.nombreTitular, "."));
    };
    CuentaBancaria.prototype.retirar = function (monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
            console.log("Se ha retirado $".concat(monto, " de la cuenta de ").concat(this.nombreTitular, "."));
        }
        else {
            console.log("No hay fondos suficientes en la cuenta de ".concat(this.nombreTitular, "."));
        }
    };
    CuentaBancaria.prototype.consultarSaldo = function () {
        console.log("El saldo de la cuenta de ".concat(this.nombreTitular, " es $").concat(this.saldo, "."));
    };
    return CuentaBancaria;
}());
// Paso 2: Crear dos objetos de Cuenta Bancaria diferentes
var cuenta1 = new CuentaBancaria('12345678', 1000, 'Juan Pérez');
var cuenta2 = new CuentaBancaria('87654321', 500, 'María González');
// Paso 3: Realizar operaciones sobre las cuentas
cuenta1.depositar(300.00);
cuenta1.retirar(200.00);
cuenta1.consultarSaldo();
cuenta2.depositar(200.00);
cuenta2.retirar(100.00);
cuenta2.consultarSaldo();
console.log(cuenta1);
console.log(cuenta2);
