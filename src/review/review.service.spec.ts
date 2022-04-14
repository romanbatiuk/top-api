import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from 'nestjs-typegoose-next';
import { ReviewService } from './review.service';
import { Types } from 'mongoose';

describe('ReviewService', () => {
	let service: ReviewService;

	const exec = { exec: jest.fn() };
	const reviewRepositoryFactory = () => ({
		find: () => exec,
	});

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			providers: [
				ReviewService,
				{ useFactory: reviewRepositoryFactory, provide: getModelToken('ReviewModel') },
			],
		}).compile();

		service = app.get<ReviewService>(ReviewService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('findByProductId working', async () => {
		const id = new Types.ObjectId().toHexString();
		reviewRepositoryFactory()
			.find()
			.exec.mockReturnValueOnce([{ productId: id }]);
		const res = await service.findByProductId(id);
		expect(res[0].productId).toBe(id);
	});
});
