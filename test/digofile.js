var digo = require("digo");

exports.default = function () {
	digo.src("fixtures/*.html").pipe("../").dest("_build");
};
