$(document).ready(function(){
    let $url;
    $('#gameImage').keypress(function(e){
        if(e.keyCode == 13){
            $url = $('#gameImage').val();
            console.log($url);
            for(let i=0;i<16;i++){
                let x = ((i%4) * boxSize)
                let y = (Math.floor(i/4) * boxSize)
            
                $('#image').append('<div class="piece" id= "segment'+i+'"></div>')
                document.getElementById("segment"+i).style.width = `${boxSize}`;
                document.getElementById("segment"+i).style.height = `${boxSize}`;
                $('#segment'+i).css("backgroundImage", `url(${$url})`);
                document.getElementById("segment"+i).style.backgroundPosition = `${x}px ${y}px`;
            }
        }
    });
    

})

sq = 4,

$puzzle = $("#image"),
size = $puzzle.width(),
boxSize = size / sq;


