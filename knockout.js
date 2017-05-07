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
          new Tweet("Taylor", "@tay12", "1m", "Look at this cool way to connect outlets to my ViewController.", "56", "25", "https://media.github.ncsu.edu/user/5816/files/578f138e-8e60-11e6-9a96-b474e3cc9776", "https://media.github.ncsu.edu/user/5816/files/406a0ca6-8e5e-11e6-81ea-826758e9bcd0"),
          new Tweet("John", "@john47", "3m", "Xcode now shows a live preview of exactly how the app will appear on any Apple device with full vibrancy. Wow..", "3", "6", "https://media.github.ncsu.edu/user/5816/files/707e374e-8e60-11e6-8173-3af17b36ea11", ""),
          new Tweet("Bertrand", "@bert", "4m", "Xcode 8 just launched. It's a radically faster version which features new editor extensions that can completely customize coding experiences.", "347", "84", "https://media.github.ncsu.edu/user/5816/files/7fdf88fa-8e60-11e6-8a45-cd0352a5194f", "https://media.github.ncsu.edu/user/5816/files/0be304b4-8e5f-11e6-9858-2ff0b56d3c13"),
          new Tweet("Charles", "@charlie", "5m", "This changes everything. Xcode 8 is way faster and cooler!", "84", "39", "https://media.github.ncsu.edu/user/5816/files/90daa354-8e62-11e6-9dfa-835397035f37", "")
          ]
      };
ko.applyBindings(twitterViewModel);
}