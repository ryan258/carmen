// Optional map adapter. The text route remains available without Leaflet.
let map;
let mapMarkers = [];
let mapUnavailable = false;
let mapLibraryStatus = 'loading';

function refreshVisibleMap() {
  if (['investigation','between','final'].includes(state.phase) && !document.getElementById('gameScreen').classList.contains('hidden')) drawMapGrid();
}

function handleMapLibraryLoad() {
  mapLibraryStatus = 'ready';
  refreshVisibleMap();
}

function handleMapLibraryError() {
  mapLibraryStatus = 'failed';
  mapUnavailable = true;
  refreshVisibleMap();
}

function retryMap() {
  if (state.settings.textRoute || !['investigation','between','final'].includes(state.phase)) return;
  if (!window.L && mapLibraryStatus === 'loading') return;
  const restoreFocus = document.activeElement === document.getElementById('retryMapButton');
  resetMapForPackChange();
  if (!window.L) {
    mapLibraryStatus = 'loading';
    const original = document.getElementById('leafletScript');
    const retry = document.createElement('script');
    // Reuse the pinned URL and integrity boundary; do not add another request while loading.
    for (const name of ['src','integrity','crossorigin']) retry.setAttribute(name, original.getAttribute(name));
    retry.async = true;
    retry.onload = () => { retry.remove(); handleMapLibraryLoad(); };
    retry.onerror = () => { retry.remove(); handleMapLibraryError(); };
    document.head.appendChild(retry);
  }
  drawMapGrid();
  if (restoreFocus) document.getElementById('map').focus({preventScroll: true});
}

function initLeafletMap() {
  if (map || mapUnavailable || state.settings.textRoute) return;
  if (!window.L) return; // A pending library is not a permanent map failure.
  const mapConfig = QUIZ_PACK.map || DEFAULT_QUIZ_PACK.map;
  const mapCenter = normalizeMapCenter(mapConfig.center);
  document.getElementById('map').innerHTML = '';
  
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
    setTimeout(() => { if (map === configuredMap) { mapUnavailable = true; renderMapFallback(); } },0);
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
  if (map) map.remove();
  map = null; mapMarkers = [];
  const mapEl = document.getElementById('map');
  if (!mapEl) return;
  const current = LOCATIONS[state.currentLocationIndex];
  const label = state.settings.textRoute ? 'text route selected'
    : mapLibraryStatus === 'failed' ? 'map library unavailable'
    : mapUnavailable ? 'map tiles unavailable' : 'map loading';
  document.getElementById('retryMapButton').hidden = state.settings.textRoute || (!window.L && mapLibraryStatus === 'loading');
  updateMapTextAlternative();
  mapEl.innerHTML = `
    <div class="map-fallback" role="group" aria-label="Route overview">
      <p class="text-xs uppercase font-black text-amber-400">Route overview — ${label}</p>
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
  document.getElementById('retryMapButton').hidden = true;
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
  document.getElementById('retryMapButton').hidden = true;
}

function toggleTextRoute() {
  state.settings.textRoute=!state.settings.textRoute;
  saveSettings(); applySettings(); resetMapForPackChange();
  if (['investigation','between','final'].includes(state.phase)) drawMapGrid();
}
