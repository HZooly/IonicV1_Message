angular.module('messages').controller('ArchiveController', ArchiveController);

ArchiveController.$inject = ['$scope', '$state', '$firebaseArray', '$firebaseObject'];

function ArchiveController($scope, $state, $firebaseArray, $firebaseObject) {
	var me = this;

	me.goHome = goHome;

	function goHome(){
		$state.go('home');
	}

}
