import {
	Auth,
	Joi,
	SystemErrors,
	Users
} from './translations';

export const Dictionary = {
	errors: new SystemErrors(),
	auth: new Auth(),
	users: new Users()
};

export const JoiMessages = new Joi();
