document.getElementById("navbar").innerHTML = `
<nav>
<h5 id="navbar_logo">Shane Stevens</h5>
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
<button type="button" class="btn-close text-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">

</div>
</div>
`;