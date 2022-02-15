import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const authenticate = () => {
	const form = document.getElementById('login')
			form.addEventListener('submit', login)

			async function login(event) {
				event.preventDefault()
				const username = document.getElementById('username').value
				const password = document.getElementById('password').value

				const result = await fetch('/api/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username,
						password
					})
				}).then((res) => res.json())

				if (result.status === 'ok') {
					// everythign went fine
					console.log('Got the token: ', result.data)
					localStorage.setItem('token', result.data)
					alert('LoggedIn Successfully')
				} else {
					alert(result.error)
				}
			}
}

const UserLogin=()=>{
	return( 
	<div className='formCenter'>
	<form action='/api/login' className='formFields' id='login'>
		<div className='formField'>
			<label className='formFieldLabel'>User Name</label>
			<input
				type='text'
				id='username'
				className='formFieldInput'
				placeholder='Enter your user name'
				name='username'
			/>
		</div>

		<div className='formField'>
			<label className='formFieldLabel'>Password</label>
			<input 
				type='password'
				id='password'
				className='formFieldInput'
				placeholder='Enter your password'
				name='password'
			/>
		</div>

		<div className='formField'>
			<button className='formFieldButton' id='submit' type='submit' onClick={()=>authenticate()}>Sign In</button>
			<Link to='/sign-up' className='formFieldLink'>
				Create an account
			</Link>
		</div>
	</form>
</div>
)}

const AdminLogin=()=>{
	return( 
	<div className='formCenterAdmin'>
	<form className='formFields'>
		<div className='formField'>
			<label className='formFieldLabel'>Admin E-Mail Address</label>
			<input
				type='email'
				id='email'
				className='formFieldInput'
				placeholder='Enter your email'
				name='email'
			/>
		</div>

		<div className='formField'>
			<label className='formFieldLabel'>Password</label>
			<input 
				type='password'
				id='password'
				className='formFieldInput'
				placeholder='Enter your password'
				name='password'
			/>
		</div>

		<div className='formField'>
			<button className='formFieldButton'>Sign In</button>
			<Link to='/sign-up' className='formFieldLink'>
				Create an account
			</Link>
		</div>
	</form>
</div>
)}

export default function SignInForm(props){
	return (
		props.isAdmin==true? AdminLogin(): UserLogin()
	);
}
