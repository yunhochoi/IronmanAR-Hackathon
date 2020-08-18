/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Materials = require('Materials');
const Diagnostics = require('Diagnostics');
const TouchGestures = require('TouchGestures');



// Enables async/await in JS [part 1]
(async function() {
    var myBtn = Scene.root.findFirst('plane0');

    // TouchGestures.onTap(myBtn).subscribe((gesture) => {
    //         //do stuff here
    //         Diagnostics.log("Hello World");
    //     }
    // );

    const [plane, material, material2] = await Promise.all([
        Scene.root.findFirst('plane0'),
        Materials.findFirst('testBtn'),
        Materials.findFirst('testMat')
    ]);
    var isFirstMaterialSelected = true;

    // Subscribe to tap gestures on the plane
    TouchGestures.onTap(plane).subscribe(function(gesture){
        // Log a string message  
        Diagnostics.log('A console message logged from the script');    
        // Switch materials depending on which one is currently applied to the plane
        if (isFirstMaterialSelected) {
            plane.material = material2;
            isFirstMaterialSelected = false;
        } else {
            plane.material = material;
            isFirstMaterialSelected = true;
        }
    })


// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const [directionalLight] = await Promise.all([
//   Scene.root.findFirst('directionalLight0')
// ]);

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');

// Enables async/await in JS [part 2]
})();
