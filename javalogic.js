function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function toGrade(letter, isRetake) {
    if (letter == "A") {
        if (isRetake == "Y") {
            return 3.7;
        }
        else {
            return 4.0;
        }
    }
    else if (letter == "A-") {
        if (isRetake == "Y") {
            return 3.4;
        }
        else {
            return 3.7;
        }
    }
    else if (letter == "B+") {
        if (isRetake == "Y") {
            return 3;
        }
        else {
            return 3.4;
        }
    }
    else if (letter == "B") {
        if (isRetake == "Y") {
            return 2.7;
        }
        else {
            return 3;
        }
    }
    else if (letter == "B-") {
        if (isRetake == "Y") {
            return 2.4;
        }
        else {
            return 2.7;
        }
    }
    else if (letter == "C+") {
        if (isRetake == "Y") {
            return 2;
        }
        else {
            return 2.4;
        }
    }
    else if (letter == "C") {
        if (isRetake == "Y") {
            return 1.7;
        }
        else {
            return 2;
        }
    }
    else if (letter == "C-") {
        if (isRetake == "Y") {
            return 1.4;
        }
        else {
            return 1.7;
        }
    }
    else if (letter == "D+") {
        if (isRetake == "Y") {
            return 1;
        }
        else {
            return 1.4;
        }
    }
    else if (letter == "D") {
        if (isRetake == "Y") {
            return 0.7;
        }
        else {
            return 1;
        }
    }
    else if (letter == "D-") {
        if (isRetake == "Y") {
            return 0;
        }
        else {
            return .7;
        }
    }
    else {
        return 0;
    }
}

function appChance() {
    var tempLetter;
    var tempIsRetake;
    var IS201;
    var IS303;
    var ACC200;
    var FIN201;
    var MKTG201;
    var sumBusPrereq;
    var ovrGPA;
    var last30GPA;
    var appGPA;

    //data collecting. Will need to be switched with HTML drop downs, but keep the function to bring back a number to the letter grade
    //Please note I've only prepared for exact versions of inputs for testing purposes. Lower case grades, or spaces between the letter and
    //the plus or minus will result in a 0 for that section

    tempLetter = prompt("What is your IS 201 course grade?");
    tempIsRetake = prompt("Was this a retake? (Y/N");
    IS201 = toGrade(tempLetter, tempIsRetake);
    //test, delete next line after test
    alert(IS201);

    tempLetter = prompt("What is your IS 303 course grade?");
    tempIsRetake = prompt("Was this a retake? (Y/N");
    IS303 = toGrade(tempLetter, tempIsRetake);
    //test, delete next line after test
    alert(IS303);

    tempLetter = prompt("What is your ACC 200 course grade?");
    tempIsRetake = prompt("Was this a retake? (Y/N");
    ACC200 = toGrade(tempLetter, tempIsRetake);
    //test, delete next line after test
    alert(ACC200);

    tempLetter = prompt("What is your FIN 201 course grade?");
    tempIsRetake = prompt("Was this a retake? (Y/N");
    FIN201 = toGrade(tempLetter, tempIsRetake);
    //test, delete next line after test
    alert(FIN201);

    tempLetter = prompt("What is your MKTG 201 course grade?");
    tempIsRetake = prompt("Was this a retake? (Y/N");
    MKTG201 = toGrade(tempLetter, tempIsRetake);
    //test, delete next line after test
    alert(MKTG201);

    ovrGPA = parseInt(prompt("What is your overall GPA?"));
    //test, delete next line after test
    alert(ovrGPA);

    last30GPA = parseInt(prompt("What is your GPA for your last 30 credits?"));
    //test, delete next line after test
    alert(last30GPA);

    //Next we combine the scores of FIN 201, ACC 200, and MKTG 201 into 1 score
    sumBusPrereq = (ACC200 + FIN201 + MKTG201)/3;

    //This section we are calculating the application GPA finding the average of all of our scores. Because we have already combined ACC, FIN, and MKTG
    //we do not need to do anything specific for weighting, as each is 20%, so we do a simple average calculation

    appGPA = (IS201 + IS303 + sumBusPrereq + ovrGPA + last30GPA)/5;
    appGPA = round(appGPA, 2);

    //Now we simply return either green, yellow or red, as well as the calculated GPA
    // These should be switched out with the html equivalents

    alert(appGPA);

    if (appGPA >= 3.7) {
        alert("Green");
    }
    else if (appGPA >= 3.4) {
        alert("Yellow");
    }
    else {
        alert("Red");
    }

}