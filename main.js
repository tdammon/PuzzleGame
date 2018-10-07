$(document).ready(function(){
    let sq = 4
    let size = $("#image").width()
    let boxSize = size / sq
    let $url
    let pieceArray = []
    let clicked = false;
    let firstPiece, secondPiece;
    let swap;

    console.log(pieceArray)
    $('#gameImage').keypress(function(e){
        if(e.keyCode == 13){
            $url = $('#gameImage').val();
            console.log($url);
            for(let i=0;i<16;i++){
                // console.log(pieceArray);
                let x = ((i%4) * boxSize)
                let y = (Math.floor(i/4) * boxSize)
                //$('#image').css("backgroundImage", `url(${$url})`);
                pieceArray.push(`<div style="width: ${boxSize}px; height:${boxSize}px; background-image:url(${$url}); background-position:-${x}px -${y}px" class="piece" id="segment${i}"></div>`)
                
            }
            $('#image').append(pieceArray);
        }
    });


    $(document).on('click', '.piece', function(){
        if(!clicked){
            firstPiece = this;
            clicked = true;
            console.log(firstPiece);
        } else {
            secondPiece = this;
            clicked = false
            console.log(secondPiece);
            for(pieces in pieceArray){//find the index of firstPiece.id
                if(pieceArray[pieces].indexOf(firstPiece.id)> -1){
                    console.log(pieces);
                    for(secondpieces in pieceArray){
                        if(pieceArray[secondpieces].indexOf(secondPiece.id)> -1){
                            console.log(secondpieces)
                            swap = pieceArray[pieces];
                            pieceArray[pieces] = pieceArray[secondpieces];
                            pieceArray[secondpieces] = swap;
                            $('#image').empty();
                            $('#image').append(pieceArray);
                            return
                        }
                    }
                } else {
                }
            }
        }

    })
    
    

})




