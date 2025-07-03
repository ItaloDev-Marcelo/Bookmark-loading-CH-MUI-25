//
import {ImagensBank} from '../../data/ImagensBank';
import UseSimpleForm from './hook/UseSimpleForm';

const Form = () => {
  const {Error} = ImagensBank;
  const {handleSubmitForm, email,error,handleInput} = UseSimpleForm;

  return (
    <form onSubmit={handleSubmitForm}>
          <div className='flex flex-col lg:flex-row'>
            <div className={error ? 'flex flex-col bg-red-500 p-1 text-white' : 'flex flex-col'}>
              <label htmlFor='email'>
               <input type='email' id='email' placeholder='Enter your email address'
                value={email} onChange={handleInput} className='h-[40px] rounded-[5px] 
                w-[100%] lg:w-[300px] lg:h-[50px]  px-1 bg-white text-gray-500' />
                  <div className={error ? 'flex error-icon' : 'hidden'}>
                  <img src={Error} alt='' />
               </div>
          </label>
          <span className={error ? 'visible' : 'hidden'}>
                <em>Whoops, make sure it's an email</em></span>
          </div>
         <button type='submit' className='bg-red-400 mt-4 rounded-[5px] lg:mt-0 text-white font-semibold hover:bg-transparent
          hover:outline-solid hover:outline-red-500 cursor-pointer hover:text-red-400 h-[40px] lg:h-[50px]
           w-[100%] lg:w-[200px] lg:ml-2'>Contact us</button>
          </div>
    </form>
  )
}

export default Form