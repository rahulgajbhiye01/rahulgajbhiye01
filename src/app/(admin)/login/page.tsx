import type { Metadata } from "next";
import Login from "@/components/pages/admin/login";

export const metadata: Metadata = {
  title: "Login",
};

export default async function LoginPage() {
  return (
    <div className="flex flex-col">
      <Login />
    </div>
  );
}
