import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import SupabaseLogo from "../components/SupabaseLogo";
import NextJsLogo from "../components/NextJsLogo";
import { getAllStaff } from "./database";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import logoImg from "../public/logo.webp";
import sjuLogo from "../public/sju-logo.webp";
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
      className={`flex flex-col bg-emerald-100 bg-cover ${bodyText.className}`}
    >
      <header className="w-full md:h-[10vh]">
        <ul className={`flex flex-row justify-between`}>
          <ul>
            <li className={`text-3xl pl-5`}>
              <Image src={logoImg} width={60} height={60} alt="Logo Image" />
            </li>
          </ul>
          <h1 className={`text-emerald-900 text-center text-2xl font-semibold self-center`}>
            Welcome back! [user.name]
          </h1>
          <ul className={`flex flex-row gap-4 `}>
            <li className={`self-center`}>
              <AccountCircleOutlinedIcon fontSize="large" />
            </li>
            <li className={`self-center pr-5`}>
              <SettingsOutlinedIcon fontSize="large" />
            </li>
          </ul>
        </ul>
      </header>
      <main className={`w-full md:h-[80vh] flex flex-row gap-3`}>
        <ul
          className={`text-emerald-950 border border-transparent rounded-t flex flex-col justify-start bg-emerald-400 w-1/12 gap-4 items-center py-6 ${bodyText.className}`}
        >
          <ul>
            <li className={`text-center`}>
              <DashboardOutlinedIcon sx={{ fontSize: 40 }} />
            </li>
            <li className={`text-md`}>Dashboard</li>
          </ul>
          <ul>
            <li className={`text-center`}>
              <WorkOutlineOutlinedIcon sx={{ fontSize: 40 }} />
            </li>
            <li className={`text-md`}>Workshops</li>
          </ul>
          <ul>
            <li className={`text-center`}>
              <Groups2OutlinedIcon sx={{ fontSize: 40 }} />
            </li>
            <li className={`text-md`}>Conferences</li>
          </ul>
          <ul>
            <li className={`text-center`}>
              <MenuBookOutlinedIcon sx={{ fontSize: 40 }} />
            </li>
            <li className={`text-md`}>Journal</li>
          </ul>
          <ul>
            <li className={`text-center`}>
              <BiotechOutlinedIcon sx={{ fontSize: 40 }} />
            </li>
            <li className={`text-md`}>Patents</li>
          </ul>
          <ul>
            <li className={`text-center`}>
              <LocalPoliceIcon sx={{ fontSize: 40 }} />
            </li>
            <li className={`text-md`}>Modify</li>
          </ul>
        </ul>

        <div className={`flex flex-col gap-8`}>
          <div className={`flex flex-row gap-10 justify-evenly`}>
            <ul
              className={`text-emerald-900 h-6/8 p-4 bg-emerald-200 border border-transparent rounded`}
            >
              <li className={`px-12 py-20 border border-cyan-800`}>
                Account Image
              </li>
              <div className={`border border-cyan-700 p-4`}>
                <li>Name</li>
                <li>Designation</li>
                <li>Contact</li>
              </div>
            </ul>
            <ul
              className={`bg-emerald-200 flex flex-row gap-3 p-4 h-6/8 border border-transparent rounded`}
            >
              <ul className={`border border-cyan-700 h-6/8 p-4 bg-emerald-600`}>
                <li className={`px-12 py-20 text-emerald-100`}>Recent Conferences</li>
                <div
                  className={`text-emerald-900 border border-cyan-800 p-4 bg-emerald-200 rounded`}
                >
                  <li>Title</li>
                  <li>Location</li>
                  <li>Date</li>
                </div>
              </ul>
              <ul className={`border border-cyan-700 h-6/8 p-4 bg-emerald-600`}>
                <li className={`px-12 py-20 text-emerald-100`}>Recent Journals</li>
                <div
                  className={`text-emerald-900 border border-cyan-800 p-4 bg-emerald-200 rounded`}
                >
                  <li>Title</li>
                  <li>Location</li>
                  <li>Date</li>
                </div>
              </ul>
              <ul className={`border border-cyan-700 h-6/8 p-4 bg-emerald-600`}>
                <li className={`px-12 py-20 text-emerald-100`}>Recent Workshops</li>
                <div
                  className={`border border-cyan-800 p-4 bg-emerald-200 rounded`}
                >
                  <li>Title</li>
                  <li>Location</li>
                  <li>Date</li>
                </div>
              </ul>
            </ul>
          </div>

          <ul
            className={`flex flex-row gap-12 justify-around py-6 bg-emerald-200 border border-transparent rounded text-emerald-100 font-semibold`}
          >
            <li
              className={`shadow-lg shadow-emerald-600 bg-emerald-800 p-4 px-6 border border-transparent rounded`}
            >
              Workshops
            </li>
            <li className={`shadow-lg shadow-emerald-600 bg-emerald-800 p-4 border border-transparent rounded`}>
              Conferences
            </li>
            <li
              className={`shadow-lg shadow-emerald-600 bg-emerald-800 p-4 px-8 border border-transparent rounded`}
            >
              Journals
            </li>
            <li
              className={`shadow-lg shadow-emerald-600 bg-emerald-800 p-4 px-8 border border-transparent rounded`}
            >
              Patents
            </li>
          </ul>
        </div>
      </main>
      <footer className={`w-full md:h-[10vh] bg-emerald-700 grid`}>
        <ul className={`items-self-center grid grid-cols-3 gap-32 items-center justify-center text-emerald-200`}>
          <li className={`font-bold col-start-1`}>
            <Image src={sjuLogo} width={50} height={50} alt="SJU Logo"/>
          </li>
          <li className={`font-bold col-start-2`}>contact details</li>
          <li className={`font-bold col-start-3`}>copyright</li>
        </ul>
      </footer>
    </div>
  );
}