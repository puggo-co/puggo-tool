import { Handler, Context } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';
const dotenvPath =  path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({ path: dotenvPath });


/**
 * UPLOAD
 */
export const upload:Handler = (event: any, context:Context) => {
    return Promise.resolve({ statusCode: 200, message: 'OK', data: { o: 'my'} });
}

