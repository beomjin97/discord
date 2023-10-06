import { ServerSidebar } from "@/components/server/server-sidebar";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface ServerIdLayoutProps {
  children: ReactNode;
  params: { serverId: string };
}

const ServerIdLayout = async ({ children, params }: ServerIdLayoutProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const server = db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (!server) {
    return redirect("/");
  }

  return (
    <div className="h-full ">
      <div className="fixed inset-y-0 z-20 flex-col hidden h-full md:flex w-60">
        <ServerSidebar serverId={params.serverId} />
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
};

export default ServerIdLayout;
