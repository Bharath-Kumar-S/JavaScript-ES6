const a = {
    name: 'bharath',
    phone: {
        mobile: 9003045843,
        landline: 9003045844
    }
}
Object.getOwnPropertyNames(a)
a.hasOwnProperty(`name`)
a['name'] = 'Kumar';
a.name = `Bharath`;
if (a.hasOwnProperty(`name`)) {
    a.name = `Bharath Kumar S`
}
// a.phone.landline.toString
exports.a = a;

