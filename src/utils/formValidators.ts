/* eslint-disable */
const urlValidator = (url: string, provider?: string) => {
  const websiteExp =
    "(?:http(s)?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})";
  const regex = provider
    ? new RegExp(
        `(?:http(s):\/\/)?(?:www\.)?${provider}\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)`
      )
    : new RegExp(websiteExp);
  return regex.test(url);
};

const lengthValidator = (name: string, minLength = 2, maxLength = 30) => {
  const trimmed = name.trim();
  return trimmed.length >= minLength && trimmed.length <= maxLength;
};

const emailValidator = (email: string) => {
  const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return regex.test(email);
};

export const validators = {
  urlValidator,
  lengthValidator,
  emailValidator,
};
