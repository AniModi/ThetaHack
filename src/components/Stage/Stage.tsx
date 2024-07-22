import { Stage as PixiStage, _ReactPixi } from "@pixi/react";
import { GameContext } from "../../contexts/GameContext";
import ContextBridge from "../../contexts/ContextBridge";
import { ReactNode } from "react";
import { CardContext } from "../../contexts/CardContext";

interface StageProps extends _ReactPixi.IStage{
  children: ReactNode;
}

export default function Stage({ children, ...props }: StageProps) {
  return (
    <ContextBridge
      Context1={GameContext}
      Context2={CardContext}
      render={(children) => <PixiStage {...props}>{children}</PixiStage>}
    >
      {children}
    </ContextBridge>
  );
}
