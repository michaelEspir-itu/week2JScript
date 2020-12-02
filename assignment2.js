var isHotOutside=true;
var isWeekday=false;
var hasMoneyInPocket=true;

var costOfMilk=10;
var moneyInWallet=50;
var thirstlevel= 7;

var shouldBuyIceCream= isHotOutside && hasMoneyInPocket;
var willGoSwimming= isHotOutside && !isWeekday;
var isAGoodDay= isHotOutside && hasMoneyInPocket && !isWeekday;
var willBuyMilk= isHotOutside &&  thirstlevel >=3 && moneyInWallet >=2*costOfMilk;
console.log(shouldBuyIceCream);
console.log(willGoSwimming);
console.log(isAGoodDay);
console.log(willBuyMilk);
