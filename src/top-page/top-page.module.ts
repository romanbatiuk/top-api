import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose-next';
import { TopPageController } from './top-page.controller';
import { TopPageModel } from './top-page.model';
import { TopPageService } from './top-page.service';

@Module({
	imports: [
		ConfigModule,
		TypegooseModule.forFeature([
			{
				typegooseClass: TopPageModel,
				schemaOptions: {
					collection: 'TopPage',
				},
			},
		]),
	],
	controllers: [TopPageController],
	providers: [TopPageService],
})
export class TopPageModule {}
