import UserHeader from "@/components/layout/UserHeader";

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-30 py-10">
        <div className="p-4">
            <UserHeader />
            {children}
        </div>
    </div>
  );
}