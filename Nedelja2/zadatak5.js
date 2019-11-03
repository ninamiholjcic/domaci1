/* zadatak5.js
    1. Сачувати у променљиве цену и пречник пице
    2. Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
    3. Исписати тај резултат у конзолу */


    let price = 500;
    let radius = 16;
    let pizzaArea = Math.pow(radius, 2) * Math.PI;

    console.log(`Povrsina pice je ${Math.round(pizzaArea)} cm².`);
    
    let pricePerSquareCm = price/pizzaArea;
    console.log(`Cena pice po cm² je ${pricePerSquareCm}.`);
    



