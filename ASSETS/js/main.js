// Hello World!
console.log("Pssstttt. Hey you... I see you ;)");



// GLOABL HEAD LINKS
document.getElementsByTagName("head")[0].innerHTML = `
<!-- BOOTSTRAP CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<!-- GLOBAL CSS -->
<link rel="stylesheet" href="../ASSETS/css/style.css">

<!-- loader CSS -->
<link rel="stylesheet" href="../ASSETS/css/loader.css">
<!-- #navbar CSS -->
<link rel="stylesheet" href="../ASSETS/css/navbar.css">
<!-- index CSS -->
<link rel="stylesheet" href="../ASSETS/css/index.css">
<!-- footer CSS -->
<link rel="stylesheet" href="../ASSETS/css/footer.css">

<!-- google icons -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
<!-- AOS -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
`;



// GLOBAL BODY LINKS
document.write(`
<!-- BOOTSTRAP JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

<!-- Font awesome -->
<script src="https://kit.fontawesome.com/94eb56d79c.js" crossorigin="anonymous"></script>

<!-- COMPONENTS -->

<!-- loader -->
<script src="./COMPONENTS/loader.js"></script>
<!-- #navbar -->
<script src="./COMPONENTS/navbar.js"></script>
<!-- #cvbtn -->
<script src="./COMPONENTS/cv.js"></script>
<!-- #footer -->
<script src="./COMPONENTS/footer.js"></script>

<!-- AOS -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init();
</script>
`);


