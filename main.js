$(document).ready(function(){
    let sq = 4
    let size = $("#image").width()
    let boxSize = size / sq
    let $url
    let pieceArray = []
    let clicked = false;
    let firstPiece, secondPiece;
    let pieceInd1, pieceInd2;
    let swap;

    console.log(pieceArray)
    $('#gameImage').keypress(function(e){
        if(e.keyCode == 13){
            $url = $('#gameImage').val();
            console.log($url);
            for(let i=0;i<15;i++){
                // console.log(pieceArray);
                let x = ((i%4) * boxSize)
                let y = (Math.floor(i/4) * boxSize)
                //$('#image').css("backgroundImage", `url(${$url})`);
                pieceArray.push(`<div style="width: ${boxSize}px; height:${boxSize}px; background-image:url(${$url}); background-position:-${x}px -${y}px" class="piece" id="segment${i}X"></div>`)
                
            }
            pieceArray.push(`<div style="width: ${boxSize}px; height:${boxSize}px; background-color:black" class="piece" id="blank"></div>`);

            shuffleArray(pieceArray);
            $('#image').append(pieceArray);
            
        }
    });


    $(document).on('click', '.piece', function(){
        if(!clicked){
            clicked = true;
            firstPiece = this;
            console.log('first Piece ID' +firstPiece.id);
        } else {
            clicked = false
            secondPiece = this;
            console.log('Second Piece ID' +secondPiece.id);
            for(let i=0; i< pieceArray.length;i++){//find the index of firstPiece.id
                if(pieceArray[i].indexOf(firstPiece.id)> -1){
                    pieceInd1 = i;
                    console.log('first Piece Index' +pieceInd1);
                }
                if(pieceArray[i].indexOf(secondPiece.id)> -1){
                    pieceInd2 = i;
                    console.log('second Piece Index' +pieceInd2);
                }
            }
            if((firstPiece.id == "blank" || secondPiece.id == "blank")&&
                (pieceInd1 == (pieceInd2 +4) || pieceInd1 == (pieceInd2 -4) ||
                (pieceInd1 == (pieceInd2 +1) && Math.floor(pieceInd1/4) == Math.floor(pieceInd2/4)) || 
                (pieceInd1 == (pieceInd2 -1) && Math.floor(pieceInd1/4) == Math.floor(pieceInd2/4)))) {
                swap = pieceArray[pieceInd1];
                pieceArray[pieceInd1] = pieceArray[pieceInd2];
                pieceArray[pieceInd2] = swap;
                $('#image').empty();
                $('#image').append(pieceArray);
                firstPiece = null;
                secondPiece= null;
                clicked = false;
                checkForWin(pieceArray);
                return
            } else {
                console.log(pieceInd2 +1 , pieceInd2 -1)
            }
        
        }
    })
})

let x;
let y;
function shuffleArray(array) {
    for(let i=0;i<array.length;i++){
        x= Math.floor(Math.random()*array.length);
        y= array[i];
        array[i]=array[x];
        array[x]=y;
    }
}
let test = 0;
function checkForWin(array) {
    for(let i=0; i<array.length;i++){
        if(array[i].includes(`segment${i}X`)){
            test++
            console.log('Yes')
        } else {
            test=0;
            break;
        }
        if(test == 15){
            console.log('Win');
        }
    }
}