var path = require('path');
var yeoman = require('yeoman-generator');
exports.placeholder = '<!--  build:YEOMAN-GENERATOR-PLACEHOLDER -->';

exports.Generator = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);
        this.argument('title', { type: String, required: false });
    },


    files: function () {
        var indexContents = this.readFileAsString('presentation/index.html');
        var code = this.readFileAsString(path.join(this.sourceRoot(), '_index.html')) + "\n" + exports.placeholder;
        code = code.replace('<%= title %>', this.title || "");
        indexContents = indexContents.replace(exports.placeholder, code);
        this.writeFileFromString(indexContents, 'presentation/index.html');
    }
});

