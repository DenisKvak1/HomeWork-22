function IMT(mass, height) {
    if (isNaN(mass) || isNaN(height)) {
        return NaN;
    }
    return mass / (height ** 2);
}
let Button = document.getElementById("calcA");
let InputMASS= document.getElementById("mass");
let InputHeight = document.getElementById("height");
let result2 = document.getElementById("resultIMT");
let result3 = document.getElementById("resultIMT2");

Button.addEventListener("click", function() {
    if(InputMASS.value && InputHeight.value){
        let imt=IMT(InputMASS.value,InputHeight.value)
        if(InputHeight.value<2.6){
            imt=imt.toFixed(1);
            result3.textContent=`Ваш имт: ${imt}`;
            if (imt < 16) {
                result2.textContent = "Выраженный дефицит массы тела.";
            } else if (imt >= 16 && imt < 18.5) {
                result2.textContent = "Недостаточная масса тела (дефицит массы).";
            } else if (imt >= 18.5 && imt <= 24.9) {
                result2.textContent = "Нормальная масса тела.";
            } else if (imt >= 25 && imt <= 29.9) {
                result2.textContent = "Избыточная масса тела (предожирение).";
            } else if (imt >= 30 && imt <= 34.9) {
                result2.textContent = "Ожирение I степени.";
            } else if (imt >= 35 && imt <= 39.9) {
                result2.textContent = "Ожирение II степени.";
            } else if (imt >= 40) {
                result2.textContent = "Ожирение III степени (крайне высокий уровень ожирения).";
            }                 
            else{
                result2.textContent="Введите корректные данные";
            }
        } 
        else{
            result3.textContent="";
            result2.textContent="Введите данные в метрах xD";
        }
    }});

