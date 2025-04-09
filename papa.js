let countEL = document.getElementById("count");
let papaEL = document.getElementById("papa");
let count = 0;
let pointsOnClick = 1;
let upgradeLevel = 0;

function getUpgradeCost() {
    return Math.floor(50 * Math.pow(1.15, upgradeLevel)); 
}

function papa() {
    count += pointsOnClick;
    updateUI();
}

function buyUpgrade() {
    let cost = getUpgradeCost(); 
    if (count >= cost) {
        count -= cost;            
        upgradeLevel++;          
        pointsOnClick++;
        updateUI();
    } else {
        alert("You need more points to buy this. You need " + (cost - count));

    }
}

function updateUI() {
    document.getElementById("count").innerText = count;
    document.getElementById("upgrade-cost").innerText = getUpgradeCost();
    document.getElementById("per-click").innerText = pointsOnClick;
}
