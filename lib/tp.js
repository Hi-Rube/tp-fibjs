function startOptions(options) {
  if (arguments.length == 0) {
    var options = {};
  }
  options.TEMP_S || (options.TEMP_S = '<%');
  options.TEMP_E || (options.TEMP_E = '%>');
  return options;
};

function compile(tpString, options) {
  var fStr = "var f='';";
  while (tpString.length > 0) {
    var sIndex = tpString.indexOf(options.TEMP_S);
    var eIndex = tpString.indexOf(options.TEMP_E);
    if (sIndex == -1 || eIndex == -1) {
      fStr += "f+='" + tpString.substr(0) + "';";
      break;
    }
    var innerStr = tpString.substring(sIndex + options.TEMP_S.length, eIndex);
    if (innerStr.indexOf('=') === 0) {
      var variable = innerStr.substr(1);
      variable = variable.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      fStr += ("f+='" + tpString.substr(0, sIndex) + "' + " + variable + ";");
    } else {
      fStr += ("f+='" + tpString.substr(0, sIndex) + "';" + innerStr);
    }
    tpString = tpString.substr(eIndex + options.TEMP_E.length);
  }
  fStr += "return f;";
  fStr = fStr.replace(/\n/g, '/ENTER/');
  return fStr;
};

exports.intro = function () {
  return "fibjs templates engine";
};

exports.transform = function (tpString, params, options) {
  var options = startOptions(options);
  var tpCode = compile(tpString, options);
  var paramStr = "";
  var paramValueStr = "";
  for (var param in params) {
    paramStr += (param + ',');
    paramValueStr += ("'" + params[param] + "',");
  }
  paramStr = paramStr.substr(0, paramStr.length - 1);
  paramValueStr = paramValueStr.substr(0, paramValueStr.length - 1);
  var funcStr = "var func = new Function('" + paramStr + "',tpCode); htmlString = func(" + paramValueStr + "); return htmlString;";
  var func = new Function('tpCode', funcStr);
  var htmlString = func(tpCode);
  htmlString = htmlString.replace(/\/ENTER\//g, '\n');
  return htmlString;
};
