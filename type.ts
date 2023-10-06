import { Member, Server, Profile } from "@prisma/client";

export type ServerWithMebersWithProfile = Server & {
  members: (Member & { profile: Profile })[];
};
