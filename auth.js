
(function() {
  const safdsf = "o";
  
  function checkPassword() {
    const zhzh = prompt("Bitte geben Sie das Passwort ein:");
    
    if (zhzh !== safdsf) {
      alert("Falsches Passwort!");
      document.body.innerHTML = "<h1>Zugriff verweigert</h1><p>Sie haben nicht die Berechtigung, diese Seite zu besuchen.</p>";
      return false;
    }
    
    // Passwort für Session speichern
    sessionStorage.setItem('authenticated', 'true');
    return true;
  }
  
  // Prüfe ob bereits authentifiziert
  if (sessionStorage.getItem('authenticated') !== 'true') {
    if (!checkPassword()) {
      return;
    }
  }
})(); 