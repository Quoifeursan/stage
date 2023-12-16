document.addEventListener('mousemove', function (event) {
    const mouseX = event.clientX / window.innerWidth;
    const mouseY = event.clientY / window.innerHeight;
  
    const newColor = `rgb(${Math.round(255 * mouseX)}, ${Math.round(255 * mouseY)}, 100)`;
    // Utilisez les coordonnées de la souris pour déterminer la nouvelle couleur
  
    document.getElementById('interactive-background').style.backgroundColor = newColor;
  });
  