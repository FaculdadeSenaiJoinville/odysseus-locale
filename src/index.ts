import {
	Auth,
	Joi,
	SystemErrors,
	Users
} from './translations';
import { getLabel, getModule } from './core/misc';

export class OdysseyDictionary {
	getLabel: (label: string) => string;
	getModule: (label: string) => string;
	errors: SystemErrors;
	auth: Auth;
	users: Users;
}

export const Dictionary: OdysseyDictionary = {
	getLabel,
	getModule,
	errors: new SystemErrors(),
	auth: new Auth(),
	users: new Users()
};

export const JoiMessages = new Joi();
