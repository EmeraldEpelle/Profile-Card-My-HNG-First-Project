// Display current time in milliseconds
const timeElement = document.getElementById("currentTime");

function updateTime() {
  timeElement.textContent = `Current Time (ms): ${Date.now()}`;
}

updateTime();
// update every second
setInterval(updateTime, 1000);

const form = 
    document.getElementById('contactForm');
 if (form){
	 form.addEventListener('submit', (e) =>
	 {
		 e.preventDefault();
		 const name =
   document.getElementById('name');
    const email =
   document.getElementById('email');
    const subject =
   document.getElementById('subject');
    const message =
   document.getElementById('message');
    const successMsg =
   document.getElementById('success');
    const errors = {
      name:		
   document.getElementById('error-name'),
	   email:
   document.getElementById('error-email'),
		subject:
   document.getElementById('error-subject'),
		 message:
   document.getElementById('error-message'),
	};
    
  
   //Reset
   Object.values(errors).forEach(el => el.textContent = '');
    successMsg.hidden = true;
    let valid = true;

    if (!name.value.trim()) {
      errors.name.textContent = 'Full name is required.';
      valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
      errors.email.textContent = 'Enter a valid email address.';
      valid = false;
    }

    if (!subject.value.trim()) {
      errors.subject.textContent = 'Subject is required.';
      valid = false;
    }

    if (message.value.trim().length < 10) {
      errors.message.textContent = 'Message must be at least 10 characters.';
      valid = false;
    }

    if (valid) {
      successMsg.hidden = false;
      form.reset();
    }
  });
}

   
   
   
  
  
   
   
   
   
   
   
	 )
