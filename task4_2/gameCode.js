//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [
        [],
        []
];

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
   
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
answers[0].push(event);
answers[1].push(works.a00);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        answers[0].push(event);
        answers[1].push(works.b00);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                answers[0].push(event);
                answers[1].push(works.d00);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                answers[0].push(event);
                answers[1].push(works.d00);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        answers[0].push(event);
        answers[1].push(works.c00);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                answers[0].push(event);
                answers[1].push(works.d00);
                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                answers[0].push(event);
                answers[1].push(works.d00);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}


num = +prompt('Введите номер вопроса:');
alert('Вопрос был: \n' + answers[1][num-1] + 'Вы ответили ' + answers[0][num-1])
// switch (num) {
//     case 1: alert('Вопрос был: \n' + works.a00 + 'Вы ответили ' + answers[num-1]);
//     case 2: alert('Вопрос был: \n' + works.b00 + 'Вы ответили ' + answers[num-1]);
//     case 3: alert('Вопрос был: \n' + works.a00 + 'Вы ответили ' + answers[num-1]);
// }
// alert(answers)


