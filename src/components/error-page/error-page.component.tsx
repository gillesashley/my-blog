import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message: string };
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {typeof error === "object" && error !== null
            ? error.statusText || error.message
            : "An unknown error occurred"}
        </i>
      </p>
    </div>
  );
}
