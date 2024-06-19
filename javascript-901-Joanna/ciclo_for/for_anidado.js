// tablas de multiplicar
for (let tabla = 1; tabla <= 10; tabla++) {
    console.log(`Tabla del ${tabla}`); // tablas una a una
  
    // segundo for
    for (let numero = 1; numero <= 10; numero++) {
      const resultado = tabla * numero; // 
      console.log(`${tabla} x ${numero} = ${resultado}`); // tablas mostradas
    }
  }