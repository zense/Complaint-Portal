import React, { useState } from 'react';
export default function RightSideNav(props) {
	const [filterList, setFilterList] = useState([
		{ name: 'Acads', value: false, pname: 'academics' },
		{ name: 'Hostel', value: false, pname: 'hostel' },
		{ name: 'Mess', value: false, pname: 'mess' },
	]);

	const updateFilterListState = (nm) => {
		const newFliterList = filterList.filter((item) => item.name !== nm);
		const tempObj = filterList.find((item) => item.name === nm);
		setFilterList([...newFliterList, { ...tempObj, value: !tempObj.value }]);
	};
	const filters = (listOfFilters) => {
		return listOfFilters.map((name) => {
			return (
				<div class='form-check text-xl p-1'>
					<input
						class='form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
						type='checkbox'
						onClick={() => updateFilterListState(name)}
					/>
					<label
						class='form-check-label inline-block text-green-500'
						for='flexCheckChecked'>
						{name}
					</label>
				</div>
			);
		});
	};

	const handleSubjectClick = (e) => {
		const list = [
			...props.data.slice(0, e.item.id - 1),
			{
				id: e.item.id,
				subject: e.item.subject,
				tags: e.item.tags,
				data: e.item.data,
				isVisible: !e.item.isVisible,
			},
			...props.data.slice(e.item.id),
		];
		props.setData(list);
	};

	const Subjects = (data) => {
		const getbg = (item) => {
			return item.isVisible ? 'p-4 bg-gray-900 w-full' : 'p-4 w-full';
		};
		let flag = false;
		return data.map((item) => {
			filterList.map((it) => {
				item.tags.map((it1) => {
					if (it1 === it.pname && it.value) {
						flag = true;
					}
				});
			});
			console.log(filterList, item.tags);
			if (flag) {
				flag = false;
				return (
					<button
						class={getbg(item)}
						onClick={() => {
							handleSubjectClick({ item });
						}}>
						{item.subject}
					</button>
				);
			}
		});
	};

	return (
		<div class='h-full  m-0 flex flex-col text-white shadow-lg bg-gray-900 right-0 top-0'>
			<i class='sidebar-text h-20 flex-col'>Complaints</i>
			<i class='flex flex-col p-4 ml-12'>
				Filters
				{filters(['Acads', 'Hostel', 'Mess'])}
			</i>
			<i class='h-fit flex-col mx-auto shadow-lg bg-gray-800 text-green-500 w-4/5 rounded-3xl mt-8 mb-8 text-xl text-center'>
				<i class='p-8 w-full text-3xl text-white'>Subjects</i>
				{Subjects(props.data)}
			</i>
		</div>
	);
}
