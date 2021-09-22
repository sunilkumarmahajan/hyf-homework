function setTimeoutPromise(inputtime) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, inputtime * 1000);
    });
  }

setTimeoutPromise(3).then(() => {
    console.log("Called after 3 seconds");
  });
  
function getCurrentLocation() {
    const geoPromise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
    return geoPromise;
  }
  
  getCurrentLocation()
    .then((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // called when the user position is found
     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    })
    .catch((error) => {
      // called if there was an error getting the users location
      console.log("users location not found");
    });
