'use strict';

delete require.cache[require.resolve('..')];
var empowerAssert = require('..');
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var babel = require('@gerhobbelt/babel-core');
var extend = require('xtend');

function testTransform (fixtureName, extension) {
    it(fixtureName, function () {
        extension = extension || 'js';
        var fixtureFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'fixture.' + extension);
        var expectedFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'expected.' + extension);
        var result = babel.transformFileSync(fixtureFilepath, {
            plugins: [
                empowerAssert
            ]
        });
        var actual = result.code;
        if (fs.existsSync(expectedFilepath)) {
            var expected = fs.readFileSync(expectedFilepath, 'utf8');
            assert.equal(actual, expected);
        } else {
            console.warn("          Regenerating test SOLLWERT for " + fixtureName + " ...");
            assert(true); // shut up test rig: one (fake) test done at least!
            fs.writeFileSync(expectedFilepath, actual, 'utf8');
        }
    });
}

describe('babel-plugin-empower-assert', function () {
    testTransform('cjs');
    testTransform('cjs_singlevar');
    testTransform('cjs_powerassert');
    testTransform('cjs_strictmode');
    testTransform('cjs_singlevar_strictmode');
    testTransform('cjs_assignment');
    testTransform('cjs_assignment_singlevar');
    testTransform('cjs_assignment_strictmode');
    testTransform('cjs_assignment_singlevar_strictmode');
    testTransform('esm_default_binding', 'mjs');
    testTransform('esm_default_binding_powerassert', 'mjs');
    testTransform('esm_namespace_import', 'mjs');
    testTransform('esm_named_import_strictmode', 'mjs');
});
