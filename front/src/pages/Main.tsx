import { Link } from "react-router-dom";

function Main() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className="font-bold text-4xl text-yellow-500 mb-5">이순명의 포트폴리오 </h1>
      <nav>
          <Link to="/sachungsung" className='text-blue-400 text-xl'>- 사천성</Link>
      </nav>
    </div>
  )
}

export default Main
