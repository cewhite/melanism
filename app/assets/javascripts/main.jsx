class Main extends React.Component {
  render (){
    return (
      < Greeting />
    );
  }
}

// renders Main/ element
let documentReady = () => {
  React.render(
    < Main />,
      document.getElementById('react')
  );
};

$(documentReady);
