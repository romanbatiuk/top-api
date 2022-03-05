export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

class HtData {
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
}

class TopPageAdvantage {
	title: string;
	description: string;
}

export class TopPageModel {
	firstCategory: TopLevelCategory;
	secondCategory: string;
	alias: string;
	title: string;
	category: string;

	// https://grc.ua/ (HeadHunter)
	hh?: HtData;

	advantages: TopPageAdvantage[];

	seoText: string;
	tagsTitle: string;
	tags: string[];
}
