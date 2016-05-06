# aqi-us

Air Quality Index (AQI) calculation module according to USEPA AQI breakpoints.

[![Build Status](https://travis-ci.org/RiANOl/aqi-us.svg?branch=master)](https://travis-ci.org/RiANOl/aqi-us)

## Installation

```
npm install aqi-us
```

## Usage

```javascript
var aqi = require('aqi-us');

// Get AQI from concentration
var co_aqi = aqi.co(co_in_ppm);
var no2_aqi = aqi.no2(no2_in_ppb);
var o3_1hr_aqi = aqi.o3_1hr(o3_1hr_in_ppb);
var o3_8hr_aqi = aqi.o3_8hr(o3_8hr_in_ppb);
var pm10_aqi = aqi.pm10(pm10_in_ug_m3);
var pm25_aqi = aqi.pm25(pm25_in_ug_m3);
var so2_aqi = aqi.so2(so2_in_ppb);

// Get description from AQI
var co_label = aqi.aqi_label(co_aqi);

// Get HEX color from AQI
var co_color = aqi.aqi_color(co_aqi);
```
