import React from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { Form } from 'react-final-form';
import { useModalStore } from '~store/modal/modal.store';
import { todoInitial } from '~store/todos/todoInitial.store';
import { todoService } from '~shared/services/todo.service';
import { validateLength } from '~shared/validation/field.validators';
import TextField from '../text-field/text-field.component';
import Modal from '../modal/modal.component';
import ButtonPrimary from '../button-primary/button-primary.component';
import TextareaField from '../textarea-field/textarea-field.component';
import CustomSwitchField from '../custom-switch-field/custom-switch-field.component';
import { MutateParams, NewUpdateData } from '~shared/services/types';
import { md_btn, md_container, md_form, md_title } from './add-modal.styles';

interface AddModalProps {
	onTodoUpdate?: (newData: NewUpdateData) => void;
}

const AddModal: React.FC<AddModalProps> = ({ onTodoUpdate }) => {
	const toggle = useModalStore((state) => state.toggle);
	const defaultValue = useModalStore((state) => state.defaultValue);
	const params = useParams();
	const isTodoElementPage = Object.keys(params).includes('id');

	const { mutate: mutateCreate } = useMutation({
		mutationKey: ['todo-post'],
		mutationFn: ({ data }: MutateParams): Promise<AxiosResponse> =>
			todoService.post({ data }, true),
	});

	const handleSubmit = (newData: NewUpdateData): void => {
		if (isTodoElementPage) {
			onTodoUpdate(newData);
		} else {
			const data = {
				...todoInitial,
				...newData,
			};
			mutateCreate({ data });
		}
		toggle();
	};
	const isExistTodo = Boolean(defaultValue.id);

	const validation = (value: string): string => validateLength(value, 2);
	return (
		<Modal>
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
							<h2 className={md_title}>
								{isExistTodo ? 'Edit tood' : 'Add new task'}
							</h2>
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
