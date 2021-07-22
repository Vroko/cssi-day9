const submitMessage = () => {
    const passcode = document.querySelector("#passcode").value;
    const message = document.querySelector("#message").value;

   firebase.database().ref("/messages").push({
        passcode: passcode,
        message: message
    });
    
    /*var MD5 = new Hashes.MD5().hex(passcode)
    // output into DOM
    console.log(MD5);*/
}