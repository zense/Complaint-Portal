import React, {useState} from 'react'
let ids = 4;

const handleSubmit = () =>
	{
		//e.preventDefault();
		//ids++;
		//setComplaint({id:"",subject:"",data:"",tags:[],isVisible:false,status:false});
		//console.log(e);

		const form = document.getElementById('reg-form')
		form.addEventListener('submit', registerUser)

	async function registerUser(event) {
		event.preventDefault()
		const subject = document.getElementById('grid-first-name').value
		const complaint = document.getElementById('exampleFormControlTextarea1').value
		console.log(subject);
		console.log(complaint);

		const result = await fetch('/api/registerC', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				subject,
				complaint
			})
		}).then((res) => res.json())

		if (result.status === 'ok') {
			// everythign went fine
			alert('Complaint Registered Successfully')
		} else {
			alert(result.error)
		}
	}

}
export default function ComplaintForm() {
	const [complaint,setComplaint] = useState({id:"",subject:"",data:"",tags:[],isVisible:false,status:false});

	const handleSubjectChange = (e) => {
		setComplaint({...complaint,subject:e.target.value});
	}

	const handleComplaintChange = (e) => 
	{
		setComplaint({...complaint,data:e.target.value,id:ids});
	}

	const addTag = (e) => 
	{
		if(e.target.checked){setComplaint({...complaint,tags:[...complaint.tags,e.target.value]});}
		else {setComplaint({...complaint,tags:complaint.tags.filter(item => item !== e.target.value)});}
	}
  return (
	<div class='my-transition bg-white p-10 rounded-2xl'>
	
	<h1>Complaint Form</h1> <br/>
	
	<form class="w-full max-w-lg h-full text-xl" id='reg-form' action='/api/registerC'>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full md:w-full px-3 mb-6 md:mb-0">
				<label class="block uppercase tracking-wide text-gray-700 font-bold mb-2" for="grid-first-name">
					Subject
				</label>
			<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter Subject" onChange={(e)=>{handleSubjectChange(e)}}/>
			<p class="text-red-500 text-xs italic">Please fill out this field.</p>
		</div>
		</div>
		<div class="flex flex-wrap mb-6">
			<label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700"
			>Enter Complaint</label>
			<textarea
			class="
				form-control
				block
				w-full
				px-3
				py-1.5
				text-base
				font-normal
				bg-clip-padding
				border border-solid border-gray-300
				rounded
				transition
				ease-in-out
				m-0
				focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
				bg-gray-200 text-gray-700
			"
			id="exampleFormControlTextarea1"
			rows="3"
			placeholder="Your message"
			onChange={(e)=>{handleComplaintChange(e)}}
			></textarea>
		</div>
		<i>Tags</i>
		<div class="form-check">
			<input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="hostel" id="flexCheckDefault" onClick={(e)=>{addTag(e)}}/>
			<label class="form-check-label inline-block text-gray-800" for="flexCheckDefault" value="hostel" >
				Hostel
			</label>
		</div>
		<div class="form-check">
			<input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="mess" id="flexCheckDefault" onClick={(e)=>{addTag(e)}}/>
			<label class="form-check-label inline-block text-gray-800" for="flexCheckDefault" value="mess" >
				Mess
			</label>
		</div>
		<div class="form-check">
			<input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="academics" id="flexCheckDefault" onClick={(e)=>{addTag(e)}}/>
			<label class="form-check-label inline-block text-gray-800" for="flexCheckDefault" value="academics" >
				Acads
			</label>
		</div>
		<br/>
		<div class="flex space-x-2 justify-center">
  			<button type="submit" id='submit' class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>{handleSubmit()}}>Register Compliant</button>
		</div>
	</form>

	</div>
  )
}
