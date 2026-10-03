// Optional map adapter. The text route remains available without Leaflet.
let map;
let mapMarkers = [];
let mapUnavailable = false;

function initLeafletMap() {
  if (map || mapUnavailable || state.settings.textRoute) return;
  if (!window.L) {
    renderMapFallback();
    return;
  }
  const mapConfig = QUIZ_PACK.map || DEFAULT_QUIZ_PACK.map;
  const mapCenter = normalizeMapCenter(mapConfig.center);
  
  map = L.map('map', {
    center: [mapCenter.lat, mapCenter.lng],
    zoom: mapConfig.zoom,
    zoomControl: true,
    attributionControl: true,
    dragging: true,
    touchZoom: true,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: true
  });
  
  const configuredMap = map;
  L.tileLayer(CarmenMapConfig.tileUrl, {
    attribution: CarmenMapConfig.attribution,
    maxZoom: mapConfig.maxZoom,
    minZoom: mapConfig.minZoom
  }).on('tileerror', () => {
    // This callback belongs to the map instance, not a particular round.
    // Leaflet must finish tile delivery before its container is detached.
    setTimeout(() => { if (map === configuredMap) renderMapFallback(); },0);
  }).addTo(map);
}

function invalidateMapSize() {
  if (map) {
    map.invalidateSize();
  }
}

function getMapTextAlternative() {
  const current = LOCATIONS[state.currentLocationIndex];
  const visited = LOCATIONS
    .slice(0, state.currentLocationIndex)
    .map((loc) => loc.name)
    .join(', ') || 'None yet';
  const next = LOCATIONS[state.currentLocationIndex + 1]?.name || 'Final report';
  return `Current stop: ${current.name}. District: ${current.province}. Visited stops: ${visited}. Next destination: ${next}.`;
}

function updateMapTextAlternative() {
  const text = getMapTextAlternative();
  const alt = document.getElementById('mapTextAlternative');
  if (alt) alt.textContent = text;
  return text;
}

function renderMapFallback() {
  mapUnavailable = true;
  if (map) map.remove();
  map = null; mapMarkers = [];
  const mapEl = document.getElementById('map');
  if (!mapEl) return;
  const current = LOCATIONS[state.currentLocationIndex];
  updateMapTextAlternative();
  mapEl.innerHTML = `
    <div class="map-fallback" role="group" aria-label="Route overview">
      <p class="text-xs uppercase font-black text-amber-400">Route overview — ${state.settings.textRoute ? 'text route selected' : 'map unavailable'}</p>
      <p class="text-lg font-black">${escapeHtml(current.emoji || '•')} ${escapeHtml(current.name)}</p>
      <p class="text-sm">${escapeHtml(current.province)}</p>
      <ol class="text-xs leading-relaxed">
        ${LOCATIONS.map((loc, index) => `<li>${index + 1}. ${escapeHtml(loc.name)} - ${index < state.currentLocationIndex ? 'visited' : index === state.currentLocationIndex ? 'current' : 'upcoming'}</li>`).join('')}
      </ol>
    </div>
  `;
}

function drawMapGrid() {
  initLeafletMap();
  updateMapTextAlternative();
  if (!map) {
    renderMapFallback();
    const cur = LOCATIONS[state.currentLocationIndex];
    document.getElementById('currentCityText').textContent = `${cur.emoji} ${cur.name} (${cur.province})`;
    return;
  }
  invalidateMapSize();
  
  // Remove existing markers
  mapMarkers.forEach(m => map.removeLayer(m));
  mapMarkers = [];
  
  LOCATIONS.forEach((loc, idx) => {
    const isCurrent = idx === state.currentLocationIndex;
    const isVisited = idx < state.currentLocationIndex;
    
    let color = '#38bdf8'; // Locked blue
    let radius = 4;
    let weight = 1;
    let opacity = 0.3;
    
    if (isCurrent) {
      color = '#fbbf24'; // Active gold
      radius = 7;
      weight = 3;
      opacity = 0.9;
    } else if (isVisited) {
      color = '#10b981'; // Visited green
      radius = 5;
      weight = 1;
      opacity = 0.7;
    }
    
    const marker = L.circleMarker([loc.lat, loc.lng], {
      color: color,
      fillColor: color,
      fillOpacity: opacity - 0.1,
      radius: radius,
      weight: weight,
      opacity: opacity
    }).addTo(map);
    
    if (isCurrent) {
      marker.bindTooltip(loc.name, {
        permanent: true,
        direction: 'top',
        className: 'leaflet-tooltip-carmen'
      }).openTooltip();
      
      // Pan to focus on active coordinate
      map.setView([loc.lat, loc.lng], QUIZ_PACK.map.zoom, { animate: !shouldReduceMotion(), duration: shouldReduceMotion() ? 0 : 1.2 });
    }
    
    mapMarkers.push(marker);
  });
  
  const cur = LOCATIONS[state.currentLocationIndex];
  document.getElementById('currentCityText').textContent = `${cur.emoji} ${cur.name} (${cur.province})`;
}

function resetMapForPackChange() {
  mapUnavailable = false;
  if (map && typeof map.remove === 'function') {
    map.remove();
  }
  map = null;
  mapMarkers = [];

  const mapEl = document.getElementById('map');
  if (mapEl) mapEl.innerHTML = '';
}

function toggleTextRoute() {
  state.settings.textRoute=!state.settings.textRoute;
  saveSettings(); applySettings(); resetMapForPackChange();
  if (['investigation','between','final'].includes(state.phase)) drawMapGrid();
}
