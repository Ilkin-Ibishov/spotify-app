
export interface PlaylistsINT {
    href: string,
    items: ItemINT[],
    limit: number,
    next: any,
    offset: number,
    previous: any,
    total: number
  }
export interface ItemINT {
    collaborative:boolean,
    description: string,
    external_urls: {spotify: string}
    href: string,
    id: string,
    images:any,
    name: string,
    owner: Owner
    primary_color: object,
    public :boolean,
    snapshot_id: string,
    tracks:{href: string, total: number}
    type: string,
    uri: string}

export interface Owner {
  display_name: string, 
  external_urls: any, 
  href: string, 
  id: string, 
  type: string, 
  url:string
}
export interface PlaylistData {
      tracks: {
        href: string;
        items: {
          added_at: string;
          added_by: {
            external_urls: any;
            href: string;
            id: string;
            type: string;
            uri: string;
          };
          is_local: boolean;
          primary_color: any;
          track: Track;
        }[];
        limit: number;
        next: any;
        offset: number;
        previous: any;
        total: number;
      };
    }
    
export interface Track {
      album: Album;
      artists: any;
      available_markets: any;
      disc_number: number;
      duration_ms: number;
      episode: boolean;
      explicit: boolean;
      external_ids: any;
      external_urls: any;
      href: string;
      id: string;
      is_local: boolean;
      name: string;
      popularity: number;
      preview_url: string;
      track: boolean;
      track_number: number;
      type: string;
      uri: string;
    }
    
export interface Album {
      album_type: string;
      artists: {
        external_urls: any;
        href: string;
        id: string;
        name: string;
        type: string;
      }[];
      available_markets: string[];
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: {
        url: string;
        width: number;
        height: number;
      }[];
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    }
    