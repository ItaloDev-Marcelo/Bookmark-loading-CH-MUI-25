import {useState} from 'react'
import {bankOfImagens} from '../data/index'


const Form = () => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const {Error} = bankOfImagens

  const handleInput = (event) => {
      const {value} = event.target;
      setEmail(value)
  }

  const handleSubmitForm = (e) => {
     e.preventDefault()
     
     
     if(email.length > 0) {
       setError(false)
     }else {
       setError(true)
       setEmail("")
     }
  }

  return (
    <form onSubmit={handleSubmitForm}>
          <div className='flex'>
            <div className={error ? 'flex flex-col bg-red-500 text-white' : 'flex flex-col'}>
              <label htmlFor='email'>
               <input type='email' id='email' placeholder='Enter your email address'
                value={email} onChange={handleInput} className='h-[40px] w-[100%]' />
          </label>
          <span className={error ? 'visible' : 'hidden'}>
                <em>Whoops, make sure it's an email</em></span>
               <div className={error ? 'flex ' : 'hidden'}>
                  <img src={Error} alt='' />
               </div>
          </div>
         <button type='submit' className='bg-red-400 text-white font-semibold hover:bg-transparent
          hover:outline-solid hover:outline-red-500 hover:text-red-400 h-[40px] w-[100px] lg:ml-2'>Contact us</button>
          </div>

    </form>
  )
}

export default Form