const a = [{name:"Bharath",id:60108696,phn:9003045843},{name:"Ramya",id:60108697,phn:9003045844},{name:"Baby",id:60108698,phn:9003045845}]
console.table(a);

const b = {name:"Bharath",id:60108696,phn:9003045843}
const c = {name:"Ramya",id:60108697,phn:9003045844}
const d = {name:"Baby",id:60108698,phn:9003045845}
console.table([b,c,d]);

console.log({b,c,d})
const e = Object.create({b,c,d})
console.log(e.b.name)

//console.timer
console.time('looper')
let i = 0
while(i < 1000000)
{
    i++
}
console.timeEnd('looper')
//console.timer end


//console.trace
const delete_db = () =>{
  console.trace('bye bye DB')
}

delete_db()
delete_db()

// End of console.trace

