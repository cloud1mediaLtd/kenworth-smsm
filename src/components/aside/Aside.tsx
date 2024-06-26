/**
 * A side bar component with Overlay that works without JavaScript.
 * @example
 * ```jsx
 * <Aside id="search-aside" heading="SEARCH">
 *  <input type="search" />
 *  ...
 * </Aside>
 * ```
 */
"use client";
export function Aside({
  children,
  heading,
  id = 'aside',
}: {
  children?: React.ReactNode;
  heading: React.ReactNode;
  id?: string;
}) {
  return (
    <div aria-modal className="overlay bg-black" id={id} role="dialog">
      <button
        type="button"
        className="close-outside"
        onClick={() => {
          history.go(-1);
          window.location.hash = '';
        }}
      />
      <aside className=" bg-background">
        <header>
          <h2></h2>
          <CloseAside />
        </header>
        <main>{children}</main>
      </aside>
    </div>
  );
}

function CloseAside() {
  return (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    <a className="close font-semibold text-2xl" href="#" onChange={() => history.go(-1)}>
      &times;
    </a>
  );
}
