
class ParametricEquationsPlotter
{
    constructor()
    {
        this._container = null,
        this._renderer = null,
        this._scene = null,
        this._light = null,
        this._camera = null,
        this._group = null,
        this._meshlinematerial = null

        this._createMaterials();
        this._createScene();
        this._drawMesh();

        this._renderer.render(this._scene, this._camera);
    }

    _createMaterials()
    {
        this._meshlinematerial = new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.1 });
    }

    _createScene()
    {
        this._container = document.getElementById("container");

        this._renderer = new THREE.WebGLRenderer({ antialias: true });
        this._renderer.setSize(container.offsetWidth, container.offsetHeight);
        this._container.appendChild(this._renderer.domElement);

        this._scene = new THREE.Scene();
        this._scene.background = new THREE.Color(0xFFFFFF);

        this._camera = new THREE.PerspectiveCamera(45, this._container.offsetWidth / this._container.offsetHeight, 0.1, 20);
        this._camera.position.set(0, 0, 5);

        this._light = new THREE.DirectionalLight(0xFFFFFF, 2.0);
        this._light.position.set(-1, 1, 1);
        this._scene.add(this._light);

        this._group = new THREE.Object3D();
        this._scene.add(this._group);

        this._group.rotation.x = 0.25;
        this._group.rotation.y = 0.25;
        // this._group.rotation.z = -0.5;
    }

    _drawMesh()
    {
        let points = null;
        let geometry = null;
        let line = null;

        for(let x = -1; x <= 1; x++)
        {
            for(let y = -1; y <= 1; y++)
            {
                for(let z = -1; z <= 1; z++)
                {
                    points = [new THREE.Vector3(x, y, z), new THREE.Vector3(x, y, -z)];
                    geometry = new THREE.BufferGeometry().setFromPoints( points );
                    line = new THREE.Line( geometry, this._meshlinematerial );
                    this._group.add(line);

                    points = [new THREE.Vector3(x, y, z), new THREE.Vector3(x, -y, z)];
                    geometry = new THREE.BufferGeometry().setFromPoints( points );
                    line = new THREE.Line( geometry, this._meshlinematerial );
                    this._group.add(line);

                    points = [new THREE.Vector3(x, y, z), new THREE.Vector3(-x, y, z)];
                    geometry = new THREE.BufferGeometry().setFromPoints( points );
                    line = new THREE.Line( geometry, this._meshlinematerial );
                    this._group.add(line);
                }
            }
        }
    }

    Plot(xEquation, yEquation, zEquation, tRange, tStep, colour)
    {
        let xPrev = null, yPrev = null, zPrev = null;
        let x = null, y = null, z = null;
        let points = null, geometry = null, line = null;
        const plotlinematerial = new THREE.LineBasicMaterial({ color: colour });

        for(let t = tRange.start; t <= tRange.end; t += tStep)
        {
            x = xEquation(t);
            y = yEquation(t);
            z = zEquation(t);

            if(xPrev !== null)
            {
                points = [new THREE.Vector3(xPrev, yPrev, zPrev), new THREE.Vector3(x, y, z)];
                geometry = new THREE.BufferGeometry().setFromPoints( points );
                line = new THREE.Line( geometry, plotlinematerial );
                this._group.add(line);
            }

            xPrev = x;
            yPrev = y;
            zPrev = z;
        }

        this._renderer.render(this._scene, this._camera);
    }
}
