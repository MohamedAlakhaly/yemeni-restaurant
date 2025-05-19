import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { Button } from "../ui/button";

const LanguageButton = () => {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger>
        <Button variant="ghost" className={"w-full  justify-start "}>
          <Globe />
          Language
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent  align="end">
        <DropdownMenuSeparator />
        <DropdownMenuItem>FR</DropdownMenuItem>
        <DropdownMenuItem>EN</DropdownMenuItem>
        <DropdownMenuItem>NE</DropdownMenuItem>
        <DropdownMenuItem>AR</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageButton;
