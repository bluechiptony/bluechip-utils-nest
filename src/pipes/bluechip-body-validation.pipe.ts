import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

@Injectable()
export class BluechipBodyValidationPipe<T extends object> implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<T> {
    const obj = plainToClass(metadata.metatype as new () => T, value);
    const errors = await validate(obj);

    if (errors.length > 0) {
      const errorMessage = this.extractErrorMessage(errors[0]);
      throw new BadRequestException({ message: errorMessage });
    }

    return obj;
  }

  private extractErrorMessage(error: any): string {
    const constraints = error.constraints;
    const constraintKeys = Object.keys(constraints);
    if (constraintKeys.length > 0) {
      return constraints[constraintKeys[0]];
    }
    return "Validation failed";
  }
}
