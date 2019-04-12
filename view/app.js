
// var app = angular.module('myApp',[]);

// app.controller('myCtrl',function($scope){
//     $scope.firstName = "jerald";
//     $scope.lastName = "alarcon";
// });

// var app = angular.module('myApp',[]);

// app.controller('myCtrl',function($scope){
//     $scope.firstName = 'jerald';
//     $scope.lastName = 'alarcon';
// })


// var app = angular.module('jeraldApp',[]);

// app.controller('jeraldCtrl',function($scope){
//     $scope.firstName = 'jerald';
//     $scope.lastName = 'alarcon';
// })

// var app = angular.module('myApp',[]);

// app.controller('myCtrl',function($scope){
//     $scope.firstName = 'james';
//     $scope.lastName = 'bautista';
// })

// var app = angular.module('myApp',[]);

// app.directive('my-directive', function(){
//     return {
//         template: " I was made in directive!"
//     }
// })

// var app = angular.module('myApp',[]);

// app.controller('myCtrl',function($scope){
//     $scope.name = 'jerald alarcon';
// })


// (function(){
//     var app = angular.module('stores',[]);

//     app.controller('StoreController',function(){
//         this.products = gem;
//     });

//     var gem = [
//         {
//             name: 'Product1',
//             price: '2.95',
//             description: 'this is description',
//             canPurchase: true,
//             soldOut:true,
//             images:'images/1.jpg',
    
//         },
//         {
//             name: 'Product2',
//             price: '4.95',
//             description: 'this is description 2',
//             canPurchase: true,
//             soldOut:false,
//             images:'images/2.jpg',
//         }
//     ]
// })();

var app = angular.module('stores',[])

.controller('sampleCtrl',function($scope,$http){

    const _url = 'http://localhost:3000/employees';

    var req = {

        method: 'GET',

        url: _url,

        headers: {

            'Access-Control-Allow-Origin': true,
            'Content-Type': 'application/json; charset=utf-8',
            "X-Requested-With": "XMLHttpRequest"
            
        },
        // data: { test: 'test' }
       }

       $http(req).then( (response)=>{

        $scope.employees = [];

        $scope.employees = response.data;

        console.log('employees:',$scope.employees);

    })


    $scope.delete = function(value){
        
        console.log('value:',value);

        // var obj = { " id ": value};

        // var config = { data: JSON.stringify(obj)};

        const url = 'http://localhost:3000/employees';

        $http.delete(url+'/'+value)

        .then(function(response){

            alert('employee is deleted');
            // swal('Hello, World!');

        }, function(response){

            alert('try again');

        })
    };


    
    $scope.edit = function(id){
        
        console.log($scope.id);

        const url = 'http://localhost:3000/employees';

        // $http.get(${url/$scope.formModel.id})
    };


})

.controller('addCtrl', function($scope, $http){

    $scope.formModel = {};

    $scope.addNew = ()=> {

        console.log($scope.formModel);

        const url = 'http://localhost:3000/employees';

        $http.post(url, $scope.formModel)

        .then(function (data){

            console.log('=)',data);

        }).catch(function(data){

            console.log(":(");
            
        });

    };

});






