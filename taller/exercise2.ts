// Paso 1: Definir la clase Cuenta Bancaria
class CuentaBancaria {
    numeroCuenta: string;
    saldo: number;
    nombreTitular: string;
  
    constructor(numeroCuenta: string, saldo: number, nombreTitular: string) {
      this.numeroCuenta = numeroCuenta;
      this.saldo = saldo;
      this.nombreTitular = nombreTitular;
    }
  
    depositar(monto: number): void {
      this.saldo += monto;
      console.log(`Se ha depositado $${monto} en la cuenta de ${this.nombreTitular}.`);
    }
  
    retirar(monto: number): void {
      if (this.saldo >= monto) {
        this.saldo -= monto;
        console.log(`Se ha retirado $${monto} de la cuenta de ${this.nombreTitular}.`);
      } else {
        console.log(`No hay fondos suficientes en la cuenta de ${this.nombreTitular}.`);
      }
    }
  
    consultarSaldo(): void {
      console.log(`El saldo de la cuenta de ${this.nombreTitular} es $${this.saldo}.`);
    }
  }
  
  // Paso 2: Crear dos objetos de Cuenta Bancaria diferentes
  const cuenta1: CuentaBancaria = new CuentaBancaria('12345678', 1000, 'Juan Pérez');
  const cuenta2: CuentaBancaria = new CuentaBancaria('87654321', 500, 'María González');
  
  // Paso 3: Realizar operaciones sobre las cuentas
  cuenta1.depositar(300.00);
  cuenta1.retirar(200.00);
  cuenta1.consultarSaldo();
  
  cuenta2.depositar(200.00);
  cuenta2.retirar(100.00);
  cuenta2.consultarSaldo();

  console.log(cuenta1);
  console.log(cuenta2);
  
