import Reflector from '../three-class/Reflector';

export default function registerMirror() {
  AFRAME.registerComponent('mirror', {
    init() {
      const reflector = new Reflector(
        (this.el.components.geometry as any).geometry,
        {
          color: new AFRAME.THREE.Color(0x7f7f7f),
          textureWidth: window.innerWidth * window.devicePixelRatio,
          textureHeight: window.innerHeight * window.devicePixelRatio,
        },
      );

      this.el.setObject3D('mesh', reflector);
    },
  });
}
