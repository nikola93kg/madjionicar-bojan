// Picture change - landing page

var change_pic = document.getElementById('change-pic');
var pic_array = ['img/1', 'img/2', 'img/3', 'img/4', 'img/5', 'img/6', 'img/7'];

    function generateRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function changeBackground() {
        var indexPic = generateRandomNum(0, pic_array.length);
        var picture = pic_array[indexPic];
        change_pic.style.background = 'url("' + picture + '.jpg")';
        change_pic.style.backgroundSize = 'cover';
        change_pic.style.backgroundPosition = 'center';
        change_pic.style.backgroundRepeat = 'no-repeat';
    }

    change_pic.addEventListener('mouseenter', changeBackground);
    // change_pic.addEventListener('mouseout', changeBackground);


// Burger menu trigger

    function navSlide() {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links li");

        burger.addEventListener("click", () => {
            //Toggle Nav
            nav.classList.toggle("nav-active");

            //Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ""
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });
            //Burger Animation
            burger.classList.toggle("toggle");
        });

    }

    // navSlide();

    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }



// Smooth scrolling

    window.addEventListener('scroll', function () {
        var navbar = document.getElementById("navbar");
        navbar.classList.toggle('stickyNav', window.scrollY > 0);
    });

    let scroll = new SmoothScroll('a[href*="#head"]');



    ////Promeni glavni naslov h1///////////////////////

    // var madjionicar = document.getElementById('medzik');
    // var transition = document.getElementById('medz');
        
    // madjionicar.addEventListener('mouseover', function () {
    //     var txt = madjionicar.innerHTML = 'Trikista';
    //     txt.transition = true;
    //     this.addEventListener('mouseout', function () {
    //         madjionicar.innerHTML = 'Mađioničar Bojan';
    //     });
    // });