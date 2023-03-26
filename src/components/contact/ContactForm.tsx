import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [isFormSendSuccesful, setIsFormSendSuccesful] = useState(false);
  const [isFormSendError, setIsFormSendError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const handleFormSending = (sneding: any) => {
    sneding.preventDefault();
    if (name.length !== 0 && email.length !== 0 && text.length !== 0) {
      setIsFormSendSuccesful(true);
      setTimeout(() => {
        setIsFormSendSuccesful(false);
      }, 3000);
      setName('');
      setEmail('');
      setText('');
    } else {
      setIsFormSendError(true);
      setTimeout(() => {
        setIsFormSendError(false);
      }, 3000);
    }
  };
  return (
    <div>
      <form
        className={`${styles.form}`}
        onSubmit={sending => handleFormSending(sending)}
      >
        <input
          value={name}
          onChange={name => setName(name.target.value)}
          type='text'
          placeholder='Vaše meno'
          className='w-full my-1 px-5 py-2 rounded-3xl text-black  '
        />
        <input
          value={email}
          onChange={email => setEmail(email.target.value)}
          type='email'
          placeholder='Váš email'
          className='w-full my-1 px-5 py-2 rounded-3xl text-black  '
        />
        <textarea
          value={text}
          onChange={text => setText(text.target.value)}
          rows={5}
          placeholder='Tu nám napíšte Vašu správu'
          className='w-full my-1 px-5 py-2 rounded-3xl text-black  '
        />
        <button
          onClick={() => setIsFormSendSuccesful(true)}
          className='px-8 py-1 mx-5 text-lg rounded-3xl text-black bg-green w-fit '
        >
          ODOSLAŤ
        </button>
      </form>
      <div className={isFormSendSuccesful ? `${styles.sendAlert}` : 'none'}>
        <div>Ďakujeme za Vašu správu.</div>
        <div onClick={() => setIsFormSendSuccesful(false)}>
          <svg
            fill='#000000'
            height='1rem'
            width='1rem'
            version='1.1'
            id='Capa_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 460.775 460.775'
            xmlSpace='preserve'
          >
            <path
              d='M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z'
            />
          </svg>
        </div>
      </div>
      <div className={isFormSendError ? `${styles.errorAlert}` : 'none'}>
        <div>Všetky polia musia byť vyplnené!</div>
        <div onClick={() => setIsFormSendSuccesful(false)}>
          <svg
            fill='#000000'
            height='1rem'
            width='1rem'
            version='1.1'
            id='Capa_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 460.775 460.775'
            xmlSpace='preserve'
          >
            <path
              d='M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
