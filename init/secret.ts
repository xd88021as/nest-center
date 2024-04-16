import { writeFileSync } from 'fs';
import { secrets } from '../libs/common/config/production';

writeFileSync('./secrets.json', JSON.stringify(secrets, null, 2));
