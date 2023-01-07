function cadastrarNewsLetter(){
  let email = document.getElementById("campo-email").value
  alert(email)
}

function mostrarMenu(){
  // identificar o elemento menu
  let menu = document.getElementById("menu")

  // mudar a visualização do menu
  if(getComputedStyle(menu).display == "none"){
    menu.style.display = "flex"
  }else{
    menu.style.display = "none"
  }

  event.preventDefault()
}