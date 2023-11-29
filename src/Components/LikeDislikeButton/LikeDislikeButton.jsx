import { useState } from 'react';
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6";

const LikeDislikeButton = () => {


    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const handleLike = () => {
        if (!isLiked) {
            setLikes(likes + 1);
            setIsLiked(true);

            if (isDisliked) {
                setDislikes(dislikes - 1);
                setIsDisliked(false);
            }
        } else {
            setLikes(likes - 1);
            setIsLiked(false);
        }
    };

    const handleDislike = () => {
        if (!isDisliked) {
            setDislikes(dislikes + 1);
            setIsDisliked(true);

            if (isLiked) {
                setLikes(likes - 1);
                setIsLiked(false);
            }
        } else {
            setDislikes(dislikes - 1);
            setIsDisliked(false);
        }
    };


    return (
        <div className='flex gap-2 '>
            <button onClick={handleLike} className={`btn bg-transparent  ${isLiked ? "text-green-600" : ""}`} >
                 <FaThumbsUp/> {likes}
            </button>
            <button onClick={handleDislike} className={`btn bg-transparent ${isDisliked ? "text-red-600" : ""}`}>
            <FaThumbsDown/> {dislikes} 
            </button>
        </div>
    );
};

export default LikeDislikeButton;