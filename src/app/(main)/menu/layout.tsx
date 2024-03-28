import { ADMIN_ROUTES } from "@/constants";
import { NavProvider } from "@/lib/context/nav-context";
import { InterfaceProvider } from "@/lib/context/interface-context";
import NavbarTemplate from "@/modules/layout/templates/nav";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <NavProvider>
        <InterfaceProvider>
          <NavbarTemplate routes={ADMIN_ROUTES} />
          <div className="w-full">{children}</div>
        </InterfaceProvider>
      </NavProvider>
    </div>
  );
}
