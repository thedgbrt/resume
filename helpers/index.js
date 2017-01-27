export function getScreenClassName(id: number) {
  switch (id) {
    case 1:
      return 'iphone';
    case 2:
      return 'pc';
    case 3:
      return 'ipad';
    default:
      return 'ipad-v';
  }
};
