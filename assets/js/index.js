function handleMenuClick(e) {
  let menu = document.querySelector('header nav.navigation-bar ul');

  if (menu.classList.contains('visible')) {
    menu.classList.remove('visible');
  } else {
    menu.classList.add('visible');
  }
}

function handleCardTeamClick(secondChild) {
  let cardTeam = secondChild.parentNode.parentNode;
  if (secondChild.innerHTML.indexOf("Ver") !== -1) {
    secondChild.innerHTML = secondChild.innerHTML.replace("Ver", "Ocultar");
  } else {
    secondChild.innerHTML = secondChild.innerHTML.replace("Ocultar", "Ver");
  }
  if (cardTeam.classList.contains('visible')) {
    cardTeam.classList.remove('visible');
  } else {
    cardTeam.classList.add('visible');
  }

  let cardContent = cardTeam.childNodes[3];
  if (cardContent.classList.contains('visible')) {
    cardContent.classList.remove('visible');
  } else {
    cardContent.classList.add('visible');
  }
}