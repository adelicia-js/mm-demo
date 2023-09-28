import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
// import SupabaseLogo from "../../../components/SupabaseLogo";
// import NextJsLogo from "../../../components/NextJsLogo";
// import { getAllStaff } from "./database";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import logoImg from "../../../public/logo.webp";
import sjuLogo from "../../../public/sju-logo.webp";

//TODO: Make this a protected route (see example)
//TODO: Make this the dashboard

export const dynamic = "force-dynamic";

// const bodyText = Inter({ subsets: ["latin"] });
const bodyText = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const resources = [
  {
    title: "Cookie-based Auth and the Next.js App Router",
    subtitle:
      "This free course by Jon Meyers, shows you how to configure Supabase Auth to use cookies, and steps through some common patterns.",
    url: "https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF",
    icon: "M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21M4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20Z",
  },
  {
    title: "Supabase Next.js App Router Example",
    subtitle:
      "Want to see a code example containing some common patterns with Next.js and Supabase? Check out this repo!",
    url: "https://github.com/supabase/supabase/tree/master/examples/auth/nextjs",
    icon: "M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8",
  },
  {
    title: "Supabase Auth Helpers Docs",
    subtitle:
      "This template has configured Supabase Auth to use cookies for you, but the docs are a great place to learn more.",
    url: "https://supabase.com/docs/guides/auth/auth-helpers/nextjs",
    icon: "M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528",
  },
];

const examples = [
  { type: "Client Components", src: "app/_examples/client-component/page.tsx" },
  { type: "Server Components", src: "app/_examples/server-component/page.tsx" },
  { type: "Server Actions", src: "app/_examples/server-action/page.tsx" },
  { type: "Route Handlers", src: "app/_examples/route-handler.ts" },
  { type: "Middleware", src: "app/middleware.ts" },
  { type: "Protected Routes", src: "app/_examples/protected/page.tsx" },
];

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div
      id="dashboard"
      className={`${bodyText.className} m-0 w-full min-h-screen bg-teal-500/40`}
    >
      {/* Navigation Bars (horizontal and vertical) */}
      <header id="menu" className="grid grid-cols-3 grid-rows-2">
        <section id="navbar-1" className="h-[10vh] row-start-1 col-span-3">
          {/* Navigation Bar - 1 */}
          <ul
            id="navbar-1-elements"
            className="grid grid-cols-3 grid-rows-2 items-center justify-center"
          >
            <li
              id="home-logo-box"
              className={`visible sm:invisible text-3xl col-start-2 sm:col-start-1 row-start-1`}
            >
              <Image
                id="logo-home"
                src={logoImg}
                alt="Logo Image"
                className="sm:m-0 my-0 mx-auto w-4/5 h-4/5 sm:w-3/6 md:w-2/6 lg:w-1/5 sm:h-3/6 md:h-2/6 lg:h-1/5"
              />
            </li>
            <li
              id="home-small-navbar-btn"
              className="sm:hidden text-center row-start-1 col-start-1"
            >
              <MenuOpenRoundedIcon className="hover:text-emerald-500 w-[3rem] h-[3rem]" />
            </li>
            <li
              id="home-log-out"
              className="sm:hidden text-center row-start-1 col-start-3"
            >
              <ExitToAppRoundedIcon 
              className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" />
            </li>
            {/* <ul id="home-small-navbar-elements" 
                    className="sm:hidden flex flex-col gap-8 absolute top-0 text-center items-center justify-center bg-black text-white w-screen h-screen">
              <li><CloseRoundedIcon
              className="w-[2rem] h-[2rem]"
              /></li>
              <li>Home</li>
              <li>Workshops</li>
              <li>Conferences</li>
              <li>Journals</li>
              <li>Patents</li>  
            </ul> */}
            <h1
              id="home-greeting-user-header"
              className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl text-emerald-900 font-semibold text-center row-start-2 col-span-3 sm:col-span-1 sm:col-start-2 sm:row-start-1 -mt-20 sm:m-0`}
            >
              Welcome back! [user.name]
            </h1>
            <ul
              id="home-user-actions-elements"
              className={`row-start-1 col-start-3 justify-self-end flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 pr-4`}
            >
              <li id="home-user-profile-link" className="hidden sm:inline">
                <AccountCircleOutlinedIcon className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" />
              </li>
              <li id="home-user-settings-link" className="hidden sm:inline">
                <SettingsOutlinedIcon className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" />
              </li>
              <li id="home-log-out" className="hidden sm:inline">
                <ExitToAppRoundedIcon className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" />
              </li>
            </ul>
          </ul>
        </section>

        <section
          id="navbar-2"
          className="bg-teal-500 row-start-2 w-[10vw] h-screen absolute invisible sm:visible top-0"
        >
          {/* Navigation Bar - 2 */}
          <ul id="navbar-2-elements" className="lg:text-sm sm:text-[0.60rem] grid grid-cols-1 grid-rows-6 sm:gap-2 lg:gap-[1.5rem] items-center justify-between text-center">
          <li>
              <Image
                id="logo-home"
                src={logoImg}
                alt="Logo Image"
                className="mx-auto lg:w-4/6 lg:h-4/6 md:3/5 md:3/5 w:2/5 h:2/5 pt-2"
              />
            </li>
            <li className="hover:text-emerald-300 ">
              <DashboardOutlinedIcon
              className="w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" />
              <p>Dashboard</p>
            </li>
            <li className="hover:text-emerald-300 ">
              <WorkOutlineOutlinedIcon
              className="w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" />
              <p>Workshops</p>
              </li>
            <li className="hover:text-emerald-300 ">
              <Groups2OutlinedIcon
              className="w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" />
              <p>Conferences</p>
            </li>
            <li className="hover:text-emerald-300 ">
              <MenuBookOutlinedIcon
              className="w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" />
              <p>Journals</p>
            </li>
            <li className="hover:text-emerald-300 ">
              <BiotechOutlinedIcon
              className="w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" />
              <p>Patents</p>
              </li>
          </ul>
        </section>
      </header>
    </div>
  );
}
