let APIURL = '';

switch(window.location.hostname) {
    //this is the local host name of your react app
    case 'localhost' || '127.0.0.1':
    //this is the local host name of your API
    APIURL = 'http://localhost:5002';
    break;
    //this is the deployed react application
    case 'nwh-rnggamingcli.herokuapp.com':
        //this is the full url of your deployed API
        APIURL = 'https://nwh-rnggaming.herokuapp.com'
}

export default APIURL;


/*
ANYTIME WE WANT TO DEPLOY WE MUST RUN FIRST:

heroku create [name of app] --buildpack https://github.com/mars/create-react-app-buildpack.git
*/