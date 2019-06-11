$( function() {
$( window ).scroll( function() {
if( $( this ).scrollTop() > 100 ) {
$( '.soc-nav' ).fadeIn();
} else {
$( '.soc-nav' ).fadeOut();
}
});
});