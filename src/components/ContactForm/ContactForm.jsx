import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactForm = ({
  name,
  number,
  onNameChange,
  onNumberChange,
  onSubmit,
}) => (
  <form className={s.Form} onSubmit={onSubmit}>
    <label className={s.Label}>
      Name
      <input
        className={s.Input}
        type="text"
        placeholder="Roman Fausel"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={onNameChange}
        required
      />
    </label>
    <label className={s.Label}>
      Phone number
      <input
        className={s.Input}
        type="tel"
        placeholder="+4912345678910"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={onNumberChange}
        required
      />
    </label>
    <button className={s.Button} type="submit">
      Add contact
    </button>
  </form>
);

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onNumberChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
