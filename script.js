$(document).ready(function() {
    // invio il messagio
    //intercetto il click
    $('.icona-send').click(function() {
    //recupero il contenuto dell'imput del messaggio
    // val legge quello che sta dentro all'imput
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

    }
 });
    // intercetto il tasto INVIO
    
});
