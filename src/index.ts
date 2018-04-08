import * as _ from "underscore";
import __ from "./TypedUnderscore";

const user = {
    name: "Vasily",
    age: 12,
}

// Regular Underscore

/**
 * First, there is no error when you pass an empty string as a second argument
 */
_.pick(user, "")

/**
 * Second, pick alway returns any
 */
const userName = _.pick(user, "name") // : any

// Typed Underscore

// Attempt to pick a non-existing property results in an error
 __.pick(user, "foo");

// `pick` returns correctly inferred types
const typedUserName = __.pick(user, "name"); // : string
const typedUserAge = __.pick(user, "age"); // : number