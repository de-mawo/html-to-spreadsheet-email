const scriptURL = 'https://script.google.com/macros/s...........'
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

//Form not auto-refreshing , hence put Alerts to inform the user to manually refresh after clicking submit

    let btnClear = document.getElementById('btn')
    let inputs = document.querySelectorAll('input')

     btnClear.addEventListener('click', () => {
         alert('Your Information is submitted Successfully. Please DO NOT CLICK *SUBMIT* again .Click: REFRESH BUTTON, Check your mail for the registration link');
              alert('Click: REFRESH BUTTON, Check your mail for the registration link')



     })


// inputs.forEach(input => input.value ='');
