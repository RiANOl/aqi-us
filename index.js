var aqi_breakpoints = [
    [0, 50],
    [51, 100],
    [101, 150],
    [151, 200],
    [201, 300],
    [301, 400],
    [401, 500],
];
var co_breakpoints = [
    [0.0, 4.4],
    [4.5, 9.4],
    [0.5, 12.4],
    [12.5, 15.4],
    [15.5, 30.4],
    [30.5, 40.4],
    [40.5, 50.4],
];
var no2_breakpoints = [
    [0, 53],
    [54, 100],
    [101, 360],
    [361, 649],
    [650, 1249],
    [1250, 1649],
    [1650, 2049],
];
var o3_1hr_breakpoints = [
    null,
    null,
    [125, 164],
    [165, 204],
    [205, 404],
    [405, 504],
    [505, 604],
];
var o3_8hr_breakpoints = [
    [0, 59],
    [60, 75],
    [76, 95],
    [96, 115],
    [116, 374],
];
var pm10_breakpoints = [
    [0, 54],
    [55, 154],
    [155, 254],
    [255, 354],
    [355, 424],
    [425, 504],
    [505, 604],
];
var pm25_breakpoints = [
    [0.0, 12.0],
    [12.1, 35.4],
    [35.5, 55.4],
    [55.5, 150.4],
    [150.5, 250.4],
    [250.5, 350.4],
    [350.5, 500.0],
];
var so2_breakpoints = [
    [0, 35],
    [36, 75],
    [76, 185],
    [186, 304],
    [305, 604],
    [605, 804],
    [805, 1004],
];

if (undefined === Array.prototype.findIndex) {
    Array.prototype.findIndex = function(callback) {
        for(var i = 0; i < this.length; i++) {
            if (callback.call(this, this[i], i, this)) {
                return i;
            }
        }
        return -1;
    };
}

function aqi(concentration, breakpoints) {
    var index = breakpoints.findIndex(function(breakpoint) {
        if (null === breakpoint) {
            return false;
        }
        return breakpoint[0] <= concentration && concentration <= breakpoint[1];
    });

    if (-1 === index) {
        return NaN;
    }

    var i_high = aqi_breakpoints[index][1],
        i_low = aqi_breakpoints[index][0],
        c_high = breakpoints[index][1],
        c_low = breakpoints[index][0];

    return Math.round((i_high - i_low) / (c_high - c_low) * (concentration - c_low) + i_low);
}

// Airnow.gov descriptions by range
exports.aqi_label = function(aqi) {
    var label;
    if (aqi < 51)
        label = 'Good'
    else if (aqi < 101)
        label = 'Moderate'
    else if (aqi < 151)
        label = 'Unhealthy for Sensitive Groups'
    else if (aqi < 201)
        label = 'Unhealthy'
    else if (aqi < 301)
        label = 'Very Unhealthy'
    else
        label = 'Hazardous'
    return label;
}

exports.co = function (concentration) {
    return aqi(concentration, co_breakpoints);
};

exports.o3_1hr = function (concentration) {
    return aqi(concentration, o3_1hr_breakpoints);
};

exports.o3_8hr = function (concentration) {
    return aqi(concentration, o3_8hr_breakpoints);
};

exports.no2 = function (concentration) {
    return aqi(concentration, no2_breakpoints);
};

exports.pm10 = function (concentration) {
    return aqi(concentration, pm10_breakpoints);
};

exports.pm25 = function (concentration) {
    return aqi(concentration, pm25_breakpoints);
};

exports.so2 = function (concentration) {
    return aqi(concentration, so2_breakpoints);
};
