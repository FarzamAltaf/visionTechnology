import { TextInfo } from "./ThemeConstant";

function Problem({ icon, text, className = "" }) {
    return (
        <>
            <div className={`p-2 sm:w-1/2 w-full ${className}`}>
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <span className={`${TextInfo} w-6 h-6 flex-shrink-0 mr-4`}>
                        {icon}
                    </span>
                    <span className="title-font font-medium text-gray-500">
                        {text}
                    </span>
                </div>
            </div>
        </>
    );
}

export default Problem;