// ==UserScript==
// @name         Chatango HTML Mini Overlay
// @namespace    Chatango-HTML-Mini-Overlay
// @version      0.1
// @description  An extension for chatango.com's new html5/js chat. Which adds the old "mini profile on hover" feature.
// @author       Hazerd (Hazerdous) <Daniel Ransom>
// @homepage     http://hazerd.com
// @support      https://github.com/Hazerdous/Chatango-HTML-Mini-Overlay/issues
// @include      http://*.chatango.com/*
// @include      https://*.chatango.com/*
// @require      http://code.jquery.com/jquery-1.11.3.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

'use strict';
$("body").append(
'<div id="floating-mini-container"\
style="position:absolute; width:60%; min-width:300px; border-spacing:0; overflow:hidden;\
border-style:solid; border-width:1px; z-index:999; background-color:rgba(100,100,100,0.9); visibility:hidden;" >\
<div id="floating-mini-content"\
style="height:100%;width:100%; white-space:pre; overflow:scroll;\
text-shadow:1px 0 black, -1px 0 black, 0 1px black, 0 -1px black; color:white;">\
</div>\
</div>\
<img id="floating-mini-image" src="" alt="Loading . . ."\
style="position:absolute; max-height:150px; border-style:solid; border-width:1px;\
z-index:1000; visibility:hidden;">\
<div id="floating-mini-asl"\
style="position:absolute; white-space:nowrap; min-width:300px; width:60%; height:20px; font-size:20px; line-height:1;\
border-style:solid; border-width:1px; border-color:black; z-index:1000; background-color:rgba(100,100,100,0.9); visibility:hidden;\
text-shadow:1px 0 black, -1px 0 black, 0 1px black, 0 -1px black; color:white;">'
)

var elem = $("#floating-mini-container")
var image = $("#floating-mini-image")
var content = $("#floating-mini-content")
var asl = $("#floating-mini-asl")
var visible = false
var ASL = ["Gender?", "Age?", "Location?"]
var cursorX = 0
var cursorY = 0

elem.css("max-height",(window.innerHeight - 174).toString() + "px")

$(document).on("mouseenter", ".user-thumb", function(e) {
 var name = this.classList[1].match(/thumb-image-(.+)$/)[1]
 image[0].src="http://fp.chatango.com/profileimg/" + name[0] + "/" + (name[1] || name[0]) + "/" + name + "/full.jpg"
 getUserData(name)
})
$(document).on("mousemove", function(e) {
 cursorX = e.pageX
 cursorY = e.pageY
 if (e.target.classList[0] == "user-thumb") {
  if (elem.css("visibility") == "hidden" || image.css("visibility") == "hidden" || asl.css("visibility") == "hidden") {
   visible = true
   asl.css("visibility", "visible")
   elem.css("visibility", "visible")
   image.css("visibility", "visible")
  }
 } else {
  if (elem.css("visibility") == "visible" || image.css("visibility") == "visible" || asl.css("visibility") == "visible") {
   visible = false
   asl.css("visibility", "hidden")
   elem.css("visibility", "hidden")
   image.css("visibility", "hidden")
   content[0].innerHTML = "Loading . . ."
   resetASL()
   image[0].src= ""
   content[0].style.zoom = 1
  }
 }
 updatePosition()

})

$(window).resize(function() {
 elem.css("max-height", (window.innerHeight - 300).toString() + "px")
})

function updatePosition() {
 var offsetY = 0
 if (elem[0].offsetHeight + cursorY + 100 > window.innerHeight) {
  offsetY = window.innerHeight - (elem[0].offsetHeight + cursorY + 100)
 }
 elem.css({left:cursorX+25,top:cursorY+100+offsetY})
 image.css({left:cursorX+25,bottom:window.innerHeight-cursorY-80-offsetY})
 asl.css({left:cursorX+25,bottom:window.innerHeight-cursorY-101-offsetY})
}
function getUserData(name) {
 GM_xmlhttpRequest({
  method: "GET",
  url: "http://st.chatango.com/profileimg/" + name[0] + "/" + (name[1] || name[0]) + "/" + name + "/mod1.xml",
  onload: function(res) {
   extractASL(res.response)
   var body = res.response.match(/<body>(.*)<\/body>/)
   if (body !== null) { body = body[1] }
   setAbout(body)
  }
 })
}

function setImage(name) {
 image[0].src="http://fp.chatango.com/profileimg/" + name[0] + "/" + (name[1] || name[0]) + "/" + name + "/full.jpg"
}
function setAbout(text) {
 if (text === null) {
  content[0].innerHTML = "No Profile Data"
 } else {
  content[0].innerHTML = decodeURIComponent(text.replace(/%0D/g, "<br>"))
  content[0].style.zoom = elem[0].clientWidth / content[0].scrollWidth
  elem[0].style.height = content[0].scrollheight * content[0].style.zoom
 }
 updatePosition()
}
function setAge(age) {
 if (age === null) { ASL[0] = "Age?" }
 else { ASL[0] = age.toString() }
}
function setGender(gen) {
 if (gen == "M") {
  ASL[1] = "Male"
 } else if (gen == "F") {
  ASL[1] = "Female"
 } else {
  ASL[1] = "Gender?"
 }
}
function setLocation(loc) {
 ASL[2] = loc || "Location?"
}
function setASL(a, s, l) {
 setAge(a)
 setGender(s)
 setLocation(l)
 asl[0].innerHTML = ASL.join(", ")
}
function extractASL(data) {
 var a = data.match(/<b>(\d\d\d\d)-\d\d-\d\d<\/b>/)
 if (a) { a = new Date().getFullYear() - parseInt(a[1]) }
 var s = data.match(/<s>(\w)<\/s>/)
 if (s) { s = s[1] }
 var l = data.match(/<l .*?>(.*?)<\/l>/)
 if (l) { l = l[1] }
 setASL(a, s, l)
}
function resetASL() {
 ASL = ["Gender?", "Age?", "Location?"]
 asl[0].innerHTML = "Loading . . ."
}
