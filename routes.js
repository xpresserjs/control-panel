Route = $.router;

const RoutePath = 'control-panel';

Route.path('/' + RoutePath, () => {

    Route.get('', 'index');

}).controller('Cpanel:Router');
