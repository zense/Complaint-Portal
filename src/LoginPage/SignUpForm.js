import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const authenticate = () => {
	const form = document.getElementById('reg-form')
	form.addEventListener('submit', registerUser)

	async function registerUser(event) {
		event.preventDefault()
		const firstname = document.getElementById('first_name').value
		const lastname = document.getElementById('last_name').value
		const username = document.getElementById('user_name').value
		const Email = document.getElementById('email').value
		const password = document.getElementById('password').value

		const result = await fetch('http://localhost:80/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstname,
				lastname,
				username,
				password,
				Email
			})
		}).then((res) => res.json())

		if (result.status === 'ok') {
			// everythign went fine
			alert('User Registered Successfully')
		} else {
			alert(result.error)
		}
	}
}

export default function SignUpForm() {
	return (
		<div className='formCenter'>
			<form action='/api/register' method="post" className='formFields' id='reg-form'>
				<div className='formField'>
					<label className='formFieldLabel'>First Name</label>
					<input
						type='text'
						id='first_name'
						className='formFieldInput'
						placeholder='Enter your first name'
						name='first_name'
					/>
				</div>
				<div className='formField'>
					<label className='formFieldLabel'>Last Name</label>
					<input
						type='text'
						id='last_name'
						className='formFieldInput'
						placeholder='Enter your last name'
						name='last_name'
					/>
				</div>
				<div className='formField'>
					<label className='formFieldLabel'>Username</label>
					<input
						type='text'
						id='user_name'
						className='formFieldInput'
						placeholder='Enter your user name'
						name='user_name'
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
					<label className='formFieldLabel'>E-Mail Address</label>
					<input
						type='email'
						id='email'
						className='formFieldInput'
						placeholder='Enter your email'
						name='email'
					/>
				</div>

				<div className='formField'>
					<label className='formFieldCheckboxLabel'>
						<input
							className='formFieldCheckbox'
							type='checkbox'
							name='hasAgreed'
						/>{' '}
						I agree all statements in{' '}
						<a href='null' className='formFieldTermsLink'>
							terms of service
						</a>
					</label>
				</div>

				<div className='formField'>
					<button className='formFieldButton' type='submit' id='submit' onClick={()=>authenticate()}>Sign Up</button>{' '}
					<Link to='/' className='formFieldLink'>
						I'm already member
					</Link>
				</div>
			</form>
		</div>
	);
}
