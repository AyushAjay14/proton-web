var toggle = document.getElementById('mymenu');
        toggle.style.right = '-25rem';
        var menubtn = document.getElementById("menubtn");
        menubtn.onclick = function () {
            if (toggle.style.right == '-25rem') {
                toggle.style.right = '0';
            }
            else {
                toggle.style.right = '-25rem';
            }
        }

gsap.from('h1' , {x: -400 , ease: "power1.out"  , duration: 1  , opacity : 0});