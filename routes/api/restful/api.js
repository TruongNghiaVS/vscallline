

module.exports = function (app) {

    const ReportController = require("../../../controllers/PortalController");
    const FileController = require("../../../controllers/FileController");
    app.route("/api/client/makeCall").post(ReportController.TriggerCall);
    app.route("/api/getFileAudio").get(FileController.getFile);

    app.route("/api/deleteFile").post(FileController.deleteFile);
  
};
