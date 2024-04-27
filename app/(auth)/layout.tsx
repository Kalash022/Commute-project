const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
        <div className="bg-blue-100 h-screen">
            <div className="grid grid-cols-2 h-screen">
                <div className="flex items-center justify-center">
                    {/* <div className="relative left-[82vh] top-[-23vh] h-[150px] w-[180px] bg-blue-600 rounded-2xl"></div> */}
                    <img src="./bg1.png" alt="An art piece." className="absolute w-[375px] h-[750px] top-0 left-0"/>
                </div>
                {/* <div className="relative left-[82vh] top-[-23vh] h-[150px] w-[180px] bg-blue-600 rounded-2xl"></div> */}
                <div className="flex items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
     );
}
 
export default AuthLayout;