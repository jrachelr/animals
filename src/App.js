function App() {
  const handleClick = () => {
    console.log("button clickes");
  };

  return (
    <div>
      {" "}
      <button onClick={handleClick}>Add animal</button>{" "}
    </div>
  );
}
export default App;
