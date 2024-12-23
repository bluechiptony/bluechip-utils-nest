import { Exception } from './exception';

export class InvalidCredentialsException extends Exception {}

export class InvalidUserException extends Exception {}

export class InactiveUserException extends Exception {}
