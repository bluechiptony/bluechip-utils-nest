import { maskSensitiveData } from "../../src/string-utils";

describe("maskSensitiveData", () => {
  const obj = {
    emailAddress: "jmaddison@gmail.com",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "08092283386",
    address: "1234 Elm Street",
  };

  it("should mask specified keys", () => {
    const result = maskSensitiveData(obj, ["emailAddress", "phoneNumber"]);
    expect(result).toEqual({
      emailAddress: "jm***************om",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "08*******86",
      address: "1234 Elm Street",
    });
  });

  it("should leave the object unchanged if keysToMask is empty", () => {
    const result = maskSensitiveData(obj, []);
    expect(result).toEqual(obj);
  });

  it("should leave the object unchanged if no matching keys are found", () => {
    const result = maskSensitiveData(obj, ["nonExistentKey"]);
    expect(result).toEqual(obj);
  });

  it("should handle empty objects gracefully", () => {
    const emptyObj = {};
    const result = maskSensitiveData(emptyObj, ["emailAddress"]);
    expect(result).toEqual({});
  });

    it("should not alter non-string values", () => {
      const objWithNonStrings = {
        id: 12345,
        isActive: true,
        emailAddress: "jmaddison@gmail.com",
      };
      const result = maskSensitiveData(objWithNonStrings, ["id", "emailAddress"]);
      expect(result).toEqual({
        id: 12345, // Not masked
        isActive: true, // Not masked
        emailAddress:  "jm***************om", // Masked
      });
    });

  it("should correctly mask strings based on length", () => {
    const objWithShortStrings = {
      shortKey: "123",
      mediumKey: "12345",
      longKey: "1234567890",
    };
    const result = maskSensitiveData(objWithShortStrings, ["shortKey", "mediumKey", "longKey"]);
    expect(result).toEqual({
      shortKey: "***", // Fully masked since length <= 4
      mediumKey: "12*45", // Partially masked
      longKey: "12******90", // Partially masked
    });
  });

    it("should not throw an error when masking a key with undefined or null value", () => {
      const objWithNull = { emailAddress: null, phoneNumber: undefined };
      const result = maskSensitiveData(objWithNull, ["emailAddress", "phoneNumber"]);
      expect(result).toEqual({ emailAddress: null, phoneNumber: undefined });
    });
});
