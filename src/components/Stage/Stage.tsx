import { Stage as PixiStage, _ReactPixi } from "@pixi/react";
import { GameContext } from "../../contexts/GameContext";
import ContextBridge from "../../contexts/ContextBridge";
import { ReactNode } from "react";

interface StageProps extends _ReactPixi.IStage {
  children: ReactNode;
}

export default function Stage({ children, ...props }: StageProps) {
  return (
    <ContextBridge
      Context={GameContext}
      render={(children) => <PixiStage {...props}>{children}</PixiStage>}
    >
      {children}
    </ContextBridge>
  );
}
