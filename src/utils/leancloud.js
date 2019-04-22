export const initCnodeDB = function () {
  var APP_ID = 'i4bhU8rykSDtrqbBJspGpW4f-9Nh9j0Va';
  var APP_KEY = 'EkljqcRpiVbyvd8SkrGOnT2N';
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });
}
// initTestDB()
// sign up demo
export const signUp = function (username, password) {
  var user = new AV.User();
  user.setUsername(username);
  user.setPassword(password);
  user.signUp().then(function (loginedUser) {
    log('loginedUser', loginedUser)
  }, (function (error) {
      log('sign in error', JSON.stringify(error));
  }));
}
// signUp('test1', '123')
// sign in demo
export const logIn = function (username, password) {
  AV.User.logIn(username, password).then(function (loginedUser) {
    log('loginedUser', loginedUser)
  }, function (error) {
    log('login error' ,JSON.stringify(error));
  });
}
// logIn('test1', '123')
// 给用户写入数据
var writeToUser = function (article) {
  var Information = AV.Object.extend('Information');
  var currentUser = AV.User.current();
  var information = new Information();
  information.set('article', article);
  information.set('owner', AV.User.current());
  information.save().then(function() {
    log('成功写入信息')
  }, function(error) {
    log(JSON.stringify(error));
  });
}
// var article = {
//   title: '2',
//   content: '2'
// }
// writeToUser(article)
// 获取用户数据
var getUserInfo = function (className) {
  var query = new AV.Query(className);
  var currentUser = AV.User.current();
  if (currentUser !== null) {
    query.find().then(function (information) {
      for (var i = 0; i < information.length; i++) {
        if (information[i].attributes.owner.id === currentUser.id) {
          log('information' ,information[i])
        }
      }
    }).catch(function(error) {
      alert(JSON.stringify(error));
    });
  } else {
    log('未登陆')
  }
}
// getUserInfo('Information')
// 登出
var logOut = function () {
  AV.User.logOut().then(function (e) {
    log('log out', e)
  }, function (error) {
    log('log out error' ,JSON.stringify(error));
  });
}
// logOut()
