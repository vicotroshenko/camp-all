// TODO: Put a real types here

export type TodoType = {
	id?: string;
	title: string;
	description: string | null;
	completed: boolean;
	private: boolean;
	createdAt?: Date;
	owner: string;
};

export type CustomReqQuery =
	| { status?: string; search?: string; skip?: string; take?: string }
	| undefined;

export type StatisticType = {
	_count: { id: number };
};
