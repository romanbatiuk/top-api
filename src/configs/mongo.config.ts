import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose-next';

export const getMongoConfig = async (
	configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
	return {
		uri: getMongoString(configService),
		...getMongoOptions(),
	};
};

const getMongoString = (configService: ConfigService) =>
	'mongodb+srv://' +
	configService.get('MONGO_LOGIN') +
	':' +
	configService.get('MONGO_PASSWORD') +
	'@' +
	configService.get('MONGO_HOST') +
	'/' +
	configService.get('MONGO_AUTH_DATABASE');

const getMongoOptions = () => ({
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
