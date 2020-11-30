import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import {
  InputField, RadioGroup, RadioInput, CheckboxInput, Textarea
} from '../../molecules';
import { Button } from '../../atoms';

const pets = [
  { value: 'cat', label: 'Kat' },
  { value: 'dog', label: 'Hond' },
  { value: 'hamster', label: 'Hamster' },
  { value: 'mouse', label: 'Muis' },
  { value: 'other', label: 'Anders:' },
];

export const PetForm = () => {
  const [sumbitSuccess, setSubmitSuccess] = useState(false);
  const { register, unregister, watch, handleSubmit, ...methods } = useForm({
    mode: 'onChange'
  });

  const onSuccess = (formData) => {
    setSubmitSuccess(true);
    console.log(formData);
  }

  const onError = (errorList) => {
    console.log(errorList)
  }

  const currentPet = watch('pet');

  return (
    <FormProvider {...methods} register={register} watch={watch} handleSubmit={handleSubmit}>
      {sumbitSuccess && (
        <p>Validatie succesvol</p>
      )}
      <form onSubmit={handleSubmit(onSuccess, onError)}>
        <InputField
          name="firstName"
          label="Voornaam"
          fieldRef={register({
            required: {
              value: true,
              message: 'Voornaam is verplicht',
            }
          })}
        />

        <InputField
          name="lastName"
          label="Achternaam"
          fieldRef={register({
            required: {
              value: true,
              message: 'Achternaam is verplicht',
            }
          })}
        />

        <InputField
          type="number"
          name="age"
          label="Leeftijd"
          fieldRef={register({
            required: {
              value: true,
              message: 'Leeftijd is verplicht',
            },
            min: {
              value: 18,
              message: 'Je moet minimaal 18 jaar zijn'
            }
          })}
        />

        <InputField
          name="zipCode"
          label="Postcode"
          fieldRef={register({
            required: {
              value: true,
              message: 'Postcode   is verplicht',
            },
            pattern: {
              value: /^[0-9]{4}[a-zA-Z]{2}$/,
              message: 'De opgegeven postcode is niet geldig'
            }
          })}
        />

        <RadioGroup name="pet" label="Huisdier">
          {pets.map(pet => (
            <RadioInput
              name="pet"
              label={pet.label}
              value={pet.value}
              key={pet.value}
              fieldRef={register({
                required: {
                  value: true,
                  message: 'Huisdier is verplicht',
                }
              })}
            />
          ))}
          {currentPet === 'other' ? (
            <InputField
              label="Ander huisdier"
              fieldRef={register({required: {
                value: true,
                message: "Ander huisdier is verplicht"
              }})}
              name="other-pet"
            />
          ) : unregister('other-pet')}
        </RadioGroup>

        <Textarea
          name="remark"
          label="Opmerking"
          fieldRef={register}
        />

        <CheckboxInput
          name="agree"
          label="Ik ga akkoord met de voorwaarden"
          fieldRef={register({required: {
            value: true,
            message: "Je dient akkoord te gaan met de voorwaarden"
          }})}
        />
        <Button>Verzend</Button>
      </form>
    </FormProvider>
  )
}