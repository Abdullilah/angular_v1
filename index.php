<!DOCTYPE html>
<html ng-app="myApp">
<head>
    <title>AngularJS V.1</title>


    <base href="http://localhost/angular_v1/" />

    <script src="app/angular/angular.min.js"></script>
    <script src="app/angular/angular-route.min.js"></script>

    <!-- import the angular module -->
    <script src="app/app.js"></script>
    <!-- import the angular controllers -->
    <script src="app/controllers/mainController.js"></script>
    <script src="app/controllers/menWomenController.js"></script>
    <script src="app/controllers/oneClientController.js"></script>

    <!-- import jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- import css style -->
    <link rel="stylesheet" href="css/style.css">

    <!-- import Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <!-- import Bootstrap JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</head>
<body>

    <nav class="navbar navbar-default navbar-inverse">
        <div class="container-fluid">
            <ul class="nav navbar-nav">
                <li><a href="main">Main</a></li>
                <li><a href="men">Men</a></li>
                <li><a href="women">Women</a></li>
            </ul>
        </div>
    </nav>

    <div class="mainSection" ng-view></div>

</body>
</html>




