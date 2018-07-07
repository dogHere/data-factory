
import { requireDir } from 'utils';

const APIs = requireDir(require.context('.', false, /\.graphql$/));
export default APIs;
