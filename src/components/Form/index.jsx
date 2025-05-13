
import { useForm } from "react-hook-form";

export default function Form(){

    const {register, handleSubmit, formState: {errors}}  = useForm();

     
    const onSubmitForm = (data) => {
        console.log(data)
    }


    return (
       <form onSubmit={handleSubmit(onSubmitForm)}>
           <label htmlFor="email">
            <input {...register('email',{required:"Whoops,makesure it's an email",
                 pattern: {value:  /^\S+@\S+$/i , message: 'Email must have @gamil.com'}})}
                  type='text' name='email' id='email' placeholder='Enter your email address' />
           {errors.email && <p>{errors.email.message} <img src='ss' alt="error icon"/>  </p>} 
           </label>
           <button type="submit">Contact</button>
       </form>
    )
}