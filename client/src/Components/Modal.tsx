import React from 'react';
import './Modal.css';
import { Form } from './Form';

interface ModalProps {
	onSubmit: (body: object) => void;
	onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onSubmit, onClose }) => {
	return (
		<div id="myModal" className="modal">
			<div className="modal-content">
				<span onClick={onClose} className="close">
					&times;
				</span>
				<Form onSubmit={onSubmit} />
			</div>
		</div>
	);
};
