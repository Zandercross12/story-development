import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
// components
import { Navbar } from "~/components/Navbar/Navbar";
// styles
import styles from "~/styles/main.css";

export function meta() {
  return { title: "Home" };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script
          src="https://kit.fontawesome.com/e4319753b5.js"
          crossorigin="anonymous"
        ></script>
        <Meta />
        <Links />
      </head>

      <Navbar />

      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
