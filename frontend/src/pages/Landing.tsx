import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export default function Landing() {



    const navigate = useNavigate();

    return (
      <div className="mx-auto container max-w-5xl pt-10 px-6">
        <div className="grid-cols-1 md:grid-cols-2 gap-4 grid">
            <div className="md:col-span-1">
                <img className="rounded-md" src="chess.png" alt="" />
            </div>
            <div className="md:col-span-1 flex justify-center px-2">
              <div>
                <div className="items-center justify-center py-10">
                  <h1 className="font-bold text-5xl text-white">
                    <span>Play Chess Online</span>
                  </h1>
                  <h1 className="font-bold text-5xl text-white">
                    <span>on the #X Site!</span>
                  </h1>
                </div>
                <div className="items-center justify-center flex">
                  <Button onClick={() => {
                    navigate("/game")
                  }}>Play Online</Button>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
  