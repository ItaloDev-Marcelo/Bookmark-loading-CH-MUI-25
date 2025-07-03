import {useState} from 'react';

export default function UseSimpleForm() {
      const [email, setEmail] = useState('');
      const [error, setError] = useState(false);
    
      const handleInput = (event) => {
          const {value} = event.target;
          setEmail(value)
      };
    
      const handleSubmitForm = (e) => {
         e.preventDefault()
         
         
         if(email.length > 0) {
           setError(false)
         }else {
           setError(true)
           setEmail("")
         }
      };

      return [
        handleInput,
        email,
        error,
        handleSubmitForm
      ]
};