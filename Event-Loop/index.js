setTimeout(() => {
  console.log('i am a settimeout')  //async code
},0)

Promise.resolve().then(()=>{
    console.log('i am promise') //runs on a micro task with priority 
})

console.log('i am console') //sync code