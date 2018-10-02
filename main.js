$(document).ready(function(){
    let $url;
    $('#gameImage').keypress(function(e){
        if(e.keyCode == 13){
            $url = $('#gameImage').val();
            console.log($url);
            $('#gameImage').val('');
            $('#image').css("background-image", `url(${$url})`);
            for(let i=0;i<20;i++){
                console.log(i);
                $('#image').append('<div class="piece" id= "segment'+i+'"></div>')
            }
        }
    });
    

})
