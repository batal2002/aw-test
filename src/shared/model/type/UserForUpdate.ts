interface GeoForUpdate {
    lat?: string,
    lng?: string
}

interface AddressForUpdate {
    street?: string,
    suite?: string,
    city?: string,
    zipcode?: string,
    geo?: GeoForUpdate
}

interface CompanyForUpdate {
    name?: string,
    catchPhrase?: string,
    bs?: string
}

export interface UserForUpdate {
    address?: AddressForUpdate
    company?: CompanyForUpdate
    email?: string
    id?: number
    name?: string
    phone?: string
    username?: string
    website?: string
}
