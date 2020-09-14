module.exports = function (str) {
  if (window.django == undefined) {
    return str;
  }
  // bug fix with django 3 and django-import-export lib ?! django.gettext is not a function
  if (django.gettext) {
    return django.gettext(str);
  }
  return gettext(str);
};
