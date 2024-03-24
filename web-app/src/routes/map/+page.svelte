<svelte:head>
	<script src='https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js'></script>
	<link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';
	import  mapboxgl  from 'mapbox-gl'
	
	let accessToken = 'pk.eyJ1IjoiZW1hbnVlbGd1c3RhZnpvbiIsImEiOiJja294YndvNm8wZXBmMnBtcGFkZ3I5N3V6In0.t_4FKgw6kJSPGD4LleGWqQ';

	onMount(() => {
		mapboxgl.accessToken = accessToken;
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/emanuelgustafzon/clu1ojveh00e701pr0jdj3m0k',
			center: [12.4, 57.7],
			zoom: 9
		});
		map.addControl(new mapboxgl.NavigationControl());

		map.on('load', function () {
			map.addLayer({
				id: 'castle-layer',
				type: 'symbol',
				source: {
					type: 'vector',
					url: 'mapbox://emanuelgustafzon.cltyq9gro2c701no6832v75bg-3abry'
				},
				'source-layer': 'marker-icons',
				layout: {
					'icon-image': 'castle-icon'
				}
			});

		});
	});
</script>

<div id="map" style="height: 400px;"></div>

<style>
	#map {
		width: 100%;
	}
</style>
