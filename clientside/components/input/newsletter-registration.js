import classes from './newsletter-registration.module.css';
import { useRef, useContext } from 'react';
import NotificationContext from 'store/notification-context';

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    emailInputRef.current.value = '';

    notificationCtx.showNotification({
      title: 'Signing up...',
      message: 'Registering for the newsletter...',
      status: 'pending',
    });

    // fetch user input (state or refs)
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then(data => {
          throw new Error(data.message || 'Something went wrong!');
        });
      })
      .then(data => {
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Successfully registered for the newsletter!',
          status: 'success',
        });
      })
      .catch(error => {
        notificationCtx.showNotification({
          title: 'Error!',
          message: error.message || 'Something went wrong!',
          status: 'error',
        });
      });
    // optional: validate input
    // send valid data to AP
  }

  return (
    <div className="section">
      <h2 className="max-w-[700px] text-center mx-auto pt-12 -mb-5 font-extrabold tracking-tight font-poppins uppercase">
        Sign up for our newsletter to stay updated!
      </h2>
      <section className={classes.newsletter}>
        <form onSubmit={registrationHandler}>
          <div className={classes.control}>
            <input
              type="email"
              id="email"
              required
              minLength={5}
              maxLength={50}
              placeholder="Your email here"
              aria-label="Your email"
              ref={emailInputRef}
            />
            <button>Register</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default NewsletterRegistration;
