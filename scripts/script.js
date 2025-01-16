const sidemenu = document.getElementById("navbar")

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw-UpjiXRWqv3s04fJNU84hb8_QSMZC_MxG_8tJo7aqMZfwAdPCQUGcmnf0Tkd6IVsHig/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Messaged sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
      })
      form.reset()
      .catch(error => console.error('Error!', error.message))
  })
