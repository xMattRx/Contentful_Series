import ImagePost from ".";
// import Avatar from '../../../public/assets/Avatar.webp';
import Avatar from '../../../../public/assets/Avatar.webp';

export default {
    title: "atoms/Post/ImagePost",
    component: ImagePost,
    args: {
        src: Avatar,
        alt: "Avatar"
    },
};

export const Default = {}


