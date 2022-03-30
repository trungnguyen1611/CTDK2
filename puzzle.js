let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 1;
let count5 = 0;

window.onload = dog;

function dog() {
    count1 = Math.floor(Math.random() * 2);
    count2 = Math.floor(Math.random() * 2);
    count3 = Math.floor(Math.random() * 2);
    count4 = Math.floor(Math.random() * 2);
    count5 = Math.floor(Math.random() * 2);
    img1();
    img2();
    img3();
    img4();
    img5();
}

function img1() {
    count1++;
    let cat1 = document.getElementById("cat1");
    switch (count1) {
        case 1:
            cat1.src="/funny-cat1_part1x1.jpeg";
            break;
        case 2:
            cat1.src="/monkey_part1x1.jpeg";
            break;
        case 3:
            cat1.src="/panda_swap_part1x1.jpeg";
            count1 = 0;
            break;
    }
}

function img2() {
    count2++;
    let cat2 = document.getElementById("cat2");
    switch (count2) {
        case 1:
            cat2.src = "/funny-cat1_part2x1.jpeg";
            break;
        case 2:
            cat2.src = "/monkey_part2x1.jpeg";
            break;
        case 3:
            cat2.src="/panda_swap_part2x1.jpeg";
            count2 = 0;
            break;
    }
}

function img3() {
    count3++;
    let cat3 = document.getElementById("cat3");
    switch (count3) {
        case 1:
            cat3.src = "/funny-cat1_part3x1.jpeg";
            break;
        case 2:
            cat3.src = "/monkey_part3x1.jpeg";
            break;
        case 3:
            cat3.src="/panda_swap_part3x1.jpeg";
            count3 = 0;
            break;
    }
}

function img4() {
    count4++;
    let cat4 = document.getElementById("cat4");
    switch (count4) {
        case 1:
            cat4.src = "/funny-cat1_part4x1.jpeg";
            break;
        case 2:
            cat4.src = "/monkey_part4x1.jpeg";
            break;
        case 3:
            cat4.src="/panda_swap_part4x1.jpeg";
            count4 = 0;
            break;
    }
}

function img5() {
    count5++;
    let cat5 = document.getElementById("cat5");
    switch (count5) {
        case 1:
            cat5.src = "/funny-cat1_part5x1.jpeg";
            break;
        case 2:
            cat5.src = "/monkey_part5x1.jpeg";
            break;
        case 3:
            cat5.src="/panda_swap_part5x1.jpeg";
            count5 = 0;
            break;
    }
}

let a = document.getElementById("win");
a.onclick = winner;

function winner() {
    if (count1 == count2 && count2 == count3 && count3 == count4 && count4 == count5) {
        document.getElementById("cat1").style.boxShadow = "10px 20px 30px red";
        document.getElementById("cat2").style.boxShadow = "10px 20px 30px red";
        document.getElementById("cat3").style.boxShadow = "10px 20px 30px red";
        document.getElementById("cat4").style.boxShadow = "10px 20px 30px red";
        document.getElementById("cat5").style.boxShadow = "10px 20px 30px red";
    }
}