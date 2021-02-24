console.log("if you get nothing as a responce, that means you didnt get a coin,")
function randomNumber() {

    var randNum = Math.floor(Math.random() * (40)) + 1;

    return randNum;

}
function logRandomNumber() {

    var randNum = randomNumber();
    
    
    switch(randNum)
    {
        case 7:
            console.log('You have a coin now Hash #1');
            break;
        case 23:
            console.log('You have a coin now Hash #2');
            break;
        case 25:
            console.log('You have a coin now Hash #3');
            break;
        case 42:
            console.log('You got the best number.');
            break;
        default:
            console.log('No soup for you!');
            break;
    }

}

logRandomNumber();
