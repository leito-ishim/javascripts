// Игра "Кто хочет стать миллионером?"
var ok, event, gameStop;

for (i of works) {
	do {
		ok = false;
		gameStop = false;
		event = prompt(i.ques + '\n' + i.a + '\n' +  i.b + '\n' +  i.c + '\n' +  i.d + '\n-1 - Выход из игры');

		if (event == -1) {
			gameStop = true;
	        break;
	    } else if ((event != 'a') && (event != 'b') && (event != 'c') && (event != 'd')) {
	    	alert('Необходимо ввести a, b, c или d.');
	    } else if (event == i.trueAnswer) {
	    	alert('Правильно. Ваш выйгрыш: ' + i.gain);
	    	ok = true;
	    } else {
	    	alert('К сожалению Вы проиграли. Правильный ответ: ' + i.trueAnswer);
	    	gameStop = true;
	    	break
	    }		
	} while (!ok)
	if (gameStop) {
		break
	}
	
}