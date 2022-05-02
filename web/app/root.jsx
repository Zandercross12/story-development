import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
// components
import { Navbar } from "~/components/Navbar/Navbar";
// styles
import styles from "~/styles/main.css";

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
          crossOrigin="anonymous"
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

export function ErrorBoundary({ error }) {
  console.log(error);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script
          src="https://kit.fontawesome.com/e4319753b5.js"
          crossOrigin="anonymous"
        ></script>
        <Meta />
        <Links />
      </head>

      <Navbar />

      <body>
        <section>
          <div className="container">
            <h1>Error</h1>
            <p>
              Looks like we have run into an error! Check the console for more
              information.
            </p>
            <Scripts />
          </div>
        </section>
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <script
        src="https://kit.fontawesome.com/e4319753b5.js"
        crossOrigin="anonymous"
      ></script>
      <Meta />
      <Links />
    </head>

    <Navbar />

    <body>
      <section>
        <div className="container">
          <h1>{caught.status}</h1>
          <p>Looks like the page you were searching for does not exist!</p>
          <br />
          <p>{caught.statusText}</p>
          <Scripts />
        </div>
      </section>
    </body>
  </html>;
}
