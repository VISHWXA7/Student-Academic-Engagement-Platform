import { redirect } from "next/navigation";
import { WorkspaceIdJoinClient } from "./client";

import { getCurrent } from "@/features/auth/queries";

const WorkspaceJoinPage = async () => {

    const user = await getCurrent();
    if (!user) redirect("/sign-in");

    return <WorkspaceIdJoinClient />
}
 
export default WorkspaceJoinPage;