const hb = require('handlebars');
const moment = require("moment");
//...

hb.registerHelper('dateFormat', function (date, options) {
    const formatToUse = (arguments[1] && arguments[1].hash && arguments[1].hash.format) || "DD/MM/YYYY"
    return moment(date).format(formatToUse);
});

hb.registerHelper('dateNow', () => {
    return new Date();
});