import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useCallback, useState } from "react";

const containerStyle = {
  width: "880px",
  height: "770px",
};

const center = {
  lat: 23.052226216386774,
  lng: 72.54493515783129,
};

const points = [
  {
    lat: 23.052226216386774,
    lng: 72.54493515783129,
  },
];

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GMAP_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return (
    <section className="section-padding">
      <div className="content-container">
        <div className="flex items-center justify-between">
          <div>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                  streetViewControl: false,
                  mapTypeControl: false,
                }}
              >
                {points.map((point, index) => (
                  <MarkerF key={index} position={point} />
                ))}
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>

          <div className="flex-[0_0_31%]">
            <div className="flex flex-col gap-36">
              <div className="flex flex-col gap-12">
                <div className="flex items-center gap-8">
                  <SlLocationPin className="h-12 w-12 fill-[var(--secondary)]" />
                  <h4 className="text-[2.6rem] leading-[2.6rem] font-bold">
                    Memnagar Branch
                  </h4>
                </div>
                <p className="text-[1.8rem] leading-[3rem] font-medium">
                  57, Kamal Society, Opp.Jain Derasar, B/S Tarun Nagar-3,
                  Nr.Subhash Chowk, Memnagar, Ahmedabad - 380052, Gujarat, India
                </p>
                <div className="flex items-center gap-4 font-medium">
                  <FiPhoneCall className="h-[2.4rem] w-[2.4rem]" />
                  <p>+91-9712926934</p>
                  <span>|</span>
                  <p>079-27414934</p>
                </div>
              </div>

              <div className="flex flex-col gap-12">
                <div className="flex items-center gap-8">
                  <SlLocationPin className="h-12 w-12 fill-[var(--secondary)]" />
                  <h4 className="text-[2.6rem] leading-[2.6rem] font-bold">
                    Naranpura Branch
                  </h4>
                </div>
                <p className="text-[1.8rem] leading-[3rem] font-medium">
                  Shop No: B/12, Arjun Elegance, Opp. Bhaghirath Soc. & S.P.
                  Ladies Hostel, Divyapath School, Memnagar Road, Naranpura,
                  Ahmedabad - 380051, Gujarat, India.
                </p>
                <div className="flex items-center gap-4 font-medium">
                  <FiPhoneCall className="h-[2.2rem] w-[2.2rem]" />
                  <p>+91-9409420403</p>
                </div>
              </div>

              <div className="flex flex-col gap-12">
                <div className="flex items-center gap-8">
                  <SlLocationPin className="h-12 w-12 fill-[var(--secondary)]" />
                  <h4 className="text-[2.6rem] leading-[2.6rem] font-bold">
                    Workshop
                  </h4>
                </div>
                <p className="text-[1.8rem] leading-[3rem] font-medium">
                  Shop No: 5B, ajanta sheds, in shrijee estate, B/H,
                  bharataluminum, near. IRIS Automation, nr, santej - vadsar
                  road canal, santej, ghandhinagar, Gujarat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
