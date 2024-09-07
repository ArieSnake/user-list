import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import './AddUser.css';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Surname is required'),
  login: yup.string().email('Invalid email').required('Login is required'),
  age: yup.number().typeError('Age must be a number').positive('Age must be positive').required('Age is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
})

export const AddUser = ({ setUsers }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = (data) => {
 
    toast.success('User added successfully!')
    setUsers(prevUsers => [...prevUsers, data])
    reset()
  }

  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name')} />
        <p className="error-message">{errors.name?.message}</p>
      </div>
      <div className="form-group">
        <label htmlFor="surname">Surname</label>
        <input id="surname" {...register('surname')} />
        <p className="error-message">{errors.surname?.message}</p>
      </div>
      <div className="form-group">
        <label htmlFor="login">Login</label>
        <input id="login" {...register('login')} />
        <p className="error-message">{errors.login?.message}</p>
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input id="age" type="number" {...register('age')} />
        <p className="error-message">{errors.age?.message}</p>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register('password')} />
        <p className="error-message">{errors.password?.message}</p>
      </div>
      <button type="submit">Add User</button>
    </form>
  )
}
