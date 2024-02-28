
module.exports = function (status, message, data, is_success, total) {
    var res = {
        status: status,
        message: message,
        data: data,
        is_success: is_success,
        total: total
    }

    res.status = status;
    res.message = message;
    res.data = data;
    res.is_success = is_success;
    res.total = total;
    return res;
}
