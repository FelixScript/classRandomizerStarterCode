$(document).ready(function(){

        var Scripteders = ["isabella", "gabrielle", "anahi", "daryl", "lauren", "pamela", "felix"];
        $("#studentButton").click(function(){
            var random = Math.floor(Math.random() * Scripteders.length );
            $("#studentDisplay").html(Scripteders[random]);
            
        });
});

$(document).ready(function(){

        var Scripteders = ["Michael", "Mat", "Nick", "Rafi", "Jenna"];
        $("#teacherButton").click(function(){
            var random = Math.floor(Math.random() * Scripteders.length );
            $("#teacherDisplay").html(Scripteders[random]);
            
        });
});

        