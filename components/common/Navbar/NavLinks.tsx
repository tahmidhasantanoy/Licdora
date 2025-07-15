import Link from "next/link";

interface link {
    label: string;
    href: string;
}

interface NavLinksProps {
    links : link[]
}

const NavLinks = ({links} : NavLinksProps) => {

    
    console.log(links);
    return (
        <div  className="flex items-center font-medium gap-4">
            {Array.isArray(links) && links.map((link,index) => 
                <Link key={index} href={link?.href} className="text-gray-50/85">{link?.label}</Link>
            )}
        </div>
    );
};

export default NavLinks;