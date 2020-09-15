module.exports = function (str) {
  // bug fix with django 3 and django-import-export lib ?! django.gettext is not a function
  if (typeof gettext === "function") {
    return gettext(str);
  }
  if (django && typeof django.gettext === "function") {
    return django.gettext(str);
  }
  return str;
};
