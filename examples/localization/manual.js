'use strict';

angular.module('demoApp', ['nya.bootstrap.select'])
  .run(function(nyaBsConfig) {
    nyaBsConfig.setLocalizedText('zh-cn', {
      defaultNoneSelection: '无选择',
      noSearchResult: '无匹配结果',
      numberItemSelected: '选中%d项'
    });
    // use zh-CN instead of user-agent locale
    nyaBsConfig.useLocale('zh-cn');
  })
  .controller('MainCtrl', function($scope){

    $scope.options1 = [
      'Alpha',
      'Bravo',
      'Charlie',
      'Golf',
      'Hotel',
      'Juliet',
      'Kilo',
      'Lima'
    ];
  });
