export const scoreboardGlowFragment = `
  varying vec2 vUv;
  uniform vec3 uColor;
  uniform float uPulse;

  void main() {
    float scan = sin((vUv.y + uPulse) * 220.0) * 0.08;
    float vignette = smoothstep(0.85, 0.2, distance(vUv, vec2(0.5)));
    gl_FragColor = vec4(uColor * (0.72 + scan), vignette);
  }
`;
