import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'


function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting},
  } = useForm();

  async function onSubmit(data){

    await new Promise((resolve) =>setTimeout(resolve, 5000));
    console.log("submiting the form", data);
  }

  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>Frist Name :</label>
      <input  {...register('firstName')}/>
    </div>
    <br/>
    <div>
      <label>Middle Name :</label>
      <input className={errors.firstName ? 'input-error': " "}
       {...register('MiddleName', 
        { 
          required: true,
           minLength:{value:3, message: 'Min Len atleast 3' },
        maxLength:{value:6, message: 'Min Len atleast 3' }})}/>
        {errors.MiddleName && <p className='error-msg'>{errors.MiddleName.message}
        </p>}

    </div>
    <br/>
    <div>
      <label>Last  Name :</label>
      <input 
       className={errors.firstName ? 'input-error': " "}
        {...register("lastName", { 
          pattern: {
          value :/^[A-Za-z]+$/i,

        message:"last Name is not as per the rules"
          }
 } )}/>
         {errors.lastName && <p className='error-msg'>{errors.lastName.message}
         </p>}
    </div>
    <br/>
    <input type="submit" disabled={isSubmitting}
     value={isSubmitting ? "Submitting" : "Submit"} />
   </form>
  )
}

export default App
