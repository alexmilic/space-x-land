export interface AstronautsResponse {
  count: number
  next: string
  previous: string
  results: Result[]
}

export interface Result {
  id: number
  url: string
  name: string
  status: Status
  agency: Agency
  image: Image
  response_mode: string
  type: Type3
  in_space: boolean
  time_in_space: string
  eva_time: string
  age: number
  date_of_birth: string
  date_of_death: string
  nationality: Nationality[]
  bio: string
  wiki: string
  last_flight: string
  first_flight: string
  social_media_links: SocialMediaLink[]
  flights_count?: number
  landings_count?: number
  spacewalks_count?: number
  flights?: Flight[]
  landings?: Landing[]
  spacewalks?: Spacewalk[]
}

export interface Status {
  id: number
  name: string
}

export interface Agency {
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

export interface Type3 {
  id: number
  name: string
}

export interface Nationality {
  id: number
  name: string
  alpha_2_code: string
  alpha_3_code: string
  nationality_name: string
  nationality_name_composed: string
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
  logo: Logo
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
  type: Type4
  image_url: string
}

export interface Type4 {
  id: number
  name: string
}

export interface Flight {
  id: string
  url: string
  name: string
  response_mode: string
  slug: string
  launch_designator: string
  status: Status2
  last_updated: string
  net: string
  net_precision: NetPrecision
  window_end: string
  window_start: string
  image: Image2
  infographic: string
  probability: number
  weather_concerns: string
  failreason: string
  hashtag: string
  launch_service_provider: LaunchServiceProvider
  rocket: Rocket
  mission: Mission
  pad: Pad
  webcast_live: boolean
  program: Program[]
  orbital_launch_attempt_count: number
  location_launch_attempt_count: number
  pad_launch_attempt_count: number
  agency_launch_attempt_count: number
  orbital_launch_attempt_count_year: number
  location_launch_attempt_count_year: number
  pad_launch_attempt_count_year: number
  agency_launch_attempt_count_year: number
}

export interface Status2 {
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

export interface Image2 {
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
  type: Type5
  image_url: string
}

export interface Type5 {
  id: number
  name: string
}

export interface LaunchServiceProvider {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type6
}

export interface Type6 {
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
  image: Image3
  orbit: Orbit
  agencies: Agency2[]
  info_urls: InfoUrl[]
  vid_urls: VidUrl[]
}

export interface Image3 {
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
  type: Type7
  image_url: string
}

export interface Type7 {
  id: number
  name: string
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

export interface Agency2 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type8
  featured: boolean
  country: Country[]
  description: string
  administrator: string
  founding_year: number
  launchers: string
  spacecraft: string
  parent: string
  image: Image4
  logo: Logo2
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
  social_media_links: SocialMediaLink2[]
}

export interface Type8 {
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

export interface Image4 {
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
  type: Type9
  image_url: string
}

export interface Type9 {
  id: number
  name: string
}

export interface Logo2 {
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
  type: Type10
  image_url: string
}

export interface Type10 {
  id: number
  name: string
}

export interface SocialLogo {
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
  type: Type11
  image_url: string
}

export interface Type11 {
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
  logo: Logo3
}

export interface Logo3 {
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
  type: Type12
  image_url: string
}

export interface Type12 {
  id: number
  name: string
}

export interface InfoUrl {
  priority: number
  source: string
  title: string
  description: string
  feature_image: string
  url: string
  type: Type13
  language: Language
}

export interface Type13 {
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
  type: Type14
  language: Language2
  start_time: string
  end_time: string
  live: boolean
}

export interface Type14 {
  id: number
  name: string
}

export interface Language2 {
  id: number
  name: string
  code: string
}

export interface Pad {
  id: number
  url: string
  active: boolean
  agencies: Agency3[]
  name: string
  image: Image6
  description: string
  info_url: string
  wiki_url: string
  map_url: string
  latitude: number
  longitude: number
  country: Country3
  map_image: string
  total_launch_count: number
  orbital_launch_attempt_count: number
  fastest_turnaround: string
  location: Location
}

export interface Agency3 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type15
  featured: boolean
  country: Country2[]
  description: string
  administrator: string
  founding_year: number
  launchers: string
  spacecraft: string
  parent: string
  image: Image5
  logo: Logo4
  social_logo: SocialLogo2
}

export interface Type15 {
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

export interface Image5 {
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
  type: Type16
  image_url: string
}

export interface Type16 {
  id: number
  name: string
}

export interface Logo4 {
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
  type: Type17
  image_url: string
}

export interface Type17 {
  id: number
  name: string
}

export interface SocialLogo2 {
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
  type: Type18
  image_url: string
}

export interface Type18 {
  id: number
  name: string
}

export interface Image6 {
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
  type: Type19
  image_url: string
}

export interface Type19 {
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

export interface Location {
  response_mode: string
  id: number
  url: string
  name: string
  celestial_body: CelestialBody2
  active: boolean
  country: Country4
  description: string
  image: Image8
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
  type: Type20
  diameter: number
  mass: number
  gravity: number
  length_of_day: string
  atmosphere: boolean
  image: Image7
  description: string
  wiki_url: string
  total_attempted_launches: number
  successful_launches: number
  failed_launches: number
  total_attempted_landings: number
  successful_landings: number
  failed_landings: number
}

export interface Type20 {
  id: number
  name: string
}

export interface Image7 {
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
  type: Type21
  image_url: string
}

export interface Type21 {
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

export interface Image8 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License14
  single_use: boolean
  variants: Variant14[]
}

export interface License14 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant14 {
  id: number
  type: Type22
  image_url: string
}

export interface Type22 {
  id: number
  name: string
}

export interface Program {
  response_mode: string
  id: number
  url: string
  name: string
  image: Image9
  info_url: string
  wiki_url: string
  description: string
  agencies: Agency4[]
  start_date: string
  end_date: string
  mission_patches: MissionPatch[]
  type: Type26
}

export interface Image9 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License15
  single_use: boolean
  variants: Variant15[]
}

export interface License15 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant15 {
  id: number
  type: Type23
  image_url: string
}

export interface Type23 {
  id: number
  name: string
}

export interface Agency4 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type24
}

export interface Type24 {
  id: number
  name: string
}

export interface MissionPatch {
  id: number
  name: string
  priority: number
  image_url: string
  agency: Agency5
  response_mode: string
}

export interface Agency5 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type25
}

export interface Type25 {
  id: number
  name: string
}

export interface Type26 {
  id: number
  name: string
}

export interface Landing {
  id: number
  url: string
  destination: string
  mission_end: string
  spacecraft: Spacecraft
  launch: Launch
  landing: Landing2
  duration: string
  turn_around_time: string
  response_mode: string
}

export interface Spacecraft {
  response_mode: string
  id: number
  url: string
  name: string
  serial_number: string
  is_placeholder: boolean
  image: Image10
  in_space: boolean
  time_in_space: string
  time_docked: string
  flights_count: number
  mission_ends_count: number
  status: Status3
  description: string
  spacecraft_config: SpacecraftConfig
  fastest_turnaround: string
}

export interface Image10 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License16
  single_use: boolean
  variants: Variant16[]
}

export interface License16 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant16 {
  id: number
  type: Type27
  image_url: string
}

export interface Type27 {
  id: number
  name: string
}

export interface Status3 {
  id: number
  name: string
}

export interface SpacecraftConfig {
  response_mode: string
  id: number
  url: string
  name: string
  type: Type28
  agency: Agency6
  family: Family2[]
  in_use: boolean
  image: Image11
}

export interface Type28 {
  id: number
  name: string
}

export interface Agency6 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type29
}

export interface Type29 {
  id: number
  name: string
}

export interface Family2 {
  response_mode: string
  id: number
  name: string
  description: string
  manufacturer: Manufacturer
  parent: Parent
  maiden_flight: string
}

export interface Manufacturer {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type30
}

export interface Type30 {
  id: number
  name: string
}

export interface Parent {
  response_mode: string
  id: number
  name: string
}

export interface Image11 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License17
  single_use: boolean
  variants: Variant17[]
}

export interface License17 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant17 {
  id: number
  type: Type31
  image_url: string
}

export interface Type31 {
  id: number
  name: string
}

export interface Launch {
  id: string
  url: string
  name: string
  response_mode: string
  slug: string
  launch_designator: string
  status: Status4
  last_updated: string
  net: string
  net_precision: NetPrecision2
  window_end: string
  window_start: string
  image: Image12
  infographic: string
  probability: number
  weather_concerns: string
  failreason: string
  hashtag: string
  launch_service_provider: LaunchServiceProvider2
  rocket: Rocket2
  mission: Mission2
  pad: Pad2
  webcast_live: boolean
  program: Program2[]
  orbital_launch_attempt_count: number
  location_launch_attempt_count: number
  pad_launch_attempt_count: number
  agency_launch_attempt_count: number
  orbital_launch_attempt_count_year: number
  location_launch_attempt_count_year: number
  pad_launch_attempt_count_year: number
  agency_launch_attempt_count_year: number
}

export interface Status4 {
  id: number
  name: string
  abbrev: string
  description: string
}

export interface NetPrecision2 {
  id: number
  name: string
  abbrev: string
  description: string
}

export interface Image12 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License18
  single_use: boolean
  variants: Variant18[]
}

export interface License18 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant18 {
  id: number
  type: Type32
  image_url: string
}

export interface Type32 {
  id: number
  name: string
}

export interface LaunchServiceProvider2 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type33
}

export interface Type33 {
  id: number
  name: string
}

export interface Rocket2 {
  id: number
  configuration: Configuration2
}

export interface Configuration2 {
  response_mode: string
  id: number
  url: string
  name: string
  families: Family3[]
  full_name: string
  variant: string
}

export interface Family3 {
  response_mode: string
  id: number
  name: string
}

export interface Mission2 {
  id: number
  name: string
  type: string
  description: string
  image: Image13
  orbit: Orbit2
  agencies: Agency7[]
  info_urls: InfoUrl2[]
  vid_urls: VidUrl2[]
}

export interface Image13 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License19
  single_use: boolean
  variants: Variant19[]
}

export interface License19 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant19 {
  id: number
  type: Type34
  image_url: string
}

export interface Type34 {
  id: number
  name: string
}

export interface Orbit2 {
  id: number
  name: string
  abbrev: string
  celestial_body: CelestialBody3
}

export interface CelestialBody3 {
  response_mode: string
  id: number
  name: string
}

export interface Agency7 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type35
  featured: boolean
  country: Country5[]
  description: string
  administrator: string
  founding_year: number
  launchers: string
  spacecraft: string
  parent: string
  image: Image14
  logo: Logo5
  social_logo: SocialLogo3
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

export interface Type35 {
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

export interface Image14 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License20
  single_use: boolean
  variants: Variant20[]
}

export interface License20 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant20 {
  id: number
  type: Type36
  image_url: string
}

export interface Type36 {
  id: number
  name: string
}

export interface Logo5 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License21
  single_use: boolean
  variants: Variant21[]
}

export interface License21 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant21 {
  id: number
  type: Type37
  image_url: string
}

export interface Type37 {
  id: number
  name: string
}

export interface SocialLogo3 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License22
  single_use: boolean
  variants: Variant22[]
}

export interface License22 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant22 {
  id: number
  type: Type38
  image_url: string
}

export interface Type38 {
  id: number
  name: string
}

export interface SocialMediaLink3 {
  id: number
  social_media: SocialMedia3
  url: string
}

export interface SocialMedia3 {
  id: number
  name: string
  url: string
  logo: Logo6
}

export interface Logo6 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License23
  single_use: boolean
  variants: Variant23[]
}

export interface License23 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant23 {
  id: number
  type: Type39
  image_url: string
}

export interface Type39 {
  id: number
  name: string
}

export interface InfoUrl2 {
  priority: number
  source: string
  title: string
  description: string
  feature_image: string
  url: string
  type: Type40
  language: Language3
}

export interface Type40 {
  id: number
  name: string
}

export interface Language3 {
  id: number
  name: string
  code: string
}

export interface VidUrl2 {
  priority: number
  source: string
  publisher: string
  title: string
  description: string
  feature_image: string
  url: string
  type: Type41
  language: Language4
  start_time: string
  end_time: string
  live: boolean
}

export interface Type41 {
  id: number
  name: string
}

export interface Language4 {
  id: number
  name: string
  code: string
}

export interface Pad2 {
  id: number
  url: string
  active: boolean
  agencies: Agency8[]
  name: string
  image: Image16
  description: string
  info_url: string
  wiki_url: string
  map_url: string
  latitude: number
  longitude: number
  country: Country7
  map_image: string
  total_launch_count: number
  orbital_launch_attempt_count: number
  fastest_turnaround: string
  location: Location2
}

export interface Agency8 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type42
  featured: boolean
  country: Country6[]
  description: string
  administrator: string
  founding_year: number
  launchers: string
  spacecraft: string
  parent: string
  image: Image15
  logo: Logo7
  social_logo: SocialLogo4
}

export interface Type42 {
  id: number
  name: string
}

export interface Country6 {
  id: number
  name: string
  alpha_2_code: string
  alpha_3_code: string
  nationality_name: string
  nationality_name_composed: string
}

export interface Image15 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License24
  single_use: boolean
  variants: Variant24[]
}

export interface License24 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant24 {
  id: number
  type: Type43
  image_url: string
}

export interface Type43 {
  id: number
  name: string
}

export interface Logo7 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License25
  single_use: boolean
  variants: Variant25[]
}

export interface License25 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant25 {
  id: number
  type: Type44
  image_url: string
}

export interface Type44 {
  id: number
  name: string
}

export interface SocialLogo4 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License26
  single_use: boolean
  variants: Variant26[]
}

export interface License26 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant26 {
  id: number
  type: Type45
  image_url: string
}

export interface Type45 {
  id: number
  name: string
}

export interface Image16 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License27
  single_use: boolean
  variants: Variant27[]
}

export interface License27 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant27 {
  id: number
  type: Type46
  image_url: string
}

export interface Type46 {
  id: number
  name: string
}

export interface Country7 {
  id: number
  name: string
  alpha_2_code: string
  alpha_3_code: string
  nationality_name: string
  nationality_name_composed: string
}

export interface Location2 {
  response_mode: string
  id: number
  url: string
  name: string
  celestial_body: CelestialBody4
  active: boolean
  country: Country8
  description: string
  image: Image18
  map_image: string
  longitude: number
  latitude: number
  timezone_name: string
  total_launch_count: number
  total_landing_count: number
}

export interface CelestialBody4 {
  response_mode: string
  id: number
  name: string
  type: Type47
  diameter: number
  mass: number
  gravity: number
  length_of_day: string
  atmosphere: boolean
  image: Image17
  description: string
  wiki_url: string
  total_attempted_launches: number
  successful_launches: number
  failed_launches: number
  total_attempted_landings: number
  successful_landings: number
  failed_landings: number
}

export interface Type47 {
  id: number
  name: string
}

export interface Image17 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License28
  single_use: boolean
  variants: Variant28[]
}

export interface License28 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant28 {
  id: number
  type: Type48
  image_url: string
}

export interface Type48 {
  id: number
  name: string
}

export interface Country8 {
  id: number
  name: string
  alpha_2_code: string
  alpha_3_code: string
  nationality_name: string
  nationality_name_composed: string
}

export interface Image18 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License29
  single_use: boolean
  variants: Variant29[]
}

export interface License29 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant29 {
  id: number
  type: Type49
  image_url: string
}

export interface Type49 {
  id: number
  name: string
}

export interface Program2 {
  response_mode: string
  id: number
  url: string
  name: string
  image: Image19
  info_url: string
  wiki_url: string
  description: string
  agencies: Agency9[]
  start_date: string
  end_date: string
  mission_patches: MissionPatch2[]
  type: Type53
}

export interface Image19 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License30
  single_use: boolean
  variants: Variant30[]
}

export interface License30 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant30 {
  id: number
  type: Type50
  image_url: string
}

export interface Type50 {
  id: number
  name: string
}

export interface Agency9 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type51
}

export interface Type51 {
  id: number
  name: string
}

export interface MissionPatch2 {
  id: number
  name: string
  priority: number
  image_url: string
  agency: Agency10
  response_mode: string
}

export interface Agency10 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type52
}

export interface Type52 {
  id: number
  name: string
}

export interface Type53 {
  id: number
  name: string
}

export interface Landing2 {
  id: number
  url: string
  attempt: boolean
  success: boolean
  description: string
  downrange_distance: number
  landing_location: LandingLocation
  type: Type58
}

export interface LandingLocation {
  id: number
  name: string
  active: boolean
  abbrev: string
  description: string
  location: Location3
  longitude: number
  latitude: number
  image: Image21
  successful_landings: number
  attempted_landings: number
  failed_landings: number
  celestial_body: CelestialBody5
}

export interface Location3 {
  response_mode: string
  id: number
  url: string
  name: string
  active: boolean
  country: Country9
  description: string
  image: Image20
  map_image: string
  longitude: number
  latitude: number
  timezone_name: string
  total_launch_count: number
  total_landing_count: number
}

export interface Country9 {
  id: number
  name: string
  alpha_2_code: string
  alpha_3_code: string
  nationality_name: string
  nationality_name_composed: string
}

export interface Image20 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License31
  single_use: boolean
  variants: Variant31[]
}

export interface License31 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant31 {
  id: number
  type: Type54
  image_url: string
}

export interface Type54 {
  id: number
  name: string
}

export interface Image21 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License32
  single_use: boolean
  variants: Variant32[]
}

export interface License32 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant32 {
  id: number
  type: Type55
  image_url: string
}

export interface Type55 {
  id: number
  name: string
}

export interface CelestialBody5 {
  response_mode: string
  id: number
  name: string
  type: Type56
  diameter: number
  mass: number
  gravity: number
  length_of_day: string
  atmosphere: boolean
  image: Image22
  description: string
  wiki_url: string
}

export interface Type56 {
  id: number
  name: string
}

export interface Image22 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License33
  single_use: boolean
  variants: Variant33[]
}

export interface License33 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant33 {
  id: number
  type: Type57
  image_url: string
}

export interface Type57 {
  id: number
  name: string
}

export interface Type58 {
  id: number
  name: string
  abbrev: string
  description: string
}

export interface Spacewalk {
  response_mode: string
  id: number
  url: string
  name: string
  start: string
  end: string
  duration: string
  location: string
  crew: Crew[]
}

export interface Crew {
  id: number
  role: Role
  astronaut: Astronaut
}

export interface Role {
  id: number
  role: string
  priority: number
}

export interface Astronaut {
  id: number
  url: string
  name: string
  status: Status5
  agency: Agency11
  image: Image23
  response_mode: string
  type: Type61
  in_space: boolean
  time_in_space: string
  eva_time: string
  age: number
  date_of_birth: string
  date_of_death: string
  nationality: Nationality2[]
  bio: string
  wiki: string
  last_flight: string
  first_flight: string
  social_media_links: SocialMediaLink4[]
}

export interface Status5 {
  id: number
  name: string
}

export interface Agency11 {
  response_mode: string
  id: number
  url: string
  name: string
  abbrev: string
  type: Type59
}

export interface Type59 {
  id: number
  name: string
}

export interface Image23 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License34
  single_use: boolean
  variants: Variant34[]
}

export interface License34 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant34 {
  id: number
  type: Type60
  image_url: string
}

export interface Type60 {
  id: number
  name: string
}

export interface Type61 {
  id: number
  name: string
}

export interface Nationality2 {
  id: number
  name: string
  alpha_2_code: string
  alpha_3_code: string
  nationality_name: string
  nationality_name_composed: string
}

export interface SocialMediaLink4 {
  id: number
  social_media: SocialMedia4
  url: string
}

export interface SocialMedia4 {
  id: number
  name: string
  url: string
  logo: Logo8
}

export interface Logo8 {
  id: number
  name: string
  image_url: string
  thumbnail_url: string
  credit: string
  license: License35
  single_use: boolean
  variants: Variant35[]
}

export interface License35 {
  id: number
  name: string
  priority: number
  link: string
}

export interface Variant35 {
  id: number
  type: Type62
  image_url: string
}

export interface Type62 {
  id: number
  name: string
}
