import React, { useContext } from 'react'
import Them_Btn from './Them_Btn';
const Card = () => {


    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                <Them_Btn />
                <img className="w-full" src={"https://i.ytimg.com/vi/V3dZtcZ4bac/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAtsHnCmQwFjY6y5Uuqf6LfxKbL6w"} alt="Card image" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">obito</div>
                    <p className="text-gray-700 dark:text-gray-300 text-base">
                        obito uchiha
                    </p>
                </div>
            </div>
        </>
    );
};


export default Card

