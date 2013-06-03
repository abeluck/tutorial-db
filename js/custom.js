// Cache a reference to the hidden content.
var hiddenContent = $( "#dev_features" ).find("li");
hiddenContent.hide();

console.log(hiddenContent);

function setDevText(msg) {
    $('#devs a').stop(true,true).hide().text(msg).fadeIn("fast");
}

$('#devs').hover(
    function(event) {
        if( !isDevExpanded() ) {
            setDevText("Why yes I am!");
        }
    },
    function(event) {
        if( !isDevExpanded() ) {
            setDevText("Are you a developer?");
        }
    }
);

function isDevExpanded() {
    if (hiddenContent.is( ":visible" )){
        return true;
    }
    return false;
}

$('#devs').live('click', function(event) {

        // Cancel the default event (this isn't a real link).
        event.preventDefault();

        // Check to see if the content is visible.
        if ( isDevExpanded() ) {
            setDevText("Are you a developer?");
            hiddenContent.slideUp( 1500, function() {
                $('#devs').addClass("expand");
            });
        } else {
            hiddenContent.slideDown( 1500 );
            setDevText("What do you want to do in your app?");
            $(this).removeClass("expand");
        }

    }
);
