import React from "react";
import Card from "../components/Card";
import MainHeader from "../components/MainHeader";
import SubmitArmyForm from "../components/SubmitArmyForm";

const SubmitArmy = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <Card>
          <SubmitArmyForm />
        </Card>
      </main>
    </React.Fragment>
  );
};

export default SubmitArmy;
