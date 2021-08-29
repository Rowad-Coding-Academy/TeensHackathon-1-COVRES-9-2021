
function view(id, id2){
    var yesNo = document.getElementById(id).style.display ;
    if( yesNo == "block")
    {
        document.getElementById(id2).innerText= 'More information';
       
        document.getElementById(id).style.display = "none";
    }else {
        document.getElementById(id2).innerText= 'hide';
        document.getElementById(id).style.display = "block";
    }
}

function go(id, id4,){
    var Noyes = document.getElementById(id).style.display ;
    if( Noyes == "block")
    {
        document.getElementById(id4).innerText= 'More information';
       
        document.getElementById(id).style.display = "none";
    }else {
        document.getElementById(id4).innerText= 'hide';
        document.getElementById(id).style.display = "block";
    }
}