import { Howl } from "howler";

function writeString(view: DataView, offset: number, value: string) {
  for (let index = 0; index < value.length; index += 1) {
    view.setUint8(offset + index, value.charCodeAt(index));
  }
}

function wavDataUri(samples: Int16Array, sampleRate: number) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, "data");
  view.setUint32(40, samples.length * 2, true);

  let offset = 44;
  for (let index = 0; index < samples.length; index += 1) {
    view.setInt16(offset, samples[index], true);
    offset += 2;
  }

  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunk = 0x8000;
  for (let index = 0; index < bytes.length; index += chunk) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunk));
  }

  return `data:audio/wav;base64,${btoa(binary)}`;
}

export function createCrowdHowl() {
  const sampleRate = 16000;
  const duration = 2.2;
  const total = Math.floor(sampleRate * duration);
  const samples = new Int16Array(total);

  for (let index = 0; index < total; index += 1) {
    const t = index / sampleRate;
    const swell = 0.42 + Math.sin(t * Math.PI * 1.5) * 0.18;
    const chant = Math.sin(t * 180) * 0.18 + Math.sin(t * 245) * 0.1;
    const noise = (Math.random() * 2 - 1) * 0.55;
    samples[index] = Math.max(-1, Math.min(1, (noise + chant) * swell)) * 14000;
  }

  return new Howl({
    src: [wavDataUri(samples, sampleRate)],
    loop: true,
    volume: 0.26,
    html5: false,
  });
}
