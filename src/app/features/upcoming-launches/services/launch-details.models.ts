export interface LaunchDetailsResponse {
  id: string
  url: string
  name: string
  response_mode: string
  slug: string
  launch_designator: any
  status: Status
  last_updated: string
  net: string
  net_precision: NetPrecision
  window_end: string
  window_start: string
  image: Image
  infographic: any
  probability: any
  weather_concerns: any
  failreason: string
  hashtag: any
  launch_service_provider: LaunchServiceProvider
  rocket: Rocket
  mission: Mission
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
  flightclub_url: string
  updates: Update[]
  info_urls: InfoUrl[]
  vid_urls: VidUrl[]
  timeline: Timeline[]
  pad_turnaround: string
  mission_patches: any[]
}

export interface Status {
  id: number
  name: string
  abbrev: string
  description: string
}

export interface NetPrecision {
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
  credit: string
  license: License
  single_use: boolean
  variants: any[]
}

export interface License {
  id: number
  name: string
  priority: number
  link: any
}

export interface LaunchServiceProvider {
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
  parent: any
  image: Image2
  logo: Logo
  social_logo: SocialLogo
  total_launch_count: number
  consecutive_successful_launches: number
  successful_launches: number
  failed_launches: number
  pending_launches: number
  consecutive_successful_landings: number
  successful_landings: number
  failed_landings: number
  attempted_landings: number
  successful_landings_spacecraft: number
  failed_landings_spacecraft: number
  attempted_landings_spacecraft: number
  successful_landings_payload: number
  failed_landings_payload: number
  attempted_landings_payload: number
  info_url: string
  wiki_url: string
  social_media_links: SocialMediaLink[]
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

export interface Image2 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License2
  single_use: boolean
  variants: any[]
}

export interface License2 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Logo {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License3
  single_use: boolean
  variants: any[]
}

export interface License3 {
  id: number
  name: string
  priority: number
  link: string
}

export interface SocialLogo {
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

export interface SocialMediaLink {
  id: number
  social_media: SocialMedia
  url: string
}

export interface SocialMedia {
  id: number
  name: string
  url?: string
  logo?: Logo2
}

export interface Logo2 {
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
  link: any
}

export interface Rocket {
  id: number
  configuration: Configuration
  launcher_stage: LauncherStage[]
  spacecraft_stage: any[]
  payloads: any[]
}

export interface Configuration {
  response_mode: string
  id: number
  url: string
  name: string
  families: Family[]
  full_name: string
  variant: string
  active: boolean
  is_placeholder: boolean
  manufacturer: Manufacturer3
  program: Program[]
  reusable: boolean
  image: Image7
  info_url: string
  wiki_url: string
  description: string
  alias: string
  min_stage: number
  max_stage: number
  length: number
  diameter: number
  maiden_flight: string
  launch_cost: number
  launch_mass: number
  leo_capacity: number
  gto_capacity: number
  geo_capacity: any
  sso_capacity: any
  to_thrust: number
  apogee: number
  total_launch_count: number
  consecutive_successful_launches: number
  successful_launches: number
  failed_launches: number
  pending_launches: number
  attempted_landings: number
  successful_landings: number
  failed_landings: number
  consecutive_successful_landings: number
  fastest_turnaround: string
}

export interface Family {
  response_mode: string
  id: number
  name: string
  manufacturer: Manufacturer[]
  parent?: Parent
  description: string
  active: boolean
  maiden_flight: string
  total_launch_count: number
  consecutive_successful_launches: number
  successful_launches: number
  failed_launches: number
  pending_launches: number
  attempted_landings: number
  successful_landings: number
  failed_landings: number
  consecutive_successful_landings: number
}

export interface Manufacturer {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type2
  featured: boolean
  country: Country2[]
  description: string
  administrator: string
  founding_year: number
  launchers: string
  spacecraft: string
  parent: any
  image: Image3
  logo: Logo3
  social_logo: SocialLogo2
  total_launch_count: number
  consecutive_successful_launches: number
  successful_launches: number
  failed_launches: number
  pending_launches: number
  consecutive_successful_landings: number
  successful_landings: number
  failed_landings: number
  attempted_landings: number
  successful_landings_spacecraft: number
  failed_landings_spacecraft: number
  attempted_landings_spacecraft: number
  successful_landings_payload: number
  failed_landings_payload: number
  attempted_landings_payload: number
  info_url: string
  wiki_url: string
  social_media_links: SocialMediaLink2[]
}

export interface Type2 {
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

export interface Image3 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License6
  single_use: boolean
  variants: any[]
}

export interface License6 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Logo3 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License7
  single_use: boolean
  variants: any[]
}

export interface License7 {
  id: number
  name: string
  priority: number
  link: string
}

export interface SocialLogo2 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License8
  single_use: boolean
  variants: any[]
}

export interface License8 {
  id: number
  name: string
  priority: number
  link: string
}

export interface SocialMediaLink2 {
  id: number
  social_media: SocialMedia2
  url: string
}

export interface SocialMedia2 {
  id: number
  name: string
  url?: string
  logo?: Logo4
}

export interface Logo4 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License9
  single_use: boolean
  variants: any[]
}

export interface License9 {
  id: number
  name: string
  priority: number
  link: any
}

export interface Parent {
  response_mode: string
  id: number
  name: string
  manufacturer: Manufacturer2[]
  parent: any
}

export interface Manufacturer2 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type3
  featured: boolean
  country: Country3[]
  description: string
  administrator: string
  founding_year: number
  launchers: string
  spacecraft: string
  parent: any
  image: Image4
  logo: Logo5
  social_logo: SocialLogo3
}

export interface Type3 {
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

export interface Image4 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License10
  single_use: boolean
  variants: any[]
}

export interface License10 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Logo5 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License11
  single_use: boolean
  variants: any[]
}

export interface License11 {
  id: number
  name: string
  priority: number
  link: string
}

export interface SocialLogo3 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License12
  single_use: boolean
  variants: any[]
}

export interface License12 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Manufacturer3 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type4
  featured: boolean
  country: Country4[]
  description: string
  administrator: string
  founding_year: number
  launchers: string
  spacecraft: string
  parent: any
  image: Image5
  logo: Logo6
  social_logo: SocialLogo4
  total_launch_count: number
  consecutive_successful_launches: number
  successful_launches: number
  failed_launches: number
  pending_launches: number
  consecutive_successful_landings: number
  successful_landings: number
  failed_landings: number
  attempted_landings: number
  successful_landings_spacecraft: number
  failed_landings_spacecraft: number
  attempted_landings_spacecraft: number
  successful_landings_payload: number
  failed_landings_payload: number
  attempted_landings_payload: number
  info_url: string
  wiki_url: string
  social_media_links: SocialMediaLink3[]
}

export interface Type4 {
  id: number
  name: string
}

export interface Country4 {
  id: number
  name: string
  alpha_2_code: string
  alpha_3_code: string
  nationality_name: string
  nationality_name_composed: string
}

export interface Image5 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License13
  single_use: boolean
  variants: any[]
}

export interface License13 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Logo6 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License14
  single_use: boolean
  variants: any[]
}

export interface License14 {
  id: number
  name: string
  priority: number
  link: string
}

export interface SocialLogo4 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License15
  single_use: boolean
  variants: any[]
}

export interface License15 {
  id: number
  name: string
  priority: number
  link: string
}

export interface SocialMediaLink3 {
  id: number
  social_media: SocialMedia3
  url: string
}

export interface SocialMedia3 {
  id: number
  name: string
  url?: string
  logo?: Logo7
}

export interface Logo7 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License16
  single_use: boolean
  variants: any[]
}

export interface License16 {
  id: number
  name: string
  priority: number
  link: any
}

export interface Program {
  response_mode: string
  id: number
  url: string
  name: string
  image: Image6
  info_url?: string
  wiki_url: string
  description: string
  agencies: Agency[]
  start_date: string
  end_date: any
  mission_patches: any[]
  type: Type6
}

export interface Image6 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit?: string
  license: License17
  single_use: boolean
  variants: any[]
}

export interface License17 {
  id: number
  name: string
  priority: number
  link?: string
}

export interface Agency {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type5
}

export interface Type5 {
  id: number
  name: string
}

export interface Type6 {
  id: number
  name: string
}

export interface Image7 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License18
  single_use: boolean
  variants: any[]
}

export interface License18 {
  id: number
  name: string
  priority: number
  link: string
}

export interface LauncherStage {
  id: number
  type: string
  reused: boolean
  launcher_flight_number: number
  launcher: Launcher
  previous_flight_date: string
  turn_around_time: string
  landing: Landing
  previous_flight: PreviousFlight
}

export interface Launcher {
  response_mode: string
  id: number
  url: string
  flight_proven: boolean
  serial_number: string
  is_placeholder: boolean
  status: Status2
  image: Image8
  details: string
  successful_landings: number
  attempted_landings: number
  flights: number
  last_launch_date: string
  first_launch_date: string
  fastest_turnaround: string
}

export interface Status2 {
  id: number
  name: string
}

export interface Image8 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License19
  single_use: boolean
  variants: any[]
}

export interface License19 {
  id: number
  name: string
  priority: number
  link: any
}

export interface Landing {
  id: number
  url: string
  attempt: boolean
  success: any
  description: string
  downrange_distance: number
  landing_location: LandingLocation
  type: Type8
}

export interface LandingLocation {
  id: number
  name: string
  active: boolean
  abbrev: string
  description: string
  location: any
  longitude: any
  latitude: any
  image: Image9
  successful_landings: number
  attempted_landings: number
  failed_landings: number
  celestial_body: CelestialBody
}

export interface Image9 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License20
  single_use: boolean
  variants: any[]
}

export interface License20 {
  id: number
  name: string
  priority: number
  link: string
}

export interface CelestialBody {
  response_mode: string
  id: number
  name: string
  type: Type7
  diameter: number
  mass: number
  gravity: number
  length_of_day: string
  atmosphere: boolean
  image: Image10
  description: string
  wiki_url: string
}

export interface Type7 {
  id: number
  name: string
}

export interface Image10 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License21
  single_use: boolean
  variants: any[]
}

export interface License21 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Type8 {
  id: number
  name: string
  abbrev: string
  description: string
}

export interface PreviousFlight {
  id: string
  url: string
  name: string
}

export interface Mission {
  id: number
  name: string
  type: string
  description: string
  image: any
  orbit: Orbit
  agencies: Agency2[]
  info_urls: any[]
  vid_urls: any[]
}

export interface Orbit {
  id: number
  name: string
  abbrev: string
  celestial_body: CelestialBody2
}

export interface CelestialBody2 {
  response_mode: string
  id: number
  name: string
}

export interface Agency2 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type9
  featured: boolean
  country: Country5[]
  description: string
  administrator: string
  founding_year: number
  launchers: string
  spacecraft: string
  parent: any
  image: any
  logo: Logo8
  social_logo: SocialLogo5
  total_launch_count: number
  consecutive_successful_launches: number
  successful_launches: number
  failed_launches: number
  pending_launches: number
  consecutive_successful_landings: number
  successful_landings: number
  failed_landings: number
  attempted_landings: number
  successful_landings_spacecraft: number
  failed_landings_spacecraft: number
  attempted_landings_spacecraft: number
  successful_landings_payload: number
  failed_landings_payload: number
  attempted_landings_payload: number
  info_url: string
  wiki_url: string
  social_media_links: any[]
}

export interface Type9 {
  id: number
  name: string
}

export interface Country5 {
  id: number
  name: string
  alpha_2_code: string
  alpha_3_code: string
  nationality_name: string
  nationality_name_composed: string
}

export interface Logo8 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License22
  single_use: boolean
  variants: any[]
}

export interface License22 {
  id: number
  name: string
  priority: number
  link: string
}

export interface SocialLogo5 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License23
  single_use: boolean
  variants: any[]
}

export interface License23 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Pad {
  id: number
  url: string
  active: boolean
  agencies: any[]
  name: string
  image: Image11
  description: string
  info_url: any
  wiki_url: string
  map_url: string
  latitude: number
  longitude: number
  country: Country6
  map_image: string
  total_launch_count: number
  orbital_launch_attempt_count: number
  fastest_turnaround: string
  location: Location
}

export interface Image11 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License24
  single_use: boolean
  variants: any[]
}

export interface License24 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Country6 {
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
  celestial_body: CelestialBody3
  active: boolean
  country: Country7
  description: string
  image: Image13
  map_image: string
  longitude: number
  latitude: number
  timezone_name: string
  total_launch_count: number
  total_landing_count: number
}

export interface CelestialBody3 {
  response_mode: string
  id: number
  name: string
  type: Type10
  diameter: number
  mass: number
  gravity: number
  length_of_day: string
  atmosphere: boolean
  image: Image12
  description: string
  wiki_url: string
  total_attempted_launches: number
  successful_launches: number
  failed_launches: number
  total_attempted_landings: number
  successful_landings: number
  failed_landings: number
}

export interface Type10 {
  id: number
  name: string
}

export interface Image12 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License25
  single_use: boolean
  variants: any[]
}

export interface License25 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Country7 {
  id: number
  name: string
  alpha_2_code: string
  alpha_3_code: string
  nationality_name: string
  nationality_name_composed: string
}

export interface Image13 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License26
  single_use: boolean
  variants: any[]
}

export interface License26 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Update {
  id: number
  profile_image: string
  comment: string
  info_url: string
  created_by: string
  created_on: string
}

export interface InfoUrl {
  priority: number
  source: string
  title: string
  description: string
  feature_image: any
  url: string
  type: Type11
  language: Language
}

export interface Type11 {
  id: number
  name: string
}

export interface Language {
  id: number
  name: string
  code: string
}

export interface VidUrl {
  priority: number
  source: string
  publisher: string
  title: string
  description: string
  feature_image: string
  url: string
  type: Type12
  language: Language2
  start_time: string
  end_time?: string
  live: boolean
}

export interface Type12 {
  id: number
  name: string
}

export interface Language2 {
  id: number
  name: string
  code: string
}

export interface Timeline {
  type: Type13
  relative_time: string
}

export interface Type13 {
  id: number
  abbrev: string
  description: string
}
