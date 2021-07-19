// ____________ create-campaign

var createCampaignData = {
  expireAt: '',
  name: '',
  miniGames: [
    {
      id: '',
      name: '',
      isConfigured: false,
      winPrizes: [''],
      losePrizes: ['']
    }
  ]
};


function initCreateCampaignData() {
  this.createCampaignData.expireAt = '';
  this.createCampaignData.name = '';
  this.createCampaignData.miniGames = [];
}


// ____________ add-game

var addGameData = {
  isSummitted: false,
  miniGame: {
    id:'',
    name:'',
  },
  winPrizes: [''],
  losePrizes: ['']
};

function initAddGameData() {
  this.addGameData.isSummitted = false;
  this.addGameData.miniGame.id = '';
  this.addGameData.miniGame.name = '';
  this.addGameData.winPrizes = [];
  this.addGameData.losePrizes = [];
}

// ____________ pick-game

var pickGameData = {
  isSummitted: false,
  miniGame: {
      id: '',
      name: ''
  }
};

function initPickGameData() {
  this.pickGameData.isSubmitted = false;
  this.pickGameData.miniGame.id = '';
  this.pickGameData.miniGame.name = '';
}

// ____________ input-data

var inputDataData = {
  isSubmited: false,
  text: ''
};

function initInputDataData() {
  this.inputDataData.isSubmitted = false;
  this.inputDataData.text = '';
}

App({
  onLaunch(options) {
    // my.navigateTo({
    //   url:"pages/created_campaign/created_campaign"
    // });
  },
  onShow(options) {
  },

  createCampaignData: createCampaignData,
  initCreateCampaignData: initCreateCampaignData,

  addGameData: addGameData,
  initAddGameData: initAddGameData,

  pickGameData: pickGameData,
  initPickGameData: initPickGameData,

  inputDataData: inputDataData,
  initInputDataData: initInputDataData
});