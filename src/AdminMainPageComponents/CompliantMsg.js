import React from 'react';
import './Bstyle.css';
export default function CompliantMsg(props) {
	return <div>{Complaints(props.data)}</div>;
}

const Complaints = (data) => {
	return data.map((item) => {
		if (item.isVisible)
			return (
				<div class='p-6'>
					<div class='rounded-2xl overflow-hidden shadow-lg w-full p-6 bg-slate-300 my-transition'>
						<div class='px-6 py-4'>
							<div class='font-bold text-2xl mb-2'>{item.subject}</div>
							<p class='text-gray-700 text-lg'>{item.data}</p>
						</div>
						<div class='px-6 pt-4 pb-2'>
							<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2'>
								#{item.status}
							</span>
							{item.tags.map((tag) => {
								return (
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2'>
										#{tag}
									</span>
								);
							})}
							<div>
								<button
									class='button-29'
									role='button'
									onClick={() => {
										alert('Are you Sure?');

									}}>
									Complaint Resolved
								</button>
							</div>
						</div>
					</div>
				</div>
			);
	});
};
