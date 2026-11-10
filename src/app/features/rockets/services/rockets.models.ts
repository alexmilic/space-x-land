export interface RocketsResponse {
  count: number
  next: string
  previous: string
  results: Result[]
}

export interface Result {
  response_mode: string
  id: number
  url: string
  name: string
  families: Family[]
  full_name: string
  variant: string
  active?: boolean
  is_placeholder?: boolean
  manufacturer?: Manufacturer3
  program?: Program[]
  reusable?: boolean
  image?: Image5
  info_url?: string
  wiki_url?: string
  description?: string
  alias?: string
  min_stage?: number
  max_stage?: number
  length?: number
  diameter?: number
  maiden_flight?: string
  launch_cost?: number
  launch_mass?: number
  leo_capacity?: number
  gto_capacity?: number
  geo_capacity?: number
  sso_capacity?: number
  to_thrust?: number
  apogee?: number
  total_launch_count?: number
  consecutive_successful_launches?: number
  successful_launches?: number
  failed_launches?: number
  pending_launches?: number
  attempted_landings?: number
  successful_landings?: number
  failed_landings?: number
  consecutive_successful_landings?: number
  fastest_turnaround?: string
}

export interface Family {
  response_mode: string
  id: number
  name: string
  manufacturer?: Manufacturer[]
  parent?: Parent
  description?: string
  active?: boolean
  maiden_flight?: string
  total_launch_count?: number
  consecutive_successful_launches?: number
  successful_launches?: number
  failed_launches?: number
  pending_launches?: number
  attempted_landings?: number
  successful_landings?: number
  failed_landings?: number
  consecutive_successful_landings?: number
}

export interface Manufacturer {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type
  featured: boolean
  country: Country[]
  description: string
  administrator: string
  founding_year: number
  launchers: string
  spacecraft: string
  parent: string
  image: Image
  logo: Logo
  social_logo: SocialLogo
  total_launch_count?: number
  consecutive_successful_launches?: number
  successful_launches?: number
  failed_launches?: number
  pending_launches?: number
  consecutive_successful_landings?: number
  successful_landings?: number
  failed_landings?: number
  attempted_landings?: number
  successful_landings_spacecraft?: number
  failed_landings_spacecraft?: number
  attempted_landings_spacecraft?: number
  successful_landings_payload?: number
  failed_landings_payload?: number
  attempted_landings_payload?: number
  info_url?: string
  wiki_url?: string
  social_media_links?: SocialMediaLink[]
}

export interface Type {
  id: number
  name: string
}

export interface Country {
  id: number
  name: string
  alpha_2_code: string
  alpha_3_code: string
  nationality_name: string
  nationality_name_composed: string
}

export interface Image {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License
  single_use: boolean
  variants: Variant[]
}

export interface License {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant {
  id: number
  type: Type2
  image_url: string
}

export interface Type2 {
  id: number
  name: string
}

export interface Logo {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License2
  single_use: boolean
  variants: Variant2[]
}

export interface License2 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant2 {
  id: number
  type: Type3
  image_url: string
}

export interface Type3 {
  id: number
  name: string
}

export interface SocialLogo {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License3
  single_use: boolean
  variants: Variant3[]
}

export interface License3 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant3 {
  id: number
  type: Type4
  image_url: string
}

export interface Type4 {
  id: number
  name: string
}

export interface SocialMediaLink {
  id: number
  social_media: SocialMedia
  url: string
}

export interface SocialMedia {
  id: number
  name: string
  url: string
  logo: Logo2
}

export interface Logo2 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License4
  single_use: boolean
  variants: Variant4[]
}

export interface License4 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant4 {
  id: number
  type: Type5
  image_url: string
}

export interface Type5 {
  id: number
  name: string
}

export interface Parent {
  response_mode: string
  id: number
  name: string
  manufacturer?: Manufacturer2[]
  parent?: Parent2
}

export interface Manufacturer2 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type6
  featured: boolean
  country: Country2[]
  description: string
  administrator: string
  founding_year: number
  launchers: string
  spacecraft: string
  parent: string
  image: Image2
  logo: Logo3
  social_logo: SocialLogo2
}

export interface Type6 {
  id: number
  name: string
}

export interface Country2 {
  id: number
  name: string
  alpha_2_code: string
  alpha_3_code: string
  nationality_name: string
  nationality_name_composed: string
}

export interface Image2 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License5
  single_use: boolean
  variants: Variant5[]
}

export interface License5 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant5 {
  id: number
  type: Type7
  image_url: string
}

export interface Type7 {
  id: number
  name: string
}

export interface Logo3 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License6
  single_use: boolean
  variants: Variant6[]
}

export interface License6 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant6 {
  id: number
  type: Type8
  image_url: string
}

export interface Type8 {
  id: number
  name: string
}

export interface SocialLogo2 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License7
  single_use: boolean
  variants: Variant7[]
}

export interface License7 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant7 {
  id: number
  type: Type9
  image_url: string
}

export interface Type9 {
  id: number
  name: string
}

export interface Parent2 {
  response_mode: string
  id: number
  name: string
}

export interface Manufacturer3 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type10
  featured: boolean
  country: Country3[]
  description: string
  administrator: string
  founding_year: number
  launchers: string
  spacecraft: string
  parent: string
  image: Image3
  logo: Logo4
  social_logo: SocialLogo3
  total_launch_count?: number
  consecutive_successful_launches?: number
  successful_launches?: number
  failed_launches?: number
  pending_launches?: number
  consecutive_successful_landings?: number
  successful_landings?: number
  failed_landings?: number
  attempted_landings?: number
  successful_landings_spacecraft?: number
  failed_landings_spacecraft?: number
  attempted_landings_spacecraft?: number
  successful_landings_payload?: number
  failed_landings_payload?: number
  attempted_landings_payload?: number
  info_url?: string
  wiki_url?: string
  social_media_links?: SocialMediaLink2[]
}

export interface Type10 {
  id: number
  name: string
}

export interface Country3 {
  id: number
  name: string
  alpha_2_code: string
  alpha_3_code: string
  nationality_name: string
  nationality_name_composed: string
}

export interface Image3 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License8
  single_use: boolean
  variants: Variant8[]
}

export interface License8 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant8 {
  id: number
  type: Type11
  image_url: string
}

export interface Type11 {
  id: number
  name: string
}

export interface Logo4 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License9
  single_use: boolean
  variants: Variant9[]
}

export interface License9 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant9 {
  id: number
  type: Type12
  image_url: string
}

export interface Type12 {
  id: number
  name: string
}

export interface SocialLogo3 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License10
  single_use: boolean
  variants: Variant10[]
}

export interface License10 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant10 {
  id: number
  type: Type13
  image_url: string
}

export interface Type13 {
  id: number
  name: string
}

export interface SocialMediaLink2 {
  id: number
  social_media: SocialMedia2
  url: string
}

export interface SocialMedia2 {
  id: number
  name: string
  url: string
  logo: Logo5
}

export interface Logo5 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License11
  single_use: boolean
  variants: Variant11[]
}

export interface License11 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant11 {
  id: number
  type: Type14
  image_url: string
}

export interface Type14 {
  id: number
  name: string
}

export interface Program {
  response_mode: string
  id: number
  url: string
  name: string
  image: Image4
  info_url: string
  wiki_url: string
  description: string
  agencies: Agency[]
  start_date: string
  end_date: string
  mission_patches: MissionPatch[]
  type: Type18
}

export interface Image4 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License12
  single_use: boolean
  variants: Variant12[]
}

export interface License12 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant12 {
  id: number
  type: Type15
  image_url: string
}

export interface Type15 {
  id: number
  name: string
}

export interface Agency {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type16
}

export interface Type16 {
  id: number
  name: string
}

export interface MissionPatch {
  id: number
  name: string
  priority: number
  image_url: string
  agency: Agency2
  response_mode: string
}

export interface Agency2 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type17
}

export interface Type17 {
  id: number
  name: string
}

export interface Type18 {
  id: number
  name: string
}

export interface Image5 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License13
  single_use: boolean
  variants: Variant13[]
}

export interface License13 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant13 {
  id: number
  type: Type19
  image_url: string
}

export interface Type19 {
  id: number
  name: string
}
