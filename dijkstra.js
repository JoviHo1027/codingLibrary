const dijkstra = (graph, start) => {

    var distances = [];
    for (var i = 0; i < graph.length; i++) {
        distances[i] = Number.MAX_VALUE;
    }
    distances[start] = 0;

    var visited = [];

    while (true) {
        var shortestDistance = Number.MAX_VALUE;
        var shortestIndex = -1;
        for (var i = 0; i < graph.length; i++) {
            if (distances[i] < shortestDistance && !visited[i]) {
                shortestDistance = distances[i];
                shortestIndex = i;
            }
        }

        //console.log("Visiting node " + shortestIndex + " with current distance " + shortestDistance);

        if (shortestIndex === -1) {
            return distances;
        }

        for (var i = 0; i < graph[shortestIndex].length; i++) {
            if (graph[shortestIndex][i] !== -1 && distances[i] > distances[shortestIndex] + graph[shortestIndex][i]) {
                distances[i] = distances[shortestIndex] + graph[shortestIndex][i];
                //console.log("Updating distance of node " + i + " to " + distances[i]);
            }
        }
        visited[shortestIndex] = true;
        //console.log("Visited nodes: " + visited);
        //console.log("Currently lowest distances: " + distances);

    }
};