import UserHeader from "@/components/layout/UserHeader";

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-4xl">
        <div className="p-4">
            <UserHeader />
            {children}
        </div>
    </div>
  );
}