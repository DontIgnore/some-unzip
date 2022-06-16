(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  require('isomorphic-unzip');

  unzip.getBuffer(['androidmanifest.xml', 'resources.arsc'], function(err, buffers) {
    if(err) throw err;
   
   
    // buffers it's like {'androidmanifest.xml': Buffer, 'resources.arsc': Buffer}
    console.log(buffers);
  });

}));
