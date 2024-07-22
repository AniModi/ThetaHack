export interface SpriteSheetData {
  frames: {
    [frameName: string]: {
      frame: {
        x: number;
        y: number;
        w: number;
        h: number;
      };
      rotated: boolean;
      trimmed: boolean;
      spriteSourceSize: {
        x: number;
        y: number;
        w: number;
        h: number;
      };
      sourceSize: {
        w: number;
        h: number;
      };
    };
  };
  meta: {
    app: string;
    version: string;
    image: string;
    format: string;
    size: {
      w: number;
      h: number;
    };
    scale: string;
  };
}