doHomework = (subject) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(`success ${subject}`);
        }, 5000)
    })

}

doHomework('math').then((v)=>{

    console.log(v);

})