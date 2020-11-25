import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const { register, watch, handleSubmit, errors } = useForm();

  const onSuccess = (formData) => {
    console.log(formData)
  }

  const onError = (errorList) => {
    console.log(errorList)
  }

  const currentPet = watch('pet');

  return (
    <form onSubmit={handleSubmit(onSuccess, onError)}>
      <div>
        <label htmlFor="firstName">Voornaam</label>
        <input
          name="firstName"
          id="firstName"
          type="text"
          ref={register({required: true})}
        />
        {errors.firstName && <p>Voornaam is verplicht</p>}
      </div>
      <div>
        <label htmlFor="lastName">Achternaam</label>
        <input
          name="lastName"
          id="lastName"
          type="text"
          ref={register({required: true})}
        />
        {errors.lastName && <p>Achternaam is verplicht</p>}
      </div>
      <div>
        <label htmlFor="age">Leeftijd</label>
        <input
          name="age"
          id="age"
          type="number"
          ref={register({required: true, min: 18})}
        />
        {errors.age && <p>Minimaal 18 jaar</p>}
      </div>
      <div>
        <label htmlFor="zipCode">Postcode</label>
        <input
          name="zipCode"
          id="zipCode"
          type="text"
          ref={register({required: true, pattern: /^[0-9]{4}[a-zA-Z]{2}$/})}
        />
        {errors.zipCode && <p>Postcode klopt niet</p>}
      </div>
      <fieldset>
        <legend>Huisdier</legend>
          <div>
            <input
              ref={register({required: true})}
              type="radio"
              value="cat"
              name="pet"
              id="pet-cat"
            />
            <label htmlFor="pet-cat">Kat</label>
          </div>
          <div>
            <input
              ref={register({required: true})}
              type="radio"
              value="dog"
              name="pet"
              id="pet-dog"
            />
            <label htmlFor="pet-dog">Hond</label>
          </div>
          <div>
            <input
              ref={register({required: true})}
              type="radio"
              value="hamster"
              name="pet"
              id="pet-hamster"
            />
            <label htmlFor="pet-hamster">Hamster</label>
          </div>
          <div>
            <input
              ref={register({required: true})}
              type="radio"
              value="mouse"
              name="pet"
              id="pet-mouse"
            />
            <label htmlFor="pet-mouse">Muis</label>
          </div>
          <div>
            <input
              ref={register({required: true})}
              type="radio"
              value="other"
              name="pet"
              id="pet-other"
            />
            <label htmlFor="pet-other">Anders</label>
          </div>
          {currentPet === 'other' && (
            <div>
              <label htmlFor="other-pet">Ander huisdier</label>
              <input
                ref={register({required: true})}
                name="other-pet"
                type="text"
                id="other-pet"
              />
            </div>
          )}
      </fieldset>
      <div>
        <label htmlFor="remark">Opmerking</label>
        <textarea
          name="remark"
          id="remark"
          ref={register}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="agree"
          id="agree"
          ref={register({required: true})}
        />
        <label htmlFor="agree">Ik ga akkoord met de voorwaarden</label>
      </div>

      <button>Verzend</button>
    </form>
  );
}

export default App;
