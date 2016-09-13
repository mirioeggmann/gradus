angular.module('AuftragsMaske.Detail')
    .controller('TopicDetailController', function ($stateParams) {

        var vm = this;

        vm.title = $stateParams.name;

    });