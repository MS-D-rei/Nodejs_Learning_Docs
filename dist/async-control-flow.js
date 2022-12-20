"use strict";
/*
This is where functions come in to great use. More complex operations are made up of many functions:

1. initiator style / input
2. middleware
3. terminator

The "initiator style / input" is the first function in the sequence. This function will accept the original input,
if any, for the operation. The operation is an executable series of functions, and the original input will primarily be:

1. variables in a global environment
2. direct invocation with or without arguments
3. values obtained by file system or network requests

Network requests can be incoming requests initiated by a foreign network,
by another application on the same network, or by the app itself on the same or foreign network.

A middleware function will return another function, and a terminator function will invoke the callback.
The following illustrates the flow to network or file system requests. Here the latency is 0 because all these values are available in memory.

*/
function final(someInput, callback) {
    callback(`${someInput} and terminated by executing callback `);
}
function middleware(someInput, callback) {
    return final(`${someInput} touched by middleware `, callback);
}
function initiate() {
    const someInput = "hello this is a function ";
    middleware(someInput, (result) => {
        console.log(result);
        return result;
    });
}
initiate();
