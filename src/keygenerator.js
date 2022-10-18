function randomKey() {
let key = Math.random().toString(36).slice(2, 7);
return key
}

export {randomKey}