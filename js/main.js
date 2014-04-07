var ToC =
  "<nav role='navigation' class='toc'>" +    
    "<ol class='ol-list'>";

var newLine, el, title, link;

$("article h2 li").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC +=
   "</ol>" +
  "</nav>";

$("#toc").append(ToC);