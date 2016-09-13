'use restrict';

angular.module("AuftragsMaske.Detail",[]);

angular.module("AuftragsMaske", ["AuftragsMaske.Detail",'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider

            .state('/', {
                url: '/',
                templateUrl: '/templates/pages/home/index.html',
                controller: 'HomeIndexController as CtrlHomeIndex'
            })

            .state('topic', {
                url: '/topic',
                templateUrl: '/templates/pages/topic/index.html',
                controller: 'TopicIndexController as CtrlTopicIndex'
            })

            .state('topic.detail', {
                url: '/:name',
                templateUrl: '/templates/pages/topic/detail.html',
                controller: 'TopicDetailController as CtrlTopicDetail'
            })

            .state('topic.detail.subtopic', {
                url: '/:subtopic',
                templateUrl: '/templates/pages/topic/detail.subtopic.html',
                controller: 'TopicDetailSubtopicController as CtrlSubtopicDetail'
            })

            .state('meeting', {
                url: '/meeting',
                templateUrl: '/templates/pages/meeting/index.html',
                controller: 'MeetingIndexController as CtrlMeetingIndex'
            });
            // .state('state1.list', {
            //     url: '/list',
            //     templateUrl: 'partials/state1.list.html',
            //     controller: function ($scope) {
            //         $scope.items = ["A", "List", "Of", "Items"];
            //     }
            // })

    })

    .controller("NavigationController", ['$http', function ($http) {

        var vm = this;

        $http({ method: 'GET', url: '/javascript/controllers/topic/data.json'}).success(function (data) {
           vm.topics = data[""];
        });

    }]);