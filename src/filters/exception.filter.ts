import { ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { Response } from "express";
import { Exception } from "../exception";

@Catch(Exception)
export class BluechipAppExceptionFilter implements ExceptionFilter {
  private logger = new Logger(BluechipAppExceptionFilter.name);

  catch(exception: Exception, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    this.logger.error(exception.description);
    response.status(exception.status).json({
      message: exception.message,
    });
  }
}
