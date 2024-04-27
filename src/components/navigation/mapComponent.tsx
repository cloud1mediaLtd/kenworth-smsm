"use client"
import type React from 'react';
import { useEffect, useRef } from 'react';
import mapboxgl, { type LngLatLike } from 'mapbox-gl';

interface MapComponentProps {
    longitude: number;
    latitude: number;
}

let rtlPluginSet = false;

const MapComponent: React.FC<MapComponentProps> = ({ longitude, latitude }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);

    class GetDirectionsControl {

        map: mapboxgl.Map; // Define the 'map' property
        container: HTMLElement; // Define the 'container' property
        button: HTMLButtonElement; // Define the 'button' property

        onAdd(map) {
            this.map = map;
            this.container = document.createElement('div');
            this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
            this.button = document.createElement('button');
            this.button.className = 'mapboxgl-ctrl-icon';
            this.button.type = 'button';
            this.button.title = 'Get Directions';
            this.button.innerHTML = '<span style="transform: scale(1.5);">🧭</span>';
            this.button.onclick = () => {
                window.open(`https://www.google.com/maps/dir/?api=1&destination=${this.map.getCenter().lat},${this.map.getCenter().lng}`, '_blank');
            };
            this.container.appendChild(this.button);
            return this.container;
        }

        onRemove() {
            this.container.parentNode.removeChild(this.container);
        }
    }

    useEffect(() => {
        if (!mapContainerRef.current) return; // Exit if ref isn't set yet

        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN as string;

        if (!rtlPluginSet) {
            mapboxgl.setRTLTextPlugin(
                'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
                null,
                true // Lazy load the plugin
            );
            rtlPluginSet = true; // Update the flag to prevent future calls
        }


        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [longitude, latitude] as LngLatLike,
            zoom: 15,
            scrollZoom: false, // Initially set based on `hasClickedMap` state
            pitch: 70,
            bearing: 20,
            antialias: true,
        });

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        map.addControl(new GetDirectionsControl(), 'top-right');

        map.addControl(new mapboxgl.FullscreenControl({ container: document.querySelector('map') }));

        const marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
      <h3>S.Med Sea Motors</h3>
      <a href="https://www.google.com/maps/dir/Current+Location/${latitude},${longitude}" target="_blank">Get Directions</a>
    `);
        marker.setPopup(popup);



        const centerButton = document.createElement('button');
        centerButton.className = 'map-center-button text-xs bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow';
        centerButton.textContent = 'Center';
        centerButton.style.position = 'absolute';
        centerButton.style.top = '10px';
        centerButton.style.left = '10px';
        centerButton.style.zIndex = '1';
        centerButton.onclick = () => {
            map.flyTo({ center: [longitude, latitude], zoom: 15 });
        };

        mapContainerRef.current.appendChild(centerButton);

        return () => {
            map.remove();
            centerButton.remove();
        };
    }, [latitude, longitude]);

    return <div id='map' ref={mapContainerRef} style={{ width: '100%', height: '400px', position: 'relative', marginTop: '-3.5px' }} />;
};

export default MapComponent;
