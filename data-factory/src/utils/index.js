
import { requireDir } from './requireDir';

const utils = requireDir(require.context('.', false, /\.js$/));

export default utils;
