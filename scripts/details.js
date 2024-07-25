

function activateTab(element) {
    // Récupère tous les éléments <li>
    const items = document.querySelectorAll('.view ul li');

    // Retire la classe 'active' de tous les éléments
    items.forEach(item => item.classList.remove('active'));

    // Ajoute la classe 'active' à l'élément cliqué
    element.classList.add('active');
  };

  function content() {
    const type = document.getElementById('type')
    const content = type.innerHTML.trim()

    if(content) {
        type.innerHTML = ""
    }else {
        type.innerHTML = `<p>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt <br>
                etile pariatur dolor mollit reprehenderit magna tempor ex minim velit <br>
                sunt do.</p>      `

    }
  }