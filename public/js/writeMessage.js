const submitMessage = () => {
    const passcode = document.querySelector("#passcode").value;
    const message = document.querySelector("#message").value;

    if(checkPasscode(passcode))
    {
        firebase.database().ref("/messages").push({
        passcode: passcode,
        message: message
        });
    }
    else
    {
        alert("Password does not contain number or uppercase letter!");
    }
}

function checkPasscode(passcode){
    var checks = new RegExp("^(?=.*[A-Z])(?=.*\\d)");
    if(checks.test(passcode))
    {
        return true;
    }
    else return false;
}

const messageText = document.querySelector("#message");

function checkLength() {
    if(messageText.value.length >= 119)
    {
        alert("Message is too long!");
    }
}