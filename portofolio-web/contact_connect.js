// function emailSend(){

//     var userName = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var messages = document.getElementById('message').value;
//     var subject = document.getElementById('subject').value;

//     var messageBody = "Name : "+ userName+
//     "<br/> email : " + email +
//     "<br/> messages : <br/>"
//     +  messages

//     Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "grazenata@gmail.com",
//     Password : "",
//     To : 'grazenata@gmail.com',
//     From : "grazenata@gmail.com",
//     Subject : subject,
//     Body : messageBody
// }).then(
// //   message => alert(message)
//     message => {
//         if(message=='OK'){
//             swal("Good job!", "messages sended", "success");

//         }
//         else{
//             swal("ERROR", "failed sended", "error");
//         }
//     }
// );

// }

// SEND TO google Apps script

const scriptURL = 'https://script.google.com/macros/s/AKfycbxX2OhxKpCnWXCTH5EnoteZFvl96GV2lgNhX-zzJrKHUIyaKf9PRQAN5g8esGZW7lg4/exec'
const form = document.forms['contact-form']

// form.addEventListener('submit', e=>{
//     e.preventDefault();
//     console.log("Form submitted");

//      const submitBtn = form.querySelector('button[type="submit"]');

//     fetch(scriptURL, {
//         method:'POST',
//         body: new FormData(form)
//     })
//     .then(response => alert("Thankyou! form submitted"))
//     .then(()=> {
//         window.location.reload();
//     })
//     .catch(
//         error => console.error('Error', error.message)
//     )
// })

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log("Form submitted");

//     const submitBtn = form.querySelector('button[type="submit"]');
//     const originalText = submitBtn.textContent;
    
//     // Disable button dan ubah text
//     submitBtn.disabled = true;
//     submitBtn.textContent = 'Sending...';

//     const formData = new FormData(form);
    
//     // Debug: log form data
//     console.log("Form data:");
//     for (let [key, value] of formData.entries()) {
//         console.log(key + ': ' + value);
//     }

//     fetch(scriptURL, {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => {
//         console.log('Response status:', response.status);
//         console.log('Response ok:', response.ok);
        
//         if (response.ok) {
//             return response.json(); // Parse sebagai JSON karena script return JSON
//         } else {
//             throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//         }
//     })
//     .then(result => {
//         console.log('Success result:', result);
        
//         if (result.result === 'success') {
//             alert("Thank you! Your message has been sent successfully.");
//             form.reset(); 
//         } else {
//             throw new Error(result.error || 'Unknown error occurred');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert("Sorry, there was an error sending your message. Please try again.");
//     })
//     .finally(() => {
//         // Re-enable button
//         submitBtn.disabled = false;
//         submitBtn.textContent = originalText;
//     });
// });
