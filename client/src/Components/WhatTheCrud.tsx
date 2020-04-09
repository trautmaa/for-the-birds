import React from 'react';
import '../Styles/table.css';
import { Form } from './Form';
import { Modal } from './Modal';
import './WhatTheCrud.css';

export interface TableProps {
	url: string;
	title?: string;
	onSelect?: (id: string) => void;
}

export const WhatTheCrud: React.FC<TableProps> = ({ url, title, onSelect }) => {
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
			<div className="buttons">
				<button onClick={() => onCreate()}>Create</button>
			</div>
			{showForm !== '' && (
				<Modal
					onSubmit={showForm === 'create' ? onCreateSubmit : onUpdateSubmit}
					onClose={() => setShowForm('')}
				/>
			)}
			{showForm !== '' && <Form onSubmit={showForm === 'create' ? onCreateSubmit : onUpdateSubmit} />}
			<div className="header">
				<h1>{title}</h1>
			</div>
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							{tableHeaders.map((header) => <th key={header}>{header}</th>)}
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item) => (
							<tr
								style={{ cursor: (onSelect && 'pointer') || 'default' }}
								key={item.id}
								onClick={() => onSelect && onSelect(item.id)}
							>
								{keys.map((key) => <td key={item.id + key}>{item[key]}</td>)}
								<td>
									<button onClick={() => onUpdate(item.id)}>Update</button>
									<button onClick={() => onDelete(item.id)}>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
