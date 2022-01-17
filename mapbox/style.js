
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "GoogleSatelliteHybrid_1": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "Coppelle_file_2": {
            "type": "geojson",
            "data": json_Coppelle_file_2
        }
                    ,
        "Vache_Secondarie_file_3": {
            "type": "geojson",
            "data": json_Vache_Secondarie_file_3
        }
                    ,
        "Vasca_Aperta_file_4": {
            "type": "geojson",
            "data": json_Vasca_Aperta_file_4
        }
                    ,
        "Complesso_Rupestre_file_5": {
            "type": "geojson",
            "data": json_Complesso_Rupestre_file_5
        }
                    ,
        "Vasca_Chiusa_file_6": {
            "type": "geojson",
            "data": json_Vasca_Chiusa_file_6
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_GoogleSatelliteHybrid_1_1",
            "type": "raster",
            "source": "GoogleSatelliteHybrid_1"
        },
        {
            "id": "lyr_Coppelle_file_2_0",
            "type": "circle",
            "source": "Coppelle_file_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#487bb6', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#325780'}
        }
,
        {
            "id": "lyr_Vache_Secondarie_file_3_0",
            "type": "circle",
            "source": "Vache_Secondarie_file_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#0edb64', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#801119'}
        }
,
        {
            "id": "lyr_Vasca_Aperta_file_4_0",
            "type": "circle",
            "source": "Vasca_Aperta_file_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#b3db00', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#801119'}
        }
,
        {
            "id": "lyr_Complesso_Rupestre_file_5_0",
            "type": "circle",
            "source": "Complesso_Rupestre_file_5",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#2000db', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#801119'}
        }
,
        {
            "id": "lyr_Vasca_Chiusa_file_6_0",
            "type": "circle",
            "source": "Vasca_Chiusa_file_6",
            "layout": {},
            "paint": {'circle-radius': ['/', 17.142857142857142, 2], 'circle-color': '#db1e2a', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#801119'}
        }
],
}