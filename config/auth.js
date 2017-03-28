'use strict';
module.exports = {

  'facebookAuth' : {
    'clientID'      : 'your-secret-clientID-here', // your App ID
    'clientSecret'  : 'your-client-secret-here', // your App Secret
    'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
  },

  'twitterAuth' : {
    'consumerKey'       : '65xRAOAZxKRzuptFrPKDjp6Uo',
    'consumerSecret'    : 'Ox747fvGJxYsRJGp4hYckgmcujyHHxF9nW1ltPOYLOuSWDZ6QQ',
    'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
  },

  'googleAuth' : {
    'clientID'      : 'your-secret-clientID-here',
    'clientSecret'  : 'your-client-secret-here',
    'callbackURL'   : 'http://localhost:8080/auth/google/callback'
  }

};
