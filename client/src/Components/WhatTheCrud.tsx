import React from 'react';
import '../Styles/table.css';
import { Link } from 'wouter';
import { Form } from './Form';

export interface TableProps {
	url: string;
}

export const WhatTheCrud: React.FC<TableProps> = ({ url }) => {
	const [ data, setData ] = React.useState<any[]>([]);
	const [ showForm, setShowForm ] = React.useState('');
	const [ refresh, setRefresh ] = React.useState(0);

	React.useEffect(
		() => {
			fetch(url, { method: 'GET' }).then((response) => response.json()).then((data) => setData(data));
		},
		[ url, refresh ]
	);

	const keys = (data && Array.isArray(data) && data.length > 0 && Object.keys(data[0])) || [];
	const tableHeaders = (keys && keys.map((key) => key[0].toUpperCase() + key.slice(1))) || [];

	const onDelete = (id: string) => {
		console.log('delete ', id);
		fetch(url + '/' + id, { method: 'DELETE' }).then(() => {
			// Local delete
			setData(data.filter((item) => item.id !== id));
		});
	};

	const onCreate = () => {
		setShowForm('create');
	};

	const onUpdate = (id: string) => {
		setShowForm(id);
	};

	const onCreateSubmit = (body: object) => {
		console.log('the body ', body);
		fetch(url, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}).then(() => {
			setShowForm('');
			setRefresh(refresh + 1);
		});
	};

	const onUpdateSubmit = (body: object) => {
		fetch(url + '/' + showForm, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}).then(() => {
			setShowForm('');
			setRefresh(refresh + 1);
		});
	};

	return (
		<div className="table-page">
			<Link href="/">
				<div className="link">Go Back</div>
			</Link>
			<button onClick={() => onCreate()}>Create</button>
			{showForm !== '' && <Form onSubmit={showForm === 'create' ? onCreateSubmit : onUpdateSubmit} />}
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							{tableHeaders.map((header) => <th key={header}>{header}</th>)}
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{data.map((question) => (
							<tr key={question.id}>
								{keys.map((key) => <td key={question.id + key}>{question[key]}</td>)}
								<td>
									<button onClick={() => onUpdate(question.id)}>Update</button>
									<button onClick={() => onDelete(question.id)}>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
