import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LooDetails } from "loo-api";

interface LooFormProps {
  onSubmit: SubmitHandler<LooDetails>;
}

export default function LooForm({ onSubmit }: LooFormProps) {
  const { register, handleSubmit } = useForm();

  function transform(data: any) {
    onSubmit({
      ...data,
      location: {
        lat: parseFloat(data.location.lat),
        lng: parseFloat(data.location.lng),
      },
    });
  }

  return (
    <form onSubmit={handleSubmit(transform)}>
      <label>
        Name: <input name="name" type="text" ref={register} />
      </label>
      <label>
        Latitude: <input name="location.lat" type="number" ref={register} />
      </label>
      <label>
        Longitude: <input name="location.lng" type="number" ref={register} />
      </label>
      <label>
        Baby Changing:{" "}
        <input name="babyChange" type="checkbox" ref={register} />
      </label>
      <input type="submit" value="Save" />
    </form>
  );
}
