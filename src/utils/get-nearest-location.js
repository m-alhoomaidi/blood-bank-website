function degToRad(deg) {
    return deg * (Math.PI / 180.0);
}

export const nearestLocation = (position1, position2) => {
    var lat1 = position1.lat;
    var lat2 = position2.lat;
    var lon1 = position1.lng;
    var lon2 = position2.lng;
    console.log({ lat1, lat2, lon1, lon2 })
    var R = 6371000; // metres
    var R1 = degToRad(lat1)
    var R2 = degToRad(lat2);
    var DeltaLat = degToRad(lat2 - lat1)
    var DeltaLng = degToRad(lon2 - lon1)
    // Δλ == DeltaLng

    var a = Math.sin(DeltaLat / 2) * Math.sin(DeltaLat / 2) +
        Math.cos(R1) * Math.cos(R2) *
        Math.sin(DeltaLng / 2) * Math.sin(DeltaLng / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var d = R * c;
    return d;
}