export enum Level2Type {
  NONE = 0,
  DISTRICT_CITY = 1,
  DISTRICT = 2,
  SPECIAL_CITY_REGION = 3,
}

export enum Level3Type {
  NONE = 0,
  REGION_CITY = 1,
  DISTRICT_CITY_REGION = 3,
  CITY_URBAN_SETTLEMENT = 4,
  REGION_URBAN_SETTLEMENT = 5,
  CITY_REGION_URBAN_SETTLEMENT = 6,
  CITY = 7,
  REGION_SETTLEMENT = 8,
  CITY_SETTLEMENT = 9,
}

export enum Type {
  /*   */ UNKNOWN = 0,
  /* М */ CITY = 1052,
  /* Р */ DISTRICT = 1056,
  /* С */ VILLAGE = 1057,
  /* Т */ URBAN_VILLAGE = 1058,
  /* Щ */ SETTLEMENT = 1065,
}
