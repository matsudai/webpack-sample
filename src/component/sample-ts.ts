const a = 'shake';

let b: number;

b = 4;
b = 5;

interface T {
  aaa: string;
  bbb: number;
}

const c = { aaa: 'A', bbb: 6 };
const cf = (t: T) => `${t.aaa}/${t.bbb}`;
const d = cf(c);

const SampleTs = {
  a,
  b,
  d,
};

export default SampleTs;
