export interface IPorfile {
  id: number
  photoUrl: string
  name: string
  domain: string
  email: string
  position: string
  location: any
  resumeUrl: string
  aboutMe: string
  locationUrl: any
  informationLinks: InformationLink[]
}

export interface InformationLink {
  url: string
  icon: string
}
