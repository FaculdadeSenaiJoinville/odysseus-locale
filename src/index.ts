import {
	Auth,
	Joi,
	SystemErrors,
	Users
} from './translations';
import { getLabel } from './core/misc';

export class OdysseyDictionary {
	getLabel: (label: string) => string;
	errors: SystemErrors;
	auth: Auth;
	users: Users;
}

export const Dictionary: OdysseyDictionary = {
	getLabel,
	errors: new SystemErrors(),
	auth: new Auth(),
	users: new Users()
};

export const JoiMessages = new Joi();
