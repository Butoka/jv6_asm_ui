var app= angular.module('admin-app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.
    when("/",{
        templateUrl: "/page/home/index.html"
        // controller: "account"
    }).
    when("/account-form",{
        templateUrl: "/page/account-manager/account-form.html",
        controller: "account"
    })
    .when("/account-list",{
        templateUrl: "/page/account-manager/account-list.html",
        controller: "account"
    }).otherwise({
        template:"<h1 class='text-center'>Home page</h1>"
    })
});