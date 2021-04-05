window.onload = function() {
    // Finnish letters
    const finLetter = [
        {
            letter: 'A',
            amount: '10',
            value: '1'
        },
        {
            letter: 'B',
            amount: '1',
            value: '8'
        },
        {
            letter: 'C',
            amount: '1',
            value: '10'
        },
        {
            letter: 'D',
            amount: '1',
            value: '7'
        },
        {
            letter: 'E',
            amount: '8',
            value: '1'
        },
        {
            letter: 'F',
            amount: '1',
            value: '8'
        },
        {
            letter: 'G',
            amount: '1',
            value: '8'
        },
        {
            letter: 'H',
            amount: '2',
            value: '4'
        },
        {
            letter: 'I',
            amount: '10',
            value: '1'
        },
        {
            letter: 'J',
            amount: '2',
            value: '4'
        },
        {
            letter: 'K',
            amount: '5',
            value: '2'
        },
        {
            letter: 'L',
            amount: '5',
            value: '2'
        },
        {
            letter: 'M',
            amount: '3',
            value: '3'
        },
        {
            letter: 'N',
            amount: '9',
            value: '1'
        },
        {
            letter: 'O',
            amount: '5',
            value: '2'
        },
        {
            letter: 'P',
            amount: '2',
            value: '4'
        },
        {
            letter: 'R',
            amount: '2',
            value: '4'
        },
        {
            letter: 'S',
            amount: '7',
            value: '1'
        },
        {
            letter: 'T',
            amount: '9',
            value: '1'
        },
        {
            letter: 'U',
            amount: '4',
            value: '3'
        },
        {
            letter: 'V',
            amount: '2',
            value: '4'
        },
        {
            letter: 'Y',
            amount: '2',
            value: '4'
        },
        {
            letter: 'Ä',
            amount: '5',
            value: '2'
        },
        {
            letter: 'Ö',
            amount: '1',
            value: '7'
        },
        {
            letter: '',
            amount: '2',
            value: ''
        },
        // {
        //     letter: '–',
        //     amount: '0',
        //     value: '0'
        // }
    ];
    // Make tiles
    for (var i = 0; i < finLetter.length; i++) {
        let makeSmall = finLetter[i].letter.toLowerCase();
        document.getElementById("tiles-all").innerHTML += 
        '<div class="full-let">' +
            '<div class="letter">' +
                `<div class="alphabet">${finLetter[i].letter}</div>` +
                `<div class="val">${finLetter[i].value}</div>` +
            '</div>' +
            '<div class="undo">x' + 
                `<span class="amount" id="let-${makeSmall}">${finLetter[i].amount}</span>` +
                `<div class="origamount">${finLetter[i].amount}</div>` +
            '</div>' +
        '</div>';
    };
    // Counters
    let clickedLetter = document.querySelectorAll(".letter");
    for (i = 0; i<clickedLetter.length; i++){
        clickedLetter[i].addEventListener("click", function() {
            let deduct = this.nextElementSibling.firstElementChild;
            let firstValue = parseInt(deduct.innerHTML);
            let bagvalue = document.getElementById("tiles-left");
            let z = parseInt(bagvalue.innerHTML);
            let gottenLetter = this.firstElementChild.innerHTML;
            if (firstValue == 0) {
                console.log("kaik on jo mänt");
            } else {
                deduct.innerHTML = firstValue - 1;
                if (bagvalue < 1){
                    console.log("pussista loppu jo palikat");
                } else {
                    document.getElementById("tiles-left").innerHTML = z - 1;
                    markLetter(gottenLetter);
                }
            }
            let hehe = this.nextElementSibling.firstElementChild;
            let lastValue = parseInt(hehe.innerHTML);
            if (lastValue == 0){
                this.classList.add("is-empty");
            }
        });
    };
    // Undo counter
    let clickedUndo = document.querySelectorAll(".undo");
    for (i = 0; i < clickedUndo.length; i++){
        clickedUndo[i].addEventListener("click", function(){
            let add = this.firstElementChild;
            let orig = parseInt(add.nextElementSibling.innerHTML);
            let x = parseInt(add.innerHTML);
            let bagvalue = document.getElementById("tiles-left").innerHTML;
            let z = parseInt(bagvalue);
            if (x == orig){
                console.log("ei voi olla laattoja enempää ku alussa");
            } else {
                add.innerHTML = x + 1;
                document.getElementById("tiles-left").innerHTML = z + 1;
            }
            let checkup = this.firstElementChild.innerHTML;
            let opac = this.parentNode.firstElementChild;
            if (parseInt(checkup) !== 0) {
                opac.classList.remove("is-empty");
            }
        })
    }
    let usedLetters = document.getElementById("usedLetters");
    let endTurn = document.getElementById("endturn");

    endTurn.addEventListener("click", () => {
        let turn = endTurn.getAttribute("value");
        
        usedLetters.innerHTML += `<br>P${turn}: `;
        if (turn == 1){
            endTurn.removeAttribute("value");
            endTurn.setAttribute("value","2");
        }
        if (turn == 2) {
            endTurn.removeAttribute("value");
            endTurn.setAttribute("value","1");
        }
    })

    function markLetter(letterToAdd){
        if (letterToAdd == '') usedLetters.innerHTML += '#';
        usedLetters.innerHTML += `${letterToAdd}`;
    }
};