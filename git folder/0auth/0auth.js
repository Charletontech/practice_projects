// //Installation of packages

// const express = require('express')
// const passport = require('passport')
// const GoogleStrategy = require('passport-google-oauth20').Strategy;


// //App set-ups

// const app = express()
// app.set('view engine', 'ejs')


// //google API key set-up

// const GOOGLE_CLIENT_ID = '347477491807-ek9cu3ko5kmuf0e0ejih4bdpb30ifief.apps.googleusercontent.com';
// const GOOGLE_CLIENT_SECRET = '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';
// const CALLBACK_URL = 'http://localhost:8080/auth/google/callback';


// //passport set-up

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: CALLBACK_URL
//   },
//   (accessToken, refreshToken, profile, done) => {
//     // Profile contains user details
//     //console.log(profile.displayName);
    
//     return done(null, profile);
//   }
// ));


// //session configuration

// passport.serializeUser((user, done) => {
//     done(null, user)
// })

// passport.deserializeUser((obj, done) => {
//     done(null, obj)
// })


// //middlewares config

// app.use(require('express-session')({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());


// //SET-UP ROUTES
// //actual authetntication
// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
// );

// //callback on successful authentication
// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/' }),
//   (req, res) => {
//     console.log(req.user.name.familyName);
    
//     res.redirect('/dashboard');
//   }
// );


// //Actual routes

// app.get('/', (req, res) => {
//     res.render('index')
// })

// app.get('/dashboard', (req, res) => {
//   var data1 = req.user.displayName
//   res.render('dashboard', {data1})
// })

// //starting server at port 8080
// app.listen(8080, () =>{
//     console.log('server listening at port 8080')
// })




const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const express_session = require('express-session')

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('index')
})


io.on('connection', (socket)=>{
  console.log(socket.id);
  
})


server.listen(8080, () => {
  console.log('server listening at 8080...');
})