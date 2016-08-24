
var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool'){
		document.getElementById('cool').className ='cool grey';
	} else {
		document.getElementById('cool').className ='cool';
	};

}

var sayMyName = function (name) {
	alert ('My name is '+name);
}

var car = {
	make: 'Chrysler',
	type: 'Cruiser',
	color: 'green',
	isTurnedOn: false,
	numberOfWheels: 5,
	seats: [
		'seat1',
		'seat2',
		'seat3',
		'seat4'
	],
	turnOn: function () {
		this.isTurnedOn = true;
	},
	fly: function(){
		alert('fly');
	},
	switchCar: function(isOn){
		console.log('The car is turned on: '+isOn);
		if (isOn == true){
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}
	}

};

console.log('good evening, dearest children');
