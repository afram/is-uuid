'use strict';
var isUUID = require('../lib/is-uuid');

describe('is-uuid', function() {
    describe('v2', function() {
        it('should return true for valid v2 uuid', function() {
            require('./support/v2-uuids').forEach(function(uuid) {
                expect(isUUID.v2(uuid)).toEqual(true);
            });
        });

        it('should return true for valid v2 uuid as when using capital A-F', function() {
            require('./support/v2-uuids').forEach(function(uuid) {
                expect(isUUID.v2(uuid.toUpperCase())).toEqual(true);
            });
        });

        it ('should return false for invalid v2 uuid', function() {
            expect(isUUID.v2(true)).toEqual(false);
            expect(isUUID.v2(false)).toEqual(false);
            expect(isUUID.v2(null)).toEqual(false);
            expect(isUUID.v2([])).toEqual(false);
            expect(isUUID.v2(function() {})).toEqual(false);
            expect(isUUID.v2(Number.NaN)).toEqual(false);
            expect(isUUID.v2({})).toEqual(false);
            expect(isUUID.v2('not-a-uuid')).toEqual(false);
            expect(isUUID.v2()).toEqual(false);
        });

        it('should return false when querying a v1 uuid', function() {
            require('./support/v1-uuids').forEach(function(uuid) {
                expect(isUUID.v2(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v3 uuid', function() {
            require('./support/v3-uuids').forEach(function(uuid) {
                expect(isUUID.v2(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v4 uuid', function() {
            require('./support/v4-uuids').forEach(function(uuid) {
                expect(isUUID.v2(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v5 uuid', function() {
            require('./support/v5-uuids').forEach(function(uuid) {
                expect(isUUID.v2(uuid)).toEqual(false);
            });
        });
    });
});