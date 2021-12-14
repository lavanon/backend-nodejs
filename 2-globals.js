// GLobals -- There is no window in node!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - Info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname);

setInterval(() => {
    console.log("Jello WOrld!")
}, 1000)