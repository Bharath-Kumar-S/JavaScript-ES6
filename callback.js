doHomework = (subject, callback) => {
    setTimeout(() => {
        console.log(`Starting my ${subject} homework.`);
        callback();
    }, 5000)
}

doHomework('math', () => {
    console.log('Finished my homework');
});