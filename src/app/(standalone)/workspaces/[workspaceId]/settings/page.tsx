import { redirect } from "next/navigation";
import { WorkspaceIdSettingsClient } from "./client";

import { getCurrent } from "@/features/auth/queries";

const WorkspaceIdSettings = async () => {
    const user = await getCurrent();
    if(!user) redirect("/sign-in");
    
    return <WorkspaceIdSettingsClient />
}
 
export default WorkspaceIdSettings;