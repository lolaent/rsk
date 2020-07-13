import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LooForm from "./LooForm";

test("calls onSubmit with LooDetails on sucessful completion", async () => {
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<LooForm onSubmit={onSubmit} />);

  const nameInput = getByLabelText(/Name/);
  userEvent.type(nameInput, "Test Name");
  const latInput = getByLabelText(/Latitude/);
  userEvent.type(latInput, "1");
  const lngInput = getByLabelText(/Longitude/);
  userEvent.type(lngInput, "2");
  const babyChangeInput = getByLabelText(/Baby Changing/);
  userEvent.click(babyChangeInput);
  const submitButton = getByText(/Save/);
  userEvent.click(submitButton);

  await waitFor(() => {
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Test Name",
        location: {
          lat: 1,
          lng: 2,
        },
        babyChange: true,
      })
    );
  });
});
