import Project1 from '../assets/mockup.png';
import Project2 from '../assets/Project1.png';
import Project3 from '../assets/jddev.png';
import Project4 from '../assets/nicerice.jpg';
import Project5 from '../assets/mockuputang.png';

const projects = [
    {
        id: 5,
        title: "Utang.ph",
        shortDescription: "An utang management system.",
        description: "Utang.ph is a web-based platform that helps individuals or group to manage their debt.",
        image: Project5,
        githubUrl: "",
        liveUrl: "https://utangph.vercel.app/",
        bgColor: "#292929",
        isLive: true,
        isSourceAvailable: false
    },
    {
        id: 1,
        title: "JD.dev",
        shortDescription: "My portfolio website.",
        description: "A professional portfolio Website.",
        image: Project3,
        githubUrl: "",
        liveUrl: "https://jdgayagoy.is-a.dev/",
        bgColor: "#292929",
        isLive: true,
        isSourceAvailable: false
    },
    {
        id: 2,
        title: "KICKS",
        shortDescription: "A Booking platform for Boarding House in Tuguegarao City.",
        description: "Shoe E-Commerce Platform built with Ionic/Angular and Firebase",
        image: Project1,
        githubUrl: "",
        liveUrl: "",
        bgColor: "#292929",
        isLive: false,
        isSourceAvailable: true
    },
    {
        id: 3,
        title: "BoardNBunk",
        shortDescription: "A Booking platform for Boarding House in Tuguegarao City.",
        description: "A Booking platform for Boarding House in Tuguegarao City.",
        image: Project2,
        githubUrl: "",
        liveUrl: "",
        bgColor: "#292929",
        isLive: true,
        isSourceAvailable: true
    },
    {
        id: 4,
        title: "NiceRice",
        shortDescription: "A Paddy rice drying system, with NiceRice App.",
        description: "An automated Paddy Rice Drying and Storage system using IoT technology, Connected to a Flutter Application using ESP32 Bluetooth connection.",
        image: Project4,
        githubUrl: "",
        liveUrl: "",
        bgColor: "#292929",
        isLive: false,
        isSourceAvailable: true
    }
];

export default projects;
