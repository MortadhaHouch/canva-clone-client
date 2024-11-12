import {useContext, useState} from "react"
import { ThemeContext } from "../../providers/themeProvider"
import Feedback from "../LayoutComponents/Feedback";
import {CreatePost} from "../LayoutComponents/CreatePost.jsx";
const feedbacks = [
    {
        content: "The new update greatly improved the app's speed and performance.",
        author: {
            name: "Alice Johnson",
            email: "alice.j@example.com",
            avatar: "https://example.com/avatars/alice.jpg"
        },
        likes: 120,
        dislikes: 5,
        comments: 20
    },
    {
        content: "Found a few bugs while using the task filter feature.",
        author: {
            name: "Bob Smith",
            email: "bob.s@example.com",
            avatar: "https://example.com/avatars/bob.jpg"
        },
        likes: 80,
        dislikes: 15,
        comments: 5
    },
    {
        content: "Loving the new dark mode! It’s much easier on the eyes.",
        author: {
            name: "Clara Kim",
            email: "clara.k@example.com",
            avatar: "https://example.com/avatars/clara.jpg"
        },
        likes: 150,
        dislikes: 2,
        comments: 12
    },
    {
        content: "The app crashes occasionally on startup. Please fix this issue.",
        author: {
            name: "David Lee",
            email: "david.l@example.com",
            avatar: "https://example.com/avatars/david.jpg"
        },
        likes: 45,
        dislikes: 30,
        comments: 8
    },
    {
        content: "It would be great to have more customization options for the UI.",
        author: {
            name: "Eva Green",
            email: "eva.g@example.com",
            avatar: "https://example.com/avatars/eva.jpg"
        },
        likes: 70,
        dislikes: 10,
        comments: 15
    },
    {
        content: "The new notification system is fantastic and keeps me updated on important events.",
        author: {
            name: "Frank Liu",
            email: "frank.l@example.com",
            avatar: "https://example.com/avatars/frank.jpg"
        },
        likes: 95,
        dislikes: 4,
        comments: 18
    },
    {
        content: "A bit too many ads on the free version. It's becoming a distraction.",
        author: {
            name: "Grace Yang",
            email: "grace.y@example.com",
            avatar: "https://example.com/avatars/grace.jpg"
        },
        likes: 60,
        dislikes: 25,
        comments: 10
    },
    {
        content: "Can we have a feature to sync data across multiple devices?",
        author: {
            name: "Henry Wilson",
            email: "henry.w@example.com",
            avatar: "https://example.com/avatars/henry.jpg"
        },
        likes: 130,
        dislikes: 7,
        comments: 22
    },
    {
        content: "The customer support was incredibly helpful and resolved my issue quickly.",
        author: {
            name: "Ivy Patel",
            email: "ivy.p@example.com",
            avatar: "https://example.com/avatars/ivy.jpg"
        },
        likes: 140,
        dislikes: 3,
        comments: 25
    },
    {
        content: "I appreciate the continuous updates and improvements. Keep it up!",
        author: {
            name: "Jack Harris",
            email: "jack.h@example.com",
            avatar: "https://example.com/avatars/jack.jpg"
        },
        likes: 200,
        dislikes: 1,
        comments: 30
    },
    {
        content: "The layout seems cluttered, especially on smaller screens. Can this be optimized?",
        author: {
            name: "Kara Nguyen",
            email: "kara.n@example.com",
            avatar: "https://example.com/avatars/kara.jpg"
        },
        likes: 55,
        dislikes: 12,
        comments: 7
    },
    {
        content: "Using this app has made my work much more organized and manageable.",
        author: {
            name: "Leo Brown",
            email: "leo.b@example.com",
            avatar: "https://example.com/avatars/leo.jpg"
        },
        likes: 165,
        dislikes: 6,
        comments: 24
    },
    {
        content: "Notifications are a bit inconsistent, sometimes delayed. Needs improvement.",
        author: {
            name: "Mia Lopez",
            email: "mia.l@example.com",
            avatar: "https://example.com/avatars/mia.jpg"
        },
        likes: 75,
        dislikes: 18,
        comments: 14
    },
    {
        content: "The tutorial was really helpful for first-time users.",
        author: {
            name: "Noah Martinez",
            email: "noah.m@example.com",
            avatar: "https://example.com/avatars/noah.jpg"
        },
        likes: 85,
        dislikes: 5,
        comments: 10
    },
    {
        content: "Please add more themes to choose from!",
        author: {
            name: "Olivia Davis",
            email: "olivia.d@example.com",
            avatar: "https://example.com/avatars/olivia.jpg"
        },
        likes: 90,
        dislikes: 8,
        comments: 12
    },
    {
        content: "The app works smoothly even with large datasets. Impressive performance.",
        author: {
            name: "Paul Anderson",
            email: "paul.a@example.com",
            avatar: "https://example.com/avatars/paul.jpg"
        },
        likes: 110,
        dislikes: 3,
        comments: 16
    }
];

export default function Community() {
    const theme = useContext(ThemeContext);
    const [posts,setPosts] = useState([])
    return (
        <main
            style={{
                backgroundColor:theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"#133E87":"#E5D9F2"
            }}
            className="w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center gap-2 p-5"
        >
            <CreatePost posts={posts} setPost={setPosts}/>
            {
                feedbacks.map((item,index)=>{
                    return (
                        <Feedback item={item} key={index} index={index}/>
                    )
                })
            }
        </main>
    )
}
