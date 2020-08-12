const scriptURL = 'https://script.google.com/macros/s/AKfycbyKPBf7iXibJIaWYyXWsqPGLUXlOMFsnKvZ_nnWy4sYtH9_N07X/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, {
          method: 'POST',
          body: new FormData(form)
        })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))

       if (response) {
           // alert("hip")
           window.location.reload();
       }
    });

    let btnClear = document.getElementById('btn')
    let inputs = document.querySelectorAll('input')

     btnClear.addEventListener('click', () => {
         alert('Your Information is submitted Successfully. Please DO NOT CLICK *SUBMIT* again .Click: REFRESH BUTTON, Check your mail for the registration link');
              alert('Click: REFRESH BUTTON, Check your mail for the registration link')



     })


// inputs.forEach(input => input.value ='');
