"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var dateParts = dateString
        .split('/')
        .map(function (value) { return parseInt(value); });
    var year = dateParts[2];
    var month = dateParts[1] - 1;
    var day = dateParts[0];
    return new Date(year, month, day);
};
