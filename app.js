const graph = {
  "Bata": { "NHPC": [10, 5], "OldFaridabad": [10, 5] },
  "NHPC": { "Bata": [10, 5], "OldFaridabad": [10, 5] },
  "OldFaridabad": { "NHPC": [10, 5], "BadkalMor": [10, 5] },
  "BadkalMor": { "OldFaridabad": [10, 5], "Badarpur": [10, 5] },
  "Badarpur": { "BadkalMor": [10, 5], "Govindpuri": [10, 5] },
  "Govindpuri": { "Badarpur": [10, 5], "LajpatNagar": [10, 5], "NehruEnclave": [12, 6] },
  "LajpatNagar": { "Govindpuri": [10, 5], "CentralSecretariat": [10, 5] },
  "CentralSecretariat": { "LajpatNagar": [10, 5], "RajivChowk": [8, 4], "Janpath": [6, 3] },
  "RajivChowk": { "CentralSecretariat": [8, 4] },
  "NehruEnclave": { "Govindpuri": [12, 6], "Janpath": [15, 7] },
  "Janpath": { "NehruEnclave": [15, 7], "CentralSecretariat": [6, 3] }
};

function dijkstra(src, dst, weightIndex) {
  const dist = {}, prev = {}, visited = new Set(), pq = new Map();
  for (const st in graph) dist[st] = Infinity;
  dist[src] = 0;
  pq.set(src, 0);

  while (pq.size > 0) {
    const [u] = [...pq.entries()].reduce((a, b) => a[1] < b[1] ? a : b);
    pq.delete(u);
    visited.add(u);

    for (const [v, weights] of Object.entries(graph[u] || {})) {
      const weight = weights[weightIndex];
      const alt = dist[u] + weight;
      if (alt < dist[v]) {
        dist[v] = alt;
        prev[v] = u;
        pq.set(v, alt);
      }
    }
  }

  let path = [];
  for (let at = dst; at; at = prev[at]) path.push(at);
  path.reverse();

  return dist[dst] === Infinity ? { error: "No path found." } : { dist: dist[dst], path };
}

function getInputStations() {
  const source = document.getElementById("source").value.trim();
  const dest = document.getElementById("destination").value.trim();
  return [source, dest];
}

function getStations() {
  const output = Object.keys(graph).join("\n");
  document.getElementById("output").textContent = "Stations:\n" + output;
}

function getShortestDistance() {
  const [src, dst] = getInputStations();
  const result = dijkstra(src, dst, 0);
  document.getElementById("output").textContent = result.error
    ? result.error
    : `Shortest distance from ${src} to ${dst} is ${result.dist} units.`;
}

function getLeastCost() {
  const [src, dst] = getInputStations();
  const result = dijkstra(src, dst, 1);
  document.getElementById("output").textContent = result.error
    ? result.error
    : `Least cost from ${src} to ${dst} is ₹${result.dist}.`;
}

function getShortestPath() {
  const [src, dst] = getInputStations();
  const result = dijkstra(src, dst, 0);
  document.getElementById("output").textContent = result.error
    ? result.error
    : `Shortest path by distance: ${result.path.join(" -> ")}`;
}

function getCheapestPath() {
  const [src, dst] = getInputStations();
  const result = dijkstra(src, dst, 1);
  document.getElementById("output").textContent = result.error
    ? result.error
    : `Shortest path by cost: ${result.path.join(" -> ")}`;
}