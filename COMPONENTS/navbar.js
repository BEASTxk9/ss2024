document.getElementById("navbar").innerHTML = `
<nav>
<a id="navbar_logo_a" href="../index.html"><h5 id="navbar_logo">Shane Stevens</h5></a>
<button class="navbar_toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
<span class="material-symbols-outlined">
menu
</span>
</button>
</nav>







<!-- navbar content -->
<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
<div class="offcanvas-header">
<h5 id="offcanvasTopLabel"></h5>
<!-- <button type="button" class="btn-close text-black" data-bs-dismiss="offcanvas" aria-label="Close"></button> -->
</div>
<div class="offcanvas-body">

<a href="../VIEWS/projects.html">PROJECTS</a>
<a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">PROJECTS</a>

</div>
<div class="offcanvas-footer">

</div>
</div>




<!-- Projects -->
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
`;

let offcanvasButton = document.getElementById('navbar_toggle');

// Add an event listener for offcanvas show event
let offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasTop'));
offcanvas._element.addEventListener('shown.bs.offcanvas', function () {
  // Change the button content to a close icon
  offcanvasButton.innerHTML = '<span class="material-symbols-outlined">close</span>';
});

// Add an event listener for offcanvas hide event
offcanvas._element.addEventListener('hidden.bs.offcanvas', function () {
  // Change the button content back to the open icon
  offcanvasButton.innerHTML = '<span class="material-symbols-outlined">menu</span>';
});

// Add a click event listener to toggle offcanvas manually
offcanvasButton.addEventListener('click', function () {
  offcanvas.toggle();
});