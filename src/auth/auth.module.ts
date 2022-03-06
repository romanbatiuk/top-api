import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose-next';
import { AuthController } from './auth.controller';
import { UserModel } from './user.model';

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: UserModel,
				schemaOptions: {
					collection: 'User',
				},
			},
		]),
	],
	controllers: [AuthController],
})
export class AuthModule {}
