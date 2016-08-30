var timer = null;

var countdownNumber = 10;

var changeState = function(state){
	document.body.className = 'body-state'+state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;



	if (state == 2){				// countdown
		timer = setInterval(function(){
			countdownNumber = countdownNumber-1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			
			if (countdownNumber > 3 && countdownNumber <= 6){
			/*	document.getElementById('excited').className = 'excited show';
			} else {
				document.getElementById('excited').className = 'excited';*/
			}

			if (countdownNumber == 3){
				document.getElementById('thereYet').className = 'thereYet show';
			} else {
				document.getElementById('excited').className = 'thereYet';
			}

			if (countdownNumber <= 0){
				
				changeState(3);
			};
		},500);
		
	} else if (state == 3){
		var success = setTimeout(function()
		{
			var randomNumber = Math.round(Math.random()*10);

			console.log('randomNumber: ', randomNumber);

			if (randomNumber > 5) {	//success
				changeState(4);
			} else {				//failure
				changeState(5);		
			}
		}, 2000);
	};
}