'use strict';
var isUUID = require('../lib/is-uuid');
var nilUUID = '00000000-0000-0000-0000-000000000000';

describe('is-uuid', function() {
    describe('anyNonNil', function() {
        it('should return true when querying a v1 uuid', function() {
            require('./support/v1-uuids').forEach(function(uuid) {
                expect(isUUID.anyNonNil(uuid)).toEqual(true);
            });
        });

        it('should return true when querying a v2 uuid', function() {
            require('./support/v2-uuids').forEach(function(uuid) {
                expect(isUUID.anyNonNil(uuid)).toEqual(true);
            });
        });

        it('should return true when querying a v3 uuid', function() {
            require('./support/v3-uuids').forEach(function(uuid) {
                expect(isUUID.anyNonNil(uuid)).toEqual(true);
            });
        });

        it('should return true when querying a v4 uuid', function() {
            require('./support/v4-uuids').forEach(function(uuid) {
                expect(isUUID.anyNonNil(uuid)).toEqual(true);
            });
        });

        it('should return true when querying a v5 uuid', function() {
            require('./support/v5-uuids').forEach(function(uuid) {
                expect(isUUID.anyNonNil(uuid)).toEqual(true);
            });
        });

        it('should return true for valid v1 uuid as when using capital A-F', function() {
            require('./support/v1-uuids').forEach(function(uuid) {
                expect(isUUID.anyNonNil(uuid.toUpperCase())).toEqual(true);
            });
        });

        it('should return true for valid v2 uuid as when using capital A-F', function() {
            require('./support/v2-uuids').forEach(function(uuid) {
                expect(isUUID.anyNonNil(uuid.toUpperCase())).toEqual(true);
            });
        });

        it('should return true for valid v3 uuid as when using capital A-F', function() {
            require('./support/v3-uuids').forEach(function(uuid) {
                expect(isUUID.anyNonNil(uuid.toUpperCase())).toEqual(true);
            });
        });

        it('should return true for valid v4 uuid as when using capital A-F', function() {
            require('./support/v4-uuids').forEach(function(uuid) {
                expect(isUUID.anyNonNil(uuid.toUpperCase())).toEqual(true);
            });
        });

        it('should return true for valid v5 uuid as when using capital A-F', function() {
            require('./support/v5-uuids').forEach(function(uuid) {
                expect(isUUID.anyNonNil(uuid.toUpperCase())).toEqual(true);
            });
        });

        it ('should return false for invalid anyNonNil uuid', function() {
            expect(isUUID.anyNonNil(true)).toEqual(false);
            expect(isUUID.anyNonNil(false)).toEqual(false);
            expect(isUUID.anyNonNil(null)).toEqual(false);
            expect(isUUID.anyNonNil([])).toEqual(false);
            expect(isUUID.anyNonNil(function() {})).toEqual(false);
            expect(isUUID.anyNonNil(Number.NaN)).toEqual(false);
            expect(isUUID.anyNonNil({})).toEqual(false);
            expect(isUUID.anyNonNil('not-a-uuid')).toEqual(false);
            expect(isUUID.anyNonNil()).toEqual(false);
            expect(isUUID.anyNonNil(nilUUID)).toEqual(false);
        });
    });
});