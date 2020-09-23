const axios = require("axios");

const ApiDefault = {
  key: "RGAPI-f11723bc-f52f-4d91-95b1-b01644fb6e72",
};

const Url = `https://kr.api.riotgames.com/lol`;
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

  ///////////////////////////////
  ///사용 안함
  getUserByName: function (name) {
    return new Promise(async (resolve, reject) => {
      const summonerUrl = `${Url}/summoner/v4/summoners/by-name/${name}?api_key=${ApiDefault.key}`;

      try {
        const result = await axios(summonerUrl);

        resolve(result.data.accountId);
      } catch (error) {
        reject(error);
      }
    });
  },
  ///////////////////////////////

  getMatchByAccountId: function (name) {
    return new Promise(async (resolve, reject) => {
      const summonerUrl = `${Url}/summoner/v4/summoners/by-name/${name}?api_key=${ApiDefault.key}`;
      var userId;
      try {
        const result = await axios(summonerUrl);

        userId = result.data.accountId;
      } catch (error) {
        reject(error);
      }

      const matchUrl = `${Url}/match/v4/matchlists/by-account/${userId}?api_key=${ApiDefault.key}`;

      try {
        const result = await axios(matchUrl);

        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  },
};
