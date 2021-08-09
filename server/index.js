const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Vue Mailer Application???'
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`)
});

require("./config/db")(app);

const handlebarOptions = {
    viewEngine: {
        extName: '.handlebars',
        partialsDir: 'server/views/partials',
        layoutsDir: 'server/views/layouts',
        defaultLayout:'',
    },
    viewPath: 'server/views/templates',
    extName: '.handlebars',
};
transporter.use('compile', hbs(handlebarOptions));

require('./api/routeHandler')(app)