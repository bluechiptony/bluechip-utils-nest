import { Exception } from './exception';

export class ResourceNotFoundException extends Exception {}

export class ResourceExistsException extends Exception {}

export class UnauthorizedResourceActionException extends Exception {}
