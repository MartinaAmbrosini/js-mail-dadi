// Mail: Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

const buttonSend = document.getElementById("pushmail");

// esempi di email accettate 

const emailArray = ["admin@example.it", "user@example.it", "guest@example.it"];
// console.log(emailExample)

buttonSend.addEventListener("click", function() {

    let trovato = false;

    const emailUser = document.getElementById("email").value;

    // controllo se l'email è nella lista

    for (let i = 0; i < emailArray.length; i++) {
        
        // prendo l'I-esimo elemento dell'Array
        const email = emailArray[i];
        console.log(email);

        // confronto l'I-esimo elemento dell'Array con l'elemento inserito dall'utente

        if (email.toLowerCase() === emailUser.toLowerCase()) {
            trovato = true;
        }
    }

    if (trovato == true) {
        confirm("Accesso eseguito con successo!");
    }

    else {
        confirm("Accesso negato. Riprovare.");
    }
});
