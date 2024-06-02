import React from 'react';
import { Form } from 'react-final-form';
import { useTodosStore } from '~store/todose.store';
import { useModalStore } from '~store/modal.store';
import TODO_INITIAL from '~store/todoInitial.store';
import { validateLength } from '~shared/validation/field.validators';
import TextField from '../text-field/text-field.component';
import Modal from '../modal/modal.component';
import ButtonPrimary from '../button-primary/button-primary.component';
import { md_btn, md_container, md_form, md_title } from './add-modal.styles';
import TextareaField from '../textarea-field/textarea-field.component';
import CustomSwitchField from '../custom-switch-field/custom-switch-field.component';
import { useLocation } from 'react-router-dom';

interface AddModalProps {
	toggle: () => void;
	isOpen: boolean;
}

const AddModal: React.FC<AddModalProps> = ({ toggle, isOpen }) => {
	const addTodos = useTodosStore((state) => state.addTodo);
	const oneTodo = useTodosStore((state) => state.todo);
	const updateTodo = useTodosStore((state) => state.updateTodo);
	const getOneTodo = useTodosStore((state) => state.getOneTodo);
	const defaultValue = useModalStore((state) => state.defaultValue);
	const location = useLocation();
	const isTodoElementPage = location.pathname.includes(oneTodo.id);

	const handleSubmit = (data: { [x: string]: string | boolean }): void => {
		if (isTodoElementPage) {
			updateTodo(defaultValue.id, {
				title: defaultValue.title,
				description: defaultValue.description,
				private: defaultValue.private,
				completed: defaultValue.completed,
				...data,
			});
			setTimeout(() => getOneTodo(defaultValue.id));
		} else {
			addTodos({
				...TODO_INITIAL,
				...data,
			});
		}
		toggle();
	};

	const validation = (value: string): string => validateLength(value, 2);
	return (
		<Modal toggle={toggle} isOpen={isOpen}>
			<div className={md_container}>
				<Form
					onSubmit={handleSubmit}
					render={({ handleSubmit, form }) => (
						<form
							onSubmit={(data) => {
								handleSubmit(data);
								form.reset();
							}}
							className={md_form}
						>
							<h2 className={md_title}>Add new task</h2>
							<TextField
								fieldName="title"
								labelName="title"
								initialValue={defaultValue.title}
								validate={validation}
							/>
							<TextareaField
								fieldName="description"
								labelName="description"
								initialValue={defaultValue.description}
							/>
							{!isTodoElementPage && (
								<CustomSwitchField
									fieldName="completed"
									ariaLabel="switch button - completed"
									label="Completed"
									defaultChecked={defaultValue.completed}
								/>
							)}
							{!isTodoElementPage && (
								<CustomSwitchField
									fieldName="private"
									ariaLabel="switch button - private"
									label="Private"
									defaultChecked={defaultValue.private}
								/>
							)}
							<div className={md_btn}>
								<ButtonPrimary type="button" onClick={toggle}>
									Close
								</ButtonPrimary>
								<ButtonPrimary type="submit">
									Submit
								</ButtonPrimary>
							</div>
						</form>
					)}
				/>
			</div>
		</Modal>
	);
};

export default AddModal;
