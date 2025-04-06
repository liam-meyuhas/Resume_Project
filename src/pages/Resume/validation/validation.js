export const isLink = (link, errors) => {
  const linkPattern =
    /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,6}(\.[a-z]{2})?(\/[\w-]*)*$/i;

  if (!linkPattern.test(link)) {
    errors.push("The link must start with 'http://' or 'https://'");
  }
};

export const isMail = (mail, errors) => {
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!emailPattern.test(mail)) {
    errors.push("The email must contain '@'");
  }
};
