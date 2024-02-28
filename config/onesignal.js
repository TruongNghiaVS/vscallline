const OneSignal = require("onesignal-node");
const myClient = new OneSignal.Client(
  process.env.ONESIGNAL_APP_ID || "3de8918b-0fc7-435e-be65-ff9560c60c27",
  process.env.ONESIGNAL_API_KEY || "NDAwMGZhNWYtNGVkOS00ZmI0LWI2NTMtYzZkMzgwY2I4OTNk"
);
module.exports = {
  sendNotification: async (
    devices = [],
    contents = "",
    header = "",
    data = null,
    largeIcon = null
  ) => {
    const limit = 2000;
    const pages = Math.ceil(devices.length / limit);
    for (let page = 1; page <= pages; page++) {
      const players = devices.slice((page - 1) * limit, page * limit);
      try {
        const response = await myClient.createNotification({
          contents: {
            en: contents,
          },
          headings: {
            en: header,
          },
          data,
          include_player_ids: players,
          small_icon: "ic_launcher",
          ios_badgeType: "Increase",
          ios_badgeCount: 1,
          large_icon: largeIcon,
          big_picture: largeIcon,
        });
        // console.log(response.body.id);
      } catch (e) {
        if (e instanceof OneSignal.HTTPError) {
          // When status code of HTTP response is not 2xx, HTTPError is thrown.
          // console.log(e.statusCode);
          // console.log(e.body);
        }
      }
    }
  },
};
