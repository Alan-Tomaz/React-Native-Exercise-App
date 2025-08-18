export const capitalizeWords = (text: string): string => {
  const wordWithoutHyphen = text.replace(/-/g, " ");
  let splitText = wordWithoutHyphen.toLowerCase().split(" ");
  for (var i = 0; i < splitText.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitText[i] =
      splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1);
  }

  return splitText.join(" ");
};

export const lowerCaseWords = (text: string): string => {
  const wordWithoutHyphen = text.replace(/-/g, " ");
  return wordWithoutHyphen.toLowerCase();
};
