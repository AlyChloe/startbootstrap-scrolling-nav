function Ctrl($scope) {
        $scope.templates = [{
	        name: 'website',
	        url: 'website.html'},
	    {
	        name: 'template2.html',
	        url: 'template2.html'}];
	    $scope.template = $scope.templates[0];
}