'use strict';
var isUUID = require('../lib/is-uuid');
var nilUUID = '00000000-0000-0000-0000-000000000000';

describe('is-uuid', function() {
    describe('nil', function() {
        it('should return true for valid nil uuid', function() {
            expect(isUUID.nil(nilUUID)).toEqual(true);
        });

        it('should return true for valid nil uuid as when using capital A-F', function() {
            expect(isUUID.nil(nilUUID.toUpperCase())).toEqual(true);
        });

        it ('should return false for invalid nil uuid', function() {
            expect(isUUID.nil(true)).toEqual(false);
            expect(isUUID.nil(false)).toEqual(false);
            expect(isUUID.nil(null)).toEqual(false);
            expect(isUUID.nil([])).toEqual(false);
            expect(isUUID.nil(function() {})).toEqual(false);
            expect(isUUID.nil(Number.NaN)).toEqual(false);
            expect(isUUID.nil({})).toEqual(false);
            expect(isUUID.nil('not-a-uuid')).toEqual(false);
            expect(isUUID.nil()).toEqual(false);
        });

        it('should return false when querying a v1 uuid', function() {
            require('./support/v1-uuids').forEach(function(uuid) {
                expect(isUUID.nil(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v2 uuid', function() {
            require('./support/v2-uuids').forEach(function(uuid) {
                expect(isUUID.nil(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v3 uuid', function() {
            require('./support/v3-uuids').forEach(function(uuid) {
                expect(isUUID.nil(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v4 uuid', function() {
            require('./support/v4-uuids').forEach(function(uuid) {
                expect(isUUID.nil(uuid)).toEqual(false);
            });
        });

        it('should return false when querying a v5 uuid', function() {
            require('./support/v5-uuids').forEach(function(uuid) {
                expect(isUUID.nil(uuid)).toEqual(false);
            });
        });
    });
});