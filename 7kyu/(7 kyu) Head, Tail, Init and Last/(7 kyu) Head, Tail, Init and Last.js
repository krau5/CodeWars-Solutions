// TODO: implement the four functions specified.

const head = (array) => array[0];

const tail = (array) => array.length > 1 ? array.slice(1) : [];

const init = (array) => array.slice(0, -1);

const last = (array) => array.slice(-1)[0];
