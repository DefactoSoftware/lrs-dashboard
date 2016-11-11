export function stringToColor(string) {
  const hash = string.split('').reduce((hash, character)=> {
    return character.charCodeAt(0) + (hash << 5) - hash;
  }, '');

  return [0, 1, 3].reduce((color, index)=> {
    const value = (hash >> (index * 8)) & 0xFF;

    return color + ('00' + value.toString(16)).substr(-2);
  }, '#');
}
