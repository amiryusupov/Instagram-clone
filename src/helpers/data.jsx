import icons from "./icons";
import example_img from "../assets/img/img_example.jpg"
let data = [
    {
        id: 1,
        icon: <icons.GrHomeRounded size="1.5em"/>,
        link: "/",
        title: "Home"
    },
    {
        id: 2,
        icon: <icons.FiSearch size="1.5em"/>,
        link: "#",
        title: "Search"
    },
    {
        id: 3,
        icon: <icons.RiMessengerLine size="1.5em"/>,
        link: "/direct",
        title: "Messages"
    },
    {
        id: 4,
        icon: <icons.AiOutlineHeart size="1.5em"/>,
        link: "#",
        title: "Notifications"
    },
    {
        id: 5,
        icon: <icons.FiPlusSquare size="1.5em"/>,
        link: "#",
        title: "Create"
    },
    {
        id: 6,
        icon: <img src={example_img} className="sidebar__left-img" alt="" />,
        link: "amiryusupov.070",
        title: "Profile"
    },
    
]
export default data;