export default (text, len) => {
  if (text.length <= len) {
    return text;
  }
  return text.substr(0, len) + "...";
};
