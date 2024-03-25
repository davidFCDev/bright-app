import NavbarTemplate from "@/modules/layout/templates/nav";
import { VOL_ROUTES } from "@/constants";
import { NavProvider } from "@/lib/context/nav-context";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <NavProvider>
        <NavbarTemplate routes={VOL_ROUTES} />
        <div className="w-full">{children}</div>
      </NavProvider>
    </div>
  );
}
