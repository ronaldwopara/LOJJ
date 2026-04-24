"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export default function ShaderBackground() {
  return (
    <div className="fixed inset-0 -z-50">
      <ShaderGradientCanvas
        style={{ width: "100%", height: "100%" }}
        // keep this lightweight on laptops
        pixelDensity={1}
        fov={45}
        frameloop="always"
      >
        <ShaderGradient
          animate="on"
          axesHelper="off"
          brightness={1.2}
          cAzimuthAngle={180}
          cDistance={3.6}
          cPolarAngle={90}
          cameraZoom={1}
          color1="#223D14"
          color2="#99BB99"
          color3="#8A9C80"
          destination="onCanvas"
          embedMode="off"
          envPreset="lobby"
          format="gif"
          frameRate={10}
          fov={45}
          gizmoHelper="hide"
          grain="on"
          lightType="3d"
          pixelDensity={1}
          positionX={-1.4}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={0}
          rotationY={10}
          rotationZ={50}
          shader="defaults"
          type="waterPlane"
          uAmplitude={1}
          uDensity={1.3}
          uFrequency={5.5}
          uSpeed={0.4}
          uStrength={4}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}

