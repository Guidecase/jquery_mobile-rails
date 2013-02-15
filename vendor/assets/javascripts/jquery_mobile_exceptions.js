$(document).on('pagecreate', function (e, ui) {
  var exceptionEl = $('#jquery-exceptions')
  if (exceptionEl.length) {
    var errorMessage = exceptionEl.text()
    $.extend( $.mobile, {
      pageLoadErrorMessage: errorMessage
    });
  }
})