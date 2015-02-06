Node.JS module “Deep Extend with scheme support”
============================

Recursive object extending.

Install
-----

	npm install deep-extend-with-scheme

Usage
-----

	var deepExtend = require('deep-extend-with-scheme');
	var obj1 = {
		a: 1,
		b: 2
	};
	var obj2 = {
		a: 2,
		b: 3
	};

	var scheme = {
		a: Array
	};

	deepExtend(obj1, obj2, {scheme: scheme});

	console.log(obj1);
	/*
	{ a: [1, 2],
	  b: 3
	*/

	For now only Array is supported in the scheme.
