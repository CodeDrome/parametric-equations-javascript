

const ParametricEquations =
{
    circle:
    {
        xFunction: function (t) {return Math.cos(t)},
        yFunction: function (t) {return Math.sin(t)},
        zFunction: function (t) {return 0},
        tRange: {start: 0, end: 2 * Math.PI},
        tStep: Math.PI / 32,
        colour: "#FF0000"
    },

    ellipse:
    {
        xFunction: function (t) {return 1.0 * Math.cos(t)},
        yFunction: function (t) {return 0.75 * Math.sin(t)},
        zFunction: function (t) {return 0},
        tRange: {start: 0, end: 2 * Math.PI},
        tStep: Math.PI / 32,
        colour: "#00C000"
    },

    cardioid:
    {
        xFunction: function (t) { return Math.cos(t) * (1 + Math.cos(t)) },
        yFunction: function (t) { return Math.sin(t) * (1 + Math.cos(t)) },
        zFunction: function (t) {return 0},
        tRange: {start: 0, end: 2 * Math.PI},
        tStep: Math.PI / 32,
        colour: "#800080"
    },

    spiral:
    {
        xFunction: function (t) { return Math.cos(t) * (0.05 * t) },
        yFunction: function (t) { return Math.sin(t) * (0.025 * t) },
        zFunction: function (t) {return 0},
        tRange: {start: 0, end: 10 * Math.PI},
        tStep: Math.PI / 32,
        colour: "#008080"
    },

    rose:
    {
        xFunction: function (t) { return Math.cos(t) * (Math.sin(t * 6)) },
        yFunction: function (t) { return Math.sin(t) * (Math.sin(t * 6)) },
        zFunction: function (t) {return 0},
        tRange: {start: 0, end: 2 * Math.PI},
        tStep: Math.PI / 128,
        colour: "#FF00FF"
    },

    Lissajous1:
    {
        xFunction: function (t)
        {
            const delta = Math.PI / 2;
            const a = 1;
            return Math.sin(a * t + delta)
        },

        yFunction: function (t)
        {
            const b = 2;
            return Math.sin(b * t)
        },

        zFunction: function (t) { return 0 },
        tRange: {start: 0, end: 2 * Math.PI},
        tStep: Math.PI / 128,
        colour: "#FF8000"
    },

    Lissajous2:
    {
        xFunction: function (t)
        {
            const delta = Math.PI / 2;
            const a = 3;
            return Math.sin(a * t + delta)
        },

        yFunction: function (t)
        {
            const b = 2;
            return Math.sin(b * t)
        },

        zFunction: function (t) { return 0 },
        tRange: {start: 0, end: 2 * Math.PI},
        tStep: Math.PI / 128,
        colour: "#FF8000"
    },

    Lissajous3:
    {
        xFunction: function (t)
        {
            const delta = Math.PI / 2;
            const a = 3;
            return Math.sin(a * t + delta)
        },

        yFunction: function (t)
        {
            const b = 4;
            return Math.sin(b * t)
        },

        zFunction: function (t) { return 0 },
        tRange: {start: 0, end: 2 * Math.PI},
        tStep: Math.PI / 128,
        colour: "#FF8000"
    },

    Lissajous4:
    {
        xFunction: function (t)
        {
            const delta = Math.PI / 4;
            const a = 5;
            return Math.sin(a * t + delta)
        },

        yFunction: function (t)
        {
            const b = 4;
            return Math.sin(b * t)
        },

        zFunction: function (t) { return 0 },
        tRange: {start: 0, end: 2 * Math.PI},
        tStep: Math.PI / 128,
        colour: "#FF8000"
    },

    helix:
    {
        zFunction: function (t)
        {
            const a = 0.5; // radius
            return a * Math.cos(t);
        },

        xFunction: function (t)
        {
            const a = 0.5; // radius
            return a * Math.sin(t);
        },

        yFunction: function (t)
        {
            const b = 0.05; // height per revolution = 2pi * b
            return b * t;
        },

        tRange: {start: -10 * Math.PI, end: 10 * Math.PI},
        tStep: Math.PI / 128,
        colour: "#0000FF"
    },
}
