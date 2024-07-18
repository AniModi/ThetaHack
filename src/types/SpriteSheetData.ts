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
}
