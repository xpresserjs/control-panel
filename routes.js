const Router = new (require('@xpresser/router'))();

const Path = 'control-panel';


Router.path('/' + Path, () => {

    Router.get('', 'index');

}).controller('Cpanel:Router');


module.exports = Router;