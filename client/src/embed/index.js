var Q = require("q");
var Qimage = require("qimage");
var React = require("react");
var Vignette = require("../ui/Vignette");

var transition = window.transition;

Q.all([
  Qimage("/assets/images/gallery/1.jpg"),
  Qimage("/assets/images/gallery/2.jpg"),
  Qimage("/assets/images/gallery/3.jpg")
])
  .then(function (images) {
    return React.renderComponent(Vignette({
      autostart: true,
      controlsMode: "mousedown",
      width: window.innerWidth,
      height: window.innerHeight,
      images: images,
      glsl: transition.glsl,
      uniforms: transition.uniforms,
      duration: 1500,
      delay: 500
    }), document.body);
  })
  .done();
