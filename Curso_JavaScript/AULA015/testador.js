let valores = [2,6,8,6,1,4,3]
valores.push(5)
valores.sort()
for(let pos = 0;pos < valores.length;pos++){
    console.log(`O valor ${valores[pos]} está na posição ${pos}`)
}