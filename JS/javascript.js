<<<<<<< HEAD
const languageSelector = document.querySelector('.language-selector');
const selectedLanguage = languageSelector.querySelector('.selected-language');
const languageOptions = languageSelector.querySelector('.language-options');
const languageItems = languageSelector.querySelectorAll('.language-options li');
const chevronIcon = languageSelector.querySelector('.fa-chevron-down');

languageSelector.addEventListener('click', () => {
  languageOptions.style.display = languageOptions.style.display === 'none' ? 'block' : 'none';
  chevronIcon.classList.toggle('fa-chevron-up');
});

languageItems.forEach(item => {
  item.addEventListener('click', () => {
    const newLanguage = item.dataset.lang;
    selectedLanguage.textContent = item.textContent;
    // Mettez à jour la langue du site ici
    console.log(`Changement de langue vers : ${newLanguage}`);
    languageOptions.style.display = 'none';
    chevronIcon.classList.remove('fa-chevron-up');
  });
});
=======
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'fr', // La langue par défaut de votre page
        includedLanguages: 'en,fr,es,de,it,sw,rn', // Langues disponibles
        autoDisplay: false // Ne pas afficher automatiquement le sélecteur
    }, 'google_translate_element');
}
function setLanguage(lang) {
    var googleTranslate = new google.translate.TranslateElement();
    googleTranslate.translatePage(lang, 'fr'); // Traduire la page
}

// Ferme le menu si l'utilisateur clique en dehors
window.onclick = function(event) {
    if (!event.target.matches('.language-selector')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Charger le script Google Translate
var googleScript = document.createElement('script');
googleScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.body.appendChild(googleScript);
>>>>>>> abe888bd299402d0e28d02d18b6182f4c0f2ddf4

const slides = document.querySelector('.slides');
        let index = 0;

        function showSlide() {
            const totalSlides = 3; 
            index = (index + 1) % totalSlides;
            const offset = -index * 100;
            slides.style.transform = `translateX(${offset}%)`;
        }

        setInterval(showSlide, 3000); 
        function toggleSubList(id) {
            const subList = document.getElementById(id);
            if (subList.style.display === "block") {
                subList.style.display = "none"; 
            } else {
                subList.style.display = "block"; 
            }
        }
        function toggleServiceFormation() {
            const typeSelection = document.getElementById('type-selection').value;
            const formationContainer = document.getElementById('formation-container');
            const serviceContainer = document.getElementById('service-container');
        
            if (typeSelection === 'formation') {
                formationContainer.style.display = 'block';
                serviceContainer.style.display = 'none';
            } else if (typeSelection === 'service') {
                formationContainer.style.display = 'none';
                serviceContainer.style.display = 'block';
            } else {
                formationContainer.style.display = 'none';
                serviceContainer.style.display = 'none';
            }
        }
        
        function envoyerMessage() {
            const nom = document.getElementById('nom').value;
            const prenom = document.getElementById('prenom').value;
            const adresse = document.getElementById('adresse').value;
            const typeSelection = document.getElementById('type-selection').value;
            const formation = document.getElementById('formation').value; 
            const service = document.getElementById('service').value; 
            const message = document.getElementById('message').value;
            const contactMode = document.querySelector('input[name="contact-method"]:checked').value;
        
            // Construire le message à envoyer
            let finalMessage = `Nom: ${nom}\nPrénom: ${prenom}\nAdresse: ${adresse}\nType de Demande: ${typeSelection}\n`;
        
            // Inclure la formation seulement si le type de demande est "formation"
            if (typeSelection === 'formation') {
                finalMessage += `Formation: ${formation}\n`;
            }
        
            // Inclure le service si le type de demande est "service"
            if (typeSelection === 'service') {
                finalMessage += `Service: ${service}\n`;
            }
        
            finalMessage += `Message: ${message}`; 
        
            if (contactMode === 'email') {
                const emailLink = `mailto:mukashemaanita21@gmail.com?subject=Demande%20de%20${typeSelection}&body=${encodeURIComponent(finalMessage)}`;
                alert("Tentative d'ouverture de l'email...");
                window.location.href = emailLink;
            } else if (contactMode === 'whatsapp') {
                const whatsappLink = `https://api.whatsapp.com/send?phone=25779463631&text=${encodeURIComponent(finalMessage)}`;
                alert("Tentative d'ouverture de WhatsApp...");
                window.open(whatsappLink, '_blank');
            }
        }
        
        let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 3000);
}
        
