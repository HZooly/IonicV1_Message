angular.module('messages').controller('ArchiveController', ArchiveController);

ArchiveController.$inject = ['$scope', '$state', '$firebaseArray', '$firebaseObject'];

function ArchiveController($scope, $state, $firebaseArray, $firebaseObject) {
	var me = this;

	me.goHome = goHome;
	me.init = init;
	me.markAsNonRead = markAsNonRead;
	me.deleteMessage = deleteMessage;

	function init() {
		var ref = firebase.database().ref().child("messages");

		me.list = $firebaseObject(ref);

		me.list.$bindTo($scope, "data").then(function() {
			console.log($scope.data);
		});
	}

	function goHome(){
		$state.go('home');
	}

	function markAsNonRead(messageId) {
		me.list[messageId].status = 'close';
		me.list.$save();
	}

	function deleteMessage(messageId){
		me.list[messageId].status = 'delete';
		me.list.$save();
	}

	init();

}
