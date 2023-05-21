let clickBtn = document.getElementById("clickBtn");
let batteryCharge = document.getElementById("batteryCharge");
let moneyText = document.getElementById("moneyText");
let batteryCapacityText = document.getElementById("batteryCapacityText");
let batteryValueText = document.getElementById("batteryValueText");

let clickerBoost = document.getElementById("clickerBoost");
let clickerBoostPriceText = document.getElementById("clickerBoostPriceText");
let clickerBoostPrice = [ 150, 500, 1200, 2000, 2500, 4800, 6500, 8000, "MAX" ];
let clickerBoostUpgrade = 0;
clickerBoostPriceText.textContent = clickerBoostPrice[clickerBoostUpgrade] + "$";

let rebirth = document.getElementById("rebirth");
let rebirthPriceText = document.getElementById("rebirthPriceText");
let rebirthPrice = [ 500, 1000, 2000, 3500, 5000, 7500, 10000, 15000, "MAX" ];
let rebirthUpgrade = 0;
rebirthPriceText.textContent = rebirthPrice[rebirthUpgrade] + "$";

let money = 20000;
let batteryValue = 0;
let levels = [ 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000 ];
let level = 1;
let clickPower = 2;

let batteryCapacity = levels[level-1];
batteryCharge.style.top = batteryCapacity - batteryValue + "%";
moneyText.textContent = "Money: " + money;
batteryCapacityText.textContent = "Battery capacity: " + batteryCapacity;
batteryValueText.textContent = "Battery value: " + batteryValue;

let clickAble = true;

clickBtn.addEventListener('click', () => {
    if (clickAble) {
        if (batteryValue < batteryCapacity) {
            batteryValue += clickPower;
            batteryCharge.style.top = 100 - batteryValue / (batteryCapacity / 100) + "%";
        }
    
        if (batteryValue >= batteryCapacity) {
            // plná baterie - vyprázdnit + další level
            clickAble = false;
            batteryCharge.style.top = 0 + "%";
            setTimeout(newLevel, 300);
        }
        
        money += clickPower;
        moneyText.textContent = "Money: " + money;
        batteryCapacityText.textContent = "Battery capacity: " + batteryCapacity;
        batteryValueText.textContent = "Battery value: " + batteryValue;
    }
});

function newLevel() {
    batteryValue -= batteryCapacity;
    level += 1;
    batteryCapacity = levels[level-1];
    batteryCharge.style.top = 100 - batteryValue / (batteryCapacity / 100) + "%";
    batteryCapacityText.textContent = "Battery capacity: " + batteryCapacity;
    batteryValueText.textContent = "Battery value: " + batteryValue;
    clickAble = true;
}

clickerBoost.addEventListener('click', () => {
    if (money >= clickerBoostPrice[clickerBoostUpgrade] && clickerBoostPrice[clickerBoostUpgrade] != "MAX") {
        // upgrade
        money -= clickerBoostPrice[clickerBoostUpgrade];
        clickPower += 2;
        clickerBoostUpgrade += 1;
    }

    if (clickerBoostPrice[clickerBoostUpgrade] == "MAX") clickerBoostPriceText.textContent = clickerBoostPrice[clickerBoostUpgrade];
    else clickerBoostPriceText.textContent = clickerBoostPrice[clickerBoostUpgrade] + "$";
    moneyText.textContent = "Money: " + money;
})

rebirth.addEventListener('click', () => {
    if (money >= rebirthPrice[rebirthUpgrade] && rebirthPrice[rebirthUpgrade] != "MAX") {
        // upgrade
        money -= rebirthPrice[rebirthUpgrade];
        clickPower += 4;
        rebirthUpgrade += 1;
    }

    if (rebirthPrice[rebirthUpgrade] == "MAX") rebirthPriceText.textContent = rebirthPrice[rebirthUpgrade];
    else rebirthPriceText.textContent = rebirthPrice[rebirthUpgrade] + "$";
    moneyText.textContent = "Money: " + money;
})