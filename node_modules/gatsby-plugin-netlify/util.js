"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flow = exports.isBoolean = void 0;
// Accounting for true, false, and new Boolean()
const isBoolean = (val) => typeof val === 'boolean' ||
    (typeof val === 'object' &&
        val !== null &&
        typeof val.valueOf() === 'boolean');
exports.isBoolean = isBoolean;
/**
 *
 * @param functions - takes in an array of functions
 * @returns The function documented below
 */
const flow = (functions) => 
/**
 *
 * @param headers - In our case, headers is only {pluginOptions.headers} (in build-headers-program.ts),
 * but in this generic implementation could take in any number of arguments
 *
 * @returns The evaluated return value of the last function from the array of functions provided in the
 *  {functions} parameter
 */
(...headers) => functions.reduce((resultOfPrev, func) => [func(...resultOfPrev)], headers)[0];
exports.flow = flow;
