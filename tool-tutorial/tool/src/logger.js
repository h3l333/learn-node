export default function createLogger(name)
{
    return {
        log: (...args) => console.log(...args),
        warning: (...args) => console.log(...args),
        debug: console.log
    };
}