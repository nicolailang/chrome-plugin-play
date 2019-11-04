// Future JavaScript will go here
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', main);      
});
function main() {

    url = "https://www.lectio.dk/lectio/63/login.aspx"

    alert("Hej! 11")
    let handle1 = window.open(url, 'a')
    handle1.blur()
    window.focus()

    alert("Hej! 22")
    let handle2 = window.open(url, 'b')
    handle2.blur()
    window.focus()

    alert("Hej! 33")
    let handle3 = window.open(url, 'c')
    handle3.blur()
    window.focus()

//  var source = document.getElementById('source').value;
  //document.getElementById("result").innerHTML = source;
}

function OpenLectio ()
{
    alert("Hej!")
//    url = "https://www.lectio.dk/lectio/63/login.aspx"
//    window.open(url, '_blank');
}