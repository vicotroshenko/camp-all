import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SetURLSearchParams } from 'react-router-dom';
import { ITodos } from '~shared/services/types';
import TodoCard from '../todo-card/todo-card.component';
import {
	sliderContainer,
	slider_el,
	td_ls_mobile,
} from './todo-list-tablet.styles';

interface TodoListTabletProps {
	todos: ITodos[];
	itemsPerPage: number;
	params: { [x: string]: string };
	setParams: SetURLSearchParams;
	amountOfItems: number;
}
const TodoListTablet: React.FC<TodoListTabletProps> = ({
	todos,
	itemsPerPage,
	params,
	setParams,
	amountOfItems,
}) => {
	const onReachEnd = (): void => {
		if (!params.skip) return;
		if (+params.skip + itemsPerPage >= amountOfItems) return;
		setParams({ ...params, skip: `${+params.skip + itemsPerPage}` });
	};

	return (
		<div className={sliderContainer}>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				slidesPerView={1}
				slidesPerGroup={1}
				spaceBetween={10}
				wrapperTag="ul"
				scrollbar={{ draggable: true }}
				className={td_ls_mobile}
				onReachEnd={onReachEnd}
			>
				{todos.map((todo: ITodos) => (
					<SwiperSlide tag="li" key={todo.id} className={slider_el}>
						<TodoCard todo={todo} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default TodoListTablet;
