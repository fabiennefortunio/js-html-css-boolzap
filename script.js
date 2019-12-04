$(document).ready(function() {
    // invio il messagio
    //intercetto il click
    $('.icona-send').click(function() {
        invia_messaggio();
    //recupero il contenuto dell'imput del messaggio
    // val legge quello che sta dentro all'imput

 });
    // intercetto il tasto INVIO
    $('.msg-bottom').keyup(function(event) {
        if(event.which == 13) {
            invia_messaggio();
    }
    });

});

function invia_messaggio() {
    var testo_messaggio = $('.msg-bottom').val();
    if(testo_messaggio.length != 0) {
        // clono il template del messaggio
        var nuovo_messaggio = $('.template .message').clone();
        // inserisco nel giusto span il testo del messaggio
        nuovo_messaggio.children('.message-text').text(testo_messaggio);
        // aggiungo al fiv .message la classe sent
        nuovo_messaggio.addClass('sent');
        // inserisco il messaggio all'interno del container
        $('.right-messages.active').append(nuovo_messaggio);
        //resetto l'imput con una stringa vuota
        $('.msg-bottom').val('');
        //risposta del pc con scritto ok
        risposta_computer();
        setTimeout(risposta_computer, 1000);

    }

}

function risposta_computer() {
    // clono il template del invia_messaggio
    var messaggio_risposta = $('.template .message').clone();
    // inserisco nel giusto span il testo del messaggio
     messaggio_risposta.children('.message-text').text('ok');
    // aggiungo al div .message la classe received
     messaggio_risposta.addClass('received');
    //inserisco il messaggio al interno del container
    $('.right-messages.active').append(messaggio_risposta);

}
