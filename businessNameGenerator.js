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

//generating the first word
if(random<0.33){
    first=obj1[1]
}
else if(0.33<random<0.66){
    first=obj1[2]
}
else{
    first=obj1[3]
}

//generating the second word
if(random<0.33){
    second=obj2[1]
}
else if(0.33<random<0.66){
    second=obj2[2]
}
else{
    second=obj2[3]
}

//generating the third word
if(random<0.33){
    third=obj3[1]
}
else if(0.33<random<0.66){
    third=obj3[2]
}
else{
    third=obj3[3]
}

let businessName=(`${first} ${second} ${third}`)

//return name
console.log(businessName)
