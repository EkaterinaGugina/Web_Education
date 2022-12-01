let temperatureC = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));
let temperatureF = (9/5)*temperatureC + 32;
alert(`Преобразовали температуру. В градусах по Цельсию: ${temperatureC} , а в градусах по Фаренгейту: ${temperatureF.toFixed(1)}`);
