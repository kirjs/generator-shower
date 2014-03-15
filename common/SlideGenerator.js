var path = require('path');
var yeoman = require('yeoman-generator');
exports.placeholder =  '<!--  build:YEOMAN-GENERATOR-PLACEHOLDER -->';

exports.Generator = yeoman.generators.NamedBase.extend({

    files: function() {
        var indexContents = this.readFileAsString('presentation/index.html');
        var code = this.readFileAsString(path.join(this.sourceRoot(), '_index.html')) + exports.placeholder;
        code = code.replace('<%= title %>', this.name);
        indexContents = indexContents.replace(exports.placeholder, code);
        this.write('presentation/index.html', indexContents);
    }
});

