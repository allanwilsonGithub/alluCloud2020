import React from "react"
import { Marker, Popup } from "react-leaflet"
import * as alluMapData from "../data/allu-map-data.json"
import getAllMapDataFromPostgres from "../DB/connectToPostgresDB"

import { Icon } from "leaflet"

const hikingIcon = new Icon({
  iconUrl: './hiking.svg',
  iconSize: [25, 25]
})

const DisplayWalkingRoutes = ( {activeRoute, setActiveRoute} ) => {
    console.log(alluMapData)
    //console.log(getAllMapDataFromPostgres)
    return (
            <div>
            {alluMapData.walkingRoutes.map(route => (
                    <Marker
                       key={route.properties.ROUTE_ID}
                       position={[
                         route.geometry.coordinates[0],
                         route.geometry.coordinates[1]
                       ]}
                       onClick={() => {
                         setActiveRoute(route)
                       }}
                       icon={hikingIcon}

                    />
                ))}

                {activeRoute && (
                  <Popup
                       position={[
                         activeRoute.geometry.coordinates[0],
                         activeRoute.geometry.coordinates[1]
                       ]}
                       onClose={() => {
                         setActiveRoute(null)
                       }}
                   >
                   <div>
                     <h2>{activeRoute.properties.NAME}</h2>
                     <p>{activeRoute.properties.DESCRIPTION}</p>
                     <p><a href={activeRoute.properties.URL} target="_blank" rel="noopener noreferrer">link</a></p>
                   </div>
                   </Popup>
                   )}
            </div>
    )
}

export default DisplayWalkingRoutes