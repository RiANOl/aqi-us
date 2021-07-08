'use strict';
var assert = require('assert');
var aqi = require('../index');

describe('aqi-us', function () {

    describe('#co', function () {
        it('should calculate correct CO AQI', function () {
            assert(Number.isNaN(aqi.co(-0.1)));
            assert.strictEqual(0, aqi.co(0));
            assert.strictEqual(140, aqi.co(10));
            assert.strictEqual(500, aqi.co(50.41));
            assert(Number.isNaN(aqi.co(50.5)));
        });
    });

    describe('#no2', function () {
        it('should calculate correct NO2 AQI', function () {
            assert(Number.isNaN(aqi.no2(-0.1)));
            assert.strictEqual(0, aqi.no2(0));
            assert.strictEqual(100, aqi.no2(100));
            assert.strictEqual(139, aqi.no2(300));
            assert.strictEqual(500, aqi.no2(2049.1));
            assert(Number.isNaN(aqi.no2(2050)));
        });
    });

    describe('#o3_1hr', function () {
        it('should calculate correct O3 1hr AQI', function () {
            assert(Number.isNaN(aqi.o3_1hr(124.9)));
            assert.strictEqual(195, aqi.o3_1hr(200));
            assert.strictEqual(396, aqi.o3_1hr(500));
            assert.strictEqual(500, aqi.o3_1hr(604.1));
            assert(Number.isNaN(aqi.o3_1hr(605)));
        });
    });

    describe('#o3_8hr', function () {
        it('should calculate correct O3 8hr AQI', function () {
            assert(Number.isNaN(aqi.o3_8hr(-0.1)));
            assert.strictEqual(0, aqi.o3_8hr(0));
            assert.strictEqual(161, aqi.o3_8hr(100));
            assert.strictEqual(272, aqi.o3_8hr(300));
            assert.strictEqual(300, aqi.o3_8hr(374.1));
            assert(Number.isNaN(aqi.o3_8hr(375)));
        });
    });

    describe('#pm10', function () {
        it('should calculate correct PM10 AQI', function () {
            assert(Number.isNaN(aqi.pm10(-0.1)));
            assert.strictEqual(0, aqi.pm10(0));
            assert.strictEqual(73, aqi.pm10(100));
            assert.strictEqual(173, aqi.pm10(300));
            assert.strictEqual(500, aqi.pm10(604.1));
            assert(Number.isNaN(aqi.pm10(605)));
        });
    });

    describe('#pm25', function () {
        it('should calculate correct PM2.5 AQI', function () {
            assert(Number.isNaN(aqi.pm25(-0.1)));
            assert.strictEqual(0, aqi.pm25(0));
            assert.strictEqual(174, aqi.pm25(100));
            assert.strictEqual(350, aqi.pm25(300));
            assert.strictEqual(500, aqi.pm25(500.01));
            assert(Number.isNaN(aqi.pm25(500.1)));
        });
    });

    describe('#so2', function () {
        it('should calculate correct SO2 AQI', function () {
            assert(Number.isNaN(aqi.so2(-0.1)));
            assert.strictEqual(0, aqi.so2(0));
            assert.strictEqual(112, aqi.so2(100));
            assert.strictEqual(198, aqi.so2(300));
            assert.strictEqual(500, aqi.so2(1004.1));
            assert(Number.isNaN(aqi.so2(1005)));
        });
    });

    describe('#aqi_label', function () {
        it('should return correct AQI label', function () {
            assert.strictEqual(undefined, aqi.aqi_color(-1));
            assert.strictEqual('Good', aqi.aqi_label(0));
            assert.strictEqual('Good', aqi.aqi_label(50));
            assert.strictEqual('Moderate', aqi.aqi_label(51));
            assert.strictEqual('Moderate', aqi.aqi_label(100));
            assert.strictEqual('Unhealthy for Sensitive Groups', aqi.aqi_label(101));
            assert.strictEqual('Unhealthy for Sensitive Groups', aqi.aqi_label(150));
            assert.strictEqual('Unhealthy', aqi.aqi_label(151));
            assert.strictEqual('Unhealthy', aqi.aqi_label(200));
            assert.strictEqual('Very Unhealthy', aqi.aqi_label(201));
            assert.strictEqual('Very Unhealthy', aqi.aqi_label(300));
            assert.strictEqual('Hazardous', aqi.aqi_label(301));
            assert.strictEqual('Hazardous', aqi.aqi_label(400));
            assert.strictEqual('Hazardous', aqi.aqi_label(401));
            assert.strictEqual('Hazardous', aqi.aqi_label(500));
            assert.strictEqual(undefined, aqi.aqi_color(501));
        });
    });

    describe('#aqi_color', function () {
        it('should return correct AQI color', function () {
            assert.strictEqual(undefined, aqi.aqi_color(-1));
            assert.strictEqual('009966', aqi.aqi_color(0));
            assert.strictEqual('009966', aqi.aqi_color(50));
            assert.strictEqual('ffde33', aqi.aqi_color(51));
            assert.strictEqual('ffde33', aqi.aqi_color(100));
            assert.strictEqual('ff9933', aqi.aqi_color(101));
            assert.strictEqual('ff9933', aqi.aqi_color(150));
            assert.strictEqual('cc0033', aqi.aqi_color(151));
            assert.strictEqual('cc0033', aqi.aqi_color(200));
            assert.strictEqual('660099', aqi.aqi_color(201));
            assert.strictEqual('660099', aqi.aqi_color(300));
            assert.strictEqual('7e0023', aqi.aqi_color(301));
            assert.strictEqual('7e0023', aqi.aqi_color(400));
            assert.strictEqual('7e0023', aqi.aqi_color(401));
            assert.strictEqual('7e0023', aqi.aqi_color(500));
            assert.strictEqual(undefined, aqi.aqi_color(501));
        });
    });
});
