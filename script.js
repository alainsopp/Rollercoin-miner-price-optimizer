function getBestRatioMiners() {
    miners = []
    cards = document.getElementsByClassName('marketplace-buy-item-card')
    for (i = 0; i < cards.length; i++) {
        minerName = cards[i].getElementsByClassName('item-title')[0].textContent
        price = parseFloat(cards[i].getElementsByClassName('item-price')[0].textContent)
        power = cards[i].getElementsByClassName('item-addition-power')[0].textContent.split(' ')
        mul = { 'Gh/s': 1, 'Th/s': 1000, 'Ph/s': 1000000 }
        unit = mul[power[2]]
        power = parseFloat(power[0]) * unit
        ratio = power / price
        miners.push({ 'Name': minerName, 'Power': power, 'Price': price, 'Ratio': ratio/1000 })
    }
    return sortMinerByRatio(miners, "desc")
}
function sortMinerByRatio(miners, order) {
    let sorted = miners;
    if (order == "asc") {
        sorted.sort((a, b) => a.Ratio - b.Ratio);
    } else if (order == "desc") {
        sorted.sort((a, b) => b.Ratio - a.Ratio);
    }
    return sorted;
}
console.log(getBestRatioMiners())
