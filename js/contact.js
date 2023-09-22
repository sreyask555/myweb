function checkMobileNumber(){
    let num = document.getElementById("mob-num").value;
    if (num.length!=10) {
        window.alert("Enter 10 digit mobile number");
    }
}

// google form
const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbwG9vCMBREFM4suhSiTdVPFu7-F-6JclKyZGGuKjFS-dqaZT6kKXS6r_15kub3YH2R5yw/exec'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})