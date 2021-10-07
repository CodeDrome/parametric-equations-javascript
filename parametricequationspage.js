
"use strict"

window.onload = function()
{
    const plotter = new ParametricEquationsPlotter();

    // const pe = ParametricEquations.circle;
    // const pe = ParametricEquations.ellipse;
    // const pe = ParametricEquations.cardioid;
    // const pe = ParametricEquations.spiral;
    // const pe = ParametricEquations.rose;
    // const pe = ParametricEquations.Lissajous1;
    // const pe = ParametricEquations.Lissajous2;
    // const pe = ParametricEquations.Lissajous3;
    // const pe = ParametricEquations.Lissajous4;
    const pe = ParametricEquations.helix;

    plotter.Plot(pe.xFunction, pe.yFunction, pe.zFunction, pe.tRange, pe.tStep, pe.colour);
}
