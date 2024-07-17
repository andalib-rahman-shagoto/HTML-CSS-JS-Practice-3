$('document').ready(function(){
    function top_email_checker()
    {
        var email = $('#input-box').val();

        if(email.length == 0)
        {
            $('#input-box').addClass('wrong-email');
            $('#input-box').removeClass('correct-email');
        }
        else
        {    
            $('#topReq').hide();

            if(email.indexOf("@gmail.com") == -1)
            {
                $('#input-box').addClass('wrong-email');
                $('#input-box').removeClass('correct-email');
            }
            else
            {
                $('#input-box').addClass('correct-email');
                $('#input-box').removeClass('wrong-email');
            }
        }
    }

    $('#input-box').keydown(top_email_checker);
    $('#input-box').keyup(top_email_checker);
    $('#input-box').focus(top_email_checker);
});