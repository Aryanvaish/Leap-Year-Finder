const submitButton = document.getElementsByClassName('submit')[0];


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    const year = document.getElementById('InputField').value;
    // console.log(year);

    if (year.split("").length !== 4) {
        alert("Please Select a Valid year...");
        return
    }
    
    
    if (year % 4 == 0) {
        if (year % 100 == 0) {
          if (year % 400 == 0) {
            alert("The Year " + year + " is a leap year");
          } else {
            alert("The Year " + year + " is not a leap year");
          }
        }else{
          alert("The Year " + year + " is a leap year");
        }
      } else {
        alert("The Year " + year + " is not a leap year");
      }

})


