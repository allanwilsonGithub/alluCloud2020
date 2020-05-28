import React from "react"
import { Marker, Popup } from "react-leaflet"
import * as munroMapData from "../data/munros.json"

import { Icon } from "leaflet"

const munroIcon = new Icon({
  iconUrl: './munro.svg',
  iconSize: [25, 25]
})

const DisplayMunros= ( {activeMunro, setActiveMunro} ) => {
    return (
            <div>
            {munroMapData.munros.map(mountain => (
                    <Marker
                       key={mountain.smcid}
                       position={[
                         mountain.latlng_lat,
                         mountain.latlng_lng
                       ]}
                       onClick={() => {
                         setActiveMunro(mountain)
                       }}
                       icon={munroIcon}

                    />
                ))}

                {activeMunro && (
                  <Popup
                       position={[
                         activeMunro.latlng_lat,
                         activeMunro.latlng_lng
                       ]}
                       onClose={() => {
                         setActiveMunro(null)
                       }}
                   >
                   <div>
                     <h2>{activeMunro.name}</h2>
                     <p>{activeMunro.height} metres</p>
                     <p>{activeMunro.region}</p>
                     <p>{activeMunro.meaning}</p>
                   </div>
                   </Popup>
                   )}
            </div>
    )
}

export default DisplayMunros