import React from 'react';
import Board from "../components/Board";
import Result from "../components/Result";

export const Game = ({className}) => {
    return (
        <div className={className}>
            <Result />
            <Board />
        </div>
    );
};
