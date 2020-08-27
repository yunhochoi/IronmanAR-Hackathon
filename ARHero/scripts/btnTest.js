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
    var btn_ironman_fire = Scene.root.findFirst('btn_ironman_fire');
    var isFirstMaterialSelected = true;

    TouchGestures.onTap(btn_ironman_fire).subscribe((gesture) => {
            
        //do stuff here

        if (isFirstMaterialSelected) {
            Diagnostics.log("fire")
            isFirstMaterialSelected = false;

        } else {
            Diagnostics.log("hold on")
            isFirstMaterialSelected = true;
        }
    });

    const [button, material] = await Promise.all([
        Scene.root.findFirst('Mball'),
        Materials.findFirst('DefaultMaterial')
        // Materials.findFirst('testMat')
    ]);
    

    // Subscribe to tap gestures on the plane
    // TouchGestures.onTap(plane).subscribe(function(gesture){
    //     // Log a string message  
    //     Diagnostics.log('Change Material');    
    //     // Switch materials depending on which one is currently applied to the plane
    //     if (isFirstMaterialSelected) {
    //         plane.material = material2;
    //         isFirstMaterialSelected = false;
    //     } else {
    //         plane.material = material;
    //         isFirstMaterialSelected = true;
    //     }
    // })


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
