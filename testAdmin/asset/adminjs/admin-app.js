var app= angular.module('admin-app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.
    when("/",{
        templateUrl: "/page/home/index.html",
        controller: "index"
    }).
    when("/account-form",{
        templateUrl: "/page/account-manager/account-form.html",
        controller: "account-form"
    })
    .when("/account-list",{
        templateUrl: "/page/account-manager/account-list.html",
        controller: "account-list"
    }).otherwise({
        template:"<h1 class='text-center'>Home page</h1>"
    })
});
app.run(['$rootScope', function($rootScope) {
    $rootScope.page = {
        setTitle: function(title) {
            this.title =  'DTNsBike |' + title;
        }
    }

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.page.setTitle(current.$$route.title || ' Trang quản trị');
    });
}]);