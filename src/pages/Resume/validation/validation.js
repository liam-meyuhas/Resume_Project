export const isLink = (link, errors) => {
  if (!link.startsWith("http://") && !link.startsWith("https://")) {
    errors.push("The link must start with 'http://' or 'https://'");
  }
};

export const isMail = (mail, errors) => {
  if (!mail.includes("@")) {
    errors.push("The email must contain '@'");
  }
};
