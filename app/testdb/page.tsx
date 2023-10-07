import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
// import SupabaseLogo from "../../../components/SupabaseLogo";
// import NextJsLogo from "../../../components/NextJsLogo";
// import { getAllStaff } from "./database";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import logoImg from "../../public/logo.webp";
import sjuLogo from "../../public/sju-logo.webp";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[3rem] h-[3rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </li>
            <li
              id="home-log-out"
              className="sm:hidden text-center row-start-1 col-start-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </li>
              <li id="home-user-settings-link" className="hidden sm:inline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </li>
              <li id="home-log-out" className="hidden sm:inline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="hover:text-emerald-500 w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </li>
            </ul>
          </ul>
        </section>

        <section
          id="navbar-2"
          className="bg-teal-500 row-start-2 w-[10vw] h-full absolute invisible sm:visible top-0"
        >
          {/* Navigation Bar - 2 */}
          <ul
            id="navbar-2-elements"
            className="h-full lg:text-sm sm:text-[0.60rem] grid grid-cols-1 grid-rows-6 sm:gap-2 lg:gap-[1.5rem] items-center justify-between text-center"
          >
            <li>
              <Image
                id="logo-home"
                src={logoImg}
                alt="Logo Image"
                className="mx-auto lg:w-4/6 lg:h-4/6 md:3/5 md:3/5 w:2/5 h:2/5 pt-2"
              />
            </li>
            <li className="hover:text-emerald-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-auto w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <p>Dashboard</p>
            </li>
            <li className="hover:text-emerald-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-auto w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
              <p>Workshops</p>
            </li>
            <li className="hover:text-emerald-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-auto w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              <p>Conferences</p>
            </li>
            <li className="hover:text-emerald-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-auto w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <p>Journals</p>
            </li>
            <li className="hover:text-emerald-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-auto w-[2.5rem] h-[2.5rem] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <p>Patents</p>
            </li>
          </ul>
        </section>
      </header>
    </div>
  );
}
