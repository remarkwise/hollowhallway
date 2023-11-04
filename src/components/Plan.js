const Plan = () => {
  return (
    <div className="plan-board">
      <h2 className="center">Planning Boards</h2>
      <ul>
        <li>
          <a
            href="https://lucid.app/lucidchart/b354d4b5-b794-465f-841a-0e96533df2ca/edit?invitationId=inv_27402227-c0b3-4473-93a1-7531861bfa20"
            target="_blank"
          >
            <b>Spirit Board</b>
          </a>{" "}
          - This board produces Rapid OKR in &lt; 20 minutes by identifying your
          Passion, Position, Perception, and Pressure.
        </li>
        <li>
          <a
            href="https://docs.google.com/spreadsheets/d/1T8JfeOSNpUWURrfGf4B4D4EcU8u9_-1wYnlNzJxle4I/edit?usp=sharing"
            target="_blank"
          >
            <b>Life Balance</b>
          </a>{" "}
          - This board helps identify how your focus is leaning, how much in
          harmony your adjacent priorities are, and help identify
          negelected/conflicting areas.
        </li>
      </ul>
    </div>
  );
};

export default Plan;
