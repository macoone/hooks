import { useParams } from "react-router-dom";
import { movieData } from "./MovieData";
import { Link } from "react-router-dom";
const Desc = () => {
  const { idMovie } = useParams();
  console.log(idMovie, "test");
  return (
    <div>
      <h3>{movieData.find((el, i) => el.id === Number(idMovie)).trailer}</h3>
      <h3>{movieData.find((el, i) => el.id === Number(idMovie)).description}</h3>
      <Link to="/">
              <button>Go To Home</button>
            </Link>
    </div>
  );
};
export default Desc;