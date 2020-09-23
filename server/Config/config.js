const axios = require("axios");

const ApiDefault = {
  key: "RGAPI-f11723bc-f52f-4d91-95b1-b01644fb6e72",
};

const Url = `/lol`;
const ddragonUrl = `https://ddragon.leagueoflegends.com`;

module.exports = {
  getLastestVersion: function () {
    return new Promise(async (resolve, reject) => {
      const versionUrl = `${ddragonUrl}/api/versions.json`;

      try {
        const version = await axios(versionUrl);

        resolve(version.data[0]);
      } catch (error) {
        reject(error);
      }
    });
  },
};
