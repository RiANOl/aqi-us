'use strict'
let assert = require('assert')
let aqi = require('../index')

describe('aqi-us', function () {

    describe('#co', function () {
        it('should calculate correct co', function () {
            assert.equal(0, aqi.co(0))
            assert.equal(140, aqi.co(10))
            assert.equal(500, aqi.co(50.4))
            assert(isNaN(aqi.co(-0.1)))
            assert(isNaN(aqi.co(50.5)))
        })
    })

    describe('#pm25', function () {
        it('should calculate correct pm25', function () {
            assert.equal(0, aqi.pm25(0))
            assert.equal(174, aqi.pm25(100))
            assert.equal(350, aqi.pm25(300))
            assert(isNaN(aqi.pm25(-0.1)))
        })
    })

    describe('#pm10', function () {
        it('should calculate correct pm10', function () {
            assert.equal(0, aqi.pm10(0))
            assert.equal(73, aqi.pm10(100))
            assert.equal(173, aqi.pm10(300))
            assert(isNaN(aqi.pm10(-0.1)))
        })
    })

    describe('#so2', function () {
        it('should calculate correct so2', function () {
            assert.equal(0, aqi.so2(0))
            assert.equal(112, aqi.so2(100))
            assert.equal(198, aqi.so2(300))
            assert(isNaN(aqi.so2(-0.1)))
        })
    })

    describe('#no2', function () {
        it('should calculate correct no2', function () {
            assert.equal(0, aqi.no2(0))
            assert.equal(100, aqi.no2(100))
            assert.equal(139, aqi.no2(300))
            assert(isNaN(aqi.no2(-0.1)))
        })
    })

    describe('#o3_1hr', function () {
        it('should calculate correct o3_1hr', function () {
            assert.equal(195, aqi.o3_1hr(200))
            assert.equal(396, aqi.o3_1hr(500))
            assert(isNaN(aqi.o3_1hr(-0.1)))
            assert(isNaN(aqi.o3_1hr(0)))
            assert(isNaN(aqi.o3_1hr(99)))
        })
    })

    describe('#o3_8 hr', function () {
        it('should calculate correct o3_8hr', function () {
            assert.equal(0, aqi.o3_8hr(0))
            assert.equal(161, aqi.o3_8hr(100))
            assert.equal(272, aqi.o3_8hr(300))
            assert(isNaN(aqi.o3_8hr(-0.1)))
        })
    })

    describe('#aqi_label', function () {
        it('should return correct label', function () {
            assert.equal('Good', aqi.aqi_label(0))
            assert.equal('Good', aqi.aqi_label(50))
            assert.equal('Moderate', aqi.aqi_label(51))
            assert.equal('Moderate', aqi.aqi_label(100))
            assert.equal('Unhealthy for Sensitive Groups', aqi.aqi_label(101))
            assert.equal('Unhealthy for Sensitive Groups', aqi.aqi_label(150))
            assert.equal('Unhealthy', aqi.aqi_label(151))
            assert.equal('Unhealthy', aqi.aqi_label(200))
            assert.equal('Very Unhealthy', aqi.aqi_label(201))
            assert.equal('Very Unhealthy', aqi.aqi_label(300))
            assert.equal('Hazardous', aqi.aqi_label(301))
        })
    })

    describe('#aqi_color', function () {
        it('should return correct color', function () {
            assert.equal('009966', aqi.aqi_color(0))
            assert.equal('009966', aqi.aqi_color(50))
            assert.equal('ffde33', aqi.aqi_color(51))
            assert.equal('ffde33', aqi.aqi_color(100))
            assert.equal('ff9933', aqi.aqi_color(101))
            assert.equal('ff9933', aqi.aqi_color(150))
            assert.equal('cc0033', aqi.aqi_color(151))
            assert.equal('cc0033', aqi.aqi_color(200))
            assert.equal('660099', aqi.aqi_color(201))
            assert.equal('660099', aqi.aqi_color(300))
            assert.equal('7e0023', aqi.aqi_color(301))
        })
    })
})