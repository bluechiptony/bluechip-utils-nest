export const randomDigits = (length: number) => {
  const result = [];
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join("");
};

export const randomAlpha = (length: number) => {
  const result = [];
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join("");
};

export const randomAlphaNumeric = (length: number, uppercase: boolean) => {
  const result = [];
  const characters = "abcdefghijklmnopqrstuvwxyz1234567890";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return uppercase ? result.join("").toUpperCase() : result.join("");
};

export const randomString = (length: number) => {
  const result = [];
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join("");
};

export const generateRandomPercentage = () => {
  return Math.round(Math.random() * 100);
};

export const maskPhoneNumber = (phoneNumber: string) => {
  // Get the length of the phone number
  const length = phoneNumber.length;
  // Mask all digits except the first 2 and last 4
  const maskedDigits =
    phoneNumber.substring(0, 2) +
    phoneNumber.substring(2, length - 4).replace(/\d/g, "*") +
    phoneNumber.substring(length - 4, length);
  return maskedDigits;
};

export const maskEmailAddress = (emailAddress: string) => {
  // Split the email address into local part and domain part
  const [localPart, domainPart] = emailAddress.split("@");
  // Mask all characters in the local part except the first 2
  const maskedLocalPart = localPart.substring(0, 2) + localPart.substring(2).replace(/./g, "*");
  // Combine the masked local part with the domain part
  const maskedEmailAddress = maskedLocalPart + "@" + domainPart;
  return maskedEmailAddress;
};
