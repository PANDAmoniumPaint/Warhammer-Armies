import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const SubmitArmyForm = (props) => {
  const {
    value: nickname,
    isValid: nicknameValid,
    hasError: nicknameError,
    valueChangeHndlr: nicknameHndlr,
    inputBlurHndlr: nicknameBlur,
    reset: nicknameReset,
  } = useInput(isNotEmpty);

  const {
    value: armyName,
    isValid: armyNameValid,
    hasError: armyNameError,
    valueChangeHndlr: armyNameHndlr,
    inputBlurHndlr: armyNameBlur,
    reset: armyNameReset,
  } = useInput(isNotEmpty);

  const {
    value: factionName,
    isValid: factionValid,
    hasError: factionError,
    valueChangeHndlr: factionHndlr,
    inputBlurHndlr: factionBlur,
    reset: factionReset,
  } = useInput(isNotEmpty);

  const {
    value: subfactionName,
    isValid: subfactionValid,
    hasError: subfactionError,
    valueChangeHndlr: subfactionHndlr,
    inputBlurHndlr: subfactionBlur,
    reset: subfactionReset,
  } = useInput(isNotEmpty);

  let formValid = false;
  if (nicknameValid && armyNameValid && factionValid && subfactionValid) {
    formValid = true;
  }

  const formSubmitHndlr = (event) => {
    event.preventDefault();

    if (!nicknameValid || !armyNameValid || !factionValid || subfactionValid) {
      return;
    }

    console.log(
      nickname +
        " " +
        armyName +
        " faction: " +
        factionName +
        "sub-faction: " +
        subfactionName
    );

    nicknameReset();
    armyNameReset();
    factionReset();
    subfactionReset();
  };

  const nicknameClasses = nicknameError
    ? "form-control invalid"
    : "form-control";

  const armyNameClasses = armyNameError
    ? "form-control invalid"
    : "form-control";

  const factionInputClasses = factionError
    ? "form-control invalid"
    : "form-control";

  const subfactionInputClasses = subfactionError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHndlr}>
      <div className="control-group">
        <div className={nicknameClasses}>
          <label htmlFor="Nickname">Nickname</label>
          <input
            type="text"
            id="nickname"
            placeholder="Player Nickname"
            onChange={nicknameHndlr}
            onBlur={nicknameBlur}
            value={nickname}
          />
        </div>

        <div className={armyNameClasses}>
          <label htmlFor="army-name">Army Name</label>
          <input
            type="text"
            id="army-name"
            placeholder="Army Name"
            onChange={armyNameHndlr}
            onBlur={armyNameBlur}
            value={armyName}
          />
        </div>

        <div className={armyNameClasses}>
          <label htmlFor="game-type">Game</label>
          <select id="game-type">
            <option value="warhammer-40k">Warhammer 40k</option>
            <option value="kill-team">Kill Team</option>
            <option value="age-of-sigmar">Age of Sigmar</option>
            <option value="blood-bath">Blood Bowl</option>
          </select>
        </div>

        <div className={factionInputClasses}>
          <label htmlFor="faction">Faction</label>
          <input
            type="text"
            id="faction"
            placeholder="Faction Name"
            onChange={factionHndlr}
            onBlur={factionBlur}
            value={factionName}
          />
        </div>

        <div className={subfactionInputClasses}>
          <label htmlFor="sub-faction">Sub-Faction</label>
          <input
            type="text"
            id="sub-faction"
            placeholder="Sub-Faction Name"
            onChange={subfactionHndlr}
            onBlur={subfactionBlur}
            value={subfactionName}
          />
        </div>
      </div>
      <div>
        {nicknameError && (
          <p className="error-text">Please enter a player name</p>
        )}
        {armyNameError && (
          <p className="error-text">Please enter a name for your army</p>
        )}
        {factionError && (
          <p className="error-text">Please enter your army's faction</p>
        )}
        {subfactionError && (
          <p className="error-text">Please enter your army's sub-faction</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SubmitArmyForm;
