import {
	Auth,
	Joi,
	SystemErrors,
	Users,
	Groups,
	Chatbot
} from './translations';
import { Misc } from './core/misc';

export class OdysseyDictionary {
	misc: Misc;
	errors: SystemErrors;
	auth: Auth;
	users: Users;
	groups: Groups;
	chatbot: Chatbot;
}

export const Dictionary: OdysseyDictionary = {
	misc: new Misc(),
	errors: new SystemErrors(),
	auth: new Auth(),
	users: new Users(),
	groups: new Groups(),
	chatbot: new Chatbot()
};

export const JoiMessages = new Joi();
