import md5 from 'md5';
import { PUBLIC_KEY, PRIVATE_KEY } from '@env';

const time = new Date().getTime();
const hash = md5(time + PRIVATE_KEY + PUBLIC_KEY);

export const url_auth_api = `ts=${time}&apikey=${PUBLIC_KEY}&hash=${hash}`;
