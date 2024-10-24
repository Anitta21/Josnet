 function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'fr', // La langue par défaut de votre page
            includedLanguages: 'en,fr,es,de,it', // Langues disponibles
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    }
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
        function envoyerMessage() {
          const nom = document.getElementById('nom').value;
          const prenom = document.getElementById('prenom').value;
          const adresse = document.getElementById('adresse').value;
          const formation = document.getElementById('formation').value;
          const message = document.getElementById('message').value;
          const contactMode = document.querySelector('input[name="contact-method"]:checked').value;
  
          if (contactMode === 'email') {
              const emailLink = `mailto:mukashemaanita21@gmail.com?subject=Demande%20de%20formation&body=Nom%3A%20${encodeURIComponent(nom)}%APrénom%3A%20${encodeURIComponent(prenom)}%AAdresse%3A%20${encodeURIComponent(adresse)}%AFormation%3A%20${encodeURIComponent(formation)}%AMessage%3A%20${encodeURIComponent(message)}`;
              alert("Tentative d'ouverture de l'email...");
              window.location.href = emailLink;
          } else if (contactMode === 'whatsapp') {
              const whatsappMessage = `Nom: ${nom} \nPrénom: ${prenom} \nAdresse: ${adresse} \nFormation: ${formation} \nMessage: ${message}`;
              const whatsappLink = `https://api.whatsapp.com/send?phone=25779463631&text=${encodeURIComponent(whatsappMessage)}`;
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
        
