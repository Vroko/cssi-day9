// Retrieve the messages from the database
const getMessages = () => {
 const messagesRef = firebase.database().ref('/messages');
 messagesRef.on('value', (snapshot) => {
     const data = snapshot.val();
     console.log(data);
     
     findMessage(data);
 });
}

const findMessage = (messages) => {
 const passcodeAttempt = document.querySelector('#passcode').value;
 for (message in messages) {
     const messageData = messages[message];
     if (messageData.passcode === passcodeAttempt) {
         renderMessageAsHtml(messageData.message);
     }
 }
}


const renderMessageAsHtml = (message) => {
 // Hide Input Form
const passcodeInput = document.querySelector('#passcodeInput');
passcodeInput.style.display = 'none';

 // Render message as HTML
const messageDiv = document.querySelector('#message');
messageDiv.innerHTML = message;
}