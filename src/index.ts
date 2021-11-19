import {
	Auth,
	Joi,
	SystemErrors,
	Users,
	Groups,
	Chatbot,
	BotContent,
	BotIntent
} from './translations';
import { Misc } from './core/misc';

export class OdysseyDictionary {
	misc: Misc;
	errors: SystemErrors;
	auth: Auth;
	users: Users;
	groups: Groups;
	bot_content: BotContent;
	bot_intent: BotIntent;
	chatbot: Chatbot;
}

export const Dictionary: OdysseyDictionary = {
	misc: new Misc(),
	errors: new SystemErrors(),
	auth: new Auth(),
	users: new Users(),
	groups: new Groups(),
	bot_content: new BotContent(),
	bot_intent: new BotIntent(),
	chatbot: new Chatbot()
};

export const JoiMessages = new Joi();
