      window.onload=function() {
      var Tweet = function(name, username, time, tweet, retweets, favs, profPic, tweetPic) {
          this.profilePic= profPic;
          this.name = name;
          this.userName = username;
          this.timeStamp = time;
          this.tweetBody = tweet;
          this.retweetCount = retweets;
          this.favCount = favs; 
          this.tweetPic = tweetPic;
          }
      var twitterViewModel = {
          tweets: [
          new Tweet("Taylor", "@tay12", "1m", "Look at this cool way to connect outlets to my ViewController.", "56", "25", "https://cloud.githubusercontent.com/assets/21252571/25783901/f1cc353c-3331-11e7-93d7-21b9c951174b.png", "https://cloud.githubusercontent.com/assets/21252571/25783905/030a7ad4-3332-11e7-8643-96aa8d5fab23.png"),
          new Tweet("John", "@john47", "3m", "Xcode now shows a live preview of exactly how the app will appear on any Apple device with full vibrancy. Wow..", "3", "6", "https://cloud.githubusercontent.com/assets/21252571/25783908/111a2930-3332-11e7-85e0-9e6edefa1182.png", ""),
          new Tweet("Bertrand", "@bert", "4m", "Xcode 8 just launched. It's a radically faster version which features new editor extensions that can completely customize coding experiences.", "347", "84", "https://cloud.githubusercontent.com/assets/21252571/25783911/21ff72d2-3332-11e7-834e-faef0b68d057.png", "https://cloud.githubusercontent.com/assets/21252571/25783914/2be9a588-3332-11e7-997f-36e242f93151.jpeg"),
          new Tweet("Charles", "@charlie", "5m", "This changes everything. Xcode 8 is way faster and cooler!", "84", "39", "https://cloud.githubusercontent.com/assets/21252571/25783919/373acf34-3332-11e7-8b20-eb3f18ea2699.jpeg", "")
          ]
      };
ko.applyBindings(twitterViewModel);
}