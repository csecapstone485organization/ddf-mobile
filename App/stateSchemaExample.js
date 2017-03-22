// Example to demonstrate how state should look in redux store

{
  created:1490216827867
  effective:1490216827867
  id:"82c6355618b44f739481d9db98859978"
  metacard.owner:"admin@localhost.local"
  modified:1490216827867
    queries: 
      cql:"("anyText" ILIKE 'cool1.jpg')"
      federation:"enterprise"
      id:"87c3db4f-a23d-4f77-90c0-4fad0e704585"
      sortField:"modified"
      sortOrder:"desc"
      title:"Search Name"
  subscribed: false
  title: "New Workspace"

  },
    //basic string only query returned in geojson
    //send get request with https://localhost:8993/services/catalog/query?q=*&format=geojson
  query:
  {
    q: cool1.jpg
    format:geojson
  }

  //result from cql query on ddf
   "results": [
    {{
  "hits": 1,
  "results": [
    {
      "metacard": {
        "geometry": null,
        "type": "Feature",
        "properties": {
          "metadata": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><metadata>\n<head>\n<meta name=\"Media Black Point\" content=\"(0.012054443, 0.012496948, 0.010314941)\"/>\n<meta name=\"Green TRC\" content=\"0.0, 0.0030976, 0.0069734, 0.0132296, 0.0217594, 0.0328832, 0.0467231, 0.0634623, 0.0832685, 0.1062638, 0.1325856, 0.162356, 0.1956817, 0.2327001, 0.273518, 0.3182269, 0.3669032, 0.4196841, 0.4766461, 0.5378653, 0.6034638, 0.6734874, 0.7480125, 0.8272068, 0.9109026, 1.0\"/>\n<meta name=\"Compression Type\" content=\"Baseline\"/>\n<meta name=\"Data Precision\" content=\"8 bits\"/>\n<meta name=\"Number of Components\" content=\"3\"/>\n<meta name=\"tiff:ImageLength\" content=\"540\"/>\n<meta name=\"CMM Type\" content=\"lcms\"/>\n<meta name=\"XYZ values\" content=\"0.9642029 1.0 0.8249054\"/>\n<meta name=\"Green Colorant\" content=\"(0.3851471, 0.71687317, 0.097076416)\"/>\n<meta name=\"Component 2\" content=\"Cb component: Quantization table 1, Sampling factors 1 horiz/1 vert\"/>\n<meta name=\"Profile Description\" content=\"c2\"/>\n<meta name=\"Component 1\" content=\"Y component: Quantization table 0, Sampling factors 2 horiz/2 vert\"/>\n<meta name=\"X Resolution\" content=\"1 dot\"/>\n<meta name=\"Blue Colorant\" content=\"(0.1430664, 0.06060791, 0.71409607)\"/>\n<meta name=\"Copyright\" content=\"FB\"/>\n<meta name=\"File Size\" content=\"21561 bytes\"/>\n<meta name=\"Component 3\" content=\"Cr component: Quantization table 1, Sampling factors 1 horiz/1 vert\"/>\n<meta name=\"File Name\" content=\"apache-tika-1445649418254485448.tmp\"/>\n<meta name=\"tiff:BitsPerSample\" content=\"8\"/>\n<meta name=\"Media White Point\" content=\"(0.9642029, 1.0, 0.8249054)\"/>\n<meta name=\"Primary Platform\" content=\"Apple Computer, Inc.\"/>\n<meta name=\"Content-Type\" content=\"image/jpeg\"/>\n<meta name=\"X-Parsed-By\" content=\"org.apache.tika.parser.DefaultParser\"/>\n<meta name=\"X-Parsed-By\" content=\"org.apache.tika.parser.DefaultParser\"/>\n<meta name=\"X-Parsed-By\" content=\"org.apache.tika.parser.jpeg.JpegParser\"/>\n<meta name=\"Resolution Units\" content=\"none\"/>\n<meta name=\"File Modified Date\" content=\"Wed Mar 22 13:23:41 MST 2017\"/>\n<meta name=\"Blue TRC\" content=\"0.0, 0.0030976, 0.0069734, 0.0132296, 0.0217594, 0.0328832, 0.0467231, 0.0634623, 0.0832685, 0.1062638, 0.1325856, 0.162356, 0.1956817, 0.2327001, 0.273518, 0.3182269, 0.3669032, 0.4196841, 0.4766461, 0.5378653, 0.6034638, 0.6734874, 0.7480125, 0.8272068, 0.9109026, 1.0\"/>\n<meta name=\"Image Height\" content=\"540 pixels\"/>\n<meta name=\"Red Colorant\" content=\"(0.43606567, 0.2224884, 0.013916016)\"/>\n<meta name=\"Tag Count\" content=\"10\"/>\n<meta name=\"Image Width\" content=\"720 pixels\"/>\n<meta name=\"Profile Size\" content=\"524\"/>\n<meta name=\"Color space\" content=\"RGB\"/>\n<meta name=\"Signature\" content=\"acsp\"/>\n<meta name=\"Class\" content=\"Display Device\"/>\n<meta name=\"Profile Date/Time\" content=\"Fri Feb 24 20:41:57 MST 2012\"/>\n<meta name=\"Profile Connection Space\" content=\"XYZ\"/>\n<meta name=\"tiff:ImageWidth\" content=\"720\"/>\n<meta name=\"Y Resolution\" content=\"1 dot\"/>\n<meta name=\"Red TRC\" content=\"0.0, 0.0030976, 0.0069734, 0.0132296, 0.0217594, 0.0328832, 0.0467231, 0.0634623, 0.0832685, 0.1062638, 0.1325856, 0.162356, 0.1956817, 0.2327001, 0.273518, 0.3182269, 0.3669032, 0.4196841, 0.4766461, 0.5378653, 0.6034638, 0.6734874, 0.7480125, 0.8272068, 0.9109026, 1.0\"/>\n<title/>\n</head>\n<body/></metadata>",
          "thumbnail": "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",
          "resource-size": "21561",
          "created": "2017-03-22T20:23:41.627+0000",
          "resource-uri": "content:f813af4edcdd42a8b582dca0dd378c29",
          "metacard-tags": [
            "resource",
            "VALID"
          ],
          "checksum-algorithm": "Adler32",
          "metacard-type": "common",
          "resource-download-url": "https://localhost:8993/services/catalog/sources/ddf.distribution/f813af4edcdd42a8b582dca0dd378c29?transform=resource",
          "title": "cool1.jpg",
          "source-id": "ddf.distribution",
          "metacard.created": "2017-03-22T20:23:41.627+0000",
          "metacard.modified": "2017-03-22T20:23:41.627+0000",
          "checksum": "e3044f2e",
          "modified": "2017-03-22T20:23:41.627+0000",
          "id": "f813af4edcdd42a8b582dca0dd378c29"
        }
      },
      "relevance": 3.029383897781372
    }
  ]
}

