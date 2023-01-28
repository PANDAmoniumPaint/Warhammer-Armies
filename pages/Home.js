import React from "react";
import MainHeader from "../components/MainHeader";
import Card from "../components/Card";
import { useUserAuth } from "../store/userAuthContext";

const Home = () => {
  const { isLoggedIn } = useUserAuth();
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <Card>
          <h1>Welcome to Warhammer Armies</h1>
          {!isLoggedIn && (
            <h3>
              You can view submitted armies, or you can log in above to add your
              own!
            </h3>
          )}
          {isLoggedIn && <h3>Welcome back!</h3>}
        </Card>
      </main>
    </React.Fragment>
  );
};

export default Home;
