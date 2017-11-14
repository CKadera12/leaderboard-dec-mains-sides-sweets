(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[870,42,88,41],[960,42,51,35],[978,0,34,21],[955,85,69,39],[730,0,138,90],[870,0,106,40],[870,85,83,36],[0,0,728,90]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.sixteenbeans = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sixteenblue = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sixteencandle = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sixteencup = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.sixteenmeat = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.sixteenpie = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.sixteenspinach = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.sixteentable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.sixteentable_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteentable();
	this.instance.parent = this;
	this.instance.setTransform(-364,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteentable_1, new cjs.Rectangle(-364,-45,728,90), null);


(lib.sixteenspinach_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenspinach();
	this.instance.parent = this;
	this.instance.setTransform(-41.5,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenspinach_1, new cjs.Rectangle(-41.5,-18,83,36), null);


(lib.sixteenpie_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenpie();
	this.instance.parent = this;
	this.instance.setTransform(-53,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenpie_1, new cjs.Rectangle(-53,-20,106,40), null);


(lib.sixteenmeat_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenmeat();
	this.instance.parent = this;
	this.instance.setTransform(-69,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenmeat_1, new cjs.Rectangle(-69,-45,138,90), null);


(lib.sixteencup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteencup();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteencup_1, new cjs.Rectangle(-34.5,-19.5,69,39), null);


(lib.sixteencandle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteencandle();
	this.instance.parent = this;
	this.instance.setTransform(-17,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteencandle_1, new cjs.Rectangle(-17,-10.5,34,21), null);


(lib.sixteenblue_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenblue();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenblue_1, new cjs.Rectangle(-25.5,-17.5,51,35), null);


(lib.sixteenbeans_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenbeans();
	this.instance.parent = this;
	this.instance.setTransform(-44,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenbeans_1, new cjs.Rectangle(-44,-20.5,88,41), null);


(lib.partyreadyrecipesuse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBCIgNgCIgEACIgEABIgDgBIgCgCQgEgDgEgKQgEgLAAgJQAAgEACgDQADgCADAAQAGAAAGAKIAFAHQADAFAHADQAGADAHAAQAIAAAFgEQAFgEAAgHQAAgLgUgKIgHgEQgUgKgHgHQgHgIAAgMQAAgRALgKQAMgLASAAIAIABIAJABIAGgCIAEgBQAGAAAGAKQAGAKAAALQAAAFgCACQgCADgDAAQgDAAgDgDQgDgCgEgGQgFgIgFgDQgFgDgHAAQgGAAgFAEQgEAEAAAHQAAAGAEAEQAFAFAPAHIABABQAkARAAAUQAAASgOAMQgNAMgVAAg");
	this.shape.setTransform(228.8,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGBMQgGgCgFgEQgFgEgCgHQgBgHAAgTIAAhDIgMAAIgEgBIgBgEIAAgCQABgEANgMIAFgEIAFgFQANgLAFAAIADABIABACIAAAYIAcAAQABAAABABQABAAAAAAQABAAAAAAQABAAAAAAIABAGIAAACIgBAGQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAIgZAAIgDABIAAADIAAA+QAAAQADAEQACAFAIAAQAEAAAGgCIAJgDQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABABAAAAQAAABAAAAQABABAAAAQAAAIgMAGQgKAHgOgBQgHAAgGgCg");
	this.shape_1.setTransform(219,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpAwQgSgTAAgbQAAgdATgTQASgTAcAAQAZAAAOAOQAPAOAAAXQAAAIgDADQgCACgJAAIgwAAQgFAAgCgCQgCgCAAgDQAAgEACgBQACgCAEAAIAaAAIAHgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgMgIgJQgIgIgMAAQgOAAgIANQgHANAAATQAAATAKAPQAKAOAQAAQAJAAAGgCQAHgCAGgEIAFgEQAGgFAEAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAADgDAFIgJAIQgLAJgKAEQgKAEgMAAQgbAAgSgSg");
	this.shape_2.setTransform(207.7,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpAwQgSgTAAgbQAAgdATgTQASgTAcAAQAZAAAOAOQAPAOAAAXQAAAIgDADQgCACgJAAIgwAAQgFAAgCgCQgCgCAAgDQAAgEACgBQACgCAEAAIAaAAIAHgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgMgIgJQgIgIgMAAQgOAAgIANQgHANAAATQAAATAKAPQAKAOAQAAQAJAAAGgCQAHgCAGgEIAFgEQAGgFAEAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAADgDAFIgJAIQgLAJgKAEQgKAEgMAAQgbAAgSgSg");
	this.shape_3.setTransform(194.3,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAHAOIgOgnQgIgSgGgDIgDgCQgIgDAAgFQAAgFAHgCQAGgCAUAAQARAAAGACQAGACAAAFIAAAEIgDADIgEACQgGACABADIACAIIAKAaIALAYQADAGACAAQABAAADgDIAGgMIANgfQAFgMAAgFIgBgEIgDgDIgEgBQgGgDAAgEQAAgFAGgCQAGgCAPAAQAOAAAFACQAGACAAAFQAAAFgHACIgEACQgGADgLAaIgDAHIgGALQgcBCgJAAQgIAAgXg0gAhKAHIgEgIIgIgVQgJgVgFgDIgEgCQgHgDAAgFQAAgFAGgCQAHgCAUAAQASAAAFACQAHACAAAFIgBAEIgCADIgFACQgEACAAADIACAKIAKAYIAKAXQAEAHACAAQADAAAEgIIAEgJIACgEQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAACACQACABAAAEQAAADgEAHQgNAdgGAKQgGAKgEAAQgJAAgZg7g");
	this.shape_4.setTransform(177.4,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBcQgOgEgJgEQgFgEgDgLQgDgLgBgOQAAgFACgEQADgDAEABQAGgBAGALIAEAGQAHAOAKAGQAJAHANAAQAOAAAKgIQAJgIAAgMQAAgSglgRIgEgBQgfgNgKgLQgKgMAAgRQAAgYARgOQAQgPAbAAIAPABIARAEIAGgDIAEgBQADAAADACQACACACAFQAFAHACAJQADAIAAAGQAAAFgCACQgDACgDAAQgGAAgHgJIgCgCQgHgKgJgEQgIgEgLgBQgNABgIAGQgIAHAAAMQAAAKAGAHQAIAGAaAMIAFACQAXAKAKAIQAHAHAEAIQADAJABAKQAAAagTAOQgSAPggAAQgPAAgOgDg");
	this.shape_5.setTransform(159.4,7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhNBNQgWgSAAgeQgBgQAIgNQAHgLARgMIAAgBQgFgFgDgHQgCgGAAgHQAAgTAOgNQAPgNAXAAQAPAAALAGQALAGgBAIQAAADgCACQgDACgDAAIgKgDQgJgEgHAAQgKAAgHAHQgFAHAAALQAAAFABADQACAEADADQADADAFADIAIACIACACIABABQABADgFAFQgFAGgEAAIgGgBIgJgEQgGAHgEAIQgEAJAAALQAAAYAQAQQAQAQAYAAQAVAAAMgLQAMgKAAgRQAAgLgEgHQgGgGgIAAQgJAAgGAFQgFAFAAAIIAAADIAAABIgBABIgDAAQgEAAgDgDQgCgEgBgGQABgTA3gZIAEgCQAOgGAHgIQAIgIAAgJQAAgGgDgDQgDgDgHAAIgFABIgEAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgCAAgDQAAgGAGgDQAHgEALAAQAOAAAHAHQAJAIgBANQAAAQgNANQgOANgcAKQALAEAHAKQAFAJAAANQAAAKgDAJQgEAJgHAIQgMAMgRAHQgSAGgVAAQgnAAgYgSg");
	this.shape_6.setTransform(134.9,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJBCIgNgCIgEACIgEABIgDgBIgCgCQgEgDgEgKQgEgLAAgJQAAgEACgDQADgCADAAQAGAAAGAKIAFAHQADAFAHADQAGADAHAAQAIAAAFgEQAFgEAAgHQAAgLgUgKIgHgEQgUgKgHgHQgHgIAAgMQAAgRALgKQAMgLASAAIAIABIAJABIAGgCIAEgBQAGAAAGAKQAGAKAAALQAAAFgCACQgCADgDAAQgDAAgDgDQgDgCgEgGQgFgIgFgDQgFgDgHAAQgGAAgFAEQgEAEAAAHQAAAGAEAEQAFAFAPAHIABABQAkARAAAUQAAASgOAMQgNAMgVAAg");
	this.shape_7.setTransform(110.9,10.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpAwQgSgTAAgbQAAgdATgTQASgTAcAAQAZAAAOAOQAPAOAAAXQAAAIgDADQgCACgJAAIgwAAQgFAAgCgCQgCgCAAgDQAAgEACgBQACgCAEAAIAaAAIAHgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgMgIgJQgIgIgMAAQgOAAgIANQgHANAAATQAAATAKAPQAKAOAQAAQAJAAAGgCQAHgCAGgEIAFgEQAGgFAEAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAADgDAFIgJAIQgLAJgKAEQgKAEgMAAQgbAAgSgSg");
	this.shape_8.setTransform(98.8,10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag3BNQgPgRAAgcQAAgfARgSQARgUAbAAIAJABQAEABACADQACADAAADQAAAHgIAAIgDAAIgDAAQgPAAgIALQgJALAAAUQAAAVAKAOQAJANAOAAQANAAAHgHQAHgIABgOIAAgjIAAg5QgBgJgBgEQgCgDgEgCIgEgBQgIgCAAgFQAAgDADgDQADgCAKgEIAOgEIAMgBQAEAAACACQACADAAAFIAAAHIgCBOIABA1QABAMADACIAIACQAHACAAAEQAAAGgTAGIgMAEIgKABQgDAAgCgCQgBgCgBgEIAAgHIAAgCIAAgBIgFADIgFAEQgIAGgGACQgIADgIAAQgXAAgPgRg");
	this.shape_9.setTransform(85,7.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWBbQgGgCAAgGQAAgEAGgCIAEgCQADgCABgEQABgEAAgKIAAgIIAAgLIAAgNIgBgZQgBgGgCgBIgHgCQgHgDAAgEQAAgDADgCQACgDAGgCIATgGIAMgCQADAAACACQABADABAFIAAAIIgBAGIAAAfIAAABIgBAfIABARQABAFADACIAFACQAGACAAAFQAAAFgGACQgGACgRAAQgTAAgGgCgAgPg/QgFgFAAgGQAAgHAGgGQAFgFAJAAQAHAAAGAFQAFAFABAHQAAAGgHAFQgGAFgHAAQgJAAgFgEg");
	this.shape_10.setTransform(73.3,7.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfBcQgOgEgJgEQgFgEgDgLQgEgLAAgOQABgFACgEQACgDAEABQAGgBAGALIADAGQAJAOAJAGQAJAHAOAAQANAAAJgIQAKgIAAgMQAAgSglgRIgEgBQgfgNgKgLQgKgMAAgRQAAgYARgOQARgPAbAAIAOABIARAEIAGgDIAEgBQADAAACACQADACADAFQAEAHACAJQADAIAAAGQAAAFgCACQgDACgDAAQgHAAgGgJIgCgCQgHgKgJgEQgIgEgLgBQgNABgIAGQgIAHAAAMQAAAKAHAHQAGAGAbAMIAFACQAXAKAKAIQAHAHAEAIQADAJAAAKQAAAagSAOQgSAPgfAAQgQAAgOgDg");
	this.shape_11.setTransform(62.4,7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNAnQgBgBAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIADgFIACgEIAIgOIACgJIAAgDIgEgCQgHgDgDgEQgDgFAAgHQAAgIAFgFQAGgGAHAAQAIAAAGAIQAFAHAAALQAAAJgEAIQgCAKgJANIgGAKQgDADgCAAQgEAAgCgBg");
	this.shape_12.setTransform(44.8,17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJBCIgNgCIgEACIgEABIgDgBIgCgCQgEgDgEgKQgEgLAAgJQAAgEACgDQADgCADAAQAGAAAGAKIAFAHQADAFAHADQAGADAHAAQAIAAAFgEQAFgEAAgHQAAgLgUgKIgHgEQgUgKgHgHQgHgIAAgMQAAgRALgKQAMgLASAAIAIABIAJABIAGgCIAEgBQAGAAAGAKQAGAKAAALQAAAFgCACQgCADgDAAQgDAAgDgDQgDgCgEgGQgFgIgFgDQgFgDgHAAQgGAAgFAEQgEAEAAAHQAAAGAEAEQAFAFAPAHIABABQAkARAAAUQAAASgOAMQgNAMgVAAg");
	this.shape_13.setTransform(35.4,10.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARA/QgGgCAAgFQAAgEAGgDIAFgCQADgCABgFQABgGAAgOQAAgngFgKQgFgLgOAAQgGAAgFAFQgGADgEAIQgDAFgBAKIgBAiQAAAMABAEQABAEADACIAEACQAHADAAAEQAAAFgGADQgGABgRAAQgUAAgGgCQgGgCAAgFQAAgFAGgCIADgCQAEgBABgFQABgEABgJIAAgJIgBgKIAAgNIAAgaQgBgGgEgBIgFgCQgIgDAAgEQAAgDACgCQADgDAFgBIASgGIAOgCQADAAACACQABABAAAFIAAAIIAAABIABABIABAAIABgBIADgDIACgCQAOgNAPAAQAJAAAJAEQAJAEAFAGQAGAIACAJQADAKAAAUIAAAQIAAAJIgBAHQABAJABAEQACADADACIACACQAHACAAAFQAAAFgGACQgGACgUAAQgRAAgGgCg");
	this.shape_14.setTransform(22.5,10.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWBbQgGgCAAgGQAAgEAGgCIADgCQAEgCABgEQABgEAAgKIAAgIIAAgLIAAgNIAAgZQgBgGgEgBIgFgCQgIgDAAgEQAAgDACgCQADgDAFgCIATgGIANgCQADAAACACQABADAAAFIAAAIIAAAGIgBAfIAAABIAAAfIABARQABAFADACIAEACQAHACAAAFQAAAFgGACQgGACgRAAQgTAAgGgCgAgPg/QgFgFAAgGQAAgHAGgGQAGgFAIAAQAIAAAFAFQAGAFAAAHQgBAGgFAFQgHAFgIAAQgHAAgGgEg");
	this.shape_15.setTransform(11.3,7.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWA7IgGgGIgFADQgPALgRAAQgSgBgMgKQgLgMAAgRQAAgUAPgLQAPgLAaAAQAGAAADACQADACAAAFQABAGgJAAQgMAAgIAGQgIAHAAAKQAAAKAHAHQAGAFAMABQALAAAGgGQAFgGAAgNIAAgvQAAgMgFgFQgFgHgIABQgGAAgGACQgFADgFAFIgCAEQgIAKgJAAQgFAAgDgEQgDgDAAgFQAAgMAPgJQAPgIAXAAQANAAAKAFQAKADAGAHQAEAFACAHQABAJAAASIAAAoIABALQACADACAAIAEACQAIACAAAEQAAAHgIAEQgJAGgLAAQgGAAgHgIg");
	this.shape_16.setTransform(1.1,10.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAvBaQgHgCAAgGQABgFAHgDIAGgDQACgCABgFQABgGAAgRIAAgHIAAg1IgBggIgQAqQglBhgIAAQgEAAgHgOQgIgNgSgpIgbhAIgBAyIAAAiIAAAYQABAGACABIAGADQAHADABAFQgBAFgGADQgHACgPAAQgOAAgGgCQgHgDABgFQAAgFAGgDQAIgDAAgDQACgGACghQACgfAAgpIAAgEIgBgRQgBgFgEgCIgFgCQgJgDAAgGQAAgFAGgCQAGgCASAAIASABIAGABQACACAJAWIAHASIADAJQAfBMACAAQADAAALgbQAMgbAPgsIADgIQAFgOAEgEQACgDAEgBIASgBQARAAAGACQAFACABAFQAAAGgIACIgEACQgDACgBAFQgCAFAAATIACBIIACAlQABADAGACIACABIAFADQAAABABAAQAAABAAAAQAAABAAABQABAAAAABQAAAGgIACQgHACgUAAQgUAAgHgCg");
	this.shape_17.setTransform(-17.3,7.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag6BUQgGgFAAgIQAAgHAEgEQAFgFAGAAIAGABIAEADIADAFQADAFADAAQAGAAAHgKQAGgJAAgKQAAgLgIgUIgCgDIgUgsIgMgYQgCgFgHgDIgBAAQgEgCgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgGAHgCQAGgCATAAQATAAAGACQAGACAAAFIgBAEIgCACIgFACQgFACAAADIADAJIAKAaIAKAXQADAGACAAQABAAADgGIAIgUIAKgZQADgJAAgDQAAgEgHgEQgHgEAAgDQAAgEAFgCQAGgCAPAAQAPAAAFACQAGACAAAFQAAAFgIABIgFACQgHAEgIAWIgEAKIgQAoQgVA0gNAQQgNAQgTAAQgJAAgGgFg");
	this.shape_18.setTransform(-42.1,12.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAWA7IgGgGIgFADQgPALgRAAQgSgBgMgKQgLgMAAgRQAAgUAPgLQAPgLAaAAQAGAAADACQADACAAAFQABAGgJAAQgMAAgIAGQgIAHAAAKQAAAKAHAHQAGAFAMABQALAAAGgGQAFgGAAgNIAAgvQAAgMgFgFQgFgHgIABQgGAAgGACQgFADgFAFIgCAEQgIAKgJAAQgFAAgDgEQgDgDAAgFQAAgMAPgJQAPgIAXAAQANAAAKAFQAKADAGAHQAEAFACAHQABAJAAASIAAAoIABALQACADACAAIAEACQAIACAAAEQAAAHgIAEQgJAGgLAAQgGAAgHgIg");
	this.shape_19.setTransform(-55.1,10.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag3BNQgPgRAAgcQAAgfARgSQARgUAcAAIAIABQAEABACADQACADAAADQAAAHgIAAIgDAAIgDAAQgPAAgIALQgJALAAAUQAAAVAKAOQAJANAOAAQANAAAHgHQAHgIAAgOIAAgjIAAg5QABgJgCgEQgCgDgFgCIgDgBQgIgCAAgFQAAgDADgDQADgCAKgEIAOgEIAMgBQAEAAACACQACADAAAFIAAAHIgCBOIABA1QABAMADACIAIACQAHACAAAEQAAAGgTAGIgMAEIgKABQgEAAgBgCQgBgCgBgEIAAgHIAAgCIgBgBIgDADIgGAEQgIAGgGACQgIADgHAAQgYAAgPgRg");
	this.shape_20.setTransform(-69.2,7.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVBbQgHgCAAgGQAAgEAGgCIADgCQAEgCABgEQACgEAAgKIAAgIIgBgLIAAgNIAAgZQgCgGgDgBIgGgCQgHgDAAgEQAAgDADgCQACgDAGgCIATgGIAMgCQADAAACACQACADgBAFIAAAIIAAAGIgBAfIAAABIAAAfIABARQABAFADACIAEACQAHACAAAFQAAAFgGACQgHACgQAAQgSAAgGgCgAgPg/QgFgFAAgGQAAgHAGgGQAFgFAJAAQAIAAAFAFQAGAFgBAHQAAAGgFAFQgGAFgIAAQgJAAgFgEg");
	this.shape_21.setTransform(-80.8,7.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVBbQgGgCAAgFQAAgEAFgDIAHgDQACgCABgIIABgZIAAgUIgBgXIAAgKQAAgggBgJQgBgJgCgCIgIgCQgIgDAAgEQAAgDACgCQADgDAJgDIARgEIAMgCQAEAAABACQACACAAAGIAAAKQgCAtAAAuIABArQABAJACADIAHADQAGADAAAFQAAAEgGADQgHABgQAAQgTAAgGgCg");
	this.shape_22.setTransform(-88.1,7.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgtAwQgTgTABgdQgBgbAUgTQASgTAcAAQAbAAASASQARARAAAcQAAAdgTAUQgSATgbAAQgcAAgRgSgAgYglQgHAKAAARQAAAZALARQAKAQAOAAQANAAAIgKQAIgLAAgRQAAgYgLgQQgLgRgOAAQgNAAgIAKg");
	this.shape_23.setTransform(-98.6,10.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAcBaQgHgCAAgGQAAgFAIgDIAGgDQACgCABgIIABgdIgBgSIgBgFQgBgDgGgBQgGgBgYAAIgaABQgIABgBACIgCAEIAAAJIAAALIABAdQAAAIACACIAGADQAIADgBAFQAAAGgGACQgHACgUAAQgUAAgHgCQgIgCABgGQgBgFAJgDIAFgDQACgCACgQIABg2IgBgvQgBgTgCgCQgBgCgGgDQgIgDABgFQAAgFAFgCQAGgCAXAAQAWAAAGACQAGACgBAFQABAFgIADIgGADQgCACgBAIIAAAlQgBAFAFACQAFACASAAIAKAAIAbgBQAIgBACgBIABgDIABgFIAAgGIgBgfQgBgGgCgCIgGgDQgIgDAAgFQAAgFAHgCQAFgCAWAAQAXAAAGACQAFACABAFQgBAGgHACIgGADQgDACgBARIgBAzIABAxQABATACADQABACAHACQAGADABAFQAAAGgIACQgHACgUAAQgUAAgHgCg");
	this.shape_24.setTransform(-115.3,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.partyreadyrecipesuse, new cjs.Rectangle(-126.9,-9.7,363.5,34.2), null);


(lib.MAKEDELICIOUSMEMORIES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAsQgKgEgHgGIgBgCIAAgCIABgDIADgDIADgCIADgCQABAAAAABQABAAAAAAQABAAAAABQABAAABABIAFADIAIAEQAFACAFAAIAGgBIAIgCIAFgEQACgDABgEQgBgEgCgCQgCgCgFgBIgJgCIgKgBIgLgDQgFgBgEgCQgEgDgDgFQgCgEgBgHQAAgHAFgFQADgGAGgDQAFgDAGgCQAIgBAEAAIAJAAIAJACIAJAEQAEACADADIABABIAAADIgBADIgCACIgEACIgEACIgCgBQgFgEgFgCQgGgDgGAAIgFABIgHACQgDABgCACQgCADAAAEQAAAFAFACQAEACAHABIAMABQAIABAHADQAGACAEAEQAFAGAAAJQAAAIgEAGQgDAGgHAEQgFADgHACIgNABQgKAAgKgDg");
	this.shape.setTransform(90.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAtIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIADgBIA/AAIACACIABADIAAADIAAADIgBADIgCADIgvAAIgDABIgBACIAAANIABADIADABIAeAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIABAEIAAADIAAACQAAAEgDABIgdAAIgDABIgCADIAAAPIABACIADABIAuAAQADADAAADIAAACIAAAFIgBACIgCABg");
	this.shape_1.setTransform(82.4,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAvIgCAAQgEAAgBgDIAAhYIACgCIADAAIACAAIAEAAQADAAABADIAABWIgCADIgDABg");
	this.shape_2.setTransform(75.6,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXAuIgCgBIgCgBIgBgBIgQgYIgCgDIgEAAIgLAAIgEAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAAAWQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgDACIgEAAIgDAAIgEgBQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIAAhTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIACgBIAmAAQAHAAAGACQAGADAFAEQAEAEACAFQADAGAAAIQAAAHgDAFIgGAHIgHAEQgDACAAADIAAACIAEAFIAFAHIAFAHIACAFQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgDACIgDACIgDAAgAgSgdQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAAAVQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAIAEABIASAAIAHgBIAFgCQADgCABgDQABgCAAgEQAAgIgFgEQgCgCgDgBIgHAAIgSAAIgEAAg");
	this.shape_3.setTransform(69.3,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAuIgJgDIgJgDIgHgGQgGgHgEgJIgDgJIgBgJIABgJIADgJQAEgJAGgGIAHgFIAJgFIAJgDIAJAAIAKAAIAJADQAJAEAHAGQAGAGAEAJQAEAJAAAJIgBAJIgDAJQgEAJgGAHQgHAGgJADIgJADIgKABIgJgBgAgLgcQgFADgFAEQgEAEgDAGQgCAFAAAGQAAAGACAHQADAFAEAFQAFAEAFACQAGADAFAAQAGAAAGgDQAFgCAFgEIAHgKQACgHAAgGQAAgGgCgFIgHgKQgFgEgFgDQgGgCgGAAQgFAAgGACg");
	this.shape_4.setTransform(58.9,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfAuIgFgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAgpIgBgBIgCgBQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABgBAAIgOAWQgCADgCAAIgCgBIgCgCIgNgWQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBgBAAIgCACIAAABIAAAoQgCADgDABIgFABIgDAAIgCgBIgBgBIgBgDIAAhSQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIAGAAIACAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAWAkQACADABAAIADgBIACgCIAWgkQACgDAFAAIAEAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABIAABTIgBADIgDACIgEAAg");
	this.shape_5.setTransform(48.4,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeAtIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIADgBIA/AAIACACIABADIAAADIAAADIgBADIgCADIgvAAIgDABIgBACIAAANIABADIADABIAeAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIABAEIAAADIAAACQAAAEgDABIgdAAIgDABIgCADIAAAPIABACIADABIAuAAQADADAAADIAAACIAAAFIgBACIgCABg");
	this.shape_6.setTransform(39.3,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeAuIgDgBQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAgpIgBgBIgCgBQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAIgPAWQgCADgCAAIgDgBIgCgCIgMgWQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBgBAAIgCACIgBABIAAAoQgBADgCABIgGABIgCAAIgDgBIgCgBIgBgDIAAhSQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIAFAAIADAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAVAkQACADADAAIACgBIACgCIAWgkQACgDAFAAIAEAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABTIgBADIgCACIgEAAg");
	this.shape_7.setTransform(29.4,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAsQgJgEgHgGIgCgCIAAgCIABgDIADgDIADgCIADgCQAAAAABABQABAAAAAAQABAAAAABQABAAAAABIAHADIAHAEQAEACAGAAIAGgBIAIgCIAFgEQADgDgBgEQABgEgDgCQgDgCgEgBIgKgCIgJgBIgKgDQgGgBgEgCQgEgDgDgFQgCgEAAgHQAAgHADgFQAEgGAFgDQAGgDAGgCQAHgBAGAAIAIAAIAKACIAIAEQAEACADADIABABIAAADIgBADIgDACIgDACIgEACIgCgBQgFgEgFgCQgGgDgGAAIgFABIgHACQgDABgBACQgCADAAAEQAAAFADACQAFACAGABIAOABQAHABAHADQAGACAFAEQAEAGAAAJQAAAIgDAGQgFAGgFAEQgGADgHACIgNABQgKAAgKgDg");
	this.shape_8.setTransform(16,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAsQgHgDgGgFQgFgFgDgHIgCgHIgBgJIAAgYIAAgZIABgDIADgBIAEgBIADAAIADABQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAIAAAvIABAKQABAFADADQADAEAFACQAEACAFAAQAFAAAFgCQAEgCADgEQADgDACgFIACgKIAAguQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAEgBIADAAIADAAIAEACIABADIAAAxIgBAJIgDAHQgDAHgGAFQgFAFgHADQgIADgIAAQgHAAgIgDg");
	this.shape_9.setTransform(6.5,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJAuIgJgDIgJgDIgHgGQgGgHgEgJIgDgJIgBgJIABgJIADgJQAEgJAGgGIAHgFIAJgFIAJgDIAJAAIAKAAIAJADQAJAEAHAGQAGAGAEAJQAEAJAAAJIgBAJIgDAJQgEAJgGAHQgHAGgJADIgJADIgKABIgJgBgAgLgcQgFADgFAEQgEAEgDAGQgCAFAAAGQAAAGACAHQADAFAEAFQAFAEAFACQAGADAFAAQAGAAAGgDQAFgCAFgEIAHgKQACgHAAgGQAAgGgCgFIgHgKQgFgEgFgDQgGgCgGAAQgFAAgGACg");
	this.shape_10.setTransform(-4,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAvIgCAAQgEAAgBgDIAAhYIACgCIADAAIACAAIAEAAQADAAABADIAABWIgCADIgDABg");
	this.shape_11.setTransform(-11.3,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAuIgJgDIgIgDIgIgGIgGgHIgEgIQgEgJgBgKQABgKAEgIIAEgIIAGgHQAGgHAKgDQAEgCAFgBIAJAAIAJAAQAGACAFACIAJAFIAIAHIAAACQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAIgEADIgDACQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgEgCIgEgFIgIgDQgEgCgGAAQgGAAgFACQgGADgFAEQgEAEgCAGQgDAGAAAFQAAAHADAFQACAGAEAEQAFAEAGADQAFADAGAAQAGAAAGgEQAHgCAFgGIADAAIACABIAEACIADADIABADIAAACIgIAHIgJAFIgKADIgKABIgJgBg");
	this.shape_12.setTransform(-18.2,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAvIgCAAQgEAAgBgDIAAhYIACgCIADAAIACAAIAEAAQADAAABADIAABWIgCADIgDABg");
	this.shape_13.setTransform(-25,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAuIgDgBIgBgDIAAhTIABgDIADgBIADAAIADAAIAEAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABIAABAIABADIABACQACACAEAAIApAAIACACIACACIABACIAAADIgBAFQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAg");
	this.shape_14.setTransform(-30.8,-0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAtIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIADgBIA/AAIACACIABADIAAADIAAADIgBADIgCADIgvAAIgDABIgBACIAAANIABADIADABIAeAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIABAEIAAADIAAACQAAAEgDABIgdAAIgDABIgCADIAAAPIABACIADABIAuAAQADADAAADIAAACIAAAFIgBACIgCABg");
	this.shape_15.setTransform(-39.5,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmAtIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAhSQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIADgBIAiAAIAIABIAKADQAIADAHAGQAHAGAEAIIADAJIABAJQAAAKgEAJIgFAHIgGAHIgHAFIgJAFQgJACgIAAgAgYgbQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIAAAyQAAAAAAAAQAAABABAAQAAABAAAAQAAAAABAAIADABIARAAQAFAAAGgCQAGgCAEgDQAFgEACgFQADgGAAgHQAAgFgDgGQgCgFgFgEQgEgEgGgDQgGgBgFAAIgRAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAg");
	this.shape_16.setTransform(-49.2,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeAtIgDgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIADgBIA/AAIACACIABADIAAADIAAADIgBADIgCADIgvAAIgDABIgBACIAAANIABADIADABIAeAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIABAEIAAADIAAACQAAAEgDABIgdAAIgDABIgCADIAAAPIABACIADABIAuAAQADADAAADIAAACIAAAFIgBACIgCABg");
	this.shape_17.setTransform(-62.7,-0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVAvIgDgCIgXgiQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAgBAAIgDgBIgFABQgBAAAAABQgBAAAAAAQAAABAAABQAAAAAAABIAAAcIgBADIgEACIgEAAIgDABQgFAAAAgGIAAhUIACgCIADgCIADAAIADAAQAEAAACAEIAAAcQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAIAFABQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAZgeIACgBIACAAIADAAIADACIADACIABADIgBACIgWAaIgBADIAAACIAAACIABACIAcAnIABABIAAABIgBADIgDACIgEABIgDABg");
	this.shape_18.setTransform(-71.5,-0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAkAuIgDAAIgEAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIgFgNIgCgCIgDAAIgeAAIAAAAIgCABIgBABIgBAAIgFANIgBABIgDABIgDABIgCAAIgDAAIgDAAIgCgBIgBgCIAlhVIACgDIADAAIADAAQABAAABABQAAAAABAAQAAAAAAABQABAAAAABIAkBUIAAABIgBACIgDABgAAAgNIgBABIgBACIgCAEIgCAGIgCAEIgCAEIgBACIABACIACABIARAAIACgBIABgCIgBgEIgDgGIgEgIIgCgFIgCgBg");
	this.shape_19.setTransform(-80.8,-0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAeAuIgDgBQgBAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAgpIgBgBIgCgBQAAAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAIgPAWQgCADgCAAIgDgBIgCgCIgMgWQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBgBAAIgCACIgBABIAAAoQgBADgCABIgGABIgCAAIgDgBIgCgBIgBgDIAAhSQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIAFAAIADAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAVAkQACADADAAIACgBIACgCIAWgkQACgDAFAAIAEAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABTIgBADIgCACIgEAAg");
	this.shape_20.setTransform(-90.3,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MAKEDELICIOUSMEMORIES, new cjs.Rectangle(-97.4,-8.6,194.9,17.4), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("Eg3igGjMBvFAAAIAANHMhvFAAAg");
	this.shape.setTransform(0,0,1.023,1.06);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-364.5,-45.5,729,91), null);


(lib.getinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiA1IAAhpIBDAAIAAANIg0AAIAAAgIAxAAIAAALIgxAAIAAAkIA2AAIAAANg");
	this.shape.setTransform(45.5,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUA1IgagvIgQAAIAAAvIgPAAIAAhpIAiAAQAHAAAHACQAHABAFADQAFAEADAFQADAGAAAIQAAAMgHAHIgIAFQgFACgGABIAeAxgAgWgFIARAAIAJgBIAIgEQADgCACgDQACgDAAgFQAAgEgCgEQgCgDgDgCIgIgDIgIgBIgSAAg");
	this.shape_1.setTransform(36.6,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLA3IgLgDQgKgEgHgIQgIgHgEgKQgEgLAAgMQAAgLAEgLQAEgKAIgHQAHgIAKgEIALgDIALgBQAMAAAKAEQAGACAEADIAIAHQAIAHAEAKQAEALAAALQAAAMgEALQgEAKgIAHQgEAEgEADQgEADgGACQgKAEgMAAIgLgBgAgQgmQgHADgFAGQgGAGgCAIQgDAHAAAIQAAAJADAIQACAHAGAGQAFAGAHADQAIAEAIAAQAJAAAIgEQAHgDAFgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgGQgFgGgHgDQgIgEgJAAQgIAAgIAEg");
	this.shape_2.setTransform(25.2,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA1IAAhcIghAAIAAgNIBSAAIAAANIgiAAIAABcg");
	this.shape_3.setTransform(14.6,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUA0QgJgEgGgHIAMgKQAEAFAFAEQAHADAHAAIAHgBQADgBADgCQAEgCACgEQACgDAAgFQAAgFgCgDQgCgDgEgCIgIgEIgJgEIgKgDQgEgBgFgEQgDgDgDgFQgCgFAAgHQAAgIADgGQADgGAFgDQAGgEAGgCQAHgCAFAAIAJABIAIADQAJADAEAFIgKALQgDgFgGgCQgEgDgIAAIgGABIgHADIgEAFQgCAEAAAEQAAAEACADIAEAFIAHAEIAHADIALADIAKAFQAFADADAGQADAFAAAIQAAAIgEAGQgCAGgGAEQgEAEgIACQgGACgGAAQgKAAgKgEg");
	this.shape_4.setTransform(6,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAkA1IgLgaIgxAAIgLAaIgRAAIAvhpIAMAAIAuBpgAAUAOIgUgxIgTAxIAnAAg");
	this.shape_5.setTransform(-7.3,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguA1IAAhpIAlAAQAJAAAKADQAKADAIAGQAJAGAFALIAEALIABAMIgBANIgEAKIgGAJIgIAIQgIAGgKAEQgNADgGAAgAgfAoIATAAQAJAAAHgCQAJgEAFgEQAGgGAEgHIACgIIABgJIgBgJIgCgHQgEgIgGgFQgFgFgJgDQgHgDgJAAIgTAAg");
	this.shape_6.setTransform(-21.8,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaA1Ig3hVIAABVIgPAAIAAhpIATAAIA3BTIAAAAIAAhTIAPAAIAABpg");
	this.shape_7.setTransform(-33.5,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGA1IAAhpIANAAIAABpg");
	this.shape_8.setTransform(-41.3,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggA1IAAhpIBBAAIAAANIgyAAIAAAhIAvAAIAAALIgvAAIAAAwg");
	this.shape_9.setTransform(-47.2,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspired, new cjs.Rectangle(-53.8,-8.2,105.8,22.4), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AizEbQgWAAgIgFQgIgFAAgOQAAgKAGgGQAGgHAJAAIARAAQAKAAAEgLQADgJAAgZIAAl7QAAgZgDgIQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QAEAQgGAJQgFAJgMAAQgOAAgHgOIgJgSQgGgPgPgFQgMgEggAAIhQAAQghAAgJAIQgIAJAAAiIAABlQAAAZAIAFQAFAEAdAAIAnAAQAaAAAIgEQAHgDACgNIABgFQADgVAUAAQANAAAFAIQAFAJAAAWIAABHQAAAWgFAJQgFAJgNAAQgTAAgEgWIgBgGQgCgNgHgDQgIgEgbAAIgmAAQgdAAgFAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAQAGAhAAIBVgBQAvAAAPgfIAHgQQAJgQAOAAQAMAAAFAJQAFAJgDAQIgNBCQgFAVgZAAg");
	this.shape.setTransform(21.9,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,43.9,56.7), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgNBlQgFgDAAgHIAAiTQAAgLgLABIgyAAQgLgBAAgOQAAgUAKgBICfAAQAMABAAARQAAARgLABIgyAAQgLAAAAAKIAACTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape.setTransform(9.1,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,18.2,20.5), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAEQACAEAAAJQAAASgMAAIh5AAQgIAAAAAKIAAAcQAAAIAKABIBFAAQALgBAAATQAAAQgKAAIhFAAQgFAAgDADQgDADAAAFIAAAeQAAAKAKAAIB3AAQALAAAAASQAAASgLAAg");
	this.shape.setTransform(9,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,18,20.4), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ah+EYQgKgJgIgYIhIjYQgCgFgEAAQgEAAgCAFIhNDYIgJAWQgDAGgFAFQgMAJgRAAQgTAAgKgJQgLgJgJgYIimm+QgKgagHgHQgHgHgUgFQgOgCgFgFQgFgFAAgKQAAgWAdAAICvAAQAcAAAAAWQAAALgHAFQgHAFgRABQgOACgGAFQgGAFAAAKQAAAKADAJIBzFGQACAFAFAAQAEAAACgGIA/i2QAIgagHgWIgehbIgHgTQgEgJgHgFQgGgEgPgEQgNgDgGgFQgFgFAAgKQAAgZAeAAICmAAQAdAAAAAWQAAAUgcADQgQACgGAFQgGAFAAALQAAALAIAZIBgEsQACAGAEgBQAEAAABgGIBek6QADgMAAgIQAAgSgdgEQgbgCAAgWQAAgMAIgGQAHgFARAAIElAAQAVAAAJAFQAIAFAAAOQAAAKgGAHQgGAHgJAAIgRAAQgLAAgFALQgCAKAAAXIAABuQAAAdAFAHQAGAGAYAAIBzAAQAXAAAHgIQADgDAAgHIABgeIAAhoQAAgbgCgGQgCgFgFgDQgEgDgFAAIgQAAQgKAAgGgHQgHgHAAgKQAAgOAJgFQAIgFAWAAICaAAQAWAAAJAFQAJAFAAAOQAAAKgHAHQgGAHgJAAIgSAAQgEAAgEADQgFAEgBAEQgDAHAAAaIAAF8QAAAaADAIQABAFAFADQAEACAEAAIASAAQAJAAAGAHQAHAHAAAKQAAAOgJAFQgIAGgXAAIiaAAQgVAAgJgGQgIgFAAgOQAAgJAGgIQAHgHAJAAIAQAAQALAAAFgKQACgHAAgbIAAh8IgBgdQAAgHgDgEQgGgHgYAAIhzAAQgYAAgGAGQgFAHAAAdIAACBQAAAXACALQAEAKAMAAIARAAQAIAAAGAIQAGAHAAAKQAAANgIAGQgIAFgVAAIiaAAQgWAAgIgGQgJgFAAgOQAAgJAGgIQAHgHAJAAIARAAQAEAAAFgCQAEgDABgFQADgHAAgbIAAl8QAAgxgjAFQgMABgHAJQgIAJgGAWIiHGzQgJAfgKALQgKALgUAAQgTAAgLgJg");
	this.shape.setTransform(63.5,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,127,57.9), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhTEbIgTgEQgIAAgKAJQgKAHgJABQgLAAgGgHQgGgGgEgPIgVhWQgCgFAAgMQAAgKAIgJQAHgHAMAAQANAAAIAMIAMAQQAWAgAiASQAiARAkABQAogBAagUQAZgVAAgjQAAgggbgfQgZgbhAguQg/grgPgMQgSgOgTgWQggglAAg0QAAg+ArglQArglBGgBQAnABAhAHIAWAFIALACQAIAAAMgHQAJgIAJAAQASAAAGAYIAUBcQACAEAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgOQgOgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAPAAAaQAAAXAJANQANASAaAUIApAfQAzAjAWARQAXATAUATQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgxAAgngNg");
	this.shape.setTransform(19,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,38.1,59.1), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABaBkQgGgCAAgFIgOhsQgCgGgFAAQgDAAgDAEIgxA+QgEAFgFAAQgGAAgFgGIgtg8QgCgDgEAAQgFAAgBAIIgOBnQgCALgTAAQgGAAgFgDQgGgCAAgGIAViwQACgKADgDQAEgEALAAQAKAAAFAJIA4BOQAGAJADgBQAFAAAGgIIA7hQQAFgIAKAAQAHAAADADQAEACACAJIAUC0QABALgXAAQgFAAgEgDg");
	this.shape.setTransform(12.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,24.3,20.6), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AA6BlQgFgBgEgFIhAhFQgKgJgUAAQgFAAgEAEQgDAFAAAGIAAA7QAAAIgGACQgFACgKAAQgRAAAAgMIAAi0QAAgIAFgCQAFgDAKAAQASAAAAAMIAAA3QAAANAJAAQALAAAGgCQADgCAFgEIBJhDQAMgLANALQAMAMgKAJIhAA7QgJAHAJAKIBOBVQAIAJgGAFQgEAEgOAAQgMAAgFgCg");
	this.shape.setTransform(9.6,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,19.1,20.7), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_3, null, null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ai5EbQgWAAgIgFQgJgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAFgLQACgKAAgXIAAl7QAAgYgDgJQgBgFgFgEQgEgEgEAAIgRAAQgIAAgHgHQgHgHAAgJQAAgOAJgGQAJgFAVAAIFvAAQAZAAAFAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOIgIgSQgGgPgPgFQgMgEggAAIhtAAQgiAAgIAIQgJAJAAAiIAABlQAAAZAIAFQAEAEAeAAIBGAAQAaAAAIgEQAHgDACgNIABgFQADgVATAAQAOAAAFAIQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgSAAgEgWIgBgGQgCgNgHgDQgIgDgbAAIhFAAQgdAAgFADQgIAFAAAaIAACKQAAAbACAGQADAFAFADQAFADAFAAIAUAAQAJAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape.setTransform(22.5,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,45.1,56.7), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgSQAngUAmgNQAJgEgCgJQgCgKgNADQgVAEgZAAQgggBgYgJQgXgJgcgSQgggUgKgEQgugWg6AZQgWAJgLgLQgMgLAGgXQAXhVBDg4QBKg9BQAXQA0APAlA0QAnA2AeALQATAGAAAPQAAAOgRADQgbAFgjgQQgfgPgegbQgfgdgvgCQgrgCgcAVQgLAJADAGQAEAHALgCQAfgHAdAGQAoAHAbAgQAkAoAuAPQA4ASAugeIAZgXQAOgMALADQAQAEgCAUQgBAUgTAZQgiAsg9AeQhFAjgeAeQgwAvgTA9QgQAzAABRQAABxArBAQAqBBBKAAQBJAAArhCQAqhCAAhwQAAhfgXg4QgZg6g2gUQgbgLAFgTQAFgUAigDQA2gHA8AtQBoBMAACkQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape.setTransform(33.5,46.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,67.1,93.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AihEbQgWAAgIgFQgIgFAAgOQAAgKAGgGQAGgHAJAAIARAAQAEAAAEgDQAFgEABgEQADgJAAgXIAAl+QAAgYgDgKQgBgEgFgEQgEgDgEAAIgRAAQgKAAgGgGQgHgHAAgKQAAgOAJgGQAJgFAWAAICdAAQAWAAAIAFQAJAGAAAOQAAAKgGAHQgHAGgJAAIgRAAQgOAAgEALQgDAGAAAcIAAFjQAAAcACAKQACAJAIAFQAGAEALACQAMABAaAAIAvAAQAwAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgEAQIgNBCQgFAVgZAAg");
	this.shape.setTransform(20.2,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,40.4,56.7), null);


(lib.CompoundPath_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AjmEaQgWgDgGgEQgKgFAAgNQAAgKAGgHQAFgHAKAAIARAAQAKAAAEgLQADgJAAgYIAAl5QAAgZgDgIQgEgMgKAAIgRAAQgKAAgFgGQgGgIAAgJQAAgNAKgFQAGgEAWgDQBdgNBrAAQBOAAA1ASQA0ASAnAoQAmAlATA4QAUA5AABEQAABNgZA9QgZA+gwAlQgkAegxAOQgxAOhDAAQh0AAhUgNgAgvjrQgdAEgIAMQgLAMABAhIAAFjQgBAgAVAMQANAHAnACQBNAFArhAQAsg/gBhxQAAhvgqg/Qgqg+hMAAIgcACg");
	this.shape.setTransform(26.9,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5, new cjs.Rectangle(0,0,53.8,59), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgeAfQgNgMAAgTQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAATgNAMQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAJgKAAgQQAAgOgJgKQgKgKgPAAQgOAAgKAKg");
	this.shape.setTransform(4.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,8.8,8.9), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAvBeIgggxQgGgJgJAAIguAAQgEAAgDADQgDADAAAEIAAAxQAAAGgKABIgPABQgNAAAAgMIABi5QAAgIAIAAIBrAAQAgAAAUATQAVATgBAfQABAYgPAPIgWATQgIAGAEAGIAiAzQAFAHgFAEQgFAEgOAAQgRAAgFgJgAg4g4IAAAuQAAAFAEAEQAEABAFAAIA+AAQAQAAALgHQAMgJAAgRQAAgPgMgKQgLgIgQAAIg+AAQgNAAAAAKg");
	this.shape.setTransform(9.5,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,18.9,20.6), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAJAaIgNgVIgGAAIAAAVIgJAAIAAgzIATAAQARAAAAAQQABAMgNACIAOAVgAgKgCIAHAAQAMAAAAgHQAAgIgKAAIgJAAg");
	this.shape.setTransform(2,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(0,0,3.9,5.2), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABnDxQhFg1gYhfIgBgDQgCgKgHgBQgGABgCAKIgBACQgYBfhHA2QhHA2hoAAQh/AAhLhQQhMhQAAiGQAAiGBMhRQBLhQCAAAQBpAABHA3QBHA2AXBgQADALAFgBQAHAAADgLIAAAAQAXhgBGg1QBHg3BoAAQB/AABMBPQBNBQAACFQAACIhNBQQhMBRiBAAQhmAAhHg2gACmiqQgoA/AABuQAABsAoA9QApA+BIAAQBGAAAog/QApg/ABhrQAAhrgqhAQgqg/hGAAQhGAAgpA/gAmFiqQgpA/AABuQAABsApA9QAoA+BIAAQBGAAApg/QApg/AAhrQAAhrgqhAQgpg/hGAAQhGAAgpA/g");
	this.shape.setTransform(55.8,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,111.5,59), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABCBfIgNgbQgEgGgGAAIhTAAQgJAAgEAMIgMAVQgDAIgSAAQgWAAAFgMIBZi4QAFgKAKAAQALABAFAIIBYC7QACAGgJADQgGABgIAAQgPABgDgJgAgEgdIgYAyQgCADACACQABADAEAAIAwAAQABAAAAAAQABAAABgBQAAAAABAAQAAgBABAAQACgCgCgDIgYgzQgCgEgDABQgDAAgCADg");
	this.shape.setTransform(10.5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,21,20.7), null);


(lib.ctarectanglevideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("AnaCbQhBAAgtgtQgtgtAAhBIAAAAQAAhAAtgtQAtgtBBAAIO1AAQBBAAAtAtQAtAtAABAIAAAAQAABBgtAtQgtAthBAAg");
	this.shape.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectanglevideo, new cjs.Rectangle(-63,-12.5,126.1,31.1), null);


(lib.ctarectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AnaCbQhBAAgtgtQgtgtAAhBIAAAAQAAhAAtgtQAtgtBBAAIO1AAQBBAAAtAtQAtAtAABAIAAAAQAABBgtAtQgtAthBAAg");
	this.shape.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectangle, new cjs.Rectangle(-63,-12.5,126.1,31.1), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.wfmlogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-8,0,0.328,0.328);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgOAKgLQAKgJAOgBQAPABAKAJQAKALAAAOQAAAPgKAKQgKALgPgBQgOABgKgLgAAWAZIgPgVQANgCAAgMQAAgQgRAAIgTAAIAAAzIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(34.7,19.4,0.328,0.328);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgEAAgFIAAgtQAAgKANAAIA+AAQAQAAALAJQALAJAAAPQAAAQgLAJQgLAJgQAAg");
	this.shape_2.setTransform(-11.6,27.8,0.328,0.328);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(34.8,19,0.328,0.328);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hGAAQhGAAgpg9g");
	this.shape_4.setTransform(-24,9.9,0.328,0.328);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgDAAgCgCQgBgDABgDIAZgxQACgEACAAQADAAACADIAZAzQABADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-22.5,28.8,0.328,0.328);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDsQgmgCgOgHQgVgMAAggIAAljQAAghAKgMQAKgMAcgEIAdgDQBKAAArA/QAqA+AABvQAABxgqBAQgqA8hFAAIgKgBg");
	this.shape_6.setTransform(13.1,9.8,0.328,0.328);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hFAAQhHAAgpg9g");
	this.shape_7.setTransform(-5.7,9.9,0.328,0.328);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(14.9,-12.3,0.328,0.328,0,0,0,20.6,28.7);
	this.instance.alpha = 0.789;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,-17.8,0.328,0.328,0,0,0,33.8,47);
	this.instance_1.alpha = 0.789;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-40.1,9.8,0.328,0.328,0,0,0,22.9,28.6);
	this.instance_2.alpha = 0.789;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-26.4,54.2,0.328,0.328,0,0,0,0.5,0.5);
	this.instance_3.alpha = 0.789;

	this.instance_4 = new lib.CompoundPath();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-22.4,28.8,0.328,0.328,0,0,0,10.8,10.7);
	this.instance_4.alpha = 0.789;

	this.instance_5 = new lib.Path_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.4,28.8,0.328,0.328,0,0,0,9.9,10.7);
	this.instance_5.alpha = 0.789;

	this.instance_6 = new lib.Path_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-33.5,28.9,0.328,0.328,0,0,0,12.5,10.7);
	this.instance_6.alpha = 0.789;

	this.instance_7 = new lib.Path_6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(28.2,9.8,0.328,0.328,0,0,0,19.2,29.6);
	this.instance_7.alpha = 0.789;

	this.instance_8 = new lib.CompoundPath_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-14.8,9.8,0.328,0.328,0,0,0,56,29.6);
	this.instance_8.alpha = 0.789;

	this.instance_9 = new lib.CompoundPath_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(35,19.2,0.328,0.328,0,0,0,2.5,2.6);
	this.instance_9.alpha = 0.789;

	this.instance_10 = new lib.Path_7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-32.3,-12.1,0.328,0.328,0,0,0,63.6,29.2);
	this.instance_10.alpha = 0.789;

	this.instance_11 = new lib.CompoundPath_3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-11.5,28.9,0.328,0.328,0,0,0,9.8,10.7);
	this.instance_11.alpha = 0.789;

	this.instance_12 = new lib.Path_8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(9.3,28.8,0.328,0.328,0,0,0,9.5,10.4);
	this.instance_12.alpha = 0.789;

	this.instance_13 = new lib.Path_9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(18.8,28.9,0.328,0.328,0,0,0,9.5,10.6);
	this.instance_13.alpha = 0.789;

	this.instance_14 = new lib.CompoundPath_4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(34.8,19.3,0.328,0.328,0,0,0,4.6,4.6);
	this.instance_14.alpha = 0.789;

	this.instance_15 = new lib.CompoundPath_5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(12.5,9.8,0.328,0.328,0,0,0,27.3,29.6);
	this.instance_15.alpha = 0.789;

	this.instance_16 = new lib.Path_10();
	this.instance_16.parent = this;
	this.instance_16.setTransform(29.7,-12.3,0.328,0.328,0,0,0,22.4,28.7);
	this.instance_16.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wfmlogo, new cjs.Rectangle(-65.3,-57.3,114.7,114.7), null);


(lib.fourteenctarollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(10).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// Layer_1
	this.instance = new lib.ctarectanglevideo();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-12.5,126.1,31.1);


// stage content:
(lib.leaderboardsixteen = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_55 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(55).call(this.frame_55).wait(19).call(this.frame_74).wait(3));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(365.8,47.1,3.544,0.143,0,0,0,0.3,0.7);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(77));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77));

	// fade-from-black
	this.instance_1 = new lib.blackwideskyscraper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(366.7,50.5,4.456,0.171,0,0,0,0.6,0.6);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.2,regY:0.7,scaleY:0.16,x:364.9,y:47,alpha:0},9).wait(68));

	// white-logo
	this.instance_2 = new lib.wfmlogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(652.6,44.5,1,1,0,0,0,-8,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({regX:-8.5,scaleX:0.02,scaleY:0.02},0).to({regX:-8,scaleX:1.13,scaleY:1.13,alpha:1},6).to({scaleX:1,scaleY:1},7).wait(55));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgidASmMAAAglLMBIDAAAMAAAAlLg");
	mask.setTransform(240.6,53);

	// make-delicious-memories
	this.instance_3 = new lib.MAKEDELICIOUSMEMORIES();
	this.instance_3.parent = this;
	this.instance_3.setTransform(117.5,13.4);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({x:-131,alpha:1},0).to({x:129},10,cjs.Ease.get(1)).to({x:117.5},8,cjs.Ease.get(1)).wait(14));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgidASmMAAAglLMBIDAAAMAAAAlLg");
	mask_1.setTransform(240.6,53);

	// party-ready-recipes
	this.instance_4 = new lib.partyreadyrecipesuse();
	this.instance_4.parent = this;
	this.instance_4.setTransform(148.5,27.4);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({x:-101.5,alpha:1},0).to({x:158.5},10,cjs.Ease.get(1)).to({x:148.5},8,cjs.Ease.get(1)).wait(14));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EggvASmMAAAglLMBGVAAAMAAAAlLg");
	mask_2.setTransform(240.6,53);

	// get-inspired
	this.instance_5 = new lib.getinspired();
	this.instance_5.parent = this;
	this.instance_5.setTransform(82.9,65.2);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({x:-58.1},0).to({x:87.9,alpha:1},10,cjs.Ease.get(1)).to({x:82.9},8,cjs.Ease.get(1)).wait(4));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EgidASmMAAAglLMBIDAAAMAAAAlLg");
	mask_3.setTransform(240.6,53);

	// cta-rollover
	this.cta_rollover = new lib.fourteenctarollover();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(83,66.3);
	this.cta_rollover.alpha = 0;

	var maskedShapeInstanceList = [this.cta_rollover];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(55).to({x:-57},0).to({x:88,alpha:1},10,cjs.Ease.get(1)).to({x:83},8,cjs.Ease.get(1)).wait(4));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EgidASmMAAAglLMBIDAAAMAAAAlLg");
	mask_4.setTransform(240.6,53);

	// cta-rectangle
	this.instance_6 = new lib.ctarectangle();
	this.instance_6.parent = this;
	this.instance_6.setTransform(83,66.3);
	this.instance_6.alpha = 0;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(55).to({x:-57},0).to({x:88,alpha:1},10,cjs.Ease.get(1)).to({x:83},8,cjs.Ease.get(1)).wait(4));

	// pie
	this.instance_7 = new lib.sixteenpie_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(234,70);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({alpha:1},10).wait(58));

	// blue
	this.instance_8 = new lib.sixteenblue_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(435.5,17.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({alpha:1},10).wait(43));

	// meat
	this.instance_9 = new lib.sixteenmeat_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(517,45);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({alpha:1},10).wait(38));

	// cup
	this.instance_10 = new lib.sixteencup_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(606.5,19.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(39).to({alpha:1},10).wait(28));

	// beans
	this.instance_11 = new lib.sixteenbeans_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(629,69.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(33).to({alpha:1},10).wait(34));

	// candle
	this.instance_12 = new lib.sixteencandle_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(304,79.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({alpha:1},10).wait(53));

	// spinach
	this.instance_13 = new lib.sixteenspinach_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(409.5,72);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({alpha:1},10).wait(48));

	// table
	this.instance_14 = new lib.sixteentable_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(362.2,32.1,731.8,114.8);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
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
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;