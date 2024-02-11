roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};
const armor = generate_text("armor");
const helmet = generate_text("helmet");
const tool = generate_text("tool");
const gear = generate_text("gear");
const trinket = generate_text("trinket");
const weapons = generate_text("weapons");
const bonus = generate_text("bonus");

let allItems = [];
allItems.push(armor, helmet, weapons, gear, tool, trinket, bonus);
let total = 2;
for (let i = 0; i < allItems.length; i++) {
  let item = allItems[i];
  if (item.includes("kookas") || item.includes("ja Kilpi")) {
    total += 2;
  } else if (total > 10){
    total = 10;
  } else if (!item.includes("mitään") && (!item.includes("eikä") && (!item.includes("pinoutuu")))) {
    total++;
  }
}

let armorTotal = 0;
let armorValue = [];
armorValue.push(armor, helmet);
armorValue.forEach((item) => {
  if (item.includes("1")) {
    armorTotal++;
  } if (armorTotal > 3){
      armorTotal = 3;
  } else if (item.includes("2")) {
    armorTotal += 2;
  } else if (item.includes("3")) {
    armorTotal += 3;
  }
});

console.log(total);
document.getElementById("character").innerHTML = generate_text("character");
document.getElementById("age").innerHTML = roll(20) + roll(20) + 10;
document.getElementById("hp").innerHTML = roll(6);
["str", "dex", "wil"].forEach((item, i) => {
document.getElementById("" + item).innerHTML = roll(6) + roll(6) + roll(6);});
document.getElementById("armor").innerHTML = armor;
document.getElementById("helmet").innerHTML = helmet;
document.getElementById("weapons").innerHTML = weapons;
document.getElementById("tool").innerHTML = tool;
document.getElementById("gear").innerHTML = gear;
document.getElementById("trinket").innerHTML = trinket;
document.getElementById("bonus").innerHTML = bonus;
document.getElementById("armorTotal").innerHTML = armorTotal;
document.getElementById("total").innerHTML = total;
document.getElementById("gold").innerHTML = roll(6) + roll(6) + roll(6);
