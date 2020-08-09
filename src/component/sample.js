const Sample = {
  show: () => {
    const hello = document.createElement('div');
    hello.innerText = 'Hello';
    document.getElementById('App').appendChild(hello);
  },
};

export default Sample;
