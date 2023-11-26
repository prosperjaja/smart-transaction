import { Moon, Sun1 } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
  }, []);
  if (!active) return null;
  return (
    <figure className="border border-[#ccc] bg-slate-100 rounded-lg p-2 justify-between iflex">
      <div
        onClick={() => setTheme("light")}
        className={clsx(
          resolvedTheme === "light" ? "bg-slate-700" : null,
          "p-1 px-5 rounded-lg  justify-center cursor-pointer"
        )}
      >
        <Sun1
          color={`${resolvedTheme === "light" ? "#121212" : "#121212"}`}
          variant={resolvedTheme === "light" ? "Outline" : "Bold"}
          size={20}
        />
      </div>
      <div
        onClick={() => setTheme("dark")}
        className={clsx(
          resolvedTheme === "dark" ? "bg-[#ccc]" : null,
          "p-1 px-5 rounded-lg iflex  justify-center cursor-pointer"
        )}
      >
        <Moon
          size={20}
          color={`${resolvedTheme === "dark" ? "#121212" : "#121212"}`}
          variant={resolvedTheme === "dark" ? "Bold" : "Outline"}
        />
      </div>
    </figure>
  );
};
