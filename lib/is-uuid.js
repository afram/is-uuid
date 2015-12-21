'use strict';
var v1Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v2Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[2][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v3Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[3][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v5Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var nilRegex = /^[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12}$/i;
var anyRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function v1(str) {
    return v1Regex.test(str);
}

function v2(str) {
    return v2Regex.test(str);
}

function v3(str) {
    return v3Regex.test(str);
}

function v4(str) {
    return v4Regex.test(str);
}

function v5(str) {
    return v5Regex.test(str);
}

function nil(str) {
    return nilRegex.test(str);
}

function anyNonNil(str) {
    return anyRegex.test(str);
}

module.exports = {
    v1: v1,
    v2: v2,
    v3: v3,
    v4: v4,
    v5: v5,
    nil: nil,
    anyNonNil: anyNonNil
};