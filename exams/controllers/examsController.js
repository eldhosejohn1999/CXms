'use strict';

var app = angular.module('exams');

app.controller('examsController', ['$scope', 'LoginService', '$location', '$rootScope', '$window', 'Session', 'AUTH_EVENTS', '$cookieStore', '$timeout',
    function ($scope, LoginService, $location, $rootScope, $window, Session, AUTH_EVENTS, $cookieStore) {
        $scope.currentStates = ['notAnswered', 'wrongAnswer', 'correctAnswer'];
        $scope.showResultReport = false;
        $scope.showOnlyWrongAnswers = false;
        $scope.examReport = null;



        $scope.shouldDisplayDescription = false;



        $scope.quizData = [{
                "id": 0,
                "question": "Which is not an advantage of using closure",
                "answer": "D",
                "description": "description",
                "options": [
                    {
                        "text": "Prevent pollution of global scope",
                        "value": "A"
                    },
                    {
                        "text": "Encapsulation",
                        "value": "B"
                    },
                    {
                        "text": "Private properties and methods",
                        "value": "C"
                    },
                    {
                        "text": "Allow conditional use of 'strict mode'",
                        "value": "D"
                    }
                ]
            },{
                "id": 0,
                "question": "Which is not an advantage of using closure",
                "answer": "D",
                "description": "description",
                "options": [
                    {
                        "text": "Prevent pollution of global scope",
                        "value": "A"
                    },
                    {
                        "text": "Encapsulation",
                        "value": "B"
                    },
                    {
                        "text": "Private properties and methods",
                        "value": "C"
                    },
                    {
                        "text": "Allow conditional use of 'strict mode'",
                        "value": "D"
                    }
                ]
            },{
                "id": 0,
                "question": "Which is not an advantage of using closure",
                "answer": "D",
                "description": "description",
                "options": [
                    {
                        "text": "Prevent pollution of global scope",
                        "value": "A"
                    },
                    {
                        "text": "Encapsulation",
                        "value": "B"
                    },
                    {
                        "text": "Private properties and methods",
                        "value": "C"
                    },
                    {
                        "text": "Allow conditional use of 'strict mode'",
                        "value": "D"
                    }
                ]
            },{
                "id": 0,
                "question": "Which is not an advantage of using closure",
                "answer": "D",
                "description": "description",
                "options": [
                    {
                        "text": "Prevent pollution of global scope",
                        "value": "A"
                    },
                    {
                        "text": "Encapsulation",
                        "value": "B"
                    },
                    {
                        "text": "Private properties and methods",
                        "value": "C"
                    },
                    {
                        "text": "Allow conditional use of 'strict mode'",
                        "value": "D"
                    }
                ]
            },{
                "id": 0,
                "question": "Which is not an advantage of using closure",
                "answer": "D",
                "description": "description",
                "options": [
                    {
                        "text": "Prevent pollution of global scope",
                        "value": "A"
                    },
                    {
                        "text": "Encapsulation",
                        "value": "B"
                    },
                    {
                        "text": "Private properties and methods",
                        "value": "C"
                    },
                    {
                        "text": "Allow conditional use of 'strict mode'",
                        "value": "D"
                    }
                ]
            },{
                "id": 0,
                "question": "Which is not an advantage of using closure",
                "answer": "D",
                "description": "description",
                "options": [
                    {
                        "text": "Prevent pollution of global scope",
                        "value": "A"
                    },
                    {
                        "text": "Encapsulation",
                        "value": "B"
                    },
                    {
                        "text": "Private properties and methods",
                        "value": "C"
                    },
                    {
                        "text": "Allow conditional use of 'strict mode'",
                        "value": "D"
                    }
                ]
            },{
                "id": 0,
                "question": "Which is not an advantage of using closure",
                "answer": "D",
                "description": "description",
                "options": [
                    {
                        "text": "Prevent pollution of global scope",
                        "value": "A"
                    },
                    {
                        "text": "Encapsulation",
                        "value": "B"
                    },
                    {
                        "text": "Private properties and methods",
                        "value": "C"
                    },
                    {
                        "text": "Allow conditional use of 'strict mode'",
                        "value": "D"
                    }
                ]
            },{
                "id": 0,
                "question": "Which is not an advantage of using closure",
                "answer": "D",
                "description": "description",
                "options": [
                    {
                        "text": "Prevent pollution of global scope",
                        "value": "A"
                    },
                    {
                        "text": "Encapsulation",
                        "value": "B"
                    },
                    {
                        "text": "Private properties and methods",
                        "value": "C"
                    },
                    {
                        "text": "Allow conditional use of 'strict mode'",
                        "value": "D"
                    }
                ]
            },{
                "id": 0,
                "question": "Which is not an advantage of using closure",
                "answer": "D",
                "description": "description",
                "options": [
                    {
                        "text": "Prevent pollution of global scope",
                        "value": "A"
                    },
                    {
                        "text": "Encapsulation",
                        "value": "B"
                    },
                    {
                        "text": "Private properties and methods",
                        "value": "C"
                    },
                    {
                        "text": "Allow conditional use of 'strict mode'",
                        "value": "D"
                    }
                ]
            }];


        $scope.questionIndex = 0;


        $scope.question = $scope.quizData[$scope.questionIndex];

        $scope.selectedOptionsArray = [];

        $scope.previousQuestion = function () {
            //var shouldCheck = false;
//            var idFound=null;
//        
//             $('input[name=option' + $scope.questionIndex + ']').each(function(){
//                 
//                            idFound=$(this).attr('id');
//                            console.log(idFound);
//                       
//                });
//                
            if ($('input[name=option' + $scope.questionIndex + ']:checked').length === 0) {
                $scope.questionIndex--;
                $scope.question = $scope.quizData[$scope.questionIndex];
            } else {
                $scope.selectedOptionsArray.push($('input[name=option' + $scope.questionIndex + ']:checked').attr('id'));
                $scope.questionIndex--;
                $scope.question = $scope.quizData[$scope.questionIndex];
                 
            }
            
//             $('input[name=option' + $scope.questionIndex + ']').each(function(){
//                 
//                            idFound=$(this).attr('id');
//                         //   alert(idFound);
//                        if(selectedOptionsArray.indexOf($(this).attr('id'))!==-1){
//                            shouldCheck = true; 
//                            idFound=$(this).attr('id');
//                        }
//                });
//                if (shouldCheck) {
//                    $('input[id='+idFound+']').attr("checked", true);
//                }
//                console.log(selectedOptionsArray);
//        
};
        
        $scope.nextQuestion = function () {
            if ($('input[name=option' + $scope.questionIndex + ']:checked').length === 0) {
                $scope.questionIndex++;
                $scope.question = $scope.quizData[$scope.questionIndex];
            } else {
                $scope.selectedOptionsArray.push($('input[name=option' + $scope.questionIndex + ']:checked').attr('id'));
                $scope.questionIndex++;
                $scope.question = $scope.quizData[$scope.questionIndex];
                 
            }
        };



        $scope.choices = ["Show all", "Show Wrong Answers", "Show Correct Answers"];
        $scope.$watch('selection', function (newVal, oldVal) {
            switch (newVal) {
                case "Show all":
                    $scope.showOnlyWrongAnswers = true;
                    $scope.showOnlyCorrectAnswers = true;
                    break;
                case "Show Wrong Answers":
                    $scope.showOnlyWrongAnswers = true;
                    $scope.showOnlyCorrectAnswers = false;
                    break;
                case "Show Correct Answers":
                    $scope.showOnlyWrongAnswers = false;
                    $scope.showOnlyCorrectAnswers = true;
                    break;
                default:
                    break;
            }
        });


        $scope.calculateResult = function () {
            $scope.correctAnswersCounter = 0;
            $scope.wrongAnswersCounter = 0;

            var tempReport = {
                "correctAnswers": [],
                "wrongAnswers": []
            };

            for (var index = 0; index < $scope.quizData.length; index++) {
                if ($scope.quizData[index].answer === $('input[name=option' + index + ']:checked').val()) {//correct answer

                    for (var option_index = 0; option_index < $scope.quizData[index].options.length; option_index++) {
                        if ($scope.quizData[index].answer === $scope.quizData[index].options[option_index].value) {

                            tempReport.correctAnswers.push(angular.copy({
                                "question": $scope.quizData[index].question,
                                "description": $scope.quizData[index].description,
                                "answer": $scope.quizData[index].options[option_index].text
                            }));
                        }

                    }

                    $scope.correctAnswersCounter++;
                } else {

                    var selectedOption = $('input[name=option' + index + ']:checked').val();
                    for (var option_index = 0; option_index < $scope.quizData[index].options.length; option_index++) {
                        if ($scope.quizData[index].answer === $scope.quizData[index].options[option_index].value) {

                            tempReport.wrongAnswers.push(angular.copy({
                                "question": $scope.quizData[index].question,
                                "description": $scope.quizData[index].description,
                                "answer": $scope.quizData[index].options[option_index].text,
                                "selectedAnswer": $scope.quizData[index].options[option_index].text
                            }));
                        }

                    }
                    $scope.wrongAnswersCounter++;
                }

            }
            $scope.examReport = tempReport;

            $scope.showResultReport = true;

            console.log($scope.examReport);

        };

        $scope.canSubmit = function () {
            var canSubmitFlag = true;

            for (var index = 0; index < $scope.quizData.length; index++) {

                if ($('input[name=option' + index + ']:checked').length === 0) {
                    canSubmitFlag = false;
                    break;
                }
            }
            if (canSubmitFlag) {
                return true;
            } else {
                return false;
            }
        };
        $scope.signin = function () {

            $scope.signindetails = LoginService.signindetails($scope.userName, $scope.password, function (data, status, headers) {
                if (data.status == 0) {
                    data.SessionID = headers('authorization');
                    console.log("Login Successful");
                    //set the browser session, to avoid relogin on refresh
                    $window.sessionStorage["userInfo"] = JSON.stringify(data);
                    Session.create(data);
                    $rootScope.currentUser = data;
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                    $location.path("/dashboard");
                } else {
                    console.log("Login Failed");
                    $scope.loginError = data.message;
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    $location.path("/signin");
                }
            });
        };

        $scope.signupPath = function () {
            $location.path("/signin");
        };

        var setUserData = function () {
            $cookieStore.put("isLoggedIn", true);
        };

        var removeUserData = function () {
            Session.destroy();
            $window.sessionStorage.removeItem("userInfo");
            $cookieStore.remove("isLoggedIn");
        };

        var showNotAuthorized = function () {
            alert("Not Authorized");
            $location.path('/signin');
        };

        //listen to events of unsuccessful logins, to run the login dialog
        // $rootScope.$on(AUTH_EVENTS.notAuthorized, showNotAuthorized);
        // $rootScope.$on(AUTH_EVENTS.notAuthenticated, showLoginDialog);
        $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUserData);
        $rootScope.$on(AUTH_EVENTS.loginFailed, removeUserData);
        $rootScope.$on(AUTH_EVENTS.loginSuccess, setUserData);
    }]);
