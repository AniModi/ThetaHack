import { Texture, Rectangle, BaseTexture } from "@pixi/core";
import { SpriteSheetData } from "../types/SpriteSheetData";

export const getTextureFromSpriteSheet = (sprite_sheet: {
  img: string;
  data: SpriteSheetData;
}): Texture[] => {
  const { img, data } = sprite_sheet;
  const baseTexture = BaseTexture.from(img);

  const newTextures = Object.keys(data.frames).map((frameName) => {
    const frame = data.frames[frameName].frame;
    return new Texture(
      baseTexture,
      new Rectangle(frame.x, frame.y, frame.w, frame.h)
    );
  });

  return newTextures;
};
