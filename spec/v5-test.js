'use strict';
var isUUID = require('../lib/is-uuid');

describe('is-uuid', function() {
    describe('v5', function() {
        it('should return true for valid v5 uuid', function() {
            require('./support/v5-uuids').forEach(function(uuid) {
                expect(isUUID.v5(uuid)).toEqual(true);
            });
        });

        it('should return true for valid v5 uuid as when using capital A-F', function() {
            require('./support/v5-uuids').forEach(function(uuid) {
                expect(isUUID.v5(uuid.toUpperCase())).toEqual(true);
            });
        });

        it ('should return false for invalid v5 uuid', function() {
            expect(isUUID.v5(true)).toEqual(false);
            expect(isUUID.v5(false)).toEqual(false);
            expect(isUUID.v5(null)).toEqual(false);
            expect(isUUID.v5([])).toEqual(false);
            expect(isUUID.v5(function() {})).toEqual(false);
            expect(isUUID.v5(Number.NaN)).toEqual(false);
            expect(isUUID.v5({})).toEqual(false);
            expect(isUUID.v5('not-a-uuid')).toEqual(false);
            expect(isUUID.v5()).toEqual(false);
        });

        it('should return false when querying a v1 uuid', function() {
            require('./support/v1-uuids').forEach(function(uuid) {
                expect(isUUID.v5(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v2 uuid', function() {
            require('./support/v2-uuids').forEach(function(uuid) {
                expect(isUUID.v5(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v3 uuid', function() {
            require('./support/v3-uuids').forEach(function(uuid) {
                expect(isUUID.v5(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v4 uuid', function() {
            require('./support/v4-uuids').forEach(function(uuid) {
                expect(isUUID.v5(uuid)).toEqual(false);
            });
        });
    });
});