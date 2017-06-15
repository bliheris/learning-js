const cloneObject = o => Object.assign({}, o)
// this is also shallow method of copying

const deepClone = o => JSON.parse(JSON.stringify(o))
//also not perfect