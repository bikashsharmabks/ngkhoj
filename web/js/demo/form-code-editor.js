$(function(){$("[data-form=select2]").select2();var e={asciidoc:["AsciiDoc","asciidoc"],c9search:["C9Search","c9search_results"],coffee:["CoffeeScript","coffee|^Cakefile"],coldfusion:["ColdFusion","cfm"],csharp:["C#","cs"],css:["CSS","css"],diff:["Diff","diff|patch"],glsl:["Glsl","glsl|frag|vert"],golang:["Go","go"],groovy:["Groovy","groovy"],haxe:["haXe","hx"],html:["HTML","htm|html|xhtml"],c_cpp:["C/C++","c|cc|cpp|cxx|h|hh|hpp"],clojure:["Clojure","clj"],jade:["Jade","jade"],java:["Java","java"],jsp:["JSP","jsp"],javascript:["JavaScript","js"],json:["JSON","json"],jsx:["JSX","jsx"],latex:["LaTeX","latex|tex|ltx|bib"],less:["LESS","less"],liquid:["Liquid","liquid"],lua:["Lua","lua"],luapage:["LuaPage","lp"],markdown:["Markdown","md|markdown"],ocaml:["OCaml","ml|mli"],perl:["Perl","pl|pm"],pgsql:["pgSQL","pgsql"],php:["PHP","php|phtml"],powershell:["Powershell","ps1"],python:["Python","py"],ruby:["Ruby","ru|gemspec|rake|rb"],scad:["OpenSCAD","scad"],scala:["Scala","scala"],scss:["SCSS","scss|sass"],sh:["SH","sh|bash|bat"],sql:["SQL","sql"],svg:["SVG","svg"],tcl:["Tcl","tcl"],text:["Text","txt"],textile:["Textile","textile"],typescript:["Typescript","typescript|ts|str"],xml:["XML","xml|rdf|rss|wsdl|xslt|atom|mathml|mml|xul|xbl"],xquery:["XQuery","xq"],yaml:["YAML","yaml"]},t=ace.edit("editor");t.getSession().setMode("ace/mode/javascript"),$.each(e,function(e,t){$("#mode").append('<option value="'+e+'">'+t[0]+"</option>")}),$("#data-files").change(function(){var e="js/ace-editor/file-changer.html",n=$(this).val();$.post(e,{data:n},function(e){e=="0"?alert("file not found, may be broken."):t.setValue(e,0)})}),$("#mode").change(function(){var e=$(this).val();t.getSession().setMode("ace/mode/"+e+"")}),$("#theme").change(function(){var e=$(this).val();t.setTheme(e)}),$("#update").click(function(){return alert("action update here... :)"),!1}),$(".syncronize .themes-choice > a, .unsyncronize .themes-navbar > a").on("click",function(e){e.preventDefault();var t=$(this).attr("data-theme");$.each($(".widget"),function(){var e=$(this),n=e.find(".widget-header"),r=e.find(".widget-action");e.is('[class*="border-"]')&&e.attr("class","widget border-"+t),e.is('[class*="bg-"]')&&e.attr("class","widget bg-"+t),n.is('[class*="bg-"]')&&n.attr("class","widget-header bg-"+t),r.is('[class*="color-"]')&&r.attr("class","widget-action color-"+t)})})});