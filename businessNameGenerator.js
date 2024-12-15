let obj1={
    1: 'Crazy',
    2: 'Amazing',
    3: 'Fire'
}

let obj2={
    1:'Engine',
    2:'Foods',
    3:'Garments'
}

let obj3={
    1:'Bros',
    2:'Limited',
    3:'Hub'
}

random=Math.random()

if(random<0.33){
    businessName=obj1[1]+obj2[1]+obj3[1]
}
else if(0.33<random<0.66){
    businessName=obj1[2]+obj2[2]+obj3[2]
}
else{
    businessName=obj1[3]+obj2[3]+obj3[3]
}

console.log(businessName)
