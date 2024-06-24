
var smallImages = document.querySelectorAll('#smallImg');
var mainImage = document.getElementById('mainImg');

smallImages.forEach(function (smallImg, index) {
    smallImg.addEventListener('click', function () {
        mainImage.src = smallImg.src;
    });
});


const firstimgbox = document.getElementsByClassName("first-img-box")[0];
firstimgbox.addEventListener("click", () => {
    window.location.href = "single_product.html";
});




// search 


const search = () => {
    const searchBox = document.getElementsByClassName("search")[0].value.toUpperCase();
    const storeItem = document.getElementsByClassName("img-box")
    const product = document.querySelectorAll(".box")
    const productName = document.querySelectorAll(".p-name")


    for (var i = 0; i < productName.length; i++) {
        let match = product[i].querySelectorAll(".p-name")[0]
        if (match) {
            let textValue = match.textContent || match.innerText
            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = "block"
            }
            else {
                product[i].style.display = "none"
            }


        }
    }
}


// gender


const genderSelect = document.getElementsByClassName("gender")[0];
const products = document.querySelectorAll(".box");

genderSelect.addEventListener("change", () => {
    const selectedGender = genderSelect.value;
    products.forEach(product => {
        const productGender = product.getAttribute("data-gender");
        if (selectedGender === "all" || productGender === selectedGender) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});


// 

function male(){
    window.location.href="men_section.html"
}
function female(){
    window.location.href="women_section.html"
}

function kids(){
    window.location.href="kids_section.html"
}


// sort

const productSelect = document.getElementsByClassName("sort")[0]; // Select the first element with the class "sort"
const items = document.querySelectorAll(".box"); // Renamed to "items" for clarity

productSelect.addEventListener("change", () => {
    const selectedProduct = productSelect.value;
    items.forEach(item => {
        const productData = item.getAttribute("data-sort");
        if (selectedProduct === "all" || productData === selectedProduct) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});


// filter

const itemSelect = document.getElementsByClassName("filter")[0]; // Select the first element with the class "sort"
const divs = document.querySelectorAll(".box"); // Renamed to "items" for clarity

itemSelect.addEventListener("change", () => {
    const selecteditem = itemSelect.value;
    divs.forEach(item => {
        const itemData = item.getAttribute("data-filter");
        if (selecteditem === "all" || itemData === selecteditem) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});


// by CATEGORY

function casual() {
    window.open('casual_sneakers.html');
}

function canvas() {
    window.open('canvas_sneakers.html');
}


function desinger() {
    window.open('desinger_shoes.html');
}


function hightop() {
    window.open('high_top_sneakers.html');
}


//  home

function home() {
    window.location.href = 'index.html';
}


// category

function category() {
    window.location.href = 'category.html';
}

function trending(){
    window.location.href='trending.html';
}


function profile() {
    window.location.href = 'profile.html';
}

// 

function explore() {
    window.location.href = 'category.html';

}




function facebook() {
    window.location.href = 'https://www.facebook.com/'
}
function yt() {
    window.location.href = 'https://www.youtube.com/'
}
function twitter() {
    window.location.href = 'https://www.twitter.com/'
}
function insta() {
    window.location.href = 'https://www.instagram.com/'
}

//login form
function showform() {
    document.querySelector('.overlay').classList.add("showoverlay")
    document.querySelector('.login-form').classList.add("showloginform")
}

function closeform() {
    document.querySelector('.overlay').classList.remove("showoverlay")
    document.querySelector('.login-form').classList.remove("showloginform")
}