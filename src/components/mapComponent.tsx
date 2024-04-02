"use client"
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import mapboxgl, { type LngLatLike } from 'mapbox-gl';

interface MapComponentProps {
    longitude: number;
    latitude: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ longitude, latitude }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const [hasClickedMap, setHasClickedMap] = useState(false);

    useEffect(() => {
        if (!mapContainerRef.current) return; // Exit if ref isn't set yet

        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN as string;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [longitude, latitude] as LngLatLike,
            zoom: 13.5,
            scrollZoom: hasClickedMap, // Initially set based on `hasClickedMap` state
            pitch: 70,
            bearing: 10,
            antialias: true,
        });

        const marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
      <h3>Uk Sign and Print</h3>
      <p>Address: 1005 Stockport Road, Levenshulme - Manchester</p>
      <a href="https://www.google.com/maps/dir/Current+Location/${latitude},${longitude}" target="_blank">Get Directions</a>
    `);
        marker.setPopup(popup);

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

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

        const enableScrollZoom = () => map.scrollZoom.enable();
        const disableScrollZoom = () => map.scrollZoom.disable();

        // Only attach these listeners if map zoom on scroll is initially disabled
        if (!hasClickedMap) {
            mapContainerRef.current.addEventListener('mouseenter', enableScrollZoom);
            mapContainerRef.current.addEventListener('mouseleave', disableScrollZoom);
            mapContainerRef.current.addEventListener('click', () => {
                setHasClickedMap(true);
                map.scrollZoom.enable();
            });
        }

        return () => {
            map.remove();
            centerButton.remove();
            if (!hasClickedMap) {
                mapContainerRef.current?.removeEventListener('mouseenter', enableScrollZoom);
                mapContainerRef.current?.removeEventListener('mouseleave', disableScrollZoom);
                mapContainerRef.current?.removeEventListener('click', () => setHasClickedMap(true));
            }
        };
    }, [latitude, longitude, hasClickedMap]);

    return <div ref={mapContainerRef} style={{ width: '100%', height: '400px', marginTop: '20px', position: 'relative' }} />;
};

export default MapComponent;
