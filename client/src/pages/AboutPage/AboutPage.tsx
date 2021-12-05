import React from 'react'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import L, {LatLngExpression} from "leaflet"
import "leaflet/dist/leaflet.css"
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'


let DefaultIcon = L.icon({
    ...L.Icon.Default.prototype.options,
    iconUrl: icon,
    iconRetinaUrl: iconRetina,
    shadowUrl: iconShadow
})
L.Marker.prototype.options.icon = DefaultIcon


const AboutPage = () => {

    const positionOne : LatLngExpression = [53.3999, 49.50181]
    const positionTwo : LatLngExpression = [53.4015, 49.5020]

    return (
                <MapContainer style={{ height: '70vh', width: '100wh' }} center={positionOne} zoom={16} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={positionOne}>
                        <Popup>
                            <div style={{fontSize:'1rem'}}>
                                Допустим это первый салон груминга.
                                <br />
                                Номера салона:
                                <br />
                                +7-927-888-222-1
                                <br />
                                +7-927-222-888-1
                            </div>
                        </Popup>
                    </Marker>
                    <Marker position={positionTwo}>
                        <Popup>
                            <div style={{fontSize:'1rem'}}>
                                Допустим это второй салон груминга.
                                <br />
                                Номера салона:
                                <br />
                                +7-927-888-222-1
                                <br />
                                +7-927-222-888-1
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
    )
}

export default AboutPage