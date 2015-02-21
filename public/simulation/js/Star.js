// object
var Star = function(position, speed){
	// visuals
	var mesh = new THREE.Mesh(Star.geometry, Star.material);
	mesh.position.set(position.x, position.y, position.z);

	// physics
	var velocity = new CANNON.Vec3(0,0,speed);
	var sphereBody = new CANNON.Body({
		mass: 5,
		position: new CANNON.Vec3(position.x, position.y, position.z),
		shape: new CANNON.Sphere(Star.radius),
		velocity: velocity
	});

	this.getMesh = function(){
		return mesh;
	};

	this.getBody = function () {
		return sphereBody;
	};

	this.updatePosition = function() {
		mesh.position.copy(sphereBody.position);
		mesh.quaternion.copy(sphereBody.quaternion);
	};
};

// static variables
Star.radius = 2;
Star.geometry = new THREE.SphereGeometry(Star.radius, 12, 12);
Star.material = new THREE.MeshPhongMaterial({
	combine: THREE.AddOperation,
	shininess: 100,
	color: 0xffffff
});
