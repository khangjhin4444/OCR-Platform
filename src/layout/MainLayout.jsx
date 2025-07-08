import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AppRoutes from "../routes/routes";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768); // Tự collapse nếu nhỏ hơn 768px
    };

    handleResize(); // Gọi ngay lúc load

    window.addEventListener("resize", handleResize); // Theo dõi resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className={`flex-grow-1 px-3`}>
        <Header />
        <AppRoutes />
      </div>
    </div>
  );
}
