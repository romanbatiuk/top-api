import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

class HtData {
	@prop()
	count: number;

	@prop()
	juniorSalary: number;

	@prop()
	middleSalary: number;

	@prop()
	seniorSalary: number;
}

class TopPageAdvantage {
	@prop()
	title: string;

	@prop()
	description: string;
}

export interface ProductModel extends Base {}
export class TopPageModel extends TimeStamps {
	@prop({ enum: TopLevelCategory })
	firstCategory: TopLevelCategory;

	@prop()
	secondCategory: string;

	@prop({ unique: true })
	alias: string;

	@prop()
	title: string;

	@prop()
	metaTitle: string;

	@prop()
	metaDescription: string;

	@prop()
	category: string;

	// https://grc.ua/ (HeadHunter)
	@prop({ type: () => HtData })
	hh?: HtData;

	@prop({ type: () => [TopPageAdvantage] })
	advantages?: TopPageAdvantage[];

	@prop()
	seoText?: string;

	@prop()
	tagsTitle: string;

	@prop({ type: () => [String] })
	tags: string[];
}
