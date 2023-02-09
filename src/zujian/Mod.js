function Mod(props) {
  return (
    <div className="father">
      <div>my mod is opening</div>
      <button onClick={()=>console.log(props.text)}>let's do something</button>
    </div>
  );
}

export default Mod;
