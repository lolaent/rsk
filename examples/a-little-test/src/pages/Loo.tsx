import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMapGL, { Marker } from "react-map-gl";
import { LooDetails, fetchLoo } from "loo-api";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;
const SIZE = 24;

export default function LooPage() {
  const { id } = useParams();
  const [loo, setLoo] = React.useState<LooDetails | undefined>(undefined);

  useEffect(() => {
    fetchLoo(id).then(setLoo);
  }, [id]);

  if (!loo) {
    return <h2>Hang on a sec...</h2>;
  }

  return (
    <>
      <h1>{loo.name}</h1>
      <ReactMapGL
        width={400}
        height={400}
        latitude={loo.location.lat}
        longitude={loo.location.lng}
        zoom={16}
      >
        <Marker latitude={loo.location.lat} longitude={loo.location.lng}>
          <svg
            height={SIZE}
            viewBox="0 0 24 24"
            style={{
              fill: "#d00",
              stroke: "none",
              transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
            }}
          >
            <path d={ICON} />
          </svg>
        </Marker>
      </ReactMapGL>
    </>
  );
}
