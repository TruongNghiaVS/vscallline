
module.exports = function (unit, value) {
    var today = new Date();

    switch (unit) {
      case "0":
        var date = today.setDate(today.getDate() + Number(value));
        return date;

      case "1":
        var month = today.setMonth(today.getMonth() + Number(value));
        return month;
      case "2":
        var year = today.setFullYear(today.getFullYear() + Number(value));
        return year;

      default:
        break;
    }
}
