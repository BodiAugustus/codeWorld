import { useRef, useState } from 'react';
import classes from './new-comment.module.css';

function NewComment(props) {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();
  const parentNameInputRef = useRef();
  const phoneInputRef = useRef();
  const studentAge = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;
    const enteredParentName = parentNameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredAge = studentAge.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredComment ||
      enteredComment.trim() === '' ||
      !enteredParentName ||
      enteredParentName.trim() === '' ||
      !enteredPhone ||
      enteredPhone.trim() === '' ||
      !studentAge ||
      studentAge < 10 ||
      studentAge > 15
    ) {
      setIsInvalid(true);
      return;
    }

    props.onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
      parentName: enteredParentName,
      parentPhone: enteredPhone,
      studentAge: enteredAge,
    });

    emailInputRef.current.value = '';
    nameInputRef.current.value = '';
    commentInputRef.current.value = '';
    parentNameInputRef.current.value = '';
    phoneInputRef.current.value = '';
    studentAge.current.value = '';
  }

  return (
    <form className={`${classes.form}`} onSubmit={sendCommentHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label className="text-left" htmlFor="parentName">
            Parent or guardian name
          </label>
          <input
            className="w-[100%]"
            type="text"
            id="parentName"
            ref={parentNameInputRef}
            required
            minLength={5}
            maxLength={40}
          />
        </div>
        <div className={classes.control}>
          <label className="text-left" htmlFor="email">
            Parent or guardian email
          </label>
          <input
            className="w-[100%]"
            type="email"
            id="email"
            ref={emailInputRef}
            required
            minLength={5}
            maxLength={40}
          />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.control}>
          <label className="text-left" htmlFor="telephone">
            Parent or guardian phone number
          </label>
          <input
            className="w-[100%]"
            type="tel"
            id="telephone"
            ref={phoneInputRef}
            required
            minLength={7}
            maxLength={20}
          />
        </div>
        <div className={classes.control}>
          <label className="text-left" htmlFor="name">
            Student name
          </label>
          <input
            className="w-[100%]"
            type="text"
            id="name"
            ref={nameInputRef}
            required
            minLength={3}
            maxLength={40}
          />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="age">Student Age</label>
        <input
          type="number"
          id="age"
          ref={studentAge}
          required
          min={9}
          max={16}
        />
      </div>
      <div className={classes.control}>
        <label className="text-left pt-3" htmlFor="comment">
          Any notes or special instructions
        </label>
        <textarea
          className="w-[100%]"
          required
          id="comment"
          rows="5"
          ref={commentInputRef}
        ></textarea>
      </div>
      {isInvalid && <p>Please enter valid data!</p>}
      <button className={classes.cmtBtn}>Submit</button>
    </form>
  );
}

export default NewComment;
