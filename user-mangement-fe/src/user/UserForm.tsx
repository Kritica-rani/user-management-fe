import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import { User } from "../types/types";
import CustomModal from "../components/custom-modal/CustomModal";
import InputBox from "../components/input-box/InputBox";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import { useUsers } from "../context/UserContext";

const AddUserForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormContext<User>();
  const { setOpen, open, createUser } = useUsers();

  const onFormSubmit: SubmitHandler<User> = (data) => {
    createUser(data);
    reset();
    setOpen(false);
  };

  return (
    <>
      <CustomModal open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Stack spacing={2}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <InputBox
                  label="Name"
                  type="text"
                  {...field}
                  error={!!errors.name}
                  helperText={errors.name?.message as string}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputBox
                  label="Email"
                  type="email"
                  {...field}
                  error={!!errors.email}
                  helperText={errors.email?.message as string}
                />
              )}
            />
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <InputBox
                  label="Age"
                  type="number"
                  {...field}
                  error={!!errors.age}
                  helperText={errors.age?.message as string}
                />
              )}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Stack>
        </form>
      </CustomModal>
    </>
  );
};

export default AddUserForm;
