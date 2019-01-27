doHomework = (subject) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(`success ${subject}`);
        }, 5000)
    })
}

(async () => {
    const a = await doHomework('math');
    console.log(a);
})()