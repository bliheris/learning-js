function DelayedGreeter(name) {
	this.name = name;
}
//broken version
// DelayedGreeter.prototype.greet = function() {
// 	setTimeout( function cb() {
// 		console.log('Hello ' + this.name);
// 	}, 500);
// };
//fixed version
// DelayedGreeter.prototype.greet = function() {
// 	setTimeout( (function cb() {
// 		console.log('Hello ' + this.name);
// 	}).bind(this), 500);
// };

DelayedGreeter.prototype.greet = function() {
	setTimeout( () => console.log('Hello' + this.name), 500);
};

const greeter = new DelayedGreeter('World');
greeter.greet();