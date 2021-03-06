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
const Patches = require('Patches');
const Materials = require('Materials');
const Diagnostics = require('Diagnostics');
const TouchGestures = require('TouchGestures');
const Instruction = require('Instruction');
const FaceTracking = require('FaceTracking');


// Enables async/await in JS [part 1]
(async function() {
    
    const [btn_laserFire, mesh_laserBeam, emitter_laserParticle, faceMaterial] = await Promise.all([
        Scene.root.findFirst('btn_laserFire'),
        Scene.root.findFirst('mesh_laserBeam'),
        Scene.root.findFirst('emitter_laserParticle'),
        Materials.findFirst('faceMaterial')
    ]);

    // initial setting
    mesh_laserBeam.material.opacity = 1.0;
    // skull.material.opacity = 0.5;
    emitter_laserParticle.material.opacity = 1.0;

    // To patch editor
    const long_pressed = false;

    // const face = FaceTracking.face(0);

    // Define a boolean that will be true until 2 faces are detected
    // var show = FaceTracking.count.lt(1);

    // Bind the visibility of the instruction to the boolean
    // Instruction.bind(face, 'find_face');

    //==============================================================================
    // Make the plane's material transparent when the plane is long pressed
    //==============================================================================


    // Subscribe to long press gestures on the plane
    TouchGestures.onLongPress(btn_laserFire).subscribe((gesture) => {
        Diagnostics.log("long pressed");

        // Shoot Laser: Set the opacity to 100%
        mesh_laserBeam.material.opacity = 1.0;
        emitter_laserParticle.material.opacity = 1.0;

        // Send the boolean value to the Patch Editor under the name 'myBoolean'
        const long_pressed = true;

        // Subscribe to the state of the gesture
        gesture.state.monitor().subscribe((state) => {

            // Return the opacity to 0% when the gesture ends
            if (state.newValue !== 'BEGAN' && state.newValue !== 'CHANGED') {
                mesh_laserBeam.material.opacity = 0;
                emitter_laserParticle.material.opacity = 0;
            }

        });

    });
        
    // material_laserbeam.opacity = 0.0;
    // material_emitterbeam.opacity = 0.0;

    // TouchGestures.onTap(btn_ironman_fire).subscribe((gesture) => {
            
    //     //do stuff here

    //     if (isFirstMaterialSelected) {
    //         Diagnostics.log("fire")
    //         isFirstMaterialSelected = false;
    //         material_laserbeam.opacity = 1.0;
    //         material_emitterbeam.opacity = 1.0;

    //     } else {
    //         Diagnostics.log("hold")
    //         isFirstMaterialSelected = true;
    //         material_laserbeam.opacity = 0.0;
    //         material_emitterbeam.opacity = 0.0;
    //     }
    // });

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
