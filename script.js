/*function calculateBill() {
    const units = Number(document.getElementById("units").value) + 1;
    const consumerType = document.getElementById("consumerType").value;
    const rate = chooseRate(units);
    const baseAmount = calculateBase(units, rate);
    const surchargePercent = consumerType === "Commercial" ? 10 : 0;
    const surcharge = calculateSurcharge(baseAmount, surchargePercent);
    const fixedCharge = 500;
    const total = baseAmount + surcharge + fixedCharge;
    document.getElementById("result").textContent = "Rate: ₹" + rate + "/unit | Base: ₹" + baseAmount + " | Surcharge: ₹" + surcharge + " | Fixed: ₹" + fixedCharge + " | Total: ₹" + total;
    document.getElementById("breakdown").textContent = buildExamples();
}

function calculateSurcharge(amount, percentage) {
    // TODO M6: Calculate the surcharge as a percentage of base amount.
    return 0;
}

function chooseRate(units) {
    // TODO D1: Use if / else if / else: 1-100=>5, 101-300=>7, above 300=>9.
    return 0;
}

function calculateBase(units, rate) {
    // TODO D2: Return the base electricity bill.
    return 0;
}

function buildExamples() {
    // TODO D3: Use a for loop for 100, 200, 300, 400, 500 units.
    // For each value, show its base bill using chooseRate() and calculateBase().
    return "Complete the electricity consumption examples.";
}*/
function calculateBill() {
    // S5: Removed '+ 1' extra unit bug, S6: fixedCharge set to 50
    const units = Number(document.getElementById("units").value);
    const consumerType = document.getElementById("consumerType").value;
    const rate = chooseRate(units);
    const baseAmount = calculateBase(units, rate);
    const surchargePercent = consumerType === "Commercial" ? 10 : 0;
    const surcharge = calculateSurcharge(baseAmount, surchargePercent);
    const fixedCharge = 50;
    const total = baseAmount + surcharge + fixedCharge;
    
    document.getElementById("result").textContent = "Rate: ₹" + rate + "/unit | Base: ₹" + baseAmount + " | Surcharge: ₹" + surcharge + " | Fixed: ₹" + fixedCharge + " | Total: ₹" + total;
    document.getElementById("breakdown").textContent = buildExamples();
}

function calculateSurcharge(amount, percentage) {
    // M6: Calculate surcharge percentage
    return (amount * percentage) / 100;
}

function chooseRate(units) {
    // D1: chooseRate using if-else
    if (units <= 100) {
        return 5;
    } else if (units <= 300) {
        return 7;
    } else {
        return 9;
    }
}

function calculateBase(units, rate) {
    // D2: Return base bill
    return units * rate;
}

function buildExamples() {
    // D3: Loop for base-bill examples
    let testUnits = [100, 200, 300, 400, 500];
    let output = "Base Bill Examples:\n";
    for (let i = 0; i < testUnits.length; i++) {
        let u = testUnits[i];
        let r = chooseRate(u);
        let b = calculateBase(u, r);
        output += `${u} units = ₹${b}\n`;
    }
    return output;
}