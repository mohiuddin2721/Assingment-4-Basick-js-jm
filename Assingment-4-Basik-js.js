// Problem 1 

function anaToVori(ana) {
    if (typeof ana != "number") {
        return "Input a valid number";
    }
    if (ana >= 0) {
        const vori = ana / 16;
        return vori;
    }
    else {
        return 'Error: Give me Zero or Positive Number';
    }
}
const myAna = anaToVori(48);
console.log(myAna);


// Problem 2

function pandaCost(shingara, somucha, jilapi) {
    if (typeof shingara != "number") {
        return "Input a valid number";
    }
    if (typeof somucha != "number") {
        return "Input a valid number";
    }
    if (typeof jilapi != "number") {
        return "Input a valid number";
    }
    if (shingara >= 0 && somucha >= 0 && jilapi >= 0) {
        const shingaraPrice = shingara * 7;
        const somuchaPrice = somucha * 10;
        const jilapiPrice = jilapi * 15;
        const totalPrice = shingaraPrice + somuchaPrice + jilapiPrice;
        return totalPrice;
    }
    else {
        return 'Error: Give me Zero or Positive Number';
    }
}
const myFood = pandaCost(1, 1, 1);
console.log(myFood);

// problem 3

function picnicBudget(members) {
    const costOfFirst100People = 5000;
    const costOfSecond100People = 4000;
    const costOfRestPeople = 3000;
    if (typeof members != "number") {
        return "Input a valid number";
    }
    if (members < 0) {
        return "Input a positive number";
    }
    if (members <= 100) {
        const costOf100Member = members * costOfFirst100People;
        return costOf100Member;
    }
    else if (members <= 200) {
        const first100MemberCost = 100 * costOfFirst100People;
        const restMembers = members - 100;
        const second100MemberCost = restMembers * costOfSecond100People;
        const costOfTotalPerson = first100MemberCost + second100MemberCost;
        return costOfTotalPerson;
    }
    else {
        const first100MemberCost = 100 * costOfFirst100People;
        const second100MemberCost = 100 * costOfSecond100People;
        const restMembers = members - 200;
        const restMemberCost = restMembers * costOfRestPeople;
        const costOfTotalPerson = first100MemberCost + second100MemberCost + restMemberCost;
        return costOfTotalPerson;
    }
}
const totalCostOfPicnic = picnicBudget(300);
console.log(totalCostOfPicnic);


// problem 4


const friends = ['shakib', 'tamim', 'mashrafy', 'musfiq', 'riad', 'mustafij', 'imrul', 'afif', 'taskin'];

function oddFriend(friends) {
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length % 2 == 1) {
            return friends[i];
        }
    }
}
const myFriend = oddFriend(friends);
console.log(myFriend);
