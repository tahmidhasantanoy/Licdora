"use client";

// interface ButtonProps {
//     label : string;
//     onClick : () => string;
//     variant : "primary" | "secondary" | "danger"; // This is a union of string literal types
//     type? : "button" | "submit" | "reset"; // Optional prop with union type
//     disable? : boolean; // Optional prop with boolean
// }

interface ButtonProps {
    label : string;
    // onClick : (param : string) => string;
    handleFunc? : () => void;
    variant : "primary" | "secondary" | "danger"; // This is a union of string literal types
    type? : "button" | "submit" | "reset"; // Optional prop with union type
    disable? : boolean; // Optional prop with boolean
}

const Button = ({label,handleFunc,variant,type,disable} : ButtonProps) => {

    // ()=>{
    //         console.log("See more clicked");
    //     // Implement your logic to fetch more posts or navigate to another page
    //     } 'onClick function from Button component


    const base = "w-44 h-12 px-6 py-3 text-black text-sm transition-all duration-200 gap-3 .rounded-xl rounded-3xl"
    const variants = {
        primary: "bg-[#DA6239] hover:bg-orange-800 focus:ring-2 focus:ring-black",
        secondary: "bg-gray-500 hover:bg-gray-600 focus:ring-2 focus:ring-gray-400",
        danger: "bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-400",
    }


    return (
        <button
            type={type || "button"}
            onClick={handleFunc}
            disabled={disable}
            className={`${base} ${variants[variant]}`}>
            {label}
        </button>
    );
};

export default Button;