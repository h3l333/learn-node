#!/usr/bin/env node
import arg from 'arg';
import getConfig from '../src/commands/config-mgr.js';
import start from '../src/commands/start.js';

try
{
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });

    if(args['--start'])
    {
        const config = getConfig();
        start(config);
    }
}
catch (e) {
    console.log(e.message);
    console.log();
    usage();
}

function usage()
{
    console.log('tool [CMD]');
    console.log('--start\tStarts the app');
    console.log('--build\tBuilds the app');
}