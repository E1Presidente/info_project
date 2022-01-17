import Form from "./elements/Form";

function Main() {
  const repeatActions = [
    "Hardware",
    "1C"
  ]
  const openActions = [
    "Share",
    "Remote access"
  ]

  return (
    <div className="Main">
      <Form name={"Get hardware info"} submit={"Search"} />
      <Form name={"Repeat operation to get latest information"} options={repeatActions} submit={"Commit"} />
      <Form name={"Open remote control on computer"} options={openActions} submit={"Commit"} />
    </div>
  );
}

export default Main;