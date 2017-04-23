//curl 'https://localhost:8993/search/catalog/internal/cql' -H 'Cookie: gsScrollPos=; Idea-8da0132d=6a0a6412-1af9-40cf-8fa0-6e75b11270bc; JSESSIONID=15h96012yccadqfc1noms7cu3' -H 'Origin: https://localhost:8993' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.8' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36' -H 'Content-Type: application/json' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Referer: https://localhost:8993/search/catalog/' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data-binary $'{"src":"ddf.distribution","start":1,"count":620,"cql":"(\\"anyText\\" ILIKE \'arizona\')","sort":"modified:desc","id":"54c6c607-ef8c-4396-8221-59429d703090"}' --compressed --insecure
export const cql_TEST_QUERY = {
	"src": "ddf.distribution",
	"start": 1,
	"count": 620,
	"cql": "(\"anyText\" ILIKE 'arizona')",
	"sort": "modified:desc",
	"id": "54c6c607-ef8c-4396-8221-59429d703090"
}


export const cql_TEST_RESULTS = {
	"results": [{
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.898+0000",
			"geometry": {
				"coordinates": [-111.67916667, 32.75166667],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "9114",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:9d2cc928d9be448d8fa4d8aacfd2d9ee",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Arizona City, Arizona",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9d2cc928d9be448d8fa4d8aacfd2d9ee?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:43:15.394+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "d2315691",
				"modified": "2015-06-07T17:40:57.000+0000",
				"id": "9d2cc928d9be448d8fa4d8aacfd2d9ee",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 16.012714385986328,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9d2cc928d9be448d8fa4d8aacfd2d9ee?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9d2cc928d9be448d8fa4d8aacfd2d9ee?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9d2cc928d9be448d8fa4d8aacfd2d9ee?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9d2cc928d9be448d8fa4d8aacfd2d9ee?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9d2cc928d9be448d8fa4d8aacfd2d9ee",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9d2cc928d9be448d8fa4d8aacfd2d9ee?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9d2cc928d9be448d8fa4d8aacfd2d9ee?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9d2cc928d9be448d8fa4d8aacfd2d9ee?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9d2cc928d9be448d8fa4d8aacfd2d9ee?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9d2cc928d9be448d8fa4d8aacfd2d9ee?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}],
		"hasThumbnail": false,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.898+0000",
			"geometry": {
				"coordinates": [-114.58416667, 34.85361111],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "7402",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:6e4ed49f22e341e09d9fb86fc1a629df",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Arizona Village, Arizona",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/6e4ed49f22e341e09d9fb86fc1a629df?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:43:15.624+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "d7fb1155",
				"modified": "2016-02-01T09:53:13.000+0000",
				"id": "6e4ed49f22e341e09d9fb86fc1a629df",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 15.902680397033691,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/6e4ed49f22e341e09d9fb86fc1a629df?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/6e4ed49f22e341e09d9fb86fc1a629df?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/6e4ed49f22e341e09d9fb86fc1a629df?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/6e4ed49f22e341e09d9fb86fc1a629df?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/6e4ed49f22e341e09d9fb86fc1a629df?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/6e4ed49f22e341e09d9fb86fc1a629df?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/6e4ed49f22e341e09d9fb86fc1a629df?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/6e4ed49f22e341e09d9fb86fc1a629df?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/6e4ed49f22e341e09d9fb86fc1a629df",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/6e4ed49f22e341e09d9fb86fc1a629df?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}],
		"hasThumbnail": false,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.898+0000",
			"geometry": {
				"coordinates": [-112.86944444, 32.38138889],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "41484",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:ec7e153c1602404b95f5e916e515b22a",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Ajo, Arizona",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/ec7e153c1602404b95f5e916e515b22a?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:41:16.524+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "36f985a0",
				"modified": "2016-02-26T03:33:30.000+0000",
				"id": "ec7e153c1602404b95f5e916e515b22a",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 14.704371452331543,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/ec7e153c1602404b95f5e916e515b22a?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/ec7e153c1602404b95f5e916e515b22a?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/ec7e153c1602404b95f5e916e515b22a?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/ec7e153c1602404b95f5e916e515b22a",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/ec7e153c1602404b95f5e916e515b22a?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/ec7e153c1602404b95f5e916e515b22a?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/ec7e153c1602404b95f5e916e515b22a?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/ec7e153c1602404b95f5e916e515b22a?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/ec7e153c1602404b95f5e916e515b22a?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/ec7e153c1602404b95f5e916e515b22a?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.898+0000",
			"geometry": {
				"coordinates": [-111.06555556, 31.705],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "8448",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:9cd097f0c63b46369a3aa58b28502040",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Amado, Arizona",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9cd097f0c63b46369a3aa58b28502040?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:43:07.894+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "362a76cd",
				"modified": "2015-12-12T05:45:16.000+0000",
				"id": "9cd097f0c63b46369a3aa58b28502040",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 14.696640968322754,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9cd097f0c63b46369a3aa58b28502040?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9cd097f0c63b46369a3aa58b28502040?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9cd097f0c63b46369a3aa58b28502040?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9cd097f0c63b46369a3aa58b28502040?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9cd097f0c63b46369a3aa58b28502040",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9cd097f0c63b46369a3aa58b28502040?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9cd097f0c63b46369a3aa58b28502040?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9cd097f0c63b46369a3aa58b28502040?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9cd097f0c63b46369a3aa58b28502040?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9cd097f0c63b46369a3aa58b28502040?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}],
		"hasThumbnail": false,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.898+0000",
			"geometry": {
				"coordinates": [-111.936511, 33.417195],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "170428",
				"created": "2016-03-15T22:51:11.622+0000",
				"resource-uri": "content:0bda13db3d4a452fa04a98400156bf39",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "edu",
				"metacard-type": "ddf.metacard",
				"title": "Arizona State University",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0bda13db3d4a452fa04a98400156bf39?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:43:15.628+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "3178e072",
				"modified": "2016-03-03T05:31:29.000+0000",
				"id": "0bda13db3d4a452fa04a98400156bf39",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 13.953658103942871,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0bda13db3d4a452fa04a98400156bf39?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0bda13db3d4a452fa04a98400156bf39?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0bda13db3d4a452fa04a98400156bf39?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0bda13db3d4a452fa04a98400156bf39?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0bda13db3d4a452fa04a98400156bf39",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0bda13db3d4a452fa04a98400156bf39?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0bda13db3d4a452fa04a98400156bf39?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0bda13db3d4a452fa04a98400156bf39?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0bda13db3d4a452fa04a98400156bf39?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0bda13db3d4a452fa04a98400156bf39?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.898+0000",
			"geometry": {
				"coordinates": [-109.4425, 35.42388889],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "41226",
				"created": "2016-03-15T23:22:44.438+0000",
				"resource-uri": "content:4cf8fc4622034fccbf0a0efaca869e40",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "adm2nd",
				"metacard-type": "ddf.metacard",
				"title": "Apache County, Arizona",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4cf8fc4622034fccbf0a0efaca869e40?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:42:55.386+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "9e54f752",
				"modified": "2016-01-21T03:34:04.000+0000",
				"id": "4cf8fc4622034fccbf0a0efaca869e40",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 13.446126937866211,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4cf8fc4622034fccbf0a0efaca869e40?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4cf8fc4622034fccbf0a0efaca869e40?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4cf8fc4622034fccbf0a0efaca869e40?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4cf8fc4622034fccbf0a0efaca869e40",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4cf8fc4622034fccbf0a0efaca869e40?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4cf8fc4622034fccbf0a0efaca869e40?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4cf8fc4622034fccbf0a0efaca869e40?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4cf8fc4622034fccbf0a0efaca869e40?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4cf8fc4622034fccbf0a0efaca869e40?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4cf8fc4622034fccbf0a0efaca869e40?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.899+0000",
			"geometry": {
				"coordinates": [-111.16805556, 32.24388889],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "42386",
				"created": "2016-03-15T23:22:44.438+0000",
				"resource-uri": "content:af44ee8dc76442ad976a3e84bf9cc827",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "landmark",
				"metacard-type": "ddf.metacard",
				"title": "Arizona-Sonora Desert Museum",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/af44ee8dc76442ad976a3e84bf9cc827?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:43:15.849+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "75b2696b",
				"modified": "2015-11-19T03:07:27.000+0000",
				"id": "af44ee8dc76442ad976a3e84bf9cc827",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 9.173599243164062,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/af44ee8dc76442ad976a3e84bf9cc827?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/af44ee8dc76442ad976a3e84bf9cc827?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/af44ee8dc76442ad976a3e84bf9cc827?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/af44ee8dc76442ad976a3e84bf9cc827",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/af44ee8dc76442ad976a3e84bf9cc827?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/af44ee8dc76442ad976a3e84bf9cc827?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/af44ee8dc76442ad976a3e84bf9cc827?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/af44ee8dc76442ad976a3e84bf9cc827?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/af44ee8dc76442ad976a3e84bf9cc827?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/af44ee8dc76442ad976a3e84bf9cc827?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.899+0000",
			"geometry": {
				"coordinates": [-121.9, 36.6],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "55215",
				"created": "2016-03-15T23:22:44.438+0000",
				"resource-uri": "content:98ad232eb4104526952a9ea1952a50b6",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "unknown",
				"metacard-type": "ddf.metacard",
				"title": "Alta California",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/98ad232eb4104526952a9ea1952a50b6?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:43:00.048+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "ce648319",
				"modified": "2016-02-17T10:34:54.000+0000",
				"id": "98ad232eb4104526952a9ea1952a50b6",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 7.288745880126953,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/98ad232eb4104526952a9ea1952a50b6?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/98ad232eb4104526952a9ea1952a50b6",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/98ad232eb4104526952a9ea1952a50b6?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/98ad232eb4104526952a9ea1952a50b6?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/98ad232eb4104526952a9ea1952a50b6?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/98ad232eb4104526952a9ea1952a50b6?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/98ad232eb4104526952a9ea1952a50b6?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/98ad232eb4104526952a9ea1952a50b6?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/98ad232eb4104526952a9ea1952a50b6?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/98ad232eb4104526952a9ea1952a50b6?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.899+0000",
			"geometry": {
				"coordinates": [-98.76277778, 33.54638889],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "34500",
				"created": "2016-03-15T22:51:11.622+0000",
				"resource-uri": "content:24b9c3e3f51d42d3901a13c9d3c03d69",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "unknown",
				"metacard-type": "ddf.metacard",
				"title": "Air Force Space Surveillance System",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/24b9c3e3f51d42d3901a13c9d3c03d69?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:42:06.218+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "912b5c3",
				"modified": "2015-07-24T17:47:22.000+0000",
				"id": "24b9c3e3f51d42d3901a13c9d3c03d69",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 7.149965286254883,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/24b9c3e3f51d42d3901a13c9d3c03d69?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/24b9c3e3f51d42d3901a13c9d3c03d69?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/24b9c3e3f51d42d3901a13c9d3c03d69?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/24b9c3e3f51d42d3901a13c9d3c03d69?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/24b9c3e3f51d42d3901a13c9d3c03d69",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/24b9c3e3f51d42d3901a13c9d3c03d69?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/24b9c3e3f51d42d3901a13c9d3c03d69?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/24b9c3e3f51d42d3901a13c9d3c03d69?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/24b9c3e3f51d42d3901a13c9d3c03d69?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/24b9c3e3f51d42d3901a13c9d3c03d69?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.899+0000",
			"geometry": {
				"coordinates": [-97.69527778, 33.35916667],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "18295",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:bb9a30a890ce4e4fa53813ed1fe94415",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Alvord, Texas",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/bb9a30a890ce4e4fa53813ed1fe94415?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:43:07.459+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "13154999",
				"modified": "2015-07-07T22:57:20.000+0000",
				"id": "bb9a30a890ce4e4fa53813ed1fe94415",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 6.131806373596191,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/bb9a30a890ce4e4fa53813ed1fe94415?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/bb9a30a890ce4e4fa53813ed1fe94415?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/bb9a30a890ce4e4fa53813ed1fe94415?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/bb9a30a890ce4e4fa53813ed1fe94415?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/bb9a30a890ce4e4fa53813ed1fe94415?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/bb9a30a890ce4e4fa53813ed1fe94415?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/bb9a30a890ce4e4fa53813ed1fe94415?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/bb9a30a890ce4e4fa53813ed1fe94415?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/bb9a30a890ce4e4fa53813ed1fe94415",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/bb9a30a890ce4e4fa53813ed1fe94415?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.899+0000",
			"geometry": {
				"coordinates": [-95.27166667, 29.39361111],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "28105",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:9e6ee526090542b9a26ddb0eb06d1831",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Alvin, Texas",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9e6ee526090542b9a26ddb0eb06d1831?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:43:07.176+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "39ed7384",
				"modified": "2016-02-26T20:47:32.000+0000",
				"id": "9e6ee526090542b9a26ddb0eb06d1831",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 5.690060138702393,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9e6ee526090542b9a26ddb0eb06d1831?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9e6ee526090542b9a26ddb0eb06d1831?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9e6ee526090542b9a26ddb0eb06d1831?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9e6ee526090542b9a26ddb0eb06d1831?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9e6ee526090542b9a26ddb0eb06d1831?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9e6ee526090542b9a26ddb0eb06d1831?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9e6ee526090542b9a26ddb0eb06d1831?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9e6ee526090542b9a26ddb0eb06d1831?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9e6ee526090542b9a26ddb0eb06d1831",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/9e6ee526090542b9a26ddb0eb06d1831?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.899+0000",
			"geometry": {
				"coordinates": [-98.94722222, 39.46833333],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "14785",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:b1751be9ebd549b38760be1a29870a8a",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Alton, Kansas",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b1751be9ebd549b38760be1a29870a8a?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:43:03.751+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "cc7ccffb",
				"modified": "2015-08-20T18:36:38.000+0000",
				"id": "b1751be9ebd549b38760be1a29870a8a",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 5.690060138702393,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b1751be9ebd549b38760be1a29870a8a?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b1751be9ebd549b38760be1a29870a8a?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b1751be9ebd549b38760be1a29870a8a?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b1751be9ebd549b38760be1a29870a8a?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b1751be9ebd549b38760be1a29870a8a?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b1751be9ebd549b38760be1a29870a8a?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b1751be9ebd549b38760be1a29870a8a",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b1751be9ebd549b38760be1a29870a8a?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b1751be9ebd549b38760be1a29870a8a?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b1751be9ebd549b38760be1a29870a8a?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}],
		"hasThumbnail": false,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.899+0000",
			"geometry": {
				"coordinates": [-106.0125, 35.65916667],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "18649",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:e0f468105e0c4cc687860c03be314d39",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Agua Fria, New Mexico",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/e0f468105e0c4cc687860c03be314d39?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:42:00.040+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "933fb529",
				"modified": "2015-07-17T02:16:25.000+0000",
				"id": "e0f468105e0c4cc687860c03be314d39",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 5.690060138702393,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/e0f468105e0c4cc687860c03be314d39?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/e0f468105e0c4cc687860c03be314d39?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/e0f468105e0c4cc687860c03be314d39?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/e0f468105e0c4cc687860c03be314d39?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/e0f468105e0c4cc687860c03be314d39?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/e0f468105e0c4cc687860c03be314d39?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/e0f468105e0c4cc687860c03be314d39?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/e0f468105e0c4cc687860c03be314d39",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/e0f468105e0c4cc687860c03be314d39?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/e0f468105e0c4cc687860c03be314d39?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.899+0000",
			"geometry": {
				"coordinates": [-97.129363, 34.18124],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "52259",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:b0cc21027fde43689243624091cd58c6",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Ardmore, Oklahoma",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b0cc21027fde43689243624091cd58c6?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:43:11.556+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "c5f9c1af",
				"modified": "2016-02-07T01:08:05.000+0000",
				"id": "b0cc21027fde43689243624091cd58c6",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 4.3566155433654785,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b0cc21027fde43689243624091cd58c6?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b0cc21027fde43689243624091cd58c6?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b0cc21027fde43689243624091cd58c6?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b0cc21027fde43689243624091cd58c6?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b0cc21027fde43689243624091cd58c6?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b0cc21027fde43689243624091cd58c6?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b0cc21027fde43689243624091cd58c6?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b0cc21027fde43689243624091cd58c6",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b0cc21027fde43689243624091cd58c6?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b0cc21027fde43689243624091cd58c6?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.899+0000",
			"geometry": {
				"coordinates": [-74.133826, 41.032669],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "66638",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:0a19ca98bbd54565b65efe4214d70dba",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Allendale, New Jersey",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0a19ca98bbd54565b65efe4214d70dba?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:42:41.811+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "33826f9",
				"modified": "2016-02-28T03:52:07.000+0000",
				"id": "0a19ca98bbd54565b65efe4214d70dba",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 3.9122304916381836,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0a19ca98bbd54565b65efe4214d70dba?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0a19ca98bbd54565b65efe4214d70dba",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0a19ca98bbd54565b65efe4214d70dba?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0a19ca98bbd54565b65efe4214d70dba?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0a19ca98bbd54565b65efe4214d70dba?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0a19ca98bbd54565b65efe4214d70dba?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0a19ca98bbd54565b65efe4214d70dba?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0a19ca98bbd54565b65efe4214d70dba?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0a19ca98bbd54565b65efe4214d70dba?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0a19ca98bbd54565b65efe4214d70dba?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.900+0000",
			"geometry": {
				"coordinates": [-90.32361111, 38.55111111],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "31059",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:c414f236f4e74ccaae8c205a3869cfb7",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Affton, Missouri",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/c414f236f4e74ccaae8c205a3869cfb7?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:41:51.756+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "9a5a9f38",
				"modified": "2016-01-10T19:53:41.000+0000",
				"id": "c414f236f4e74ccaae8c205a3869cfb7",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 3.9122304916381836,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/c414f236f4e74ccaae8c205a3869cfb7?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/c414f236f4e74ccaae8c205a3869cfb7?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/c414f236f4e74ccaae8c205a3869cfb7?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/c414f236f4e74ccaae8c205a3869cfb7?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/c414f236f4e74ccaae8c205a3869cfb7",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/c414f236f4e74ccaae8c205a3869cfb7?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/c414f236f4e74ccaae8c205a3869cfb7?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/c414f236f4e74ccaae8c205a3869cfb7?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/c414f236f4e74ccaae8c205a3869cfb7?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/c414f236f4e74ccaae8c205a3869cfb7?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}],
		"hasThumbnail": false,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.900+0000",
			"geometry": {
				"coordinates": [-78.0, 40.0],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "74756",
				"created": "2016-03-15T23:22:44.438+0000",
				"resource-uri": "content:a40d10031c2444deb70efdfc56119fe5",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "mountain",
				"metacard-type": "ddf.metacard",
				"title": "Appalachian Mountains",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/a40d10031c2444deb70efdfc56119fe5?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:42:58.390+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "7bb2c7a0",
				"modified": "2016-03-03T03:33:12.000+0000",
				"id": "a40d10031c2444deb70efdfc56119fe5",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 3.428347587585449,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/a40d10031c2444deb70efdfc56119fe5?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/a40d10031c2444deb70efdfc56119fe5?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/a40d10031c2444deb70efdfc56119fe5?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/a40d10031c2444deb70efdfc56119fe5?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/a40d10031c2444deb70efdfc56119fe5",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/a40d10031c2444deb70efdfc56119fe5?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/a40d10031c2444deb70efdfc56119fe5?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/a40d10031c2444deb70efdfc56119fe5?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/a40d10031c2444deb70efdfc56119fe5?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/a40d10031c2444deb70efdfc56119fe5?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.900+0000",
			"geometry": {
				"coordinates": [-66.75277778, 18.34416667],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "69419",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:2a883cf77e8246c3a5471b84ec52a9ac",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "landmark",
				"metacard-type": "ddf.metacard",
				"title": "Arecibo Observatory",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/2a883cf77e8246c3a5471b84ec52a9ac?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:43:12.271+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "65da2f36",
				"modified": "2016-02-28T06:57:47.000+0000",
				"id": "2a883cf77e8246c3a5471b84ec52a9ac",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 3.428347587585449,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/2a883cf77e8246c3a5471b84ec52a9ac?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/2a883cf77e8246c3a5471b84ec52a9ac?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/2a883cf77e8246c3a5471b84ec52a9ac?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/2a883cf77e8246c3a5471b84ec52a9ac?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/2a883cf77e8246c3a5471b84ec52a9ac?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/2a883cf77e8246c3a5471b84ec52a9ac?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/2a883cf77e8246c3a5471b84ec52a9ac?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/2a883cf77e8246c3a5471b84ec52a9ac?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/2a883cf77e8246c3a5471b84ec52a9ac",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/2a883cf77e8246c3a5471b84ec52a9ac?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.900+0000",
			"geometry": {
				"coordinates": [-93.62, 42.03472222],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "43399",
				"created": "2016-03-15T22:51:11.622+0000",
				"resource-uri": "content:5a78f80e847a484a8854180a9a84e9cd",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Ames, Iowa",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5a78f80e847a484a8854180a9a84e9cd?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:41:53.834+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "6fece580",
				"modified": "2016-02-09T01:45:00.000+0000",
				"id": "5a78f80e847a484a8854180a9a84e9cd",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 3.428347587585449,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5a78f80e847a484a8854180a9a84e9cd?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5a78f80e847a484a8854180a9a84e9cd?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5a78f80e847a484a8854180a9a84e9cd?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5a78f80e847a484a8854180a9a84e9cd?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5a78f80e847a484a8854180a9a84e9cd?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5a78f80e847a484a8854180a9a84e9cd?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5a78f80e847a484a8854180a9a84e9cd?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5a78f80e847a484a8854180a9a84e9cd?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5a78f80e847a484a8854180a9a84e9cd?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5a78f80e847a484a8854180a9a84e9cd",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}],
		"hasThumbnail": false,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.900+0000",
			"geometry": {
				"coordinates": [-158.13333333, 26.11666667],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "60560",
				"created": "2016-03-15T22:51:11.622+0000",
				"resource-uri": "content:22e10a55b3b346738077175442dc6e62",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "event",
				"metacard-type": "ddf.metacard",
				"title": "Apollo 15",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/22e10a55b3b346738077175442dc6e62?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:42:57.652+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "ae3888c5",
				"modified": "2016-01-20T21:34:49.000+0000",
				"id": "22e10a55b3b346738077175442dc6e62",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 3.428347587585449,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/22e10a55b3b346738077175442dc6e62?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/22e10a55b3b346738077175442dc6e62",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/22e10a55b3b346738077175442dc6e62?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/22e10a55b3b346738077175442dc6e62?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/22e10a55b3b346738077175442dc6e62?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/22e10a55b3b346738077175442dc6e62?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/22e10a55b3b346738077175442dc6e62?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/22e10a55b3b346738077175442dc6e62?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/22e10a55b3b346738077175442dc6e62?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/22e10a55b3b346738077175442dc6e62?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.900+0000",
			"geometry": {
				"coordinates": [-105.96047778, 32.90041111],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "105521",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:5d91c14e1c48421a8d73b3ee4ffad412",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Alamogordo, New Mexico",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5d91c14e1c48421a8d73b3ee4ffad412?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:41:30.419+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "a15b60f2",
				"modified": "2016-02-28T05:29:55.000+0000",
				"id": "5d91c14e1c48421a8d73b3ee4ffad412",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 3.330475330352783,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5d91c14e1c48421a8d73b3ee4ffad412?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5d91c14e1c48421a8d73b3ee4ffad412?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5d91c14e1c48421a8d73b3ee4ffad412?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5d91c14e1c48421a8d73b3ee4ffad412?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5d91c14e1c48421a8d73b3ee4ffad412",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5d91c14e1c48421a8d73b3ee4ffad412?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5d91c14e1c48421a8d73b3ee4ffad412?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5d91c14e1c48421a8d73b3ee4ffad412?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5d91c14e1c48421a8d73b3ee4ffad412?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/5d91c14e1c48421a8d73b3ee4ffad412?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.900+0000",
			"geometry": {
				"coordinates": [-78.39972222, 40.51083333],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "85714",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:b57d9fa454d840f5b82d0f8ce3e6810b",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "unknown",
				"metacard-type": "ddf.metacard",
				"title": "Altoona, Pennsylvania",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b57d9fa454d840f5b82d0f8ce3e6810b?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:43:05.844+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "1e7fb94c",
				"modified": "2016-01-26T17:08:16.000+0000",
				"id": "b57d9fa454d840f5b82d0f8ce3e6810b",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 2.918844699859619,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b57d9fa454d840f5b82d0f8ce3e6810b?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b57d9fa454d840f5b82d0f8ce3e6810b?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b57d9fa454d840f5b82d0f8ce3e6810b?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b57d9fa454d840f5b82d0f8ce3e6810b?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b57d9fa454d840f5b82d0f8ce3e6810b",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b57d9fa454d840f5b82d0f8ce3e6810b?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b57d9fa454d840f5b82d0f8ce3e6810b?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b57d9fa454d840f5b82d0f8ce3e6810b?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b57d9fa454d840f5b82d0f8ce3e6810b?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/b57d9fa454d840f5b82d0f8ce3e6810b?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.900+0000",
			"geometry": {
				"coordinates": [-77.0387, 38.9053],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "132213",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:0421ced0bfe04604bdf27750427abf34",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "unknown",
				"metacard-type": "ddf.metacard",
				"title": "American Enterprise Institute",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0421ced0bfe04604bdf27750427abf34?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:43:12.815+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "82107a6c",
				"modified": "2016-03-05T03:30:20.000+0000",
				"id": "0421ced0bfe04604bdf27750427abf34",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 2.408514976501465,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0421ced0bfe04604bdf27750427abf34?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0421ced0bfe04604bdf27750427abf34",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0421ced0bfe04604bdf27750427abf34?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0421ced0bfe04604bdf27750427abf34?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0421ced0bfe04604bdf27750427abf34?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0421ced0bfe04604bdf27750427abf34?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0421ced0bfe04604bdf27750427abf34?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0421ced0bfe04604bdf27750427abf34?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0421ced0bfe04604bdf27750427abf34?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0421ced0bfe04604bdf27750427abf34?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.900+0000",
			"geometry": {
				"coordinates": [-92.45916667, 31.29277778],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "95980",
				"created": "2016-03-15T22:51:11.622+0000",
				"resource-uri": "content:0fb1043104724404808589d4deb0bd00",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Alexandria, Louisiana",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0fb1043104724404808589d4deb0bd00?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:42:17.249+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "5fb2fd84",
				"modified": "2016-03-02T22:23:51.000+0000",
				"id": "0fb1043104724404808589d4deb0bd00",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 2.408514976501465,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0fb1043104724404808589d4deb0bd00?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0fb1043104724404808589d4deb0bd00?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0fb1043104724404808589d4deb0bd00",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0fb1043104724404808589d4deb0bd00?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0fb1043104724404808589d4deb0bd00?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0fb1043104724404808589d4deb0bd00?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0fb1043104724404808589d4deb0bd00?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0fb1043104724404808589d4deb0bd00?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0fb1043104724404808589d4deb0bd00?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/0fb1043104724404808589d4deb0bd00?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.901+0000",
			"geometry": {
				"coordinates": [-77.10833333, 38.88027778],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "120090",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:068d865d85e34bc9a5fe185b9dba3788",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "unknown",
				"metacard-type": "ddf.metacard",
				"title": "Arlington County, Virginia",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/068d865d85e34bc9a5fe185b9dba3788?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:43:18.632+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "153d0aaa",
				"modified": "2016-02-29T00:36:32.000+0000",
				"id": "068d865d85e34bc9a5fe185b9dba3788",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 2.408514976501465,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/068d865d85e34bc9a5fe185b9dba3788?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/068d865d85e34bc9a5fe185b9dba3788",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/068d865d85e34bc9a5fe185b9dba3788?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/068d865d85e34bc9a5fe185b9dba3788?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/068d865d85e34bc9a5fe185b9dba3788?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/068d865d85e34bc9a5fe185b9dba3788?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/068d865d85e34bc9a5fe185b9dba3788?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/068d865d85e34bc9a5fe185b9dba3788?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/068d865d85e34bc9a5fe185b9dba3788?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/068d865d85e34bc9a5fe185b9dba3788?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.901+0000",
			"geometry": {
				"coordinates": [-75.47722222, 40.60166667],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "140117",
				"created": "2016-03-16T17:00:29.614+0000",
				"resource-uri": "content:4fda47a8ba164e73948c25af1e22de76",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "city",
				"metacard-type": "ddf.metacard",
				"title": "Allentown, Pennsylvania",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4fda47a8ba164e73948c25af1e22de76?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:42:45.128+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "686609d4",
				"modified": "2016-02-28T13:21:45.000+0000",
				"id": "4fda47a8ba164e73948c25af1e22de76",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 2.408514976501465,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4fda47a8ba164e73948c25af1e22de76?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4fda47a8ba164e73948c25af1e22de76?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4fda47a8ba164e73948c25af1e22de76?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4fda47a8ba164e73948c25af1e22de76?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4fda47a8ba164e73948c25af1e22de76",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4fda47a8ba164e73948c25af1e22de76?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4fda47a8ba164e73948c25af1e22de76?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4fda47a8ba164e73948c25af1e22de76?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4fda47a8ba164e73948c25af1e22de76?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/4fda47a8ba164e73948c25af1e22de76?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}, {
		"matches": {},
		"metacard": {
			"cached": "2017-04-21T22:44:31.901+0000",
			"geometry": {
				"coordinates": [-169.15, 13.31666667],
				"type": "Point"
			},
			"type": "Feature",
			"properties": {
				"resource-size": "116218",
				"created": "2016-03-15T22:51:11.622+0000",
				"resource-uri": "content:34fdbfc3223d4805a874d5cdcdb0ef18",
				"metacard-tags": ["resource", "VALID"],
				"checksum-algorithm": "Adler32",
				"metadata-content-type": "event",
				"metacard-type": "ddf.metacard",
				"title": "Apollo 11",
				"resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/34fdbfc3223d4805a874d5cdcdb0ef18?transform=resource",
				"source-id": "ddf.distribution",
				"effective": "2017-04-21T22:42:57.214+0000",
				"point-of-contact": "admin@localhost.local",
				"checksum": "e864571a",
				"modified": "2016-02-05T22:02:09.000+0000",
				"id": "34fdbfc3223d4805a874d5cdcdb0ef18",
				"metadata-content-type-version": "20160305"
			}
		},
		"distance": null,
		"relevance": 2.408514976501465,
		"actions": [{
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/34fdbfc3223d4805a874d5cdcdb0ef18",
			"title": "Export Metacard XML",
			"description": "Provides a URL to the metacard",
			"id": "catalog.data.metacard.view"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/34fdbfc3223d4805a874d5cdcdb0ef18?transform=thumbnail",
			"title": "Export as thumbnail",
			"description": "Provides a URL to the metacard that transforms the return value via the thumbnail transformer",
			"id": "catalog.data.metacard.thumbnail"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/34fdbfc3223d4805a874d5cdcdb0ef18?transform=geojson",
			"title": "Export as geojson",
			"description": "Provides a URL to the metacard that transforms the return value via the geojson transformer",
			"id": "catalog.data.metacard.geojson"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/34fdbfc3223d4805a874d5cdcdb0ef18?transform=resource",
			"title": "Export as resource",
			"description": "Provides a URL to the metacard that transforms the return value via the resource transformer",
			"id": "catalog.data.metacard.resource"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/34fdbfc3223d4805a874d5cdcdb0ef18?transform=kml",
			"title": "Export as kml",
			"description": "Provides a URL to the metacard that transforms the return value via the kml transformer",
			"id": "catalog.data.metacard.kml"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/34fdbfc3223d4805a874d5cdcdb0ef18?transform=gmd:MD_Metadata",
			"title": "Export as gmd:MD_Metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the gmd:MD_Metadata transformer",
			"id": "catalog.data.metacard.gmd:MD_Metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/34fdbfc3223d4805a874d5cdcdb0ef18?transform=metadata",
			"title": "Export as metadata",
			"description": "Provides a URL to the metacard that transforms the return value via the metadata transformer",
			"id": "catalog.data.metacard.metadata"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/34fdbfc3223d4805a874d5cdcdb0ef18?transform=csw:Record",
			"title": "Export as csw:Record",
			"description": "Provides a URL to the metacard that transforms the return value via the csw:Record transformer",
			"id": "catalog.data.metacard.csw:Record"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/34fdbfc3223d4805a874d5cdcdb0ef18?transform=html",
			"title": "Export as html",
			"description": "Provides a URL to the metacard that transforms the return value via the html transformer",
			"id": "catalog.data.metacard.html"
		}, {
			"url": "https://localhost:8993/services/catalog/sources/ddf.distribution/34fdbfc3223d4805a874d5cdcdb0ef18?transform=xml",
			"title": "Export as xml",
			"description": "Provides a URL to the metacard that transforms the return value via the xml transformer",
			"id": "catalog.data.metacard.xml"
		}],
		"hasThumbnail": true,
		"isResourceLocal": true
	}],
	"id": "54c6c607-ef8c-4396-8221-59429d703090",
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
			"failed-validators-warnings": {
				"format": "STRING",
				"multivalued": true,
				"indexed": true
			},
			"id": {
				"format": "STRING",
				"multivalued": false,
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
			"validation-errors": {
				"format": "STRING",
				"multivalued": true,
				"indexed": true
			},
			"resource.derived-uri": {
				"format": "STRING",
				"multivalued": true,
				"indexed": true
			},
			"metacard.associations.derived": {
				"format": "STRING",
				"multivalued": true,
				"indexed": true
			},
			"location": {
				"format": "GEOMETRY",
				"multivalued": false,
				"indexed": true
			},
			"expiration": {
				"format": "DATE",
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
		"hits": 27,
		"count": 27,
		"elapsed": 128,
		"id": "ddf.distribution",
		"successful": true
	}
}
