"use client";

import { Button } from "@nextui-org/button";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
// import { useRouter, useSearchParams } from "next/navigation";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
// import loginValidationSchema from "@/src/schemas/login.schemas";
import Loading from "@/src/components/UI/Loading";
// import { useUser } from "@/src/context/user.provider";
import { useUserForgetPassword } from "@/src/hooks/auth.hook";
import forgetPasswordValidationSchema from "@/src/schemas/forgetPassword.schema";

const ForgetPassword = () => {
  const { mutate: handleForgetPassword, isPending } = useUserForgetPassword();
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const { setIsLoading: userLoading } = useUser();

  // const redirect = searchParams.get("redirect");

  const onSubmit: SubmitHandler<FieldValues> = (userData) => {
    handleForgetPassword(userData);
  };

  //   useEffect(() => {
  //     if (!isPending && isSuccess) {
  //       if (redirect) {
  //         router.push(redirect);
  //       } else {
  //         router.push("/");
  //       }
  //     }
  //   }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}
      <div className="flex h-[calc(100vh-100px)] w-full flex-col items-center justify-center bg-gradient-to-r from-customColor1/10 to-customColor2/10 dark:bg-gradient-to-r dark:from-default-100 dark:to-default-50">
        <h3 className="my-2 text-2xl font-bold">Forget Password?</h3>
        <p className="mb-4">Let’s Help You Recover It!</p>
        <div className="w-[80%] md:w-[60%] lg:w-[50%] xl:w-[35%]">
          <FXForm
            resolver={zodResolver(forgetPasswordValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="py-3">
              <FXInput label="Email" name="email" type="email" />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
              size="lg"
              type="submit"
            >
              Submit
            </Button>
          </FXForm>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
