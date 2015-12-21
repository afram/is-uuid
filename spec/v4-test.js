'use strict';
var isUUID = require('../lib/is-uuid');

describe('is-uuid', function() {
    describe('v4', function() {
        it('should return true for valid v4 uuid', function() {
            require('./support/v4-uuids').forEach(function(uuid) {
                expect(isUUID.v4(uuid)).toEqual(true);
            });
        });

        it('should return true for valid v4 uuid as when using capital A-F', function() {
            require('./support/v4-uuids').forEach(function(uuid) {
                expect(isUUID.v4(uuid.toUpperCase())).toEqual(true);
            });
        });

        it ('should return false for invalid v4 uuid', function() {
            expect(isUUID.v4(true)).toEqual(false);
            expect(isUUID.v4(false)).toEqual(false);
            expect(isUUID.v4(null)).toEqual(false);
            expect(isUUID.v4([])).toEqual(false);
            expect(isUUID.v4(function() {})).toEqual(false);
            expect(isUUID.v4(Number.NaN)).toEqual(false);
            expect(isUUID.v4({})).toEqual(false);
            expect(isUUID.v4('not-a-uuid')).toEqual(false);
            expect(isUUID.v4()).toEqual(false);
        });

        it('should return false when querying a v1 uuid', function() {
            require('./support/v1-uuids').forEach(function(uuid) {
                expect(isUUID.v4(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v2 uuid', function() {
            require('./support/v2-uuids').forEach(function(uuid) {
                expect(isUUID.v4(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v3 uuid', function() {
            require('./support/v3-uuids').forEach(function(uuid) {
                expect(isUUID.v4(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v5 uuid', function() {
            require('./support/v5-uuids').forEach(function(uuid) {
                expect(isUUID.v4(uuid)).toEqual(false);
            });
        });
    });
});