export interface UpcomingLaunchesResponse {
  count: number
  next: string
  previous: string
  results: Result[]
}

export interface Result {
  id: string
  url: string
  name: string
  response_mode: string
  slug: string
  launch_designator?: string
  status: Status
  last_updated: string
  net: string
  net_precision: any
  window_end: string
  window_start: string
  image: Image | null
  infographic: any
  probability: any
  weather_concerns: any
  failreason?: string
  hashtag: any
  launch_service_provider: LaunchServiceProvider
  rocket: Rocket
  mission: Mission | null
  pad: Pad
  webcast_live: boolean
  program: any[]
  orbital_launch_attempt_count: number
  location_launch_attempt_count: number
  pad_launch_attempt_count: number
  agency_launch_attempt_count: number
  orbital_launch_attempt_count_year: number
  location_launch_attempt_count_year: number
  pad_launch_attempt_count_year: number
  agency_launch_attempt_count_year: number
}

export interface Status {
  id: number
  name: string
  abbrev: string
  description: string
}

export interface Image {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit?: string
  license: License
  single_use: boolean
  variants: any[]
}

export interface License {
  id: number
  name: string
  priority: number
  link?: string
}

export interface LaunchServiceProvider {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type
}

export interface Type {
  id: number
  name: string
}

export interface Rocket {
  id: number
  configuration: Configuration
}

export interface Configuration {
  response_mode: string
  id: number
  url: string
  name: string
  families: Family[]
  full_name: string
  variant: string
}

export interface Family {
  response_mode: string
  id: number
  name: string
}

export interface Mission {
  id: number
  name: string
  type: string
  description: string
  image: any
  orbit: Orbit
  agencies: any[]
  info_urls: any[]
  vid_urls: any[]
}

export interface Orbit {
  id: number
  name: string
  abbrev: string
  celestial_body: CelestialBody
}

export interface CelestialBody {
  response_mode: string
  id: number
  name: string
}

export interface Pad {
  id: number
  url: string
  active: boolean
  agencies: Agency[]
  name: string
  image: any
  description: any
  info_url: any
  wiki_url: string
  map_url: string
  latitude: number
  longitude: number
  country: Country2
  map_image: string
  total_launch_count: number
  orbital_launch_attempt_count: number
  fastest_turnaround: string
  location: Location
}

export interface Agency {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type2
  featured: boolean
  country: Country[]
  description: string
  administrator?: string
  founding_year: number
  launchers: string
  spacecraft: string
  parent: any
  image: any
  logo?: Logo
  social_logo?: SocialLogo
}

export interface Type2 {
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

export interface Logo {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: any
  license: License2
  single_use: boolean
  variants: any[]
}

export interface License2 {
  id: number
  name: string
  priority: number
  link: any
}

export interface SocialLogo {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: any
  license: License3
  single_use: boolean
  variants: any[]
}

export interface License3 {
  id: number
  name: string
  priority: number
  link: any
}

export interface Country2 {
  id: number
  name: string
  alpha_2_code: string
  alpha_3_code: string
  nationality_name: string
  nationality_name_composed: string
}

export interface Location {
  response_mode: string
  id: number
  url: string
  name: string
  celestial_body: CelestialBody2
  active: boolean
  country: Country3
  description: string
  image: Image3
  map_image: string
  longitude: number
  latitude: number
  timezone_name: string
  total_launch_count: number
  total_landing_count: number
}

export interface CelestialBody2 {
  response_mode: string
  id: number
  name: string
  type: Type3
  diameter: number
  mass: number
  gravity: number
  length_of_day: string
  atmosphere: boolean
  image: Image2
  description: string
  wiki_url: string
  total_attempted_launches: number
  successful_launches: number
  failed_launches: number
  total_attempted_landings: number
  successful_landings: number
  failed_landings: number
}

export interface Type3 {
  id: number
  name: string
}

export interface Image2 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License4
  single_use: boolean
  variants: any[]
}

export interface License4 {
  id: number
  name: string
  priority: number
  link: string
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
  license: License5
  single_use: boolean
  variants: any[]
}

export interface License5 {
  id: number
  name: string
  priority: number
  link: string
}
