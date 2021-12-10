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

hb.registerHelper({
    eq: (v1, v2) => v1 === v2,
    ne: (v1, v2) => v1 !== v2,
    lt: (v1, v2) => v1 < v2,
    gt: (v1, v2) => v1 > v2,
    lte: (v1, v2) => v1 <= v2,
    gte: (v1, v2) => v1 >= v2,
    and() {
        return Array.prototype.every.call(arguments, Boolean);
    },
    or() {
        return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
    }
});

hb.registerHelper("ifcon", function(conditional, options) {
    if (conditional === 6) {
        console.log(conditional)
      return options.fn(this);
    } else {
        console.log(conditional)
      return options.inverse(this);
    }
  });