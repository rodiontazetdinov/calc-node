// обрабатывает получаемые значения, и возвращает ответ
const validatecalc = (firstValue, secondValue, operator) => {
    switch(operator) {
        case '+':
            return firstValue + secondValue
        case '-':
            return firstValue - secondValue
        case '*':
            return firstValue * secondValue
        case '/':
            return firstValue / secondValue
        default:
            alert( "Перезагрузите страницу, и выберите арифметический оператор" );
      }
};

//отправляет ответ из обработанных данных формы
const postForm = (req, res) => {
    let { operator, firstValue, secondValue } = req.body;

    res.send(`<p>${validatecalc(firstValue, secondValue, operator)}</p>`);
};

module.exports = {
    validatecalc,
    postForm
}