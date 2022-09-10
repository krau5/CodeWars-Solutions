const yack = (callback, ...props) => props.length >= callback.length ? callback(...props) : (...args) => yack(callback, ...props, ...args)
