import { Technologies } from "@/typings";

export const fetchTechnologies = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_URL}/api/getTechnologies`);

    const data = await res.json();
    const technologies: Technologies[] = data.technologies;

 return technologies;
    
    

}