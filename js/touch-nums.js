'use strict'

var LENGTH = 4;
var SIZE;
var gNums = [];
// var gMat = [];
var gNextNum = 1;
var gStartTime = 0;
var gGameOn = false;
var gInterval;




function init() {
    SIZE = LENGTH ** 2;
    gNextNum = 1;

    gNums = initRandomNums(SIZE);
    // gMat = initMatrix(gNums);
    printMat();

}

function updateClock() {
    if (gGameOn) {
        var elClock = document.querySelector('.clock');
        elClock.innerText = (Date.now() - gStartTime) / 1000;
    }
}

function cellClicked(elClickedNum) {
    var num = +elClickedNum.innerText;
    // num = +num;  // string to number
    if (num === gNextNum) {
        elClickedNum.classList.add('clicked');
        gNextNum++;
        if (num === 1) {
            gStartTime = Date.now();
            gInterval = setInterval(updateClock, 50);

            gGameOn = true;
        }
        if (num === SIZE) {
            gGameOn = false;
            // TODO: clear the interval
        }
    }
}

// function initMatrix(nums) {
//     var count = 0;
//     var mat = [];
//     for (var i = 0; i < LENGTH; i++) {
//         mat[i] = [];
//         for (var j = 0; j < LENGTH; j++) {
//             mat[i][j] = nums[count];
//             count++;
//         }
//     }
//     return mat;
// }

function printMat() {
    var elTblNums = document.querySelector('.tbl-nums');
    var strHTML = '';
    for (var i = 0; i < LENGTH; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < LENGTH; j++) {
            var cell = drawNum()
            strHTML += ' <td onclick="cellClicked(this)"> ' + cell + ' </td> '
        }
        strHTML += '</tr>'
    }
    // console.log(strHTML);


    elTblNums.innerHTML = strHTML;
}


function drawNum() {
    return gNums.pop();
}

function changeDiff(el, length) {
    console.log('change diff');
    LENGTH = length;
    clearInterval(gInterval)
    gGameOn = false
    document.querySelector('button[disabled]').disabled = false
    el.disabled = true;
    init();
}