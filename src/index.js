import Sample from './component/sample';
import SampleTs from './component/sample-ts';

window.onload = () => {
  Sample.show();
  console.log([SampleTs.a, SampleTs.b]);
};
