function sendMail(event){
    event.preventDefault()
    let parms={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    let button=event.target.querySelector('button[type="submit"]')
    button.disabled=true
    emailjs.send("service_ckbpfe4", "template_ldzghpl", parms).then(function(){
        alert("Email Sent!")
        event.target.reset()
    }).catch(function(){
        alert("Could not send email. Please try again.")
    }).finally(function(){
        button.disabled=false
    })
}