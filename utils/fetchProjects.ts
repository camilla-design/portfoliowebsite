import { Project } from "@/typings";

export const fetchProjects = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_URL}/api/getProjects`);

    const data = await res.json();
    const project: Project[] = data.project;


return project;

}