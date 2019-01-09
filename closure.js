const create = () => {
    var count = 0;
    return {
        inc: count++,
        print: count
    }
}

const a = create()
console.log(a.inc)
console.log(a.print)