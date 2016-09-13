angular.module('AuftragsMaske.Detail')
    .controller('TopicDetailSubtopicController', function ($stateParams) {

        var vm = this;

        vm.title = $stateParams.subtopic;

    });