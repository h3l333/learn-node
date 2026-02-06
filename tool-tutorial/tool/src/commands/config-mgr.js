import { cosmiconfigSync } from 'cosmiconfig'
const configLoader = cosmiconfigSync('tool');
import schema from '../config/schema.json' assert { type: 'json' };
import betterAjvErrors from 'better-ajv-errors';
import { Ajv } from 'ajv';
const ajv = new Ajv({ jsonPointer: true });

export default async function getConfig()
{
    const result = configLoader.search(process.cwd());
    if(!result)
    {
        console.log('Could not find configuration, using default...');
        return { port: 1234 };
    }
    else
    {
        const isValid = ajv.validate(schema, result.config);
        if(!isValid)
        {
            console.log('Invalid configuration was supplied');
            console.log();
            console.log(betterAjvErrors(schema, result.config, ajv.errors));
            process.exit(1);
        }
        console.log('Found configuration', result.config);
        return result.config;
    }   
}