import Reflector from '../three-class/Reflector';

export default function registerMirror() {
  AFRAME.registerComponent('mirror', {
    schema: {
      width: { type: 'number', default: 5 },
      height: { type: 'number', default: 10 },
    },

    init() {
      const { width, height } = this.data;

      const reflector = new Reflector(
        new AFRAME.THREE.PlaneBufferGeometry(width, height),
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
