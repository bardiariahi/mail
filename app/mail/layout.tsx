import Header from "../Header";
import SideBar from "../SideBar";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body>
        <div>
          <Header />
          {/* TODO: calc vh here later */}
          <div className="flex gap-6 p-6 h-[89vh]">
            <SideBar />
            <>{children}</>
          </div>
        </div>
      </body>
    </html>
  );
}
