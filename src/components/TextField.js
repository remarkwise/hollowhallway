// function TextField(props) {...}
const TextField = ({ fieldName, ...props }) => {
  // Playing with destructuring...
  const obj = {
    name: "Fred",
    location: "New York"
  };

  const otherObj = {
    ...obj,
    SomethingElse: "Another ..."
  };

  const { name } = obj;

  //  console.log("Data", { name, obj, otherObj, isSame: obj === otherObj, });

  const list1 = [1, 2, 3, 4, 5];
  // add 6
  const list2 = [...list1, 6];

  return (
    <fieldset>
      <label>{fieldName}</label>
      <input type="textbox" id={fieldName} name={fieldName} {...props} />
    </fieldset>
  );
};

export default TextField;
