import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
    const Computer = ({ isMobile }) => {
        const computer = useGLTF("./desktop_pc/scene.gltf");

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
        </mesh>
    );
}

export default Computers;