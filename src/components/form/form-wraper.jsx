/* eslint-disable react/display-name */
import React, { useCallback, useImperativeHandle, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cloneDeep } from "lodash";
import { FullScreenLoading } from "@/components/full-screen-loading";
import { Box } from "@mui/material";

export const FormWraper = React.forwardRef((props, ref) => {
  const {
    onSubmit,
    children,
    options,
    schema,
    boxProps,
    isLoading = false,
    fieldArrayName = "",
    isNested = false, // block affect submit parent nested form inside form
    mode = "onChange",
  } = props;
  const methods = useForm({
    ...options,
    resolver: schema && zodResolver(schema),
    shouldFocusError: true,
    shouldUnregister: true,
    mode,
  });
  const fieldArrayMethods = useMemo(
    () => ({
      control: methods.control,
      name: fieldArrayName,
    }),
    [{ ...methods }, fieldArrayName]
  );

  const handleSubmit = useCallback(
    (dataForm, event) => {
      let dataFormHere = cloneDeep(dataForm);

      onSubmit(dataFormHere, methods, event);
    },
    [{ ...methods }, onSubmit]
  );

  const handleAffectSubmitForm = useCallback(
    (event) => {
      if (isNested) {
        event?.preventDefault();
        event?.stopPropagation();
      }

      return methods.handleSubmit(handleSubmit)(event);
    },
    [handleSubmit, isNested, { ...methods }]
  );

  const renderFormChildren = useMemo(() => {
    return children(methods, fieldArrayMethods);
  }, [children, fieldArrayMethods, { ...methods }]);

  useImperativeHandle(
    ref,
    () => ({
      methods,
    }),
    [{ ...methods }]
  );

  return (
    <>
      {isLoading && <FullScreenLoading />}
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleAffectSubmitForm} {...boxProps}>
          {renderFormChildren}
        </Box>
      </FormProvider>
    </>
  );
});
