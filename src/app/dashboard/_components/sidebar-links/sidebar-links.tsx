import Link from "next/link";
import { Container, List } from "./sidebar-links.style";

import { RxDashboard } from "react-icons/rx";

type LinkTypes = {
    id: number,
    name: string,
    url: string,
    icon: React.ReactNode
}

const LINKS: LinkTypes[] = [
    {
        id: 1,
        name: "Dashboard",
        url: "",
        icon: <RxDashboard />
    }
];

export function SidebarLinks(){
    return(
        <Container>
            <ul>
                { LINKS.map(({ name, url, icon, id}) => (
                    <List key={id}><Link href={url}><div>{icon}</div> <div>{name}</div></Link></List>
                ))}
            </ul>
        </Container>
    );
};