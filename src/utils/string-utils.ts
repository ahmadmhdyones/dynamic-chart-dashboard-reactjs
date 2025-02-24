export const getShortcutString = (str: string) => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('');
};
