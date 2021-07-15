export const shortenText = (text, len) => {
  if (text.length <= len) {
    return text;
  }
  return text.substr(0, len) + "...";
};

export const commaDelineation = (text) => {
  const str = text.split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
}
