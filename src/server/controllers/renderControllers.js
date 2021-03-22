import React from 'react';
import ReactDom from 'react-dom/server';
import App from '../../client/app.jsx';
import {StaticRouter} from 'react-router-dom';

const renderControllers = function (req, res,next) {

    try {

        const componentString = ReactDom.renderToString(<StaticRouter location={req.url}> <App/> </StaticRouter>);

        const root = `
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="/public/dist/static/app.css">
                    <title>App Test</title>            
                </head>
                <body>   
                    <div id="root">${componentString}</div>
                    <script src='/public/dist/static/app.js'></script>
                </body>
            </html>
        `

        res.send(root)
    }
    catch (err){  
        next(err);
    }
}

export default renderControllers;
