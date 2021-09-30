import {
	Auth,
	Joi,
	SystemErrors,
	Users,
	Groups
} from './translations';
import { Misc } from './core/misc';

export class OdysseyDictionary {
	misc: Misc;
	errors: SystemErrors;
	auth: Auth;
	users: Users;
	groups: Groups;
}

export const Dictionary: OdysseyDictionary = {
	misc: new Misc(),
	errors: new SystemErrors(),
	auth: new Auth(),
	users: new Users(),
	groups: new Groups()
};

export const JoiMessages = new Joi();
