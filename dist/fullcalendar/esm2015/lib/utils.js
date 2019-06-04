/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const hasOwnProperty = Object.prototype.hasOwnProperty;
/*
Really simple clone utility. Only copies plain arrays and objects. Transfers everything else as-is.
Wanted to use a third-party lib, but none did exactly this.
*/
/**
 * @param {?} input
 * @return {?}
 */
export function deepCopy(input) {
    if (Array.isArray(input)) {
        return input.map(deepCopy);
    }
    else if (input instanceof Date) {
        return new Date(input.valueOf());
    }
    else if (typeof input === 'object' && input) { // non-null object
        return mapHash(input, deepCopy);
    }
    else { // everything else (null, function, etc)
        return input;
    }
}
/**
 * @param {?} input
 * @param {?} func
 * @return {?}
 */
function mapHash(input, func) {
    /** @type {?} */
    const output = {};
    for (const key in input) {
        if (hasOwnProperty.call(input, key)) {
            output[key] = func(input[key], key);
        }
    }
    return output;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnVsbGNhbGVuZGFyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7TUFDTSxjQUFjLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjOzs7Ozs7Ozs7QUFNdEQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFLO0lBRTVCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN4QixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7S0FFNUI7U0FBTSxJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7UUFDaEMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUVsQztTQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssRUFBRSxFQUFFLGtCQUFrQjtRQUNqRSxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FFakM7U0FBTSxFQUFFLHdDQUF3QztRQUMvQyxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUk7O1VBQ3BCLE1BQU0sR0FBRyxFQUFFO0lBRWpCLEtBQUssTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQ3ZCLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckM7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLypcblJlYWxseSBzaW1wbGUgY2xvbmUgdXRpbGl0eS4gT25seSBjb3BpZXMgcGxhaW4gYXJyYXlzIGFuZCBvYmplY3RzLiBUcmFuc2ZlcnMgZXZlcnl0aGluZyBlbHNlIGFzLWlzLlxuV2FudGVkIHRvIHVzZSBhIHRoaXJkLXBhcnR5IGxpYiwgYnV0IG5vbmUgZGlkIGV4YWN0bHkgdGhpcy5cbiovXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHkoaW5wdXQpIHtcblxuICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICByZXR1cm4gaW5wdXQubWFwKGRlZXBDb3B5KTtcblxuICB9IGVsc2UgaWYgKGlucHV0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShpbnB1dC52YWx1ZU9mKCkpO1xuXG4gIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyAmJiBpbnB1dCkgeyAvLyBub24tbnVsbCBvYmplY3RcbiAgICByZXR1cm4gbWFwSGFzaChpbnB1dCwgZGVlcENvcHkpO1xuXG4gIH0gZWxzZSB7IC8vIGV2ZXJ5dGhpbmcgZWxzZSAobnVsbCwgZnVuY3Rpb24sIGV0YylcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSGFzaChpbnB1dCwgZnVuYykge1xuICBjb25zdCBvdXRwdXQgPSB7fTtcblxuICBmb3IgKGNvbnN0IGtleSBpbiBpbnB1dCkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGlucHV0LCBrZXkpKSB7XG4gICAgICBvdXRwdXRba2V5XSA9IGZ1bmMoaW5wdXRba2V5XSwga2V5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuIl19