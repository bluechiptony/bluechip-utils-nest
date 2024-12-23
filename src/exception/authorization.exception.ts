import { Exception } from './exception';

export class InvalidAuthorizationException extends Exception {}

export class ExpiredAuthorizationException extends Exception {}
