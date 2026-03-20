import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function FloatingGeometry({ type = "icosahedron", color = "#7b2fff", size = 1 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth, H = mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    camera.position.set(0, 0, 4 * size);

    // Geometry
    let geo;
    if (type === "icosahedron") geo = new THREE.IcosahedronGeometry(1.2 * size, 0);
    else if (type === "torus") geo = new THREE.TorusGeometry(0.9 * size, 0.35 * size, 16, 60);
    else if (type === "octahedron") geo = new THREE.OctahedronGeometry(1.2 * size, 0);
    else if (type === "dodecahedron") geo = new THREE.DodecahedronGeometry(1.1 * size, 0);
    else geo = new THREE.TetrahedronGeometry(1.3 * size, 0);

    const mat = new THREE.MeshPhongMaterial({
      color: new THREE.Color(color),
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Inner solid
    const solidMat = new THREE.MeshPhongMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.08,
    });
    const solid = new THREE.Mesh(geo.clone(), solidMat);
    scene.add(solid);

    // Lights
    const ambLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambLight);
    const dirLight = new THREE.DirectionalLight(new THREE.Color(color), 2);
    dirLight.position.set(2, 3, 4);
    scene.add(dirLight);
    const pointLight = new THREE.PointLight(0x00f5d4, 1.5, 10);
    pointLight.position.set(-3, -2, 2);
    scene.add(pointLight);

    let mouse = { x: 0, y: 0 };
    const onMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / W - 0.5) * 2;
      mouse.y = -((e.clientY - rect.top) / H - 0.5) * 2;
    };
    mount.addEventListener("mousemove", onMove);

    let frame, t = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      t += 0.008;
      mesh.rotation.x = t * 0.4 + mouse.y * 0.3;
      mesh.rotation.y = t * 0.6 + mouse.x * 0.3;
      solid.rotation.x = mesh.rotation.x;
      solid.rotation.y = mesh.rotation.y;
      pointLight.position.x = Math.sin(t * 1.5) * 3;
      pointLight.position.y = Math.cos(t) * 2;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nW = mount.clientWidth, nH = mount.clientHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      mount.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [type, color, size]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}