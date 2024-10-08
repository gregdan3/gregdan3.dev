export interface Frontmatter {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  date: Date;
  updated?: Date;
}

// links.ts
export interface LinkData {
  name: string;
  href: string;
  icon?: string;
  tooltip?: string;
}

export interface IconLinkData extends LinkData {
  icon: string;
}

export interface DiscordShield {
  invite_link: string;
  label: string;
  server_id: string;
  logo: string;
  logoColor: string;
  labelColor: string;
  color: string;
  style: string;
}

export interface LanyardData {
  spotify: LanyardSpotifyData | null;
  kv: { [key: string]: string };
  listening_to_spotify: boolean;
  discord_user: LanyardDiscordUser;
  discord_status: DiscordStatus;
  activities: LanyardDiscordActivity[];
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_web: boolean;
}

export type DiscordStatus = "online" | "idle" | "dnd" | "offline";

export interface LanyardTimestamps {
  start: number;
  end: number;
}

export interface LanyardSpotifyData {
  track_id: string;
  timestamps: LanyardTimestamps;
  song: string;
  artist: string;
  album_art_url: string;
  album: string;
}

export interface LanyardDiscordUser {
  id: number;
  username: string; // searchable global identifier
  avatar: string;
  discriminator: string;
  bot: boolean;
  global_name: string; // nickname on discord
  avatar_decoration_data: string;
  display_name: string; // nickname on server
  public_flags: number;
}

export interface LanyardDiscordEmoji {
  id: number;
  name: string;
  animated: boolean;
}

export interface LanyardDiscordParty {
  id: string;
}

export interface LanyardDiscordAssets {
  small_text: string;
  small_image: string;
  large_text: string;
  large_image: string;
}

export interface LanyardDiscordActivity {
  type: number;
  state: string;
  name: string;
  id: string;
  emoji?: LanyardDiscordEmoji;
  created_at: number;
  timestamps?: LanyardTimestamps;
  sync_id?: string;
  session_id?: string;
  party?: LanyardDiscordParty;
  flags?: number;
  details?: string;
  assets?: LanyardDiscordAssets;
  application_id?: number;
}
