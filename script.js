document.getElementById('toggleSidebar').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.toggle('active');
});

// Fonction pour afficher la boîte de dialogue
    function dial() {
      window.alert("Cette section est indisponible car le stage n'a pas encore démaré ! Cette page sera disponible au début du stage.");
    }
    
    // Attacher un événement de clic aux liens
    document.addEventListener('DOMContentLoaded', function() {
      var liens = document.querySelectorAll('nav ul li a');
      for (var i = 0; i < liens.length; i++) {
        liens[i].addEventListener('click', dial);
      }
    });
