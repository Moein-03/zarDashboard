"use client"

import { Moon, Sun, MonitorCog  } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <MonitorCog className="sr-only"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20" align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} dir="rtl">
          <Sun className="dark:text-secondary-foreground" /> روشن
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} dir="rtl">
          <Moon className="dark:text-secondary-foreground" /> تاریک
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} dir="rtl">
          <MonitorCog className="dark:text-secondary-foreground"/> سیستم
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
