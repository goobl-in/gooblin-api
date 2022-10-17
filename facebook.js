
var passport = require('passport')
var FacebookStrategy = require('passport-facebook')

const facebookAppId = "403390698484542"
const facebookAppSecret = "1f60151cc92cfaf04d6358fa56380e40"

const repository = require('./repository')

function enableFacebook() {
    passport.use(new FacebookStrategy({
        clientID: facebookAppId,
        clientSecret: facebookAppSecret,
        callbackURL: 'https://goobl.in/oauth2/redirect/facebook'
    },
    function(accessToken, refreshToken, profile, cb) {
	    let user = repository.getUserFromFacebook(profile.id) 
	    if (user) {
		console.log("user already existed")
		
	    } else {
		console.log("create a new user")
		user = repository.createUserFromFacebook(profile.id)
	    }
	    console.log(user)
	    cb(null, user)
    }
    ))
    
}

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.name })
  })
})

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user)
  })
})

module.exports = enableFacebook
