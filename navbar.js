const navbar = `
  <nav>
    <ul>
      <li>
        <a href="#">Math</a>
        <div class="subtopics">
          <a href="#" onclick="loadSubtopic('algebra')">Algebra</a>
          <a href="#" onclick="loadSubtopic('geometry')">Geometry</a>
          <a href="#" onclick="loadSubtopic('calculus')">Calculus</a>
        </div>
      </li>
      <li>
        <a href="#">Science</a>
        <div class="subtopics">
          <a href="#" onclick="loadSubtopic('biology')">Biology</a>
          <a href="#" onclick="loadSubtopic('chemistry')">Chemistry</a>
          <a href="#" onclick="loadSubtopic('physics')">Physics</a>
        </div>
      </li>
      <li>
        <a href="#">English</a>
        <div class="subtopics">
          <a href="#" onclick="loadSubtopic('literature')">Literature</a>
          <a href="#" onclick="loadSubtopic('writing')">Writing</a>
          <a href="#" onclick="loadSubtopic('grammar')">Grammar</a>
        </div>
      </li>
      <li>
        <a href="#">History</a>
        <div class="subtopics">
          <a href="#" onclick="loadSubtopic('world-history')">World History</a>
          <a href="#" onclick="loadSubtopic('us-history')">US History</a>
          <a href="#" onclick="loadSubtopic('ancient-history')">Ancient History</a>
        </div>
      </li>
    </ul>
  </nav>
`;

document.getElementById('navbar').innerHTML = navbar;

function loadSubtopic(subtopic) {
  fetch(`${subtopic}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById('main').innerHTML = html;
    });
}
