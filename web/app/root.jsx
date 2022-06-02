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
      <Scripts />
    </head>

    <Navbar />

    <body>
      <section>
        <div className="container">
          <h1>{caught.status}</h1>
          <p>
            Looks like we have run into an error! Check the console for more
            information.
          </p>
          <br />
          <p>{caught.statusText}</p>
        </div>
      </section>
    </body>
  </html>;
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
        <Scripts />
      </head>

      <Navbar />

      <body>
        <section>
          <div className="container">
            <h1>Oops!</h1>
            <p>
              Looks like we have run into an error! This is either a bug, or
              this content may no longer exist. You may return to your previous
              page by hitting the Back button down in the bottom left of the
              page.
            </p>
            <br />
            <br />
            <h3>Error Message:</h3>
            <br />
            <p>{error.toString()}</p>
            <br />
            <p>
              <b>For more information, check the console.</b>
            </p>
          </div>
        </section>
      </body>
    </html>
  );
}
