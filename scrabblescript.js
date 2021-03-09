window.onload = function (){

    const allletters = ['A','B','C','D','E','F','G','H', 'I','J','K','L','M','N','O','P','R','S','T','U','V','Y','Ä','Ö',' '];
    const allids = ['let-a','let-b','let-c','let-d','let-e','let-f','let-g','let-h','let-i','let-j','let-k','let-l','let-m',
                    'let-n','let-o','let-p','let-r','let-s','let-t','let-u','let-v','let-y','let-ä','let-ö','let-null'];
    const allamounts = ['10','1','1','1','8','1','1','2','10','2','5','5','3','9','5','2','2','7','9','4','2','2','5','1','2'];
    const allvalues = ['1','8','10','7','1','8','8','4', '1','4','2','2','3','1','2','4','4','1','1','3','4','4','2','7',' '];

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
};