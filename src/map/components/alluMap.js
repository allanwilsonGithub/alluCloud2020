import React from "react"
import { Map, TileLayer } from "react-leaflet"
import DisplayWalkingRoutes from "./walkingRoutes"
import DisplayMunros from "./munros"

const DisplayMap = ( {activeRoute, setActiveRoute, activeMunro, setActiveMunro} ) => {
    return (
            <div>
                <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossOrigin=""
                />

                <Map center={[60.199550, 24.696819]} zoom={12}>

                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <DisplayWalkingRoutes activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
                <DisplayMunros activeMunro={activeMunro} setActiveMunro={setActiveMunro} />
                </Map>
            </div>
    )
}

export default DisplayMap


