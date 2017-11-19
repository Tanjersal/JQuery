// merging two arrays with $.merge

$(document).ready(function(){

    var firstArray = ["Los Angeles ", "Minneapolis ", "Brookings "];

    var secondArray =["California ", "Minnesota ", "South Dakota "];

    alert($.merge(firstArray, secondArray));

});