let valores = [8, 1, 7, 4, 2, 9];
valores.sort();

/*for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
} */

for(let pos in valores) {
    console.log(`A posição ${pos} dentro do array tem o valor ${valores[pos]}`)
};