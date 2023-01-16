// Navbar
let nav_btn = document.getElementsByClassName("nav-btn")[0];
let btn = document.getElementById("btn");
let list = document.getElementById("nav");

nav_btn.addEventListener("click", () => {
    btn.classList.toggle("is-active");
    list.classList.toggle("is-active2");
});


// footer

// cross
let cross1 = document.getElementById("cross1");
let cross2 = document.getElementById("cross2");
let cross3 = document.getElementById("cross3");
let cross4 = document.getElementById("cross4");
let cross5 = document.getElementById("cross5");
let cross6 = document.getElementById("cross6");
let cross7 = document.getElementById("cross7");
let cross8 = document.getElementById("cross8");
let cross9 = document.getElementById("cross9");
let cross10 = document.getElementById("cross10");

// img
let img = document.getElementsByClassName("footer-icon")[0];
let img2 = document.getElementsByClassName("footer-icon")[1];
let img3 = document.getElementsByClassName("footer-icon")[2];
let img4 = document.getElementsByClassName("footer-icon")[3];
let img5 = document.getElementsByClassName("footer-icon")[4];
let img6 = document.getElementsByClassName("footer-icon")[5];
let img7 = document.getElementsByClassName("footer-icon")[6];
let img8 = document.getElementsByClassName("footer-icon")[7];
let img9 = document.getElementsByClassName("footer-icon")[8];
let img10 = document.getElementsByClassName("footer-icon")[9];


//! 1
const plus1 = () => {
    // Other Program
    if (cross2.classList == "footer-show") {
        plus2()
    }
    if (cross3.classList == "footer-show") {
        plus3()
    }
    if (cross4.classList == "footer-show") {
        plus4()
    }
    if (cross5.classList == "footer-show") {
        plus5()
    }
    if (cross6.classList == "footer-show") {
        plus6()
    }
    if (cross7.classList == "footer-show") {
        plus7()
    }
    if (cross8.classList == "footer-show") {
        plus8()
    }
    if (cross9.classList == "footer-show") {
        plus9()
    }
    if (cross10.classList == "footer-show") {
        plus10()
    }
    if (cross1.classList == "footer-hide") {
        cross1.classList.remove("footer-hide");
        cross1.classList.add("footer-show");
        img.style.transform = "rotate(45deg)";
    } else {
        cross1.classList.remove("footer-show");
        cross1.classList.add("footer-hide");
        img.style.transform = "";
    }
}

//! 2 
const plus2 = () => {
    // Other Program
    if (cross1.classList == "footer-show") {
        plus1()
    }
    if (cross3.classList == "footer-show") {
        plus3()
    }
    if (cross4.classList == "footer-show") {
        plus4()
    }
    if (cross5.classList == "footer-show") {
        plus5()
    }
    if (cross6.classList == "footer-show") {
        plus6()
    }
    if (cross7.classList == "footer-show") {
        plus7()
    }
    if (cross8.classList == "footer-show") {
        plus8()
    }
    if (cross9.classList == "footer-show") {
        plus9()
    }
    if (cross10.classList == "footer-show") {
        plus10()
    }
    if (cross2.classList == "footer-hide") {
        cross2.classList.remove("footer-hide");
        cross2.classList.add("footer-show");
        img2.style.transform = "rotate(45deg)";
    } else {
        cross2.classList.remove("footer-show");
        cross2.classList.add("footer-hide");
        img2.style.transform = "";
    }
}

//! 3 
const plus3 = () => {
    // Other Program
    if (cross1.classList == "footer-show") {
        plus1()
    }
    if (cross2.classList == "footer-show") {
        plus2()
    }
    if (cross4.classList == "footer-show") {
        plus4()
    }
    if (cross5.classList == "footer-show") {
        plus5()
    }
    if (cross6.classList == "footer-show") {
        plus6()
    }
    if (cross7.classList == "footer-show") {
        plus7()
    }
    if (cross8.classList == "footer-show") {
        plus8()
    }
    if (cross9.classList == "footer-show") {
        plus9()
    }
    if (cross10.classList == "footer-show") {
        plus10()
    }
    if (cross3.classList == "footer-hide") {
        cross3.classList.remove("footer-hide");
        cross3.classList.add("footer-show");
        img3.style.transform = "rotate(45deg)";
    } else {
        cross3.classList.remove("footer-show");
        cross3.classList.add("footer-hide");
        img3.style.transform = "";
    }
}
//! 4
const plus4 = () => {
    // Other Program
    if (cross1.classList == "footer-show") {
        plus1()
    }
    if (cross2.classList == "footer-show") {
        plus2()
    }
    if (cross3.classList == "footer-show") {
        plus3()
    }
    if (cross5.classList == "footer-show") {
        plus5()
    }
    if (cross6.classList == "footer-show") {
        plus6()
    }
    if (cross7.classList == "footer-show") {
        plus7()
    }
    if (cross8.classList == "footer-show") {
        plus8()
    }
    if (cross9.classList == "footer-show") {
        plus9()
    }
    if (cross10.classList == "footer-show") {
        plus10()
    }
    if (cross4.classList == "footer-hide") {
        cross4.classList.remove("footer-hide");
        cross4.classList.add("footer-show");
        img4.style.transform = "rotate(45deg)";
    } else {
        cross4.classList.remove("footer-show");
        cross4.classList.add("footer-hide");
        img4.style.transform = "";
    }
}
//! 5
const plus5 = () => {
    // Other Program
    if (cross1.classList == "footer-show") {
        plus1()
    }
    if (cross2.classList == "footer-show") {
        plus2()
    }
    if (cross3.classList == "footer-show") {
        plus3()
    }
    if (cross4.classList == "footer-show") {
        plus4()
    }
    if (cross6.classList == "footer-show") {
        plus6()
    }
    if (cross7.classList == "footer-show") {
        plus7()
    }
    if (cross8.classList == "footer-show") {
        plus8()
    }
    if (cross9.classList == "footer-show") {
        plus9()
    }
    if (cross10.classList == "footer-show") {
        plus10()
    }
    if (cross5.classList == "footer-hide") {
        cross5.classList.remove("footer-hide");
        cross5.classList.add("footer-show");
        img5.style.transform = "rotate(45deg)";
    } else {
        cross5.classList.remove("footer-show");
        cross5.classList.add("footer-hide");
        img5.style.transform = "";
    }
}
//! 6
const plus6 = () => {
    // Other Program
    if (cross1.classList == "footer-show") {
        plus1()
    }
    if (cross2.classList == "footer-show") {
        plus2()
    }
    if (cross3.classList == "footer-show") {
        plus3()
    }
    if (cross4.classList == "footer-show") {
        plus4()
    }
    if (cross5.classList == "footer-show") {
        plus5()
    }
    if (cross7.classList == "footer-show") {
        plus7()
    }
    if (cross8.classList == "footer-show") {
        plus8()
    }
    if (cross9.classList == "footer-show") {
        plus9()
    }
    if (cross10.classList == "footer-show") {
        plus10()
    }
    if (cross6.classList == "footer-hide") {
        cross6.classList.remove("footer-hide");
        cross6.classList.add("footer-show");
        img6.style.transform = "rotate(45deg)";
    } else {
        cross6.classList.remove("footer-show");
        cross6.classList.add("footer-hide");
        img6.style.transform = "";
    }
}
//! 7
const plus7 = () => {
    // Other Program
    if (cross1.classList == "footer-show") {
        plus1()
    }
    if (cross2.classList == "footer-show") {
        plus2()
    }
    if (cross3.classList == "footer-show") {
        plus3()
    }
    if (cross4.classList == "footer-show") {
        plus4()
    }
    if (cross5.classList == "footer-show") {
        plus5()
    }
    if (cross6.classList == "footer-show") {
        plus6()
    }
    if (cross8.classList == "footer-show") {
        plus8()
    }
    if (cross9.classList == "footer-show") {
        plus9()
    }
    if (cross10.classList == "footer-show") {
        plus10()
    }
    if (cross7.classList == "footer-hide") {
        cross7.classList.remove("footer-hide");
        cross7.classList.add("footer-show");
        img7.style.transform = "rotate(45deg)";
    } else {
        cross7.classList.remove("footer-show");
        cross7.classList.add("footer-hide");
        img7.style.transform = "";
    }
}
//! 8
const plus8 = () => {
    // Other Program
    if (cross1.classList == "footer-show") {
        plus1()
    }
    if (cross2.classList == "footer-show") {
        plus2()
    }
    if (cross3.classList == "footer-show") {
        plus3()
    }
    if (cross4.classList == "footer-show") {
        plus4()
    }
    if (cross5.classList == "footer-show") {
        plus5()
    }
    if (cross6.classList == "footer-show") {
        plus6()
    }
    if (cross7.classList == "footer-show") {
        plus7()
    }
    if (cross9.classList == "footer-show") {
        plus9()
    }
    if (cross10.classList == "footer-show") {
        plus10()
    }
    if (cross8.classList == "footer-hide") {
        cross8.classList.remove("footer-hide");
        cross8.classList.add("footer-show");
        img8.style.transform = "rotate(45deg)";
    } else {
        cross8.classList.remove("footer-show");
        cross8.classList.add("footer-hide");
        img8.style.transform = "";
    }
}
//! 9
const plus9 = () => {
    // Other Program
    if (cross1.classList == "footer-show") {
        plus1()
    }
    if (cross2.classList == "footer-show") {
        plus2()
    }
    if (cross3.classList == "footer-show") {
        plus3()
    }
    if (cross4.classList == "footer-show") {
        plus4()
    }
    if (cross5.classList == "footer-show") {
        plus5()
    }
    if (cross6.classList == "footer-show") {
        plus6()
    }
    if (cross7.classList == "footer-show") {
        plus7()
    }
    if (cross8.classList == "footer-show") {
        plus8()
    }
    if (cross10.classList == "footer-show") {
        plus10()
    }
    if (cross9.classList == "footer-hide") {
        cross9.classList.remove("footer-hide");
        cross9.classList.add("footer-show");
        img9.style.transform = "rotate(45deg)";
    } else {
        cross9.classList.remove("footer-show");
        cross9.classList.add("footer-hide");
        img9.style.transform = "";
    }
}
//! 10
const plus10 = () => {
    // Other Program
    if (cross1.classList == "footer-show") {
        plus1()
    }
    if (cross2.classList == "footer-show") {
        plus2()
    }
    if (cross3.classList == "footer-show") {
        plus3()
    }
    if (cross4.classList == "footer-show") {
        plus4()
    }
    if (cross5.classList == "footer-show") {
        plus5()
    }
    if (cross6.classList == "footer-show") {
        plus6()
    }
    if (cross7.classList == "footer-show") {
        plus7()
    }
    if (cross8.classList == "footer-show") {
        plus8()
    }
    if (cross9.classList == "footer-show") {
        plus9()
    }
    if (cross10.classList == "footer-hide") {
        cross10.classList.remove("footer-hide");
        cross10.classList.add("footer-show");
        img10.style.transform = "rotate(45deg)";
    } else {
        cross10.classList.remove("footer-show");
        cross10.classList.add("footer-hide");
        img10.style.transform = "";
    }
}