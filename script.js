container = document.querySelector("#main");

var text = new Blotter.Text("Mani Tofigh", {
    family: "serif",
    size: 160,
    fill: "#fff",
});

var material = new Blotter.FliesMaterial();
material.uniforms.uPointCellWidth.value = 0.01;
material.uniforms.uPointRadius.value = 0.7;
material.uniforms.uSpeed.value = 6;

var blotter = new Blotter(material, {
    texts: text
});

var scope = blotter.forText(text);

// Set up a CSS transition for opacity
container.style.transition = "opacity 2s ease";

// Initially set the opacity to 0
container.style.opacity = 0;

// Append the scope to the container
scope.appendTo(container);

// After a short delay, gradually increase the opacity (fade-in)
setTimeout(function() {
    container.style.opacity = 1;
}, 800);

// After a longer delay, smoothly decrease the opacity (fade-out)
setTimeout(function() {
    container.style.opacity = 0;
}, 2700);

// After the fade-out transition completes, remove the container from the DOM
container.addEventListener("transitionend", function(event) {
    if (event.propertyName === "opacity" && parseFloat(container.style.opacity) === 0) {
        container.parentNode.removeChild(container);
    }
});
