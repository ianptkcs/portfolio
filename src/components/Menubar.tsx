import { Icon } from "@iconify-icon/solid";
import { useMatch, useNavigate } from "@solidjs/router";
import { For, JSX } from "solid-js";
import { Tab, tabOptions, kTabIcon } from "~/enums/tab";
import { Option } from "~/interfaces/option";

export default function Menubar(props: { children: JSX.Element }) {
  return (
    <div class="tabs tabs-lift tabs-lg w-full">
      <For each={tabOptions}>
        {(item) => (
          <>
            <label class="tab flex gap-2 font-bold text-lg" for={item.label}>
              <TabInput item={item} />
              <Icon icon={kTabIcon[item.value]} />
              {item.label.toLocaleUpperCase()}
            </label>
            <div class="tab-content bg-base-100 border-base-300 p-6 rounded-tr-none">
              {props.children}
            </div>
          </>
        )}
      </For>
      <div class="tab tab-active hover:cursor-default ml-auto">
        <label class="swap swap-rotate">
          <input type="checkbox" class="theme-controller" value="dracula" />
          <Icon icon="tabler:sun-high" class="swap-off" width="30px" />
          <Icon icon="tabler:moon" class="swap-on" width="30px"/>

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
