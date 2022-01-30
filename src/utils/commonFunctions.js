export const concatenatePhoneNumber = (data) => {
  return data?.countryCode + data.phoneNumber;
};

export const modifyCircleList = (circleList) => {
  // Extend Number object with methods to convert between degrees & radians
  Number.prototype.toRadians = function () {
    return (this * Math.PI) / 180;
  };
  Number.prototype.toDegrees = function () {
    return (this * 180) / Math.PI;
  };

  let newCircleList = [];
  for (let circle of circleList) {
    const radius = 6371e3;
    const distance = circle.radius;
    const bearing = -45;
    let overlayBounds;

    const originLat = circle.coordinates.latitude;
    const originLong = circle.coordinates.longitude;

    const φ1 = originLat.toRadians();
    const λ1 = originLong.toRadians();

    const δ = distance / radius; // angular distance in radians
    const θ = Number(bearing).toRadians();

    const sinφ2 =
      Math.sin(φ1) * Math.cos(δ) + Math.cos(φ1) * Math.sin(δ) * Math.cos(θ);
    const φ2 = Math.asin(sinφ2);
    const y = Math.sin(θ) * Math.sin(δ) * Math.cos(φ1);
    const x = Math.cos(δ) - Math.sin(φ1) * sinφ2;
    const λ2 = λ1 + Math.atan2(y, x);

    const φ2lat = φ2.toDegrees();
    const λ2lon = λ2.toDegrees();

    overlayBounds = [
      [originLat, originLong],
      [φ2lat, λ2lon],
    ];

    let modifiedCircle = {};

    modifiedCircle = {...circle, overlayBounds: overlayBounds};
    newCircleList.push(modifiedCircle);
    console.log('3', newCircleList);
  }

  return newCircleList;
};
