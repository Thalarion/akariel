//matches valid 12 hour format only, 00 hours not considered valid, leading zero is expected for <10 hours
const regex12hour = /(0[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](AM|PM)/g;
//matches valid 24 hour format only, but 12 hour format matches as well (AM/PM is ignored), 24 hours is not considered valid
const regex24hour = /([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/g;
//combination pattern either matches valid 12 hour format first and if that fails, it tries to match valid 24 hour format, otherwise matches nothing
const regex12or24hour = /(0[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9](AM|PM)|([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/g;

//input text
var inputText = "blabla 01:42:12PM bla bla blablabla bla";

//the case of AM/PM should not matter, make everything uppercase before running the regex on the input
var inputText = inputText.toUpperCase();

//this matches valid 12 hour and 24 hour timestamps in the input
var extractedTimes = inputText.match(regex12or24hour);

var convertedTimes = [ ];

function converter(item,index) {
    //modifies AM variant of the 12 hour format
    if (item.includes("AM")) {
        //12 AM to 00 hours
        if (item.search("12") == 0) {
            this[index] = "00" + item.slice(2,8);
        }
        //otherwise only remove AM
        else {
            this[index] = item.slice(0,8);
        }
    }
    //modifies PM variant of the 12 format
    else if (item.includes("PM")) {
        //for 12 PM only remove PM
        if (item.search("12") == 0) {
            this[index] = item.slice(0,8);
        }
        //otherwise add 12 to the hours position
        else {
            var hours = parseInt(item.slice(0,2)) + 12;
            this[index] = hours + item.slice(2,8);
        }
    }
    //otherwise keeps the entry the same
    else {
        this[index] = item;
    }
}

extractedTimes.forEach(converter,convertedTimes);

convertedTimes.forEach(function(item) {
    console.log(item);
});