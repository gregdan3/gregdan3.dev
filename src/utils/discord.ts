import { type DiscordStatus, type LanyardData } from "@utils/types.ts";
import { LANYARD_URL } from "@utils/consts.ts";

export async function getDiscordUserData(
  userID: string,
): Promise<LanyardData | null> {
  const resp = await fetch(`${LANYARD_URL}/users/${userID}`, {
    method: "GET",
  });
  if (!resp.ok) {
    return null;
  }
  const respWrapper = await resp.json();

  if (!respWrapper.success) {
    return null;
  }

  return respWrapper.data;
}

export function makeBannerURL(
  user_id: number,
  banner_id: string,
  size: number = 1024,
): string {
  return `https://cdn.discordapp.com/banners/${user_id}/${banner_id}?size=${size}`;
}
export function makeBadgeURL(
  badge_id: string,
  extension: string = "png",
): string {
  return `https://cdn.discordapp.com/badge-icons/${badge_id}.${extension}`;
}

export function makeEmojiURL(
  emoji_id: number,
  extension: string = "webp",
  size: number = 256,
  quality: string = "lossless",
): string {
  return `https://cdn.discordapp.com/emojis/${emoji_id}.${extension}?size=${size}&quality=${quality}`;
}

export function makeAssetURL(assetURL: string): string {
  return assetURL.replace("mp:", "https://media.discordapp.net/");
}

export function makeAvatarURL(
  user_id: number,
  avatar_id: string,
  size: number = 256,
): string {
  return `https://cdn.discordapp.com/avatars/${user_id}/${avatar_id}?size=${size}`;
}

export const statusColors: Record<string, string> = {
  online: "text-emerald-500",
  idle: "text-amber-500",
  dnd: "text-rose-500",
  offline: "text-gray-500",
};
export function getStatusColor(status: DiscordStatus) {
  const str = statusColors[status];
  if (!str) return "text-black";
  return str;
}

export function makeImg(url: string, alt?: string) {
  const img = document.createElement("img");
  img.src = url;
  if (alt) img.alt = alt;
  return img;
}

export function setBanner(data: LanyardData, target: HTMLDivElement) {
  const url = makeBannerURL(data.discord_user.id, data.kv.banner!);
  const img = makeImg(url);
  target.innerHTML = "";
  target.appendChild(img);
}

export function setAvatar(data: LanyardData, target: HTMLDivElement) {
  const url = makeAvatarURL(data.discord_user.id, data.discord_user.avatar);
  const img = makeImg(url);
  target.innerHTML = "";
  target.appendChild(img);
}

export async function hydrateDiscord(
  userID: string,
  bannerDiv: HTMLDivElement,
  avatarDiv: HTMLDivElement,
  statusDiv: HTMLDivElement,
  displayNameDiv: HTMLDivElement,
  usernameDiv: HTMLDivElement,
  activitiesDiv: HTMLDivElement,
  badgesDiv: HTMLDivElement,
): Promise<boolean> {
  const data = await getDiscordUserData(userID);
  if (!data) {
    return false;
  }

  setBanner(data, bannerDiv);
  setAvatar(data, avatarDiv);

  return true;
}
