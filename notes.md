React - Tic-Tac-Toe

export default function Square() {
  return <button className="square">X</button>;
}

1st line
export (JS keyword)
-> makes this function accessible outside of this file.

default keyword
-> tells other files using this code that it's the main function in the file.

<h1> 2nd line </h1>
return (JS keyword)
-> whatever comes after is returned as a value to the caller of the function

<button> is a JSX element.
-> A JSX element is a combination of JS code and HTML tags that describes what you'd like to display.

className = "square"
