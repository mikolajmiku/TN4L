import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir="column" gap={6}>
        <Flex gap={6} flexWrap="wrap">
          <FormControl
            width="auto"
            isInvalid={errors.name != null}
            flex="1 1 auto"
          >
            <Input
              background="white"
              id="name"
              placeholder="Imię"
              {...register("name", {
                required: "pole obowiązkowe",
                minLength: {
                  value: 4,
                  message: "Imię powinno wynosić co najmniej 4 znaki",
                },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            width="auto"
            isInvalid={errors.name != null}
            flex="1 1 auto"
          >
            <Input
              background="white"
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "pole obowiązkowe",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Niepoprawny adres e-mail",
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
        </Flex>
        <FormControl isInvalid={errors.email != null}>
          <Textarea
            background="white"
            id="content"
            placeholder="Treść"
            {...register("content", {
              required: "pole obowiązkowe",
              minLength: {
                value: 4,
                message: "Imię powinno wynosić co najmniej 4 znaki",
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
          alignSelf="flex-start"
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
}
