$(function() {
  $('.nav-item').click(function() {
    var tabName = $(this).data('tab');
    var $tab = $('#' + tabName);
    if ($tab.hasClass('presented') == false) {
      $('.tab.presented, .nav-item.presented').removeClass('presented');
      $tab.addClass('presented');
      $(this).addClass('presented');
      if(history.pushState) {
        history.pushState(null, null, '#' + tabName);
      }
      else {
        location.hash = '#' + tabName;
      }
      // window.location.hash = tabName;
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

  var hash = window.location.hash.substr(1);
  if (hash) {
    $('.tab.presented, .nav-item.presented').removeClass('presented');
    var $targetNav = $('.nav-item[data-tab="' + hash + '"]');
    var $targetTab = $('#' + hash + '.tab');
    $targetNav.addClass('presented');
    $targetTab.addClass('presented');
  }
});
