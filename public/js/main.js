$(function() {
  $('.nav-item').click(function() {
    var tabName = $(this).data('tab');
    var $tab = $('#' + tabName);
    if ($tab.hasClass('presented') == false) {
      $('.tab.presented, .nav-item.presented').removeClass('presented');
      $tab.addClass('presented');
      $(this).addClass('presented');
      // $currentTab.removeClass('presented');
      // setTimeout(function() {
      //   $currentTab.addClass('hidden');
      //   $tab.removeClass('hidden');
      //   setTimeout(function() {
      //     $tab.addClass('presented');
      //   }, 10);
      // }, 300);
    }
  });
});
