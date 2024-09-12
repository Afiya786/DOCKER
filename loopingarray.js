// // [{},{},{}] 

const arr =[1,2,3,4,5]
for(const i of arr){
    console.log(i)
} 

const map = new Map()
map.set('US',"hola")
map.set('IN',"hollaa")
map.set('BN',"hello")



for (const [key , value] of map) {
    console.log(key ,":", value );
}


const programming = [1,2,3,4,5]

for (const i in programming){
    console.log(programming[i]);
}