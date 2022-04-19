(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"myAnimationTry_atlas_1", frames: [[910,615,323,189],[0,0,449,663],[1574,415,181,349],[1139,212,248,313],[1389,212,78,32],[679,212,229,404],[451,212,226,413],[1740,0,227,413],[1505,0,233,413],[1389,415,183,348],[1896,415,137,100],[1896,517,137,100],[1757,415,137,103],[910,212,227,401],[451,0,1052,210]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_15 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["myAnimationTry_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wind = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-0.15,-13.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wind, new cjs.Rectangle(-0.1,-13.1,161.5,94.5), null);


(lib.Tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.5,331.5);


(lib.Scene_1_sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CCFF").s().p("EgrCAWvMAAAgtdMBWFAAAMAAAAtdg");
	this.shape.setTransform(276.2,145.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(524));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_grass = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// grass
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC66").s().p("EgrCAI0IAAxnMBWFAAAIAARng");
	this.shape.setTransform(276.175,347.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(524));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_clouds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clouds
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0.7,5.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(524));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.sad_Boy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(0,0,0.4655,0.4655);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sad_Boy, new cjs.Rectangle(0,0,84.3,162.5), null);


(lib.leaf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AA54A").s().p("AjLLCQhuhAhPhqQhVhzgZiCQgciSA2iMQB7lBCukFQBHhrAzgzQA0gzAJAaQAbBEBEBYQAnA0BeBwQC7DmBDDXQAtCQgeCSQgbCDhSBxQhNBphqA/QhpA/hkAAQhjAAhshAg");
	this.shape.setTransform(51.2832,77.036);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(7).to({rotation:-14.9992,x:51.3479,y:77.0467},0).wait(5).to({rotation:14.9994,x:51.3798,y:77.0996},0).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,0,112.4,154.1);


(lib.happyBoy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// boy_eyes
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(247.45,257.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// boy_hair
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#611A14").s().p("ALuICIAEiNQjghEiriZQg1gwgpgyIgfgpIgzC5QgQhKhfhvQhVhYANAOQAPASgDBvQgBA4gFA0IjEkTQi/C+iiA6QgzASgqACIgfgBIgXCgQgogRgqARIghAUIApivQgygHgYgXIgNgVQBFgaBSjKQAahAAYhKIATg9Qg6gegRgrIgGglQAqArBIgCQAkgBAbgKQAyhbDdgsQD0gxEdA0QENAxChDBQA9BKAlBVQAfBIAEA5IAQBBQANBKgIAqQgJAsACAtQAAAQAJBXQADAigSB9g");
	this.shape.setTransform(265.1928,252.0016,0.4705,0.4705);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// boy_body
	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(202.4,242,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.happyBoy, new cjs.Rectangle(202.4,226.4,123.99999999999997,172.1), null);


(lib.flyingBaloons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(-5.6,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_9();
	this.instance_2.setTransform(-5.25,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_10();
	this.instance_3.setTransform(-6.65,4.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},13).to({state:[{t:this.instance_3}]},8).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,0,123.1,206.5);


(lib.Boy_Hands_Down = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.4798,0.4798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Boy_Hands_Down, new cjs.Rectangle(0,0,87.8,167), null);


(lib.bird = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-4.85,-1.7,0.4089,0.4089);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(-4.65,-0.45,0.4089,0.4089);

	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(-4.65,-0.45,0.4089,0.4089);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},8).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-1.7,56.199999999999996,42.2);


(lib.Baloons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.4908,0.4908);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Baloons, new cjs.Rectangle(0,0,111.4,196.8), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276,-201,552,402);


(lib.Scene_1_wind = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wind
	this.instance = new lib.wind();
	this.instance.setTransform(628.9,133.4,1,1,0,0,0,77.2,47.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(1).to({regX:80.6,regY:34.1,x:624.6,y:120.2},0).wait(1).to({x:616.95,y:120},0).wait(1).to({x:609.3,y:119.85},0).wait(1).to({x:601.6,y:119.65},0).wait(1).to({x:593.95,y:119.45},0).wait(1).to({x:586.3,y:119.3},0).wait(1).to({x:576},0).wait(1).to({x:565.7},0).wait(1).to({x:555.4},0).wait(1).to({x:545.1},0).wait(1).to({x:534.8},0).wait(1).to({x:524.5},0).wait(1).to({x:514.2},0).wait(1).to({x:503.9},0).wait(1).to({x:493.6},0).wait(1).to({x:483.3},0).wait(1).to({x:488.4},0).wait(1).to({x:493.55},0).wait(1).to({x:498.65},0).wait(1).to({x:503.8},0).wait(1).to({x:508.9},0).wait(1).to({x:514.05},0).wait(1).to({x:519.15},0).wait(1).to({x:524.3},0).wait(1).to({x:517.75},0).wait(1).to({x:511.2},0).wait(1).to({x:504.65},0).wait(1).to({x:498.1},0).wait(1).to({x:491.55},0).wait(1).to({x:485},0).wait(1).to({x:478.45},0).wait(1).to({x:471.9},0).wait(1).to({x:465.35},0).wait(1).to({x:458.8},0).wait(1).to({x:452.25},0).wait(1).to({x:445.7},0).wait(1).to({x:433.9},0).wait(1).to({x:422.1},0).wait(1).to({x:410.35},0).wait(1).to({x:398.55},0).wait(1).to({x:386.75},0).wait(1).to({x:375},0).wait(1).to({x:363.2},0).wait(1).to({x:351.4},0).wait(1).to({x:339.65},0).wait(1).to({x:327.85},0).wait(1).to({x:316.05},0).wait(1).to({x:304.3},0).wait(1).to({x:292.5},0).wait(1).to({x:280.7},0).wait(1).to({x:268.95},0).wait(1).to({x:259},0).wait(1).to({x:249.05},0).wait(1).to({x:239.15},0).wait(1).to({x:229.2},0).wait(1).to({x:219.3},0).wait(1).to({x:209.35},0).wait(1).to({x:199.4},0).wait(1).to({x:189.5},0).wait(1).to({x:179.55},0).wait(1).to({x:169.65},0).wait(1).to({x:159.7},0).wait(1).to({x:149.75},0).wait(1).to({x:139.85},0).wait(1).to({x:129.9},0).wait(1).to({x:120},0).wait(1).to({x:111.35},0).wait(1).to({x:102.75},0).wait(1).to({x:94.15},0).wait(1).to({x:85.5},0).wait(1).to({x:76.95},0).wait(1).to({x:68.35},0).wait(1).to({x:59.7},0).wait(1).to({x:51.1},0).wait(1).to({x:42.5},0).wait(1).to({x:33.85},0).wait(1).to({x:25.25},0).wait(1).to({x:16.65},0).wait(1).to({x:8.05},0).wait(1).to({x:-0.6},0).wait(1).to({x:-9.2},0).wait(1).to({x:-17.8},0).wait(1).to({x:-26.45},0).wait(1).to({x:-35.05},0).wait(1).to({x:-43.65},0).wait(1).to({x:-52.3},0).wait(1).to({x:-60.9},0).wait(1).to({x:-69.5},0).wait(1).to({x:-78.1},0).wait(1).to({x:-86.75},0).wait(1).to({x:-95.35},0).wait(1).to({x:-103.95},0).wait(1).to({x:-112.6},0).wait(1).to({x:-121.2},0).wait(1).to({x:-129.8},0).wait(1).to({x:-138.45},0).wait(2).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tree
	this.instance = new lib.Tree("synched",0);
	this.instance.setTransform(112.1,237.95,1,1,0,0,0,112.1,165.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(524));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_boy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// boy
	this.instance = new lib.happyBoy();
	this.instance.setTransform(458.1,200.45,1,1,0,0,0,273.9,199);

	this.instance_1 = new lib.Boy_Hands_Down();
	this.instance_1.setTransform(454.3,313.35,1.042,1.042,0,0,0,43.9,83.5);

	this.instance_2 = new lib.sad_Boy();
	this.instance_2.setTransform(455.05,313.25,1.0742,1.0742,0,0,0,42.3,81.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},72).to({state:[{t:this.instance_2}]},74).to({state:[{t:this.instance_2}]},165).to({state:[{t:this.instance_1}]},44).to({state:[{t:this.instance}]},57).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance}]},25).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},72).wait(340).to({_off:false},0).wait(112));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bird = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bird
	this.instance = new lib.bird();
	this.instance.setTransform(-26.55,3.2,0.8333,0.8333,0,15.004,-164.996,21.8,12.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240).to({_off:false},0).wait(1).to({regX:23.3,regY:19.4,scaleX:0.8477,scaleY:0.8477,skewX:15.0248,skewY:-164.9752,x:-25,y:15.8},0).wait(1).to({scaleX:0.862,scaleY:0.862,skewX:15.0443,skewY:-164.9557,x:-20.85,y:23.2},0).wait(1).to({scaleX:0.8763,scaleY:0.8763,skewX:15.0639,skewY:-164.9361,x:-16.6,y:30.6},0).wait(1).to({scaleX:0.8907,scaleY:0.8907,skewX:15.0834,skewY:-164.9166,x:-12.45,y:38.05},0).wait(1).to({scaleX:0.905,scaleY:0.905,skewX:15.103,skewY:-164.897,x:-8.2,y:45.45},0).wait(1).to({scaleX:0.9193,scaleY:0.9193,skewX:15.1225,skewY:-164.8775,x:-4.05,y:52.9},0).wait(1).to({scaleX:0.9336,scaleY:0.9336,skewX:15.1421,skewY:-164.8579,x:0.15,y:60.35},0).wait(1).to({scaleX:0.948,scaleY:0.948,skewX:15.1616,skewY:-164.8384,x:4.4,y:67.75},0).wait(1).to({scaleX:0.9623,scaleY:0.9623,skewX:15.1811,skewY:-164.8189,x:8.6,y:75.2},0).wait(1).to({scaleX:0.9766,scaleY:0.9766,skewX:15.2007,skewY:-164.7993,x:12.85,y:82.65},0).wait(1).to({scaleX:0.9909,scaleY:0.9909,skewX:15.2202,skewY:-164.7798,x:17,y:90.1},0).wait(1).to({scaleX:1.0053,scaleY:1.0053,skewX:15.2398,skewY:-164.7602,x:21.2,y:97.5},0).wait(1).to({scaleX:1.0196,scaleY:1.0196,skewX:15.2593,skewY:-164.7407,x:25.45,y:104.95},0).wait(1).to({scaleX:1.0339,scaleY:1.0339,skewX:15.2789,skewY:-164.7211,x:29.6,y:112.35},0).wait(1).to({scaleX:1.0483,scaleY:1.0483,skewX:15.2984,skewY:-164.7016,x:33.85,y:119.8},0).wait(1).to({scaleX:1.0626,scaleY:1.0626,skewX:15.318,skewY:-164.682,x:38,y:127.25},0).wait(1).to({scaleX:1.0769,scaleY:1.0769,skewX:15.3375,skewY:-164.6625,x:42.25,y:134.65},0).wait(1).to({scaleX:1.0712,scaleY:1.0712,skewX:15.329,skewY:-164.671,x:43.95,y:143.55},0).wait(1).to({scaleX:1.0655,scaleY:1.0655,skewX:15.3205,skewY:-164.6795,x:45.55,y:152.45},0).wait(1).to({scaleX:1.0598,scaleY:1.0598,skewX:15.312,skewY:-164.688,x:47.2,y:161.35},0).wait(1).to({scaleX:1.0541,scaleY:1.0541,skewX:15.3034,skewY:-164.6966,x:48.85,y:170.1},0).wait(1).to({scaleX:1.0484,scaleY:1.0484,skewX:15.2949,skewY:-164.7051,x:50.55,y:179},0).wait(1).to({scaleX:1.0427,scaleY:1.0427,skewX:15.2864,skewY:-164.7136,x:52.15,y:187.9},0).wait(1).to({scaleX:1.0369,scaleY:1.0369,skewX:15.2779,skewY:-164.7221,x:53.85,y:196.8},0).wait(1).to({scaleX:1.0312,scaleY:1.0312,skewX:15.2693,skewY:-164.7307,x:55.5,y:205.65},0).wait(1).to({scaleX:1.0255,scaleY:1.0255,skewX:15.2608,skewY:-164.7392,x:57.15,y:214.55},0).wait(1).to({scaleX:1.0198,scaleY:1.0198,skewX:15.2523,skewY:-164.7477,x:58.85,y:223.4},0).wait(1).to({scaleX:1.0141,scaleY:1.0141,skewX:15.2438,skewY:-164.7562,x:60.5,y:232.3},0).wait(1).to({scaleX:1.0084,scaleY:1.0084,skewX:15.2352,skewY:-164.7648,y:232.25},0).wait(1).to({scaleX:1.0027,scaleY:1.0027,skewX:15.2267,skewY:-164.7733,y:232.2},0).wait(1).to({scaleX:0.997,scaleY:0.997,skewX:15.2182,skewY:-164.7818,y:232.15},0).wait(1).to({scaleX:0.9913,scaleY:0.9913,skewX:15.2097,skewY:-164.7903,x:60.55},0).wait(1).to({scaleX:0.9855,scaleY:0.9855,skewX:15.2012,skewY:-164.7988,x:60.6},0).wait(1).to({scaleX:0.9798,scaleY:0.9798,skewX:15.1926,skewY:-164.8074,x:60.55,y:232.05},0).wait(1).to({scaleX:0.9741,scaleY:0.9741,skewX:15.1841,skewY:-164.8159,x:60.6},0).wait(1).to({scaleX:0.9684,scaleY:0.9684,skewX:15.1756,skewY:-164.8244},0).wait(1).to({scaleX:0.9627,scaleY:0.9627,skewX:15.1671,skewY:-164.8329,x:60.65,y:232},0).wait(1).to({scaleX:0.9685,scaleY:0.9685,skewX:15.1756,skewY:-164.8244,x:64.2,y:226.65},0).wait(1).to({scaleX:0.9743,scaleY:0.9743,skewX:15.1841,skewY:-164.8159,x:67.75,y:221.25},0).wait(1).to({scaleX:0.98,scaleY:0.98,skewX:15.1926,skewY:-164.8074,x:71.25,y:215.85},0).wait(1).to({scaleX:0.9858,scaleY:0.9858,skewX:15.2012,skewY:-164.7988,x:74.9,y:210.55},0).wait(1).to({scaleX:0.9916,scaleY:0.9916,skewX:15.2097,skewY:-164.7903,x:78.4,y:205.15},0).wait(1).to({scaleX:0.9974,scaleY:0.9974,skewX:15.2182,skewY:-164.7818,x:81.95,y:199.75},0).wait(1).to({scaleX:1.0031,scaleY:1.0031,skewX:15.2267,skewY:-164.7733,x:85.5,y:194.45},0).wait(1).to({scaleX:1.0089,scaleY:1.0089,skewX:15.2352,skewY:-164.7648,x:89,y:189.05},0).wait(1).to({scaleX:1.0147,scaleY:1.0147,skewX:15.2438,skewY:-164.7562,x:92.6,y:183.7},0).wait(1).to({scaleX:1.0204,scaleY:1.0204,skewX:15.2523,skewY:-164.7477,x:96.15,y:178.35},0).wait(1).to({scaleX:1.0262,scaleY:1.0262,skewX:15.2608,skewY:-164.7392,x:98.7,y:174.25},0).wait(1).to({scaleX:1.032,scaleY:1.032,skewX:15.2693,skewY:-164.7307,x:101.3,y:170.15},0).wait(1).to({scaleX:1.0378,scaleY:1.0378,skewX:15.2779,skewY:-164.7221,x:103.85,y:166.1},0).wait(1).to({scaleX:1.0435,scaleY:1.0435,skewX:15.2864,skewY:-164.7136,x:106.4,y:162.05},0).wait(1).to({scaleX:1.0493,scaleY:1.0493,skewX:15.2949,skewY:-164.7051,x:108.95,y:157.95},0).wait(1).to({scaleX:1.0551,scaleY:1.0551,skewX:15.3034,skewY:-164.6966,x:111.5,y:153.85},0).wait(1).to({scaleX:1.0609,scaleY:1.0609,skewX:15.312,skewY:-164.688,x:114.05,y:149.8},0).wait(1).to({scaleX:1.0666,scaleY:1.0666,skewX:15.3205,skewY:-164.6795,x:116.65,y:145.75},0).wait(1).to({scaleX:1.0724,scaleY:1.0724,skewX:15.329,skewY:-164.671,x:119.2,y:141.65},0).wait(1).to({scaleX:1.0782,scaleY:1.0782,skewX:15.3375,skewY:-164.6625,x:121.7,y:137.55},0).wait(1).to({x:122.3,y:139.7},0).wait(1).to({x:122.9,y:141.85},0).wait(1).to({x:123.45,y:144},0).wait(1).to({x:124.05,y:146.15},0).wait(1).to({x:124.65,y:148.3},0).wait(1).to({x:125.2,y:150.45},0).wait(1).to({x:125.8,y:152.6},0).wait(1).to({x:126.4,y:154.8},0).wait(1).to({x:126.95,y:156.95},0).wait(1).to({x:127.55,y:159.1},0).wait(1).to({x:128.15,y:161.25},0).wait(1).to({x:128.75,y:163.4},0).wait(1).to({x:129.3,y:165.55},0).wait(1).to({regX:22.1,regY:13.3,scaleX:1.0781,scaleY:1.0781,skewX:15.337,skewY:-164.663,x:132.65,y:158.85},0).wait(44).to({regX:19.7,regY:14.7,scaleX:1.2228,scaleY:1.2228,skewX:0.5856,skewY:-179.4144,x:132.7,y:158.9},0).wait(1).to({regX:23.3,regY:19.4,skewX:0.5866,skewY:-179.4134,x:124.5,y:167.85},0).wait(1).to({x:120.75,y:171.15},0).wait(1).to({x:117.05,y:174.45},0).wait(1).to({x:113.3,y:177.7},0).wait(1).to({x:109.6,y:181},0).wait(1).to({x:105.85,y:184.3},0).wait(1).to({x:102.15,y:187.6},0).wait(1).to({x:113.3,y:191.25},0).wait(1).to({x:124.5,y:194.9},0).wait(1).to({x:135.7,y:198.6},0).wait(1).to({x:146.9,y:202.25},0).wait(1).to({x:158.1,y:205.9},0).wait(1).to({x:169.3,y:209.6},0).wait(1).to({x:180.5,y:213.25},0).wait(1).to({x:191.7,y:216.9},0).wait(1).to({x:202.9,y:220.6},0).wait(1).to({x:214.1,y:224.25},0).wait(1).to({x:225.3,y:227.9},0).wait(1).to({x:236.5,y:231.6},0).wait(1).to({x:247.7,y:235.25},0).wait(1).to({x:258.9,y:238.9},0).wait(1).to({x:270.1,y:242.6},0).wait(1).to({x:276.85,y:244},0).wait(1).to({x:283.6,y:245.45},0).wait(1).to({x:290.35,y:246.9},0).wait(1).to({x:297.1,y:248.35},0).wait(1).to({x:303.85,y:249.8},0).wait(1).to({x:310.6,y:251.25},0).wait(1).to({x:317.35,y:252.7},0).wait(1).to({x:324.15,y:254.15},0).wait(1).to({x:330.9,y:255.55},0).wait(1).to({x:337.65,y:257},0).wait(1).to({x:344.4,y:258.45},0).wait(1).to({x:351.15,y:259.9},0).wait(1).to({x:357.9,y:261.35},0).wait(1).to({x:364.65,y:262.8},0).wait(1).to({x:371.4,y:264.25},0).wait(1).to({x:378.2,y:265.7},0).wait(1).to({x:378.95,y:264.95},0).wait(1).to({x:379.7,y:264.2},0).wait(1).to({x:380.5,y:263.5},0).wait(1).to({x:381.25,y:262.75},0).wait(1).to({x:382,y:262.05},0).wait(1).to({x:382.8,y:261.3},0).wait(1).to({x:383.55,y:260.6},0).wait(1).to({x:384.3,y:259.85},0).wait(1).to({x:385.1,y:259.15},0).wait(1).to({x:385.85,y:258.4},0).wait(1).to({x:386.65,y:257.7},0).wait(1).to({x:387.4,y:256.95},0).wait(1).to({x:388.15,y:256.25},0).wait(1).to({x:388.95,y:255.5},0).wait(1).to({x:389.7,y:254.8},0).wait(1).to({x:390.45,y:254.05},0).wait(1).to({x:391.25,y:253.35},0).wait(1).to({x:392,y:252.6},0).wait(1).to({x:392.8,y:251.9},0).wait(1).to({y:252.85},0).wait(1).to({y:253.85},0).wait(1).to({y:254.85},0).wait(1).to({x:392.85,y:255.8},0).wait(1).to({y:256.8},0).wait(1).to({y:257.8},0).wait(1).to({x:392.9,y:258.8},0).wait(1).to({y:259.75},0).wait(1).to({y:260.75},0).wait(1).to({y:261.75},0).wait(1).to({x:392.95,y:262.7},0).wait(1).to({y:263.7},0).wait(1).to({y:264.7},0).wait(1).to({x:393,y:265.7},0).wait(1).to({regX:20.2,regY:14.7,scaleX:1.2227,scaleY:1.2227,skewX:0.5863,skewY:-179.4137,x:397.5,y:260},0).wait(25).to({regX:20.4,scaleX:1.2228,scaleY:1.2228,skewX:0.5856,skewY:-179.4144,x:397.55,y:260.05},0).wait(1).to({regX:23.3,regY:19.4,skewX:0.5866,skewY:-179.4134,x:389.3,y:270.3},0).wait(1).to({x:384.65,y:274.85},0).wait(1).to({x:380,y:279.4},0).wait(1).to({x:375.35,y:284},0).wait(1).to({x:370.7,y:288.55},0).wait(1).to({x:366.05,y:293.1},0).wait(1).to({x:361.45,y:297.7},0).wait(1).to({x:366.7,y:286.45},0).wait(1).to({x:372,y:275.2},0).wait(1).to({x:377.25,y:264},0).wait(1).to({x:382.55,y:252.75},0).wait(1).to({x:387.85,y:241.5},0).wait(1).to({x:393.1,y:230.3},0).wait(1).to({x:398.4,y:219.05},0).wait(1).to({x:403.65,y:207.85},0).wait(1).to({x:408.95,y:196.6},0).wait(1).to({x:414.25,y:185.35},0).wait(1).to({x:419.5,y:174.15},0).wait(1).to({x:424.8,y:162.9},0).wait(1).to({x:430.1,y:151.7},0).wait(1).to({x:436.85,y:154.3},0).wait(1).to({x:443.6,y:156.9},0).wait(1).to({x:450.4,y:159.5},0).wait(1).to({x:457.15,y:162.1},0).wait(1).to({x:463.95,y:164.7},0).wait(1).to({x:470.7,y:167.3},0).wait(1).to({x:477.45,y:169.9},0).wait(1).to({x:484.25,y:172.5},0).wait(1).to({x:491,y:175.1},0).wait(1).to({x:497.8,y:177.7},0).wait(1).to({x:504.1,y:170.95},0).wait(1).to({x:510.45,y:164.2},0).wait(1).to({x:516.8,y:157.5},0).wait(1).to({x:523.1,y:150.75},0).wait(1).to({x:529.45,y:144},0).wait(1).to({x:535.8,y:137.3},0).wait(1).to({x:542.1,y:130.55},0).wait(1).to({x:548.45,y:123.8},0).wait(1).to({x:554.8,y:117.1},0).wait(1).to({x:561.1,y:110.35},0).wait(1).to({x:567.45,y:103.6},0).wait(1).to({x:573.8,y:96.9},0).wait(1).to({x:580.1,y:90.15},0).wait(1).to({x:586.45,y:83.4},0).wait(1).to({x:592.8,y:76.7},0).to({_off:true},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_baloons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// baloons
	this.instance = new lib.Baloons();
	this.instance.setTransform(354.75,210.35,1,1,0,0,0,55.6,98.5);

	this.instance_1 = new lib.flyingBaloons();
	this.instance_1.setTransform(353.8,205.65,1,1,0,0,0,58.3,103.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},72).wait(355).to({_off:false,regX:55.7,scaleX:1.0188,scaleY:1.0188,rotation:-6.2051,x:368.8,y:182.25},0).wait(25).to({regY:98.6,scaleX:1,scaleY:1,rotation:-7.731,y:182.35},0).wait(1).to({regY:98.4,rotation:-7.7311,x:365.5,y:186.95},0).wait(1).to({x:362.2,y:191.8},0).wait(1).to({x:358.9,y:196.6},0).wait(1).to({x:355.65,y:201.45},0).wait(1).to({x:352.35,y:206.25},0).wait(1).to({x:349.05,y:211.1},0).wait(1).to({x:345.75,y:215.9},0).wait(1).to({regX:55.8,regY:98.6,rotation:-7.7302,x:345.9,y:216.15},0).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({_off:false},0).wait(1).to({regX:54.9,rotation:-0.7733,x:340.6,y:203.7},0).wait(1).to({rotation:-1.5466,x:330.85,y:201.7},0).wait(1).to({rotation:-2.3198,x:321.05,y:199.8},0).wait(1).to({rotation:-3.0931,x:311.2,y:197.85},0).wait(1).to({rotation:-3.8664,x:301.45,y:195.85},0).wait(1).to({rotation:-4.6397,x:291.7,y:193.9},0).wait(1).to({rotation:-5.413,x:281.95,y:191.95},0).wait(1).to({rotation:-6.1862,x:272.15,y:190.05},0).wait(1).to({rotation:-6.9595,x:262.4,y:188.1},0).wait(1).to({rotation:-7.7328,x:252.65,y:186.1},0).wait(1).to({x:243.2,y:179.75},0).wait(1).to({x:233.8,y:173.4},0).wait(1).to({x:224.35,y:167.05},0).wait(1).to({x:214.95,y:160.7},0).wait(1).to({x:205.5,y:154.35},0).wait(1).to({x:196.1,y:148},0).wait(1).to({x:186.65,y:141.65},0).wait(1).to({x:177.25,y:135.3},0).wait(1).to({x:167.8,y:128.95},0).wait(1).to({x:158.4,y:122.55},0).wait(1).to({x:148.95,y:116.2},0).wait(1).to({x:139.55,y:109.85},0).wait(1).to({x:130.1,y:103.5},0).wait(1).to({x:120.7,y:97.15},0).wait(1).to({x:117,y:96.5},0).wait(1).to({x:113.3,y:95.85},0).wait(1).to({x:109.6,y:95.2},0).wait(1).to({x:105.9,y:94.6},0).wait(1).to({x:102.2,y:93.95},0).wait(1).to({x:98.5,y:93.35},0).wait(1).to({x:94.8,y:92.7},0).wait(1).to({x:91.1,y:92.05},0).wait(1).to({x:87.4,y:91.4},0).wait(1).to({x:83.7,y:90.75},0).wait(1).to({x:80,y:90.1},0).wait(1).to({x:76.3,y:89.45},0).wait(1).to({x:72.6,y:88.8},0).wait(1).to({x:68.9,y:88.15},0).wait(1).to({x:65.25,y:87.5},0).wait(1).to({x:61.55,y:86.85},0).wait(1).to({x:57.85,y:86.2},0).wait(1).to({x:58.45,y:86.55},0).wait(1).to({x:59.1,y:86.95},0).wait(1).to({x:59.75,y:87.3},0).wait(1).to({x:60.35,y:87.65},0).wait(1).to({x:61,y:88.05},0).wait(1).to({x:61.65,y:88.4},0).wait(1).to({x:62.25,y:88.75},0).wait(1).to({x:62.9,y:89.15},0).wait(1).to({x:63.55,y:89.5},0).wait(1).to({x:64.15,y:89.85},0).wait(1).to({x:64.8,y:90.2},0).wait(1).to({x:65.45,y:90.6},0).wait(1).to({x:66.05,y:90.95},0).wait(1).to({x:66.7,y:91.3},0).wait(1).to({x:67.35,y:91.7},0).wait(1).to({x:67.95,y:92.05},0).wait(1).to({x:68.55,y:92.4},0).wait(1).to({x:69.2,y:92.8},0).wait(1).to({x:69.8,y:93.15},0).wait(1).to({x:70.45,y:93.5},0).wait(1).to({x:71.1,y:93.85},0).wait(1).to({x:71.7,y:94.25},0).wait(1).to({x:72.35,y:94.6},0).wait(1).to({x:73,y:94.9},0).wait(1).to({x:73.6,y:95.3},0).wait(1).to({x:74.25,y:95.65},0).wait(1).to({x:74.9,y:96},0).wait(1).to({x:75.5,y:96.4},0).wait(1).to({x:76.15,y:96.75},0).wait(1).to({x:76.8,y:97.1},0).wait(3).to({regX:58.4,rotation:-7.7327,x:80.25,y:96.7},0).wait(210).to({regX:54.9,scaleX:1.0001,scaleY:1.0001,rotation:-7.7328,x:76.75,y:97.1},0).wait(7).to({x:87.7,y:101.25},0).wait(1).to({x:98.65,y:105.35},0).wait(1).to({x:109.55,y:109.45},0).wait(1).to({x:120.5,y:113.55},0).wait(1).to({x:131.4,y:117.65},0).wait(1).to({x:142.35,y:121.75},0).wait(1).to({x:153.3,y:125.85},0).wait(1).to({x:164.2,y:130},0).wait(1).to({x:175.15,y:134.1},0).wait(1).to({x:186.05,y:138.2},0).wait(1).to({x:197,y:142.3},0).wait(1).to({x:207.95,y:146.4},0).wait(1).to({x:218.85,y:150.5},0).wait(1).to({x:229.8,y:154.6},0).wait(1).to({x:240.7,y:158.7},0).wait(1).to({x:247.7,y:159.85},0).wait(1).to({x:254.7,y:161},0).wait(1).to({x:261.7,y:162.15},0).wait(1).to({x:268.7,y:163.3},0).wait(1).to({x:275.7,y:164.45},0).wait(1).to({x:282.7,y:165.6},0).wait(1).to({x:289.7,y:166.75},0).wait(1).to({x:296.7,y:167.9},0).wait(1).to({x:303.7,y:169.05},0).wait(1).to({x:310.7,y:170.2},0).wait(1).to({x:317.7,y:171.35},0).wait(1).to({x:324.7,y:172.5},0).wait(1).to({x:331.7,y:173.65},0).wait(1).to({x:338.7,y:174.8},0).wait(1).to({x:345.7,y:175.95},0).wait(1).to({x:352.7,y:177.1},0).wait(1).to({x:353.35,y:176.35},0).wait(1).to({x:354,y:175.55},0).wait(1).to({x:354.6,y:174.75},0).wait(1).to({x:355.25,y:173.95},0).wait(1).to({x:355.9,y:173.15},0).wait(1).to({x:356.5,y:172.4},0).wait(1).to({x:357.15,y:171.6},0).wait(1).to({x:357.8,y:170.8},0).wait(1).to({x:358.4,y:170},0).wait(1).to({x:359.05,y:169.25},0).wait(1).to({x:359.65,y:168.45},0).wait(1).to({x:360.3,y:167.65},0).wait(1).to({x:360.95,y:166.85},0).wait(1).to({x:361.55,y:166.05},0).wait(1).to({x:362.2,y:165.3},0).wait(1).to({x:362.85,y:164.5},0).wait(1).to({x:363.45,y:163.7},0).wait(1).to({x:364.1,y:162.9},0).wait(1).to({x:364.7,y:162.1},0).wait(1).to({y:163.6},0).wait(1).to({y:165.05},0).wait(1).to({y:166.55},0).wait(1).to({y:168},0).wait(1).to({y:169.45},0).wait(1).to({y:170.95},0).wait(1).to({y:172.4},0).wait(1).to({y:173.85},0).wait(1).to({y:175.35},0).wait(1).to({y:176.8},0).wait(1).to({y:178.25},0).wait(1).to({y:179.75},0).wait(1).to({y:181.2},0).wait(1).to({y:182.65},0).to({_off:true},1).wait(97));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.leaf_tween = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.leaf();
	this.instance.setTransform(73,48.5,0.2271,0.2271,0,0,0,51.3,77);

	this.instance_1 = new lib.leaf();
	this.instance_1.setTransform(8,-48.5,0.2271,0.2271,0,0,0,51.3,77);

	this.instance_2 = new lib.leaf();
	this.instance_2.setTransform(-73,33.65,0.2271,0.2271,0,0,0,51.3,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.6,-66,169.3,132);


(lib.Scene_1_leaf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// leaf
	this.instance = new lib.leaf_tween("synched",0);
	this.instance.setTransform(109.1,176.45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).wait(1).to({y:183.5333},0).wait(1).to({y:190.6167},0).wait(1).to({y:197.7},0).wait(1).to({y:204.7833},0).wait(1).to({y:211.8667},0).wait(1).to({y:218.95},0).wait(1).to({y:226.0333},0).wait(1).to({y:233.1167},0).wait(1).to({y:240.2},0).wait(1).to({y:247.2833},0).wait(1).to({y:254.3667},0).wait(1).to({y:261.45},0).wait(1).to({x:106.5,y:263.51},0).wait(1).to({x:103.9,y:265.57},0).wait(1).to({x:101.3,y:267.63},0).wait(1).to({x:98.7,y:269.69},0).wait(1).to({x:96.1,y:271.75},0).wait(1).to({x:93.5,y:273.81},0).wait(1).to({x:90.9,y:275.87},0).wait(1).to({x:88.3,y:277.93},0).wait(1).to({x:85.7,y:279.99},0).wait(1).to({x:83.1,y:282.05},0).wait(1).to({x:80.5,y:284.11},0).wait(1).to({x:77.9,y:286.17},0).wait(1).to({x:75.3,y:288.23},0).wait(1).to({x:72.7,y:290.29},0).wait(1).to({x:70.1,y:292.35},0).wait(1).to({x:67.1,y:296.4773},0).wait(1).to({x:64.1,y:300.6046},0).wait(1).to({x:61.1,y:304.7318},0).wait(1).to({x:58.1,y:308.8591},0).wait(1).to({x:55.1,y:312.9864},0).wait(1).to({x:52.1,y:317.1136},0).wait(1).to({x:49.1,y:321.2409},0).wait(1).to({x:46.1,y:325.3682},0).wait(1).to({x:43.1,y:329.4955},0).wait(1).to({x:40.1,y:333.6227},0).wait(1).to({x:37.1,y:337.75},0).wait(1).to({x:35.4,y:340.0125},0).wait(1).to({x:33.7,y:342.275},0).wait(1).to({x:32,y:344.5375},0).wait(1).to({x:30.3,y:346.8},0).wait(1).to({x:28.6,y:349.0625},0).wait(1).to({x:26.9,y:351.325},0).wait(1).to({x:25.2,y:353.5875},0).wait(1).to({x:23.5,y:355.85},0).wait(1).to({x:21.8,y:358.1125},0).wait(1).to({x:20.1,y:360.375},0).wait(1).to({x:18.4,y:362.6375},0).wait(1).to({x:16.7,y:364.9},0).wait(1).to({x:15,y:367.1625},0).wait(1).to({x:13.3,y:369.425},0).wait(1).to({x:11.6,y:371.6875},0).wait(1).to({x:9.9,y:373.95},0).wait(1).to({x:8.2,y:376.2125},0).wait(1).to({x:6.5,y:378.475},0).wait(1).to({x:4.8,y:380.7375},0).wait(1).to({x:3.1,y:383},0).wait(1).to({x:0.6333,y:385.3967},0).wait(1).to({x:-1.8333,y:387.7933},0).wait(1).to({x:-4.3,y:390.19},0).wait(1).to({x:-6.7667,y:392.5867},0).wait(1).to({x:-9.2333,y:394.9833},0).wait(1).to({x:-11.7,y:397.38},0).wait(1).to({x:-14.1667,y:399.7767},0).wait(1).to({x:-16.6333,y:402.1733},0).wait(1).to({x:-19.1,y:404.57},0).wait(1).to({x:-21.5667,y:406.9667},0).wait(1).to({x:-24.0333,y:409.3633},0).wait(1).to({x:-26.5,y:411.76},0).wait(1).to({x:-28.9667,y:414.1567},0).wait(1).to({x:-31.4333,y:416.5533},0).wait(1).to({x:-33.9,y:418.95},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.myAnimationTry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [523];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_523 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(523).call(this.frame_523).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(353.2,257.9,0.723,0.723,0,0,0,0.4,0.3);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({regX:0,regY:0,scaleX:0.7394,scaleY:0.7394,x:349.3693,y:255.4513},0).wait(1).to({scaleX:0.7558,scaleY:0.7558,x:345.8385,y:253.2027},0).wait(1).to({scaleX:0.7721,scaleY:0.7721,x:342.3078,y:250.954},0).wait(1).to({scaleX:0.7885,scaleY:0.7885,x:338.7771,y:248.7054},0).wait(1).to({scaleX:0.8048,scaleY:0.8048,x:335.2464,y:246.4567},0).wait(1).to({scaleX:0.8212,scaleY:0.8212,x:331.7156,y:244.208},0).wait(1).to({scaleX:0.8376,scaleY:0.8376,x:328.1849,y:241.9594},0).wait(1).to({scaleX:0.8539,scaleY:0.8539,x:324.6542,y:239.7107},0).wait(1).to({scaleX:0.8592,scaleY:0.8592,x:322.6824,y:238.1125},0).wait(1).to({scaleX:0.8644,scaleY:0.8644,x:320.7105,y:236.5143},0).wait(1).to({scaleX:0.8697,scaleY:0.8697,x:318.7387,y:234.916},0).wait(1).to({scaleX:0.8749,scaleY:0.8749,x:316.7668,y:233.3178},0).wait(1).to({scaleX:0.8802,scaleY:0.8802,x:314.795,y:231.7195},0).wait(1).to({scaleX:0.8854,scaleY:0.8854,x:312.8232,y:230.1213},0).wait(1).to({scaleX:0.8906,scaleY:0.8906,x:310.8513,y:228.523},0).wait(1).to({scaleX:0.8959,scaleY:0.8959,x:308.8795,y:226.9248},0).wait(1).to({scaleX:0.9011,scaleY:0.9011,x:306.9077,y:225.3266},0).wait(1).to({scaleX:0.9064,scaleY:0.9064,x:304.9358,y:223.7283},0).wait(1).to({scaleX:0.9116,scaleY:0.9116,x:302.964,y:222.1301},0).wait(1).to({scaleX:0.9169,scaleY:0.9169,x:300.9922,y:220.5318},0).wait(1).to({scaleX:0.9221,scaleY:0.9221,x:299.0203,y:218.9336},0).wait(1).to({scaleX:0.9274,scaleY:0.9274,x:297.0485,y:217.3354},0).wait(1).to({scaleX:0.9326,scaleY:0.9326,x:295.0766,y:215.7371},0).wait(1).to({scaleX:0.937,scaleY:0.937,x:293.8118,y:214.9458},0).wait(1).to({scaleX:0.9413,scaleY:0.9413,x:292.5469,y:214.1545},0).wait(1).to({scaleX:0.9457,scaleY:0.9457,x:291.2821,y:213.3632},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:290.0172,y:212.5719},0).wait(1).to({scaleX:0.9544,scaleY:0.9544,x:288.7524,y:211.7806},0).wait(1).to({scaleX:0.9587,scaleY:0.9587,x:287.4875,y:210.9893},0).wait(1).to({scaleX:0.9631,scaleY:0.9631,x:286.2227,y:210.198},0).wait(1).to({scaleX:0.9674,scaleY:0.9674,x:284.9578,y:209.4067},0).wait(1).to({scaleX:0.9717,scaleY:0.9717,x:283.693,y:208.6154},0).wait(1).to({scaleX:0.9761,scaleY:0.9761,x:282.4281,y:207.8241},0).wait(1).to({scaleX:0.9804,scaleY:0.9804,x:281.1632,y:207.0328},0).wait(1).to({scaleX:0.9848,scaleY:0.9848,x:279.8984,y:206.2415},0).wait(1).to({scaleX:0.9891,scaleY:0.9891,x:278.6335,y:205.4502},0).wait(1).to({scaleX:0.9935,scaleY:0.9935,x:277.3687,y:204.6589},0).wait(1).to({scaleX:0.9978,scaleY:0.9978,x:276.1038,y:203.8676},0).wait(1).to({scaleX:0.9985,scaleY:0.9985,x:275.9286,y:203.3424},0).wait(1).to({scaleX:0.9991,scaleY:0.9991,x:275.7534,y:202.8172},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,x:275.5781,y:202.292},0).wait(1).to({scaleX:1.0005,scaleY:1.0005,x:275.4029,y:201.7668},0).wait(1).to({scaleX:1.0011,scaleY:1.0011,x:275.2277,y:201.2416},0).wait(1).to({scaleX:1.0018,scaleY:1.0018,x:275.0524,y:200.7164},0).wait(1).to({scaleX:1.0024,scaleY:1.0024,x:274.8772,y:200.1912},0).wait(1).to({scaleX:1.0031,scaleY:1.0031,x:274.702,y:199.666},0).wait(1).to({scaleX:1,scaleY:1,x:275,y:200},0).wait(100).to({scaleX:0.9779,scaleY:0.9779,x:278.8893,y:204.725},0).wait(1).to({scaleX:0.9557,scaleY:0.9557,x:282.7786,y:209.45},0).wait(1).to({scaleX:0.9336,scaleY:0.9336,x:286.6679,y:214.175},0).wait(1).to({scaleX:0.9114,scaleY:0.9114,x:290.5571,y:218.9},0).wait(1).to({scaleX:0.8893,scaleY:0.8893,x:294.4464,y:223.625},0).wait(1).to({scaleX:0.8671,scaleY:0.8671,x:298.3357,y:228.35},0).wait(1).to({scaleX:0.845,scaleY:0.845,x:302.225,y:233.075},0).wait(1).to({scaleX:0.8228,scaleY:0.8228,x:306.1143,y:237.8},0).wait(1).to({scaleX:0.8007,scaleY:0.8007,x:310.0036,y:242.525},0).wait(1).to({scaleX:0.7786,scaleY:0.7786,x:313.8929,y:247.25},0).wait(1).to({scaleX:0.7564,scaleY:0.7564,x:317.7821,y:251.975},0).wait(1).to({scaleX:0.7343,scaleY:0.7343,x:321.6714,y:256.7},0).wait(1).to({scaleX:0.7121,scaleY:0.7121,x:325.5607,y:261.425},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:329.45,y:266.15},0).wait(1).to({scaleX:0.6783,scaleY:0.6783,x:331.95,y:268.45},0).wait(1).to({scaleX:0.6666,scaleY:0.6666,x:334.45,y:270.75},0).wait(1).to({scaleX:0.6549,scaleY:0.6549,x:336.95,y:273.05},0).wait(1).to({scaleX:0.6432,scaleY:0.6432,x:339.45,y:275.35},0).wait(1).to({scaleX:0.6315,scaleY:0.6315,x:341.95,y:277.65},0).wait(1).to({scaleX:0.6197,scaleY:0.6197,x:344.45,y:279.95},0).wait(1).to({scaleX:0.608,scaleY:0.608,x:346.95,y:282.25},0).wait(1).to({scaleX:0.5963,scaleY:0.5963,x:349.45,y:284.55},0).wait(1).to({scaleX:0.5846,scaleY:0.5846,x:351.95,y:286.85},0).wait(1).to({scaleX:0.5729,scaleY:0.5729,x:354.45,y:289.15},0).wait(1).to({scaleX:0.5612,scaleY:0.5612,x:356.95,y:291.45},0).wait(1).to({scaleX:0.5495,scaleY:0.5495,x:359.45,y:293.75},0).wait(1).to({scaleX:0.5378,scaleY:0.5378,x:361.95,y:296.05},0).wait(1).to({scaleX:0.5261,scaleY:0.5261,x:364.45,y:298.35},0).wait(1).to({scaleX:0.5144,scaleY:0.5144,x:366.95,y:300.65},0).wait(23).to({scaleX:0.5229,scaleY:0.5229,x:367.2875,y:298.8969},0).wait(1).to({scaleX:0.5313,scaleY:0.5313,x:367.625,y:297.1438},0).wait(1).to({scaleX:0.5398,scaleY:0.5398,x:367.9625,y:295.3906},0).wait(1).to({scaleX:0.5482,scaleY:0.5482,x:368.3,y:293.6375},0).wait(1).to({scaleX:0.5567,scaleY:0.5567,x:368.6375,y:291.8844},0).wait(1).to({scaleX:0.5652,scaleY:0.5652,x:368.975,y:290.1313},0).wait(1).to({scaleX:0.5736,scaleY:0.5736,x:369.3125,y:288.3781},0).wait(1).to({scaleX:0.5821,scaleY:0.5821,x:369.65,y:286.625},0).wait(1).to({scaleX:0.5906,scaleY:0.5906,x:369.9875,y:284.8719},0).wait(1).to({scaleX:0.599,scaleY:0.599,x:370.325,y:283.1188},0).wait(1).to({scaleX:0.6075,scaleY:0.6075,x:370.6625,y:281.3656},0).wait(1).to({scaleX:0.616,scaleY:0.616,x:371,y:279.6125},0).wait(1).to({scaleX:0.6244,scaleY:0.6244,x:371.3375,y:277.8594},0).wait(1).to({scaleX:0.6329,scaleY:0.6329,x:371.675,y:276.1063},0).wait(1).to({scaleX:0.6413,scaleY:0.6413,x:372.0125,y:274.3531},0).wait(1).to({scaleX:0.6498,scaleY:0.6498,x:372.35,y:272.6},0).wait(1).to({scaleX:0.6578,scaleY:0.6578,x:370.1667,y:271.0333},0).wait(1).to({scaleX:0.6659,scaleY:0.6659,x:367.9833,y:269.4667},0).wait(1).to({scaleX:0.6739,scaleY:0.6739,x:365.8,y:267.9},0).wait(1).to({scaleX:0.682,scaleY:0.682,x:363.6167,y:266.3333},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:361.4333,y:264.7667},0).wait(1).to({scaleX:0.698,scaleY:0.698,x:359.25,y:263.2},0).wait(1).to({scaleX:0.7061,scaleY:0.7061,x:357.0667,y:261.6333},0).wait(1).to({scaleX:0.7141,scaleY:0.7141,x:354.8833,y:260.0667},0).wait(1).to({scaleX:0.7221,scaleY:0.7221,x:352.7,y:258.5},0).wait(1).to({scaleX:0.7302,scaleY:0.7302,x:350.5167,y:256.9333},0).wait(1).to({scaleX:0.7382,scaleY:0.7382,x:348.3333,y:255.3667},0).wait(1).to({scaleX:0.7462,scaleY:0.7462,x:346.15,y:253.8},0).wait(1).to({scaleX:0.7543,scaleY:0.7543,x:343.9667,y:252.2333},0).wait(1).to({scaleX:0.7623,scaleY:0.7623,x:341.7833,y:250.6667},0).wait(1).to({scaleX:0.7704,scaleY:0.7704,x:339.6,y:249.1},0).wait(1).to({scaleX:0.7892,scaleY:0.7892,x:334.3708,y:244.9708},0).wait(1).to({scaleX:0.808,scaleY:0.808,x:329.1417,y:240.8417},0).wait(1).to({scaleX:0.8269,scaleY:0.8269,x:323.9125,y:236.7125},0).wait(1).to({scaleX:0.8457,scaleY:0.8457,x:318.6833,y:232.5833},0).wait(1).to({scaleX:0.8646,scaleY:0.8646,x:313.4542,y:228.4542},0).wait(1).to({scaleX:0.8834,scaleY:0.8834,x:308.225,y:224.325},0).wait(1).to({scaleX:0.9023,scaleY:0.9023,x:302.9958,y:220.1958},0).wait(1).to({scaleX:0.9211,scaleY:0.9211,x:297.7667,y:216.0667},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:292.5375,y:211.9375},0).wait(1).to({scaleX:0.9588,scaleY:0.9588,x:287.3083,y:207.8083},0).wait(1).to({scaleX:0.9776,scaleY:0.9776,x:282.0792,y:203.6792},0).wait(1).to({scaleX:0.9965,scaleY:0.9965,x:276.85,y:199.55},0).to({_off:true},1).wait(283));

	// leaf_obj_
	this.leaf = new lib.Scene_1_leaf();
	this.leaf.name = "leaf";
	this.leaf.setTransform(0.05,-0.05,1.383,1.383,0,0,0,154.1,113);
	this.leaf.depth = 0;
	this.leaf.isAttachedToCamera = 0
	this.leaf.isAttachedToMask = 0
	this.leaf.layerDepth = 0
	this.leaf.layerIndex = 0
	this.leaf.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.leaf).wait(72).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({regX:37.6,regY:297.7,x:37.6,y:297.7},0).wait(73).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},1).wait(377));

	// bird_obj_
	this.bird = new lib.Scene_1_bird();
	this.bird.name = "bird";
	this.bird.setTransform(0.05,-0.05,1.383,1.383,0,0,0,154.1,113);
	this.bird.depth = 0;
	this.bird.isAttachedToCamera = 0
	this.bird.isAttachedToMask = 0
	this.bird.layerDepth = 0
	this.bird.layerIndex = 1
	this.bird.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bird).wait(240).to({regX:2.9,regY:0.3,scaleX:1.0035,scaleY:1.0035,y:0},0).wait(1).to({regX:285.6,regY:154.6,scaleX:1,scaleY:1,x:282.8,y:154.35},0).wait(70).to({regX:0,regY:0,x:0,y:0},0).wait(45).to({regX:285.6,regY:154.6,x:285.6,y:154.6},0).wait(71).to({regX:0,regY:0,x:0,y:0},0).wait(26).to({regX:285.6,regY:154.6,x:285.6,y:154.6},0).wait(45).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},25).wait(1));

	// boy_obj_
	this.boy = new lib.Scene_1_boy();
	this.boy.name = "boy";
	this.boy.setTransform(448.6,300.2,1.383,1.383,0,0,0,478.4,330.1);
	this.boy.depth = 0;
	this.boy.isAttachedToCamera = 0
	this.boy.isAttachedToMask = 0
	this.boy.layerDepth = 0
	this.boy.layerIndex = 2
	this.boy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boy).wait(72).to({regX:448.6,regY:300.2,scaleX:1,scaleY:1},0).wait(452));

	// baloons_obj_
	this.baloons = new lib.Scene_1_baloons();
	this.baloons.name = "baloons";
	this.baloons.setTransform(354.8,210.3,1.383,1.383,0,0,0,410.6,265.1);
	this.baloons.depth = 0;
	this.baloons.isAttachedToCamera = 0
	this.baloons.isAttachedToMask = 0
	this.baloons.layerDepth = 0
	this.baloons.layerIndex = 3
	this.baloons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.baloons).wait(72).to({regX:354.9,regY:210.2,scaleX:1,scaleY:1,x:354.9,y:210.2},0).wait(1).to({regX:211.3,regY:148.3,x:211.3,y:148.3},0).wait(73).to({regX:354.9,regY:210.2,x:354.9,y:210.2},0).wait(210).to({regX:211.3,regY:148.3,x:211.3,y:148.3},0).wait(71).to({regX:354.9,regY:210.2,x:354.9,y:210.2},0).wait(26).to({regX:211.3,regY:148.3,x:211.3,y:148.3},0).wait(7).to({regX:354.9,regY:210.2,x:354.9,y:210.2},0).wait(64));

	// tree_obj_
	this.tree = new lib.Scene_1_tree();
	this.tree.name = "tree";
	this.tree.setTransform(112.25,237.95,1.383,1.383,0,0,0,235.2,285.1);
	this.tree.depth = 0;
	this.tree.isAttachedToCamera = 0
	this.tree.isAttachedToMask = 0
	this.tree.layerDepth = 0
	this.tree.layerIndex = 4
	this.tree.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tree).wait(524));

	// wind_obj_
	this.wind = new lib.Scene_1_wind();
	this.wind.name = "wind";
	this.wind.setTransform(0.05,-0.05,1.383,1.383,0,0,0,154.1,113);
	this.wind.depth = 0;
	this.wind.isAttachedToCamera = 0
	this.wind.isAttachedToMask = 0
	this.wind.layerDepth = 0
	this.wind.layerIndex = 5
	this.wind.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.wind).wait(47).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({regX:246.9,regY:119.9,x:246.9,y:119.9},0).wait(98).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},1).wait(377));

	// clouds_obj_
	this.clouds = new lib.Scene_1_clouds();
	this.clouds.name = "clouds";
	this.clouds.setTransform(263.7,57.9,1.383,1.383,0,0,0,344.7,154.9);
	this.clouds.depth = 0;
	this.clouds.isAttachedToCamera = 0
	this.clouds.isAttachedToMask = 0
	this.clouds.layerDepth = 0
	this.clouds.layerIndex = 6
	this.clouds.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.clouds).wait(524));

	// sky_obj_
	this.sky = new lib.Scene_1_sky();
	this.sky.name = "sky";
	this.sky.setTransform(276.25,145.45,1.383,1.383,0,0,0,353.8,218.2);
	this.sky.depth = 0;
	this.sky.isAttachedToCamera = 0
	this.sky.isAttachedToMask = 0
	this.sky.layerDepth = 0
	this.sky.layerIndex = 7
	this.sky.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(524));

	// grass_obj_
	this.grass = new lib.Scene_1_grass();
	this.grass.name = "grass";
	this.grass.setTransform(276.15,347.35,1.383,1.383,0,0,0,353.7,364.2);
	this.grass.depth = 0;
	this.grass.isAttachedToCamera = 0
	this.grass.isAttachedToMask = 0
	this.grass.layerDepth = 0
	this.grass.layerIndex = 8
	this.grass.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.grass).wait(524));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(55.8,175.8,657.3000000000001,309.09999999999997);
// library properties:
lib.properties = {
	id: '48CA681605953C4C83FCE1A38A197CA3',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/myAnimationTry_atlas_1.png?1650374919354", id:"myAnimationTry_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['48CA681605953C4C83FCE1A38A197CA3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;