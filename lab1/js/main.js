var btn;

function onButtonClicked(event) {
    // event.stopPropoagation();
    var contact = {
        email: document.querySelector("input[type=email]").value,
        agence: document.querySelector("#exampleFormControlSelect").value
    };
    console.log('contact=', contact);
    // listIem = "<li> Agence " + contact.agence + "</li>";
    // document.querySelector('ul').innerHTML += listIem;

}
/****************exmple de call back*************** */
window.addEventListener('load', function() {
    btn = this.document.getElementById('btnValider');
    btn.addEventListener('click', onButtonClicked);
})