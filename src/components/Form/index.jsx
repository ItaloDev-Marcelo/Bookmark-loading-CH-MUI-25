
import { useForm } from "react-hook-form";
import Images from '../comum-components/imageBank';
export default function Form(){

    const {register, handleSubmit, formState: {errors}}  = useForm();

     
    const onSubmitForm = (data) => {
        console.log(data)
    }


    return (
       <form onSubmit={handleSubmit(onSubmitForm)} sx={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
           <label htmlFor="email">
            <input {...register('email',{required:"Whoops,makesure it's an email",
                 pattern: {value:  /^\S+@\S+$/i , message: 'Email must have @gamil.com'}})}
                  type='text' name='email' id='email' placeholder='Enter your email address' />
           {errors.email && <p>{errors.email.message} <img src={Images.error} alt="error icon"/>  </p>} 
           </label>
           <button type="submit" style={{backgroundColor: 'red', color: 'white'}} >Contact</button>
       </form>
    )
}