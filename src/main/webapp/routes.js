angular.module('AuftragsMaske')
    .config(function($routeProvider) {
        
        $routeProvider.when('/topic', {
                templateUrl: '/templates/pages/topic/index.html',
                controller: 'TopicIndexController',
                controllerAs: 'CtrlTopicIndex'
            })

            .when('/topic/:name', {
                templateUrl: 'templates/pages/topic/show.html',
                controller: 'TopicShowController',
                controllerAs: 'CtrlTopicShow'

            })

            .when('/topic/:name', {
                templateUrl: 'templates/pages/topic/show.html',
                controller: 'TopicShowController',
                controllerAs: 'CtrlTopicShow'

            })


            .when('/', {
                templateUrl: '/templates/pages/home/index.html',
                controller: 'HomeIndexController',
                controllerAs: 'CtrlHomeIndex'

            })

            .otherwise( { redirectTo: '/' });
        
    });
