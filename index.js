/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;
if (votingAge > 18) {
    console.log(true);
} else {
    console.log(false);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)


let fruit1 = "Apple";
let isTasty = "Yum";

if (isTasty === "Yum") {
    fruit1 = "Delicious";
} else {
    fruit1 = "Gross";
}

console.log(fruit1);





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


var str = "1999";
parseInt(str);



//Task d: Write a function to multiply a*b 


function mult(a, b) {
    return (a * b);
}


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(humanAge) {
    return (humanAge * 7);
}



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function feeder(dogWeight, age) {

    if (age >= 1) {
        if (dogWeight <= 5) {
            return (dogWeight * 0.05);
        } else if ((dogWeight >= 6) && (dogWeight <= 10)) {
            return (dogWeight * 0.04);
        } else if ((dogWeight >= 11) && (dogWeight <= 15)) {
            return (dogWeight * 0.03);
        } else {
            return (dogWeight * 0.02);
        }
    } else {

        if ((age >= 0) && (age < 0.33)) {
            return (dogWeight * 0.1);
        } else if ((age >= 0.4) && (age < 0.66)) {
            return (dogWeight * 0.05);
        } else if ((age >= 0.67) && (age < 1)) {
            return (dogWeight * 0.04);
        }

    }

}



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function game(choice) {

    let enemy_choice = (Math.floor(Math.random() * 3));
    let r = "rock"; // its zero
    let s = "sissors"; // its one 
    let p = "papper"; // its two
    if (enemy_choice == 0) {
        enemy_choice = r;
    } else if (enemy_choice == 1) {
        enemy_choice = s;
    } else if (enemy_choice == 2) {
        enemy_choice = p;
    }


    if ((choice == r) && (enemy_choice == r)) {
        console.log("draw");
    } else if ((choice == r) && (enemy_choice == s)) {
        console.log("you win!");
    } else if ((choice == r) && (enemy_choice == p)) {
        console.log("you lost");
    } else if ((choice == p) && (enemy_choice == p)) {
        console.log("draw");
    } else if ((choice == p) && (enemy_choice == r)) {
        console.log("you win!");
    } else if ((choice == p) && (enemy_choice == s)) {
        console.log("you lost");
    } else if ((choice == s) && (enemy_choice == s)) {
        console.log("draw");
    } else if ((choice == s) && (enemy_choice == p)) {
        console.log("you win!");
    } else if ((choice == s) && (enemy_choice == r)) {
        console.log("you lost");
    }
}

console.log(game("rock"));


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function distance_converter(kmt) {
    return (kmt / 1.6);
}



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function feet_to_sm(feet) {
    return (feet * 30.48);
}



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(starting_number) {
    var i = 0;
    var annoy = starting_number;

    while (i != starting_number) {
        console.log("bottles of coke on the wall", annoy);
        i++;
        annoy--;
    }


}

annoyingSong(99);



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

var mark = (Math.floor(Math.random() * 101));

function mark_grade(mark) {
    if (mark >= 90) {
        return ("A");
    } else if ((mark >= 80) && (mark < 90)) {
        return ("B");
    } else if ((mark >= 70) && (mark < 80)) {
        return ("C");
    } else if ((mark >= 60) && (mark < 70)) {
        return ("D");
    } else {
        return ("F");
    }

}

console.log(mark_grade(mark));





/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method


function vowel_count(word) {
    let lower = word.toLowerCase();
    let counter = 0;
    for (let i = 0; i < lower.length; i++) {
        if (lower[i].includes("aeou")) {
            counter++;
        }
    }
    return counter;
}

console.log(vowel_count("eTOmOytEst"));


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object