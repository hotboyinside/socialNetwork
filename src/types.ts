export interface Character {
	date: string;
	gender: 'Male' | 'Female';
	id: number;
	image: string | null;
	name: string;
	url: string;
}

export interface Info {
	count: number;
	next: string | null;
	pages: number;
	prev: string | null;
}
