function showSection(id) {
  const sections = document.getElementsByClassName('subsection-content');
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
  const section = document.getElementById(id);
  section.style.display = 'block';
}

window.onload = function () {
  // set up the showSection function to be called when the buttons are clicked.
  const buttons = document.querySelectorAll('#left-nav button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      showSection(buttons[i].getAttribute('onclick').match(/'(.*?)'/)[1]);
    });
  }
};
