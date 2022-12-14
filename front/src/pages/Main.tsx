import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <nav className="flex flex-col">
        <Link to="/sameNumber" className="text-blue-400 text-xl">
          - 같은 숫자 찾기
        </Link>
        <Link to="/percentCalculator" className="text-xl text-red-400">
          - 할인율 계산기
        </Link>
      </nav>
    </div>
  );
};

export default Main;
