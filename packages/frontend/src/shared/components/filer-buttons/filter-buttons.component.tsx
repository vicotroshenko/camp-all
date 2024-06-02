import { Button, ButtonGroup } from '@blueprintjs/core';
import React from 'react';
import { btn_group, btn_group_item } from './filter-buttons.styles';
import { FILTER_STATUS } from '~shared/keys';

interface FilterButtonsProps {
	onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
	status: string;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onClick, status }) => {
	const getActiveButton = (name): boolean => {
		return name === status;
	};
	const activeAll = getActiveButton(FILTER_STATUS.ALL);
	const activePrivate = getActiveButton(FILTER_STATUS.PRIVATE);
	const activePublic = getActiveButton(FILTER_STATUS.PUBLIC);
	const activeCompleted = getActiveButton(FILTER_STATUS.COMPLETED);
	return (
		<ButtonGroup onClick={onClick} className={btn_group}>
			<Button
				name={FILTER_STATUS.ALL}
				active={activeAll}
				className={btn_group_item}
				disabled={activeAll}
			>
				All
			</Button>
			<Button
				name={FILTER_STATUS.PRIVATE}
				active={activePrivate}
				className={btn_group_item}
				disabled={activePrivate}
			>
				Private
			</Button>
			<Button
				name={FILTER_STATUS.PUBLIC}
				active={activePublic}
				className={btn_group_item}
				disabled={activePublic}
			>
				Public
			</Button>
			<Button
				name={FILTER_STATUS.COMPLETED}
				active={activeCompleted}
				className={btn_group_item}
				disabled={activeCompleted}
			>
				Completed
			</Button>
		</ButtonGroup>
	);
};

export default FilterButtons;
