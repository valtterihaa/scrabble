function valikot() {
    document.getElementById("header").innerHTML = 
    "<h1>SCRABBLE-APURI</h1>";

// Aloitetaan maintainable coden teko looppaamalla sisällöt.
// Ensin arrayt jossa laattojen kirjaimet ja arvot, sekä kaikkiin tulevat id:t.
// Myöhemmin voi automatisoida myös allids-arrayn pois käyttämällä pohjana alllettersiä

    const allletters = ['A','B','C','D','E','F','G','H', 'I','J','K','L','M','N','O','P','R','S','T','U','V','Y','Ä','Ö',' '];
    const allids = ['let-a','let-b','let-c','let-d','let-e','let-f','let-g','let-h','let-i','let-j','let-k','let-l','let-m',
                    'let-n','let-o','let-p','let-r','let-s','let-t','let-u','let-v','let-y','let-ä','let-ö','let-null'];
    const allamounts = ['10','1','1','1','8','1','1','2','10','2','5','5','3','9','5','2','2','7','9','4','2','2','5','1','2'];
    const allvalues = ['1','8','10','7','1','8','8','4', '1','4','2','2','3','1','2','4','4','1','1','3','4','4','2','7',' '];

    // const kirjaimet = document.getElementsByClassName(".letter");
    // console.log(kirjaimet.length);
    // for (var i = 0; i < kirjaimet.length; i++) {
    // kirjaimet[i].addEventListener("click",function() {
    //     alert("hmm");
    // })};

    
        // let thisvalue = document.getElementById(x).innerHTML;
        // let bagvalue = document.getElementById("tiles-left").innerHTML;
        // let z = parseInt(bagvalue);
        // let y = parseInt(thisvalue);
        // let findempty = document.querySelectorAll(".letter");


    for (var i = 0; i < allletters.length; i++) {
        document.getElementById("tiles-all").innerHTML += 
        '<div class="full-let">' +
            '<div class="letter" onclick="clickdown(\''+allids[i]+'\')">' +
                '<div class="alphabet">'+allletters[i]+'</div>' +
                '<div class="val">'+allvalues[i]+'</div>' +
            '</div>' +
            '<div class="undo" onclick="clickup(\''+allids[i]+'\')">x' + 
                '<span class="amount" id='+allids[i]+'>'+allamounts[i]+'</span>' +
                '<div class="origamount">'+allamounts[i]+'</div>' +
            '</div>' +
        '</div>';
    };


    // document.getElementById("icons").innerHTML =
    // '<a href="https://www.linkedin.com/in/valtteri-haarahiltunen-550621129/"><i class="fab fa-linkedin"></i></a>' + ' ' +
    // '<a href="https://www.facebook.com/vaxxscene/"><i class="fab fa-facebook-square"></i></a>' + ' ' +
    // '<a href="https://www.instagram.com/valtterihaa/"><i class="fab fa-instagram-square"></i></a>';

    document.getElementById("footer").innerHTML =
    "© Valtteri Haarahiltunen 2021"
};