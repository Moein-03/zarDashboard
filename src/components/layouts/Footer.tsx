import { Button } from "../ui/button"
import Link from "next/link"

const Footer = () => {
     return (
          <footer className="w-[99.8vw] md:w-[98.8vw] h-[12vh] flex justify-center items-center bg-foreground text-background dark:bg-secondary-foreground dark:text-background font-[vazirThin]  text-[0.7rem] md:text-[1rem]">
               این برنامه نمونه کار
               <Link target="_blank" href="https://github.com/Moein-03">
               <Button variant="ghost" className="font-[vazirBold] text-base w-[7rem]">معین خسروی</Button>
               </Link>می‌باشد و کاربرد عملی ندارد. | ©
          </footer>
     )
}

export default Footer