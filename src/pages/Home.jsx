import Welcome from "../components/Welcome";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Welcome />
    </>
  );
};
export default Home;
