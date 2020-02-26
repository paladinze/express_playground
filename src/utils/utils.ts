import path from 'path';

export const getRootDir = () => {
  return path.dirname(process.mainModule?.filename!);
}