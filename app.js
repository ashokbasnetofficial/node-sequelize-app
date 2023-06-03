require('module-alias/register');
const express = require('express');
const {config} = require('dotenv');
const path = require('path');
const routes = require('./routes/index');
const expressEjsLayouts = require('express-ejs-layouts');
const session = require('express-session');
const authenticate = require('@/middlewares/Authenticate');


const app = express();
config();

app.set('view engine', 'ejs');
app.use(expressEjsLayouts);
app.set("layout extractScripts", true);
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: "very-secret-key"}));
app.use(authenticate);
app.use('/', routes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});