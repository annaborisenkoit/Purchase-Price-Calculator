function calculateTotalPrice() {
    // Получение значений из полей ввода
    const quantityInput = document.getElementById('quantity').value;
    const priceInput = document.getElementById('price').value;

    // Приведение значений к числу и установка значений по умолчанию, если значения не введены
    const quantity = quantityInput ? parseInt(quantityInput) : 2;
    const price = priceInput ? parseFloat(priceInput) : 15000000;

    // Вычисление общей стоимости
    const totalPrice = quantity * price;

    // Форматирование значения с использованием toLocaleString
    const formattedTotalPrice = totalPrice.toLocaleString('ru-RU');

    // Вывод результата на страницу
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Стоимость покупки: ${formattedTotalPrice} рублей`;
}
