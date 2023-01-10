import ImagePost from ".";
import Avatar from '../../../public/assets/Avatar.webp';

export default {
    title: "atoms/ImagePost",
    component: ImagePost,
    args: {
        src: Avatar,
        alt: "Avatar"
    },
};

export const Default = {}


