DROP TABLE propertyImages;

CREATE TABLE propertyImages{
    propertyId   integer,
    Primary Key (propertyId)
}

CREATE TABLE imageInfo{
    propertyId   integer      not null,
    Id           integer      NOT NULL,
    URL          VARCHAR(100) NOT NULL,
    description  VARCHAR(200) NOT NULL,
    verify       BOOLEAN      NOT NULL,
    Primary Key (Id),
}