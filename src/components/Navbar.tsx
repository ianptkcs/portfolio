import { A, useMatch, useNavigate } from "@solidjs/router";
import { For } from "solid-js";
import { Icon } from "~/enums/icons";
import { kTabIcon, Tab, tabOptions } from "~/enums/tab";
import { Option } from "~/interfaces/option";

export default function Navbar() {
  return (
    <div class="navbar card-border bg-base-100 border-2 rounded-lg border-base-300 shadow-md">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <For each={tabOptions}>
              {(item) => (
                <li>
                  <A href={item.value}>{item.label.toLocaleUpperCase()}</A>
                </li>
              )}
            </For>
          </ul>
        </div>
        <A href="/" class="btn btn-ghost uppercase text-xl">
          Ian Soares
        </A>
      </div>
      <div class="navbar-center hidden xl:flex">
        <ul class="menu menu-horizontal px-1">
          <For each={tabOptions}>
            {(item) => (
              <label class="tab flex gap-2 font-bold text-lg" for={item.label}>
                <TabInput item={item} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d={kTabIcon[item.value]}
                  />
                </svg>
                {item.label.toLocaleUpperCase()}
              </label>
            )}
          </For>
        </ul>
      </div>
      <div class="navbar-end me-4">
        <label class="swap swap-rotate">
          <input type="checkbox" class="theme-controller" value="dracula" />
          <svg
            class="swap-off size-5 lg:size-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d={Icon.sun} />
          </svg>

          <svg
            class="swap-on size-5 lg:size-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d={Icon.moon} />
          </svg>
        </label>
      </div>
    </div>
  );
}

function TabInput({ item }: { item: Option<Tab> }) {
  const match = useMatch(() => `/${item.value}`);
  const navigate = useNavigate();

  return (
      <input
        type="radio"
        id={item.label}
        name={item.label}
        aria-label={item.label}
        checked={Boolean(match())}
        onClick={() => navigate(`/${item.value}`)}
      />
  );
}
