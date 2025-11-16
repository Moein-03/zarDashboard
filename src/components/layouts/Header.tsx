import { ModeToggle } from "./ModeToggle"
import Image from "next/image"
import { Button } from "../ui/button"
import { LogIn } from 'lucide-react';

const Header = () => {
     return (
          <header className="w-[99.8vw] md:w-[98.8vw] h-[14vh] fixed z-1">
               <section className="w-[99.9vw] md:w-full h-full p-5 bg-primary text-primary-foreground flex flex-row justify-between items-center">
                    <div className="w-[10rem] inline">
                         <Image src="/images/zarLogo.png" alt="Logo" width={80} height={100}/>
                    </div>
                    <div className="flex justify-between md:w-[10rem] md:ml-5">
                         <div className="ml-2 hidden md:inline">
                              <Button variant="outline" className="bg-primary dark:bg-primary">ورود<LogIn/>| ثبت نام</Button>
                         </div>
                         <div className="ml-2 flex items-center md:hidden">
                              <Button variant="outline" className="bg-primary dark:bg-primary"><LogIn/></Button>
                         </div>
                         <div>
                              <ModeToggle/>
                         </div>
                    </div>
               </section>
          </header>
     )
}

export default Header