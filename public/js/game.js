$(function() {
  var config = {
    width: "100%",
    height:  "100%",
    params: {disableContextMenu: "true"}
  };
  var u = new UnityObject2(config);

  var $missingScreen = $("#unityPlayer").find(".missing");
  var $brokenScreen = $("#unityPlayer").find(".broken");
  $missingScreen.hide();
  $brokenScreen.hide();

  u.observeProgress(function (progress) {
    switch(progress.pluginStatus) {
      case "broken":
      $brokenScreen.find("a").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        u.installPlugin();
        return false;
      });
      $brokenScreen.show();
      break;
      case "missing":
      $missingScreen.find("a").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        u.installPlugin();
        return false;
      });
      $missingScreen.show();
      break;
      case "installed":
      $missingScreen.remove();
      break;
      case "first":
      break;
    }
  });
  var script = $('script[src*=game]');
  var gameTitle = script.attr('data-game-title');
  u.initPlugin($("#unityPlayer")[0], gameTitle + ".unity3d");
});
