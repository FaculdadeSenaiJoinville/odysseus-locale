import {
	Auth,
	Joi,
	SystemErrors,
	Users
} from './translations';
import { Misc } from './core/misc';

export class OdysseyDictionary {
	misc: Misc;
	errors: SystemErrors;
	auth: Auth;
	users: Users;
}

export const Dictionary: OdysseyDictionary = {
	misc: new Misc(),
	errors: new SystemErrors(),
	auth: new Auth(),
	users: new Users()
};

export const JoiMessages = new Joi();
