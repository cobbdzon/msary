const containerId = "falling-flowers";

var falling = true;
TweenLite.set("#".concat(containerId), { perspective: 600 });
//TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

var total = 10;
var container = document.getElementById(containerId),
	w = window.innerWidth,
	h = window.innerHeight;

for (i = 0; i < total; i++) {
	var div = document.createElement("div");
	var div2 = document.createElement("div");
	var div3 = document.createElement("div");
	TweenLite.set(div, {
		attr: { class: "dot" },
		x: R(0, w),
		y: R(-200, -150),
		z: R(-200, 200),
		xPercent: "-50%",
		yPercent: "-50%",
	});
	TweenLite.set(div2, {
		attr: { class: "dot2" },
		x: R(0, w),
		y: R(-200, -150),
		z: R(-200, 200),
		xPercent: "-50%",
		yPercent: "-50%",
	});
	TweenLite.set(div3, {
		attr: { class: "dot3" },
		x: R(0, w),
		y: R(-200, -150),
		z: R(-200, 200),
		xPercent: "-50%",
		yPercent: "-50%",
	});
	container.appendChild(div);
	container.appendChild(div2);
	container.appendChild(div3);
	anim(div);
	anim2(div2);
	anim3(div3);
}

function anim(elm) {
	TweenMax.to(elm, R(6, 15), {
		y: h + 100,
		ease: Linear.easeNone,
		repeat: -1,
		delay: -15,
	});
	TweenMax.to(elm, R(4, 8), {
		x: "+=100",
		rotationZ: R(0, 180),
		repeat: -1,
		yoyo: true,
		ease: Sine.easeInOut,
	});
	TweenMax.to(elm, R(2, 8), {
		repeat: -1,
		yoyo: true,
		ease: Sine.easeInOut,
		delay: -5,
	});
}
function anim2(elm) {
	TweenMax.to(elm, R(6, 15), {
		y: h + 100,
		ease: Linear.easeNone,
		repeat: -1,
		delay: -25,
	});
	TweenMax.to(elm, R(4, 8), {
		x: "+=100",
		rotationZ: R(0, 180),
		repeat: -1,
		yoyo: true,
		ease: Sine.easeInOut,
	});
	TweenMax.to(elm, R(2, 8), {
		repeat: -1,
		yoyo: true,
		ease: Sine.easeInOut,
		delay: -5,
	});
}
function anim3(elm) {
	TweenMax.to(elm, R(6, 15), {
		y: h + 100,
		ease: Linear.easeNone,
		repeat: -1,
		delay: -5,
	});
	TweenMax.to(elm, R(4, 8), {
		x: "+=100",
		rotationZ: R(0, 180),
		repeat: -1,
		yoyo: true,
		ease: Sine.easeInOut,
	});
	TweenMax.to(elm, R(2, 8), {
		repeat: -1,
		yoyo: true,
		ease: Sine.easeInOut,
		delay: -5,
	});
}

function R(min, max) {
	return min + Math.random() * (max - min);
}