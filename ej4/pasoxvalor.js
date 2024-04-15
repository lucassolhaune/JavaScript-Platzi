
//Paso por valor 

let x = 1
let y = 'Lucas'
let z = null

let a = x
let b = y
let c = z

console.log(x,y,z,a,b,c)

/*
x -tiene el valor 1
y -tiene el valor Lucas
z -tiene el valor null

a -tiene el valor 1
b -tiene el valor lucas
c -tiene el valor null

*/

a = 12
b = 'Platzi'
c = undefined

console.log(a,b,c)

//Paso por referencia

let perros = ['salchicha']
perros.push('beagle')
console.log(perros)
//-----------------------------------------
let panes = ['🥐']
let copiaDPanes = panes
panes.push('🥖')
console.log(panes, copiaDPanes)




