// function TextField(props) {...}
const TextField = ({ fieldName, ...props }) => {
  // Playing with destructuring...
  const obj = {
    name: "Fred",
    location: "New York",
  };

  const otherObj = {
    ...obj,
    SomethingElse: "Another ...",
  };

  const { name } = obj;

  //  console.log("Data", { name, obj, otherObj, isSame: obj === otherObj, });

  const list1 = [1, 2, 3, 4, 5];
  // add 6
  const list2 = [...list1, 6];

  const Helper = (helper) => {
    return (
      <a href={helper.helper} target="_blank">
        <i className="fa fa-info-circle"></i>
      </a>
    );
  };

  let fieldLabel = fieldName;
  if (props.label) {
    fieldLabel = props.label;
  }

  return (
    <fieldset>
      <label>{fieldLabel}</label>
      <input type="textbox" id={fieldName} name={fieldName} {...props} />
      {props.helper && <Helper helper={props.helper} />}
    </fieldset>
  );
};

export default TextField;
