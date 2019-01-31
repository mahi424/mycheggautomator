(function() {
    if (document.title == "Expert Q&A | Chegg.com") {
        var classes3 = document.getElementsByClassName('btn-primary btn-lg start-answering-questions');
        var btn3 = classes3[0];
        btn3.click();
    } else if (document.title == "Chegg ReCaptcha") {
        window.location.replace("https://www.chegg.com/homework-help/expertquestion");
    } else if (window.location.href == "https://www.chegg.com/homework-help/expertquestion") {
        var retVal = confirm("Do you want to skip ?");
        if (retVal == true) {
            document.getElementById("skipQuestion-Answer").click();
            document.getElementById("noSubKnowledge").checked = true;
            var classes = document.getElementsByClassName('primary btn-lg btn-primary');
            var btn1 = classes[0];
            btn1.click();
        }
    }
})();
