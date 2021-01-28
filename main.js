//Operadores de comparación
let a = 50;
let b = 100;
//Funciona aunque el dato sea de otro tipo (p.ej. character)

//Operador equality
console.warn('Operador Equality');
console.log('a =',a,', b=',b);
console.log('Validar a==b',a==b);

//Operador equality
let c = "100";
let d = 100;
console.warn('Operador Equality - Numeric Vs Character');
console.log('c =',c,' (character), d=',d,'(Numeric)');
console.log('Validar a==b',c==d);

//Operador equality
console.warn('Operador Inequality');
console.log('a =',a,', b=',b);
console.log('Validar a!=b',a!=b);

//Operador Identity (se comporta como el ==, pero valida también el tipo de dato)
console.warn('Operador Identity');
console.log('Variable a =',a,', Variable b=',b);
console.log(`Tipo de dato Variable a = ${typeof(a)}`);
console.log(`Tipo de dato Variable a = ${typeof(b)}`);
console.log('Validar a===b',a===b);

//Operador Non Identity (se comporta como el !=, pero valida también el tipo de dato)
console.warn('Operador Non-Identity');
console.log('Variable a =',a,', Variable b=',b);
console.log(`Tipo de dato Variable a = ${typeof(a)}`);
console.log(`Tipo de dato Variable a = ${typeof(b)}`);
console.log('Validar a!==b',a!==b);

//Operador Greater than (mayor que)
console.warn('Operador Mayor que');
console.log('Variable a =',a,', Variable b=',b);
console.log('Validar a>b',a>b);

//Operador Greater than or equal (mayoro igual que)
console.warn('Operador Mayor o igual que');
console.log('Variable a =',a,', Variable b=',b);
console.log('Validar a>=b',a>=b);

console.warn('Operador Mayor o igual que - Numeric Vs Character');
console.log('c =',c,' (character), d=',d,'(Numeric)');
console.log('Validar c>=d',c>=d);

//Operador Less than (menor que)
console.warn('Operador Menor que');
console.log('Variable a =',a,', Variable b=',b);
console.log('Validar a<b',a<b);

//Operador Less than or equal (menor o igual que)
console.warn('Operador Menor o igual que');
console.log('Variable a =',a,', Variable b=',b);
console.log('Validar a<=b',a<=b);

console.warn('Operador Menor o igual que - Numeric Vs Character');
console.log('c =',c,' (character), d=',d,'(Numeric)');
console.log('Validar c<=d',c<=d);