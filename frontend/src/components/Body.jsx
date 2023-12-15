"use client";

import React, { useEffect, useState } from "react";
import { Map ,MapContainer, TileLayer,Marker, Popup, useMap, useMapEvents,useMapEvent } from "react-leaflet";
import ReactLeafletKml from "react-leaflet-kml";

import KMLParser from "kml-parse";

const Body = () => {
    const[center,setCenter] = useState({lat: 520.5937 ,lng: 78.9629});
    const [kmlData, setKmlData] = useState(null);
    const zoomLevel = 10;

    useEffect(() => {
        const fetchKML = async () => {
            try {
                const response = await fetch("../../asset.kml");
                const kmlText = await response.text();
        
                // Parse KML data
                const parser = new KMLParser();
                const parsedData = parser.parse(kmlText);
        
                setKmlData(parsedData);
            } catch (error) {
                console.error("Error fetching or parsing KML:", error);
            }
            };
    
        fetchKML();
    }, []);


    return (
        <div className="m-4 p-4 h-2/3 md:h-4/5 bg-white rounded-lg shadow overflow-hidden">
            <iframe className="w-full h-full mb-4 border-2 border-grey-100 rounded-lg overflow-auto scrollbar-none" src="https://api.maptiler.com/maps/streets-v2/?key=uLpLxFsSPB5SR54CDDya#1.8/30.13275/31.40117"></iframe>
            {/* <MapContainer
                center = {center}
                zoom = {zoomLevel}
                className="w-full h-full border-2 border-grey-100 rounded-lg overflow-auto scrollbar-none"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer> */}
            <MapContainer
                center={[0, 0]} // Set the center to a default location or adjust as needed
                zoom={10} // Adjust the zoom level as needed
                className="w-full h-full border-2 border-grey-100 rounded-lg overflow-auto scrollbar-none"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {kmlData && (
                <YourKMLComponent kmlData={kmlData} />
                )}
            </MapContainer>
        </div>
    )
}

export default Body