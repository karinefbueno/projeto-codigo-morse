import * as Tone from "tone";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const playShortBeep = async () => {
    const synth = new Tone.Synth({
        oscillator: { type: "sine" },
        envelope: {
            attack: 0.01,
            decay: 0.1,
            sustain: 0.8,
            release: 0.05
        }
    }).toDestination();

    synth.triggerAttackRelease(600, "8n");
    await sleep(200);
};

const playLongBeep = async () => {
    const synth = new Tone.Synth({
        oscillator: { type: "sine" },
        envelope: {
            attack: 0.01,
            decay: 0.1,
            sustain: 0.8,
            release: 0.05
        }
    }).toDestination();

    synth.triggerAttackRelease(600, "4n");
    await sleep(400);
};

export const playMorse = async (morseCode: string) => {
    for (const symbol of morseCode) {
        if (symbol === ".") await playShortBeep();
        else if (symbol === "-") await playLongBeep();
        else if (symbol === "/") await sleep(600);
        await sleep(200);
    }
};
