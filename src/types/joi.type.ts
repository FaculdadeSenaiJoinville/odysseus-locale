export type Context = {
	limit?: number;
	key?: string;
	value?: any;
};

export type JoiDetail = {
	type: string;
	context: Context;
};

export enum JoiContextProperties {
	KEY = '{{key}}',
	LIMIT = '{{limit}}',
	VALUE = '{{value}}'
}

export enum JoiErrorType {
	INDEX = 'index',
	STRING = 'string.base',
	STRING_MIN = 'string.min',
	STRING_MAX = 'string.max',
	STRING_EMPTY = 'string.empty',
	EMAIL = 'string.email',
	REGEX = 'string.regex.base',
	NUMBER = 'number.base',
	NUMBER_MIN = 'number.min',
	NUMBER_MAX = 'number.max',
	INTEGER = 'number.integer',
	DATE = 'date.base',
	DATE_ISO = 'date.isoDate',
	ARRAY = 'array.base',
	BOOLEAN = 'boolean.base',
	ALLOW_ONLY = 'any.allowOnly',
	REQUIRED = 'any.required',
	ANY_EMPTY = 'any.empty',
	ARRAY_MIN = 'array.min',
	ARRAY_MAX = 'array.max',
	ARRAY_UNIQUE = 'array.unique',
	ALTERNATIVE_TYPES = 'alternative.types',
	OBJECT_UNKNOWN = 'object.unknown',
	ANY_UNKNOWN = 'any.unknown'
}
