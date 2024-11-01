import { Chess, Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../pages/Game";
import ChessSquare from "./chessboard/ChessSquare";


export const ChessBoard = ({chess, board, socket, setBoard} : Board) => {

    const [from, setFrom] = useState<Square | null>(null)
    // const [to, setTo] = useState<Square | null>(null)



    return <div className="text-black">
        {board.map((row, i) => {
            return <div key={i} className="flex">
                {row.map((square, j) => {
                    const squareRepresentaion = String.fromCharCode(97 + (j % 8)) + "" + (8-i) as Square
                 
                    return <div onClick={() => {
                 
                        if (!from) {
                            setFrom(squareRepresentaion)
                        } else {
                            
                            socket.send(JSON.stringify({
                                type : MOVE,
                                payload : {
                                    move : {
                                            from,
                                            to : squareRepresentaion
                                    }
                                }
                            }))

                            setFrom(null)
                            chess.move({
                                from, 
                                to : squareRepresentaion
                            })
                            setBoard(chess.board())
                        }
                    }} key={j} className={`w-16 h-16 lg:w-24 lg:h-24 ${(i+j)%2==0 ? "bg-[#ebecd0]" : "bg-[#739552]"}`}>
                        <div className="w-full justify-center flex h-full">
                            <div className="h-full justify-center flex flex-col">
                                {square && <ChessSquare square={square} />}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        })}
    </div>
}


interface Board {
    board : ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null) [][]

    socket : WebSocket,
    chess: Chess;
    setBoard: React.Dispatch<React.SetStateAction<({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][]>>;
}