const a = {
    a: 5,
    b: 6
}

const b = {
    c: 7,
    d: 8
}

const new_obg = Object.assign(a, {
    c: 7
})

console.log(new_obg)


const spread_obj = { ...a,
    ...b
};

console.log(spread_obj)



const c = ['DXC', "CSC"]

const d = ['HP', 'HPE']

const new1 = [...c, ...d]

const new2 = [...d, ...c]

const new3 = ['DXC', ...d, "CSC"]

console.log(new1,new2,new3);