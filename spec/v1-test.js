'use strict';
var isUUID = require('../lib/is-uuid');

describe('is-uuid', function() {
    describe('v1', function() {
        it('should return true for valid v1 uuid', function() {
            require('./support/v1-uuids').forEach(function(uuid) {
                expect(isUUID.v1(uuid)).toEqual(true);
            });
        });

        it('should return true for valid v1 uuid as when using capital A-F', function() {
            require('./support/v1-uuids').forEach(function(uuid) {
                expect(isUUID.v1(uuid.toUpperCase())).toEqual(true);
            });
        });

        it ('should return false for invalid v1 uuid', function() {
            expect(isUUID.v1(true)).toEqual(false);
            expect(isUUID.v1(false)).toEqual(false);
            expect(isUUID.v1(null)).toEqual(false);
            expect(isUUID.v1([])).toEqual(false);
            expect(isUUID.v1(function() {})).toEqual(false);
            expect(isUUID.v1(Number.NaN)).toEqual(false);
            expect(isUUID.v1({})).toEqual(false);
            expect(isUUID.v1('not-a-uuid')).toEqual(false);
            expect(isUUID.v1()).toEqual(false);
        });

        it('should return false when querying a v2 uuid', function() {
            require('./support/v2-uuids').forEach(function(uuid) {
                expect(isUUID.v1(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v3 uuid', function() {
            require('./support/v3-uuids').forEach(function(uuid) {
                expect(isUUID.v1(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v4 uuid', function() {
            require('./support/v4-uuids').forEach(function(uuid) {
                expect(isUUID.v1(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v5 uuid', function() {
            require('./support/v5-uuids').forEach(function(uuid) {
                expect(isUUID.v1(uuid)).toEqual(false);
            });
        });
    });
});