
    let slideIndex = 1;
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let textes = document.getElementsByClassName("texte");
        console.log(textes);
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; //disparaitre
            textes[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block"; //apparaitre
        textes[slideIndex-1].style.display = "block";
    }


if (window.location.pathname === "/HTML/Accueil.html") {
    function goToTuto(){
        window.location.href = 'Tuto.html';
    }
}
//Image en gros plan :
if (window.location.pathname === "/HTML/Tuto.html") {
    document.addEventListener("DOMContentLoaded", function() {
        var mini = document.querySelectorAll('.mini');
        var overlay = document.getElementById('overlay');
        var fullImg = document.getElementById('fullImg');
        var closeBtn = document.querySelector('.close');
        console.log(overlay + 'zizi');
        mini.forEach(function(miniElement) {
            miniElement.addEventListener('click', function() {
                console.log("Miniature cliquée");
                overlay.style.display = 'flex';
                fullImg.src = this.src;
            });
        });

        closeBtn.addEventListener('click', function() {
            overlay.style.display = 'none';
        });

        overlay.addEventListener('click', function(event) {
            if (event.target == overlay) {
                overlay.style.display = 'none';
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        var link = 0;
        var pend = 0;
        var drake = 0;
        const form = document.getElementById('quizForm');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
    
            // Get form values
            const monsterType = document.querySelector('input[name="monsterType"]:checked').value;
            const playstyle = document.querySelector('input[name="playstyle"]:checked').value;
            const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
    
            if (monsterType==='monstreLink'){link+=2;}
            if (monsterType==='monstreDrake'){drake+=2;}
            if (monsterType==='monstrePand'){pend+=2;}

            if (playstyle==='aggressive'){link+=1; drake+=1;}
            if (playstyle==='defensive'){pend+=1; drake+=1;}
            if (playstyle==='Combo'){link+=1;}

            if (difficulty==='facile'){drake+=1;}
            if (difficulty==='moyen'){link+=1;}
            if (difficulty==='difficile'){pend+=1;}

            if (link >= pend && link >= drake){
                document.getElementById('result1').style.display = 'block';
                document.getElementById('result2').style.display = 'none';
                document.getElementById('result3').style.display = 'none';

            }
            else if (pend >= link && pend >= drake){
                document.getElementById('result2').style.display = 'block';
                document.getElementById('result1').style.display = 'none';
                document.getElementById('result3').style.display = 'none';
            }
            else {
                document.getElementById('result3').style.display = 'block';
                document.getElementById('result1').style.display = 'none';
                document.getElementById('result2').style.display = 'none';
            }

        });
    });
    
}
showSlides(slideIndex);