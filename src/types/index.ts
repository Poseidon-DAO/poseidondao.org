export interface IArtist {
  name: string;
  email: string;
  bio: string;
  exhibitions?: string;
  samples?: string;
  twitter_url: string;
  instagram_url?: string;
  website?: string;
  project: string;
}

export interface INftFetch {
  token_address: string;
  token_id: string;
  token_name: string;
  block_number_minted: string;
  owner_of: string;
  block_number: string;
  amount: string;
  contract_type: string;
  name: string;
  symbol: string;
  token_uri: string;
  metadata: any;
  synced_at: string;
  is_valid: number;
  syncing: number;
  frozen: number;
}

export interface INft extends INftFetch {
  name: string;
  description: string;
  image: any;
  attributes: any;
}
