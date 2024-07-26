function printHello(){ console.log("Hello"); }
function blockFor1Sec(){ //blocks in the JavaScript thread for 1 sec 
}
setTimeout(printHello,0);
blockFor1Sec()
console.log("Me first!");