var app = getApp();

async function getData(id) {
  // fake data

  // app.createdCampaignData.playCnt = 150;
  // app.createdCampaignData.winCnt = 100;
  // app.createdCampaignData.loseCnt = 50;
  // app.createdCampaignData.miniGames = [];
  // app.createdCampaignData.miniGames.push({
  //   id: '1',
  //   name: 'Snake',
  //   isConfigured: true,
  //   winPrizes: ['GIAMGIA10k','FREESHIP100k'],
  //   losePrizes: ['GIAMGIA5K','FREESHIP500l'],
  // });
  //   app.createdCampaignData.miniGames.push({
  //   id: '2',
  //   name: 'Mario',
  //   isConfigured: false,
  //   winPrizes: ['GIAMGIA10k','FREESHIP100k'],
  //   losePrizes: ['GIAMGIA5K','FREESHIP500k'],
  // });

  // call api

  var campaignData = await app.httpPost(
    app.globalData.server + '/campaign/get',
    {
      ids: [id],
    }
  );
  campaignData = campaignData[0];

  app.createdCampaignData.playCnt = campaignData.playCount;
  app.createdCampaignData.winCnt = campaignData.winCount;
  app.createdCampaignData.loseCnt = campaignData.loseCount;

  var gameIds = [];
  for (var g of campaignData.miniGames) {
    gameIds.push(g.id);
  }

  var gameInfo = await app.httpPost(
    app.globalData.server + '/minigame/get',
    {
      ids: gameIds,
    }
  );

  for (var g of campaignData.miniGames) {
    var name = '';
    for (var mg of gameInfo) {
      if (g.id == mg.id) {
        name = mg.name;
        break;
      }
    }
     app.createdCampaignData.miniGames.push({
       id: g.id,
       name: name,
       winPrizes: g.winPrizes,
       losePrizes: g.losePrizes,
     });
  }
}

Page({
  data: {
    id: app.createdCampaignData.id,
    playCnt: app.createdCampaignData.playCnt,
    winCnt: app.createdCampaignData.winCnt,
    loseCnt: app.createdCampaignData.loseCnt,
    miniGames: app.createdCampaignData.miniGames
  },
  onLoad() {
    app.initCreatedCampaignData();
    app.createdCampaignData.id = app.createdCampaignListData.chosenCampaignId;
    getData(app.createdCampaignData.id);
    this.setData({
      id: app.createdCampaignData.id,
      playCnt: app.createdCampaignData.playCnt,
      winCnt: app.createdCampaignData.winCnt,
      loseCnt: app.createdCampaignData.loseCnt,
      miniGames: app.createdCampaignData.miniGames
    })
  }
})