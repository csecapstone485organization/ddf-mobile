// Example to demonstrate how state should look in redux store

{
  currentUser: 'julian',
  selectedWorkspace: 'Dummy Data'
  workspaces:
  {
    isFetching: true,
    didInvalidate: false,
    [
      {
        name: 'Dummy Data',
        datapoints: 4325
      },
      {
        name: 'Secret Data',
        datapoints: 22
      }
    ]
  },
  query:
  {
    text: 'America\'s Taco ',
    time: 1439478405547,
    location: {
      long: 55,
      lat: 55
    },
    sorting: 'CLOSEST FIRST'
  }

   "results": [
    {
      "matches": {},
      "metacard": {
        "cached": "2017-03-21T02:17:09.637+0000",
        "geometry": {
          "coordinates": [
            -65.75416667,
            47.66527778
          ],
          "type": "Point"
        },
        "type": "Feature",
        "properties": {
          "resource-size": "75129",
          "created": "2016-03-16T17:00:29.614+0000",
          "resource-uri": "content:fcdedeadb77648bfb54951974ec16dbb",
          "metacard-tags": [
            "resource",
            "VALID"
          ],
          "checksum-algorithm": "Adler32",
          "metadata-content-type": "city",
          "metacard-type": "ddf.metacard",
          "title": "Acadia",
          "resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/fcdedeadb77648bfb54951974ec16dbb?transform=resource",
          "source-id": "ddf.distribution",
          "effective": "2017-03-20T22:50:46.789+0000",
          "checksum": "9c4426ee",
          "modified": "2016-03-01T20:35:16.000+0000",
          "id": "fcdedeadb77648bfb54951974ec16dbb",
          "metadata-content-type-version": "20160305"
        }
      },
      "distance": null,
      "relevance": 5.47316312789917,
      "actions": [
        {
          "url": "https://localhost:8993/services/catalog/sources/ddf.distribution/fcdedeadb77648bfb54951974ec16dbb?transform=gmd:MD_Metadata",
          "title": "Export as gmd:MD_Metadata",
          "description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
          "id": "catalog.data.metacard.gmd:MD_Metadata"
        },
        {
          "url": "https://localhost:8993/services/catalog/sources/ddf.distribution/fcdedeadb77648bfb54951974ec16dbb?transform=kml",
          "title": "Export as kml",
          "description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
          "id": "catalog.data.metacard.kml"
        },
        {
          "url": "https://localhost:8993/services/catalog/sources/ddf.distribution/fcdedeadb77648bfb54951974ec16dbb?transform=geojson",
          "title": "Export as geojson",
          "description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
          "id": "catalog.data.metacard.geojson"
        },
        {
          "url": "https://localhost:8993/services/catalog/sources/ddf.distribution/fcdedeadb77648bfb54951974ec16dbb?transform=metadata",
          "title": "Export as metadata",
          "description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
          "id": "catalog.data.metacard.metadata"
        },
        {
          "url": "https://localhost:8993/services/catalog/sources/ddf.distribution/fcdedeadb77648bfb54951974ec16dbb",
          "title": "Export Metacard XML",
          "description": "Provides a URL to the metacard",
          "id": "catalog.data.metacard.view"
        },
        {
          "url": "https://localhost:8993/services/catalog/sources/ddf.distribution/fcdedeadb77648bfb54951974ec16dbb?transform=thumbnail",
          "title": "Export as thumbnail",
          "description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
          "id": "catalog.data.metacard.thumbnail"
        },
        {
          "url": "https://localhost:8993/services/catalog/sources/ddf.distribution/fcdedeadb77648bfb54951974ec16dbb?transform=csw:Record",
          "title": "Export as csw:Record",
          "description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
          "id": "catalog.data.metacard.csw:Record"
        },
        {
          "url": "https://localhost:8993/services/catalog/sources/ddf.distribution/fcdedeadb77648bfb54951974ec16dbb?transform=html",
          "title": "Export as html",
          "description": "Provides a URL to the metacard that transforms the return value via the html transformer",
          "id": "catalog.data.metacard.html"
        },
        {
          "url": "https://localhost:8993/services/catalog/sources/ddf.distribution/fcdedeadb77648bfb54951974ec16dbb?transform=xml",
          "title": "Export as xml",
          "description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
          "id": "catalog.data.metacard.xml"
        },
        {
          "url": "https://localhost:8993/services/catalog/sources/ddf.distribution/fcdedeadb77648bfb54951974ec16dbb?transform=resource",
          "title": "Export as resource",
          "description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
          "id": "catalog.data.metacard.resource"
        }
      ],
      "hasThumbnail": true,
      "isResourceLocal": true
    }
  ],
  "id": "b5959416-e516-4d08-b004-7fe3313c3878",
  "types": {
    "ddf.metacard": {
      "metacard.associations.related": {
        "format": "STRING",
        "multivalued": true,
        "indexed": true
      },
      "metadata": {
        "format": "XML",
        "multivalued": false,
        "indexed": true
      },
      "resource-size": {
        "format": "STRING",
        "multivalued": false,
        "indexed": false
      },
      "description": {
        "format": "STRING",
        "multivalued": false,
        "indexed": true
      },
      "metadata-content-type": {
        "format": "STRING",
        "multivalued": false,
        "indexed": true
      },
      "metadata-target-namespace": {
        "format": "STRING",
        "multivalued": false,
        "indexed": true
      },
      "resource-download-url": {
        "format": "STRING",
        "multivalued": false,
        "indexed": false
      },
      "title": {
        "format": "STRING",
        "multivalued": false,
        "indexed": true
      },
      "resource.derived-download-url": {
        "format": "STRING",
        "multivalued": true,
        "indexed": true
      },
      "failed-validators-errors": {
        "format": "STRING",
        "multivalued": true,
        "indexed": true
      },
      "effective": {
        "format": "DATE",
        "multivalued": false,
        "indexed": true
      },
      "point-of-contact": {
        "format": "STRING",
        "multivalued": false,
        "indexed": true
      },
      "checksum": {
        "format": "STRING",
        "multivalued": false,
        "indexed": true
      },
      "modified": {
        "format": "DATE",
        "multivalued": false,
        "indexed": true
      },
      "id": {
        "format": "STRING",
        "multivalued": false,
        "indexed": true
      },
      "failed-validators-warnings": {
        "format": "STRING",
        "multivalued": true,
        "indexed": true
      },
      "validation-warnings": {
        "format": "STRING",
        "multivalued": true,
        "indexed": true
      },
      "thumbnail": {
        "format": "BINARY",
        "multivalued": false,
        "indexed": false
      },
      "created": {
        "format": "DATE",
        "multivalued": false,
        "indexed": true
      },
      "metacard-tags": {
        "format": "STRING",
        "multivalued": true,
        "indexed": true
      },
      "resource-uri": {
        "format": "STRING",
        "multivalued": false,
        "indexed": true
      },
      "checksum-algorithm": {
        "format": "STRING",
        "multivalued": false,
        "indexed": true
      },
      "resource.derived-uri": {
        "format": "STRING",
        "multivalued": true,
        "indexed": true
      },
      "validation-errors": {
        "format": "STRING",
        "multivalued": true,
        "indexed": true
      },
      "metacard.associations.derived": {
        "format": "STRING",
        "multivalued": true,
        "indexed": true
      },
      "expiration": {
        "format": "DATE",
        "multivalued": false,
        "indexed": true
      },
      "location": {
        "format": "GEOMETRY",
        "multivalued": false,
        "indexed": true
      },
      "metadata-content-type-version": {
        "format": "STRING",
        "multivalued": false,
        "indexed": true
      }
    }
  },
  "status": {
    "hits": 1,
    "count": 1,
    "elapsed": 18,
    "id": "ddf.distribution",
    "successful": true
  }
}
}
