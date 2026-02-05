
export default class httpError extends Error
{
    constructor (message, statusCode, cause)
    {
        super(message, statusCode),
        this.cause = cause;
    }
}
