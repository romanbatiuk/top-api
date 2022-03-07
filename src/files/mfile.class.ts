import { th } from 'date-fns/locale';

export class MFile {
	originalname: string;
	buffer: Buffer;

	constructor(file: Express.Multer.File | MFile) {
		this.buffer = file.buffer;
		this.originalname = file.originalname;
	}
}
