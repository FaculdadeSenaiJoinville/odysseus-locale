import {
	Auth,
	Joi,
	SystemErrors,
	Users,
	Groups,
	Chatbot,
	BotContent,
	BotIntent,
	BotHistory
} from './translations';
import { Misc } from './core/misc';

export class OdysseyDictionary {
	misc: Misc;
	errors: SystemErrors;
	auth: Auth;
	users: Users;
	groups: Groups;
	bot_contents: BotContent;
	bot_intents: BotIntent;
	chatbot: Chatbot;
	bot_histories: BotHistory;
}

export const Dictionary: OdysseyDictionary = {
	misc: new Misc(),
	errors: new SystemErrors(),
	auth: new Auth(),
	users: new Users(),
	groups: new Groups(),
	bot_contents: new BotContent(),
	bot_intents: new BotIntent(),
	chatbot: new Chatbot(),
	bot_histories: new BotHistory()
};

export const JoiMessages = new Joi();
