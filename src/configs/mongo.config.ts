import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose-next';

export const getMongoConfig = async (
	configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
	// console.log(getMongoString(configService));

	return {
		uri: getMongoString(configService),
	};
};

// mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
// mongodb://admin:admin@localhost:27017/mytop

const getMongoString = (configService: ConfigService) =>
	// 'mongodb+srv://' +
	// configService.get('MONGO_LOGIN') +
	// ':' +
	// configService.get('MONGO_PASSWORD') +
	// '@' +
	// configService.get('MONGO_HOST') +
	// '/' +
	// configService.get('MONGO_AUTH_DATABASE');
	'mongodb://' +
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
