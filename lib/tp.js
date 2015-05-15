function startOptions(options) {
  options == null && (options = {});
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
      fStr += "f+='" + tpString.substr(0).replace(/\n/g, '\\n').replace(/'/g, "\\'") + "';";
      break;
    }
    var innerStr = tpString.substring(sIndex + options.TEMP_S.length, eIndex);
    if (innerStr.indexOf('=') === 0) {
      var variable = innerStr.substr(1);
      variable = variable.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      fStr += ("f+='" + tpString.substr(0, sIndex).replace(/\n/g, '\\n').replace(/'/g, "\\'") + "' + " + variable + ";");
    } else {
      fStr += ("f+='" + tpString.substr(0, sIndex).replace(/\n/g, '\\n').replace(/'/g, "\\'") + "';" + innerStr + ";");
    }
    tpString = tpString.substr(eIndex + options.TEMP_E.length);
  }
  fStr += "return f;";
  console.log(fStr);
  return fStr;
};

if (typeof window != 'undefined') {
  //web
} else {
  //server
  exports.intro = function () {
    return "Javascript templates engine";
  };

  exports.transform = function (tpString, params, options) {
    var options = startOptions(options || null);
    var tpCode = compile(tpString, options);
    var paramStr = "";
    var paramValue = [];
    for (var param in params) {
      paramStr += (param + ',');
      paramValue.push(params[param]);
    }
    paramStr = paramStr.substring(0, paramStr.length - 1);
    var func = new Function(paramStr, tpCode);
    var htmlString = func.apply(this, paramValue);
    console.log(htmlString);
    return htmlString;
  };
}
