import React, { ChangeEvent } from 'react';

interface FormProps {
	onSubmit: (body: object) => void;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
	const [ form, setForm ] = React.useState({ value: '', answer: '', module_id: 0 });

	const changeField = (field: string, value: string | number) => {
		setForm({
			...form,
			[field]: value
		});
	};

	return (
		<div className="create-form">
			<input
				placeholder="value"
				type="text"
				value={form.value}
				onChange={(event: ChangeEvent<HTMLInputElement>) => changeField('value', event.target.value)}
			/>
			<input
				placeholder="answer"
				type="text"
				value={form.answer}
				onChange={(event: ChangeEvent<HTMLInputElement>) => changeField('answer', event.target.value)}
			/>
			<input
				placeholder="module_id"
				type="number"
				value={form.module_id}
				onChange={(event: ChangeEvent<HTMLInputElement>) => changeField('module_id', event.target.value)}
			/>
			<button onClick={() => onSubmit(form)}>Create</button>
		</div>
	);
};
