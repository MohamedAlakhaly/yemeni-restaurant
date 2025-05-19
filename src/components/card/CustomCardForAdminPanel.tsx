import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowUp } from "lucide-react";

function CustomCardForAdminPanel({
  cardTitle,
  cardIcon: CardIcon,
  cardContent,
  cardSubContent,
  cardSubContentColor,
  cardSubTitleIcon: CardSubTitleIcon,
  cardPrimaryColor
}) {
  return (
    <Card>
      <div className="flex px-5">
        <div className={`${cardPrimaryColor} p-[2px] rounded-xl`} />
        <div className="w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              <div className="flex justify-between items-center">
                {cardTitle}
                <div className={`${cardPrimaryColor} p-2 rounded-lg`}>
                  <CardIcon color="white" />
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {cardContent}
            </div>
            <div
              className={`flex items-center text-xs ${cardSubContentColor} mt-1`}
            >
              <CardSubTitleIcon className="h-3 w-3 mr-1" />
              <span>
                {cardSubContent}
              </span>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

export default CustomCardForAdminPanel;
